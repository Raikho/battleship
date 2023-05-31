import Player from './player.js'
import DOM from './dom.js'

import sonarResource from './assets/sonar.mp3';
import splashResource from './assets/splash.mp3';
import thumpResource from './assets/thump.mp3';
const sonar = new Audio(sonarResource);
const splash = new Audio(splashResource);
const thump = new Audio(thumpResource);
// sonar.play(); 


// const boardNode1 = document.querySelector('.board.player1');
// const boardNode2 = document.querySelector('.board.player2');

export default class Game {
    constructor() {
        this.players = [new Player('p1', 0, 'player'), 
                        new Player('p2', 1, 'player')];
        console.log('DEBUG: players ', this.players); // DEBUG
        this.delayed = false;
        this.turnPlayer = null;
        this.selectedModel = null;
        // TODO: consolidate pick/confirm
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = null; 
        
        DOM.setButtons(this);
        DOM.setModels(this);
        DOM.setGameboard(this);
        this.updateState('start');

        this.setDelay(600);
    }

    updateState(state) {
        if (this.state === state) return;
        this.state = state;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        switch(state) {
            case 'start':
                DOM.post('Welcome to Battleship! Please select game type.');
                this.turnPlayer = null;
                break;
            case 'p1pick':
                DOM.post('Player 1, please place your ships.')
                this.turnPlayer = this.players[0];
                break;
            case 'p1confirm':
                DOM.post('Player 1, press confirm to finalize ship placement.')
                break;
            case 'p2pick':
                DOM.post('Player 2, please place your ships.')
                DOM.hidePlayerBoard(this.players[0]);
                this.turnPlayer = this.players[1];
                if (this.isComputer()) {
                    console.log("auto generating computer's ships..."); // debug
                    this.selectAutoGen();
                }
                break;
            case 'p2confirm':
                DOM.post('Player 2, press confirm to finalize ship placement.')
                if (this.isComputer()) {
                    console.log("auto confirming computer's ships..."); // debug
                    this.selectConfirm();
                }
                break;
            case 'game':
                DOM.post('Player 1, attack the enemy board.')
                DOM.hidePlayerBoard(this.players[1]);
                this.turnPlayer = this.players[0];
                break;
            case 'results':
                DOM.revealPlayerBoard(this.players[0]);
                break;
        }
        this.update();
    }

    // ============================ INPUT =============================
    // ================================================================
    selectGameType(type) {
        if (this.delayed) return;
        if (!this.isState('start')) return;

        this.players[1].type = type;
        if (type === 'computer')
            DOM.updateEnemyColor();

        this.updateState('p1pick');
    }

    selectAutoGen() {
        if (!this.isState('p1pick', 'p2pick')) return;

        this.autoGen();

        let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
        this.updateState(nextState);
    }

    selectConfirm() {
        if (!this.isState('p1confirm', 'p2confirm')) return;
     
        for (let model of this.turnPlayer.models)
            DOM.removeModel(this.turnPlayer.name, model);
        this.hideModelOrientation(this.turnPlayer);
        
        let nextState = (this.state === 'p1confirm') ? 'p2pick' : 'game';
        this.updateState(nextState);
    }
    
    selectReset() {
        if (this.isState('start')) return;
        console.log('resetting...');

        DOM.removeHits();
        for (let player of this.players) {
            DOM.revealPlayerBoard(player);
            for (let ship of player.board.ships)
                if (ship) DOM.removeShip(player.name, ship);
            for (let model of player.models)
                DOM.removeModel(player.name, model);

            DOM.resetEnemyColor();
            player.board.clear();
            player.generateModels();
        }

        this.updateState('start');
    }

    clickModel(playerName, index) {
        console.log(`model clicked at ${playerName}, ${index}`);
        if (!this.isState('p1pick', 'p1confirm', 'p2pick', 'p2confirm')) return;

        this.selectModel(playerName, index)

        this.update();
    }
    clickSquare(x, y, playerName) {
        console.log(`square clicked at ${playerName}, x:${x}, y:${y}`);
        let response = {status: 'failure'};

        if (this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) {
            if (this.selectedModel && !this.selectedModel.placed) {
                if (playerName === this.selectedModel.name && playerName === this.turnPlayer.name) {
                    response = this.placeModel(x, y, this.getPlayer(playerName));
                }
            }

            if (response.status === 'success') {
                this.update();
                if (this.turnPlayer.board.shipsFull) {
                    let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
                    this.updateState(nextState);
                }
            }
        }
        else if (this.isState('game') && this.turnPlayer.name !== playerName) {
            let player = this.getPlayer(playerName);
            response = player.board.receiveAttack(x, y);
            console.log(playerName, response);

            if (response.status === 'success') {
                let fullName = (this.turnPlayer.name === 'p1') ? 'Player 1' : 'Player 2';
                let otherFullName = (playerName === 'p1') ? 'Player 1' : 'Player 2';
                switch(response.result) {
                    case 'empty square':
                        DOM.post(`${fullName} missed!`);
                        DOM.postNext(`${otherFullName}, attack the enemy board.`);
                        splash.play(); // TODO
                        this.switchPlayer();

                        if (this.turnPlayer.name === 'p2' && this.isComputer()) {
                            console.log("auto attacking on computer's turn");
                            this.update();
                            this.autoAttack();
                            return;
                        }
                        break;
                    case 'enemy ship hit':
                        DOM.post(`${fullName} has hit a ship!`);
                        DOM.postNext(`${fullName}, continue attacking.`);
                        thump.play();
                        break;
                    case 'enemy ship sunk':
                        player.updateSunkModels();
                        DOM.post(`${fullName} has sunk a ship!`);
                        DOM.postNext(`${fullName}, continue attacking.`);
                        thump.play();
                        break;
                    case 'all enemy ships sunk':
                        player.updateSunkModels();
                        DOM.post(`${fullName} has sunk all enemy ships! ${fullName} wins!`);
                        this.updateState('results');
                        thump.play(); // TODO
                        return;
                }
                this.update();
            }
        }
    }   
    
    async autoAttack() {
        document.body.style.cursor = 'progress';

        let response = {status: 'failure', result: null};
        while (response.result !== 'empty square') {
            response = await this.attackAndWait(1000);
            switch(response.result) {
                case 'empty square':
                    DOM.post(`The computer missed!`);
                    DOM.postNext(`Player 1, attack the enemy board.`);
                    this.switchPlayer();
                    this.update();
                    break;
                case 'enemy ship hit':
                    DOM.post(`The computer has hit a ship!`);
                    this.update();
                    break;
                case 'enemy ship sunk':
                    this.players[0].updateSunkModels();
                    DOM.post(`The computer has sunk a ship!`);
                    this.update();
                    break;
                case 'all enemy ships sunk':
                    this.players[0].updateSunkModels();
                    DOM.post(`The computerhas sunk all enemy ships! The computer wins!`);
                    this.updateState('results');
                    break;
            }
        }
        document.body.style.cursor = 'default';
    }

    async attackAndWait(milliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let response = {status: 'failure'};
                while (response.status === 'failure') {
                    response = this.players[0].board.receiveSmartAttack();
                    console.log(`auto attacking, response:`, response);
                }
                resolve(response);
            }, milliseconds);
        });
    }

    clickRotateModel(playerName, index) {
        if (!this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) return;
        let player = this.getPlayer(playerName);

        if(this.turnPlayer.name === playerName) {
            let model = player.models[index]; // debug
            DOM.removeModel(playerName, player.models[index]);
            this.rotateModel(player, index);
            this.update();

            this.clickDeleteModel(playerName, index);
        }
    }
    clickDeleteModel(playerName, index) {
        console.log(`clicked delete model,  player: ${playerName}, index: ${index}`);
        if (!this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm')) return;
        let player = this.getPlayer(playerName);
        
        if (player.models[index].placed && this.turnPlayer.name === playerName) {
            DOM.removeShip(playerName, player.board.ships[index]);
            this.deleteModel(player, index);
            
            if (this.isState('p1confirm', 'p2confirm'))
                this.updateState(`${player.name}pick`);
            this.update();
        }
    }
    reveal() {
        if (!this.isState('game')) return;
        DOM.revealPlayerBoard(this.turnPlayer);
    }
    hide() {
        if (!this.isState('game')) return;
        DOM.hidePlayerBoard(this.turnPlayer);
    }
    // =========================== ACTIONS ============================
    // ================================================================
    selectModel(playerName, index) {
        for (let player of this.players)
            for (let model of player.models)
                model.selected = false;

        let model = this.getPlayer(playerName).models[index];
        model.selected = true;
        this.selectedModel = model;
    }
    deleteModel(player, index) {
        player.board.ships[index] = null;
        player.models[index].placed = false;
    }
    rotateModel(player, index) {
        player.models[index].rotate();
    }
    hideModelOrientation(player) {
        for (let model of player.models)
            if (model.ship.shape === 'horizontal')
                model.rotate();
        this.update();
    }

    placeModel(x, y, player, manualModel) {
        let model = (manualModel || this.selectedModel);
        let result = player.board.addShip(x, y, model.ship.length, model.ship.shape, model.index);
        console.log('placing model...', result); // DEBUG

        if (result.status === 'success') {
            model.placed = true;
            sonar.play(); // TODO:
        }
        return result;
    }

    autoGen() {
        console.log(`auto generating ships for ${this.turnPlayer.name}`)
        let player = this.turnPlayer;

        this.clear(player);
        player.generateModels(true);
        for (let model of player.models) {
            while (true) {
                let x = Math.floor(Math.random() * 10) + 1;
                let y = Math.floor(Math.random() * 10) + 1;
                let result = this.placeModel(x, y, player, model);
                if (result.status === 'success') break;
            }
        }

        this.update();
    }

    clear(player) {
        for (let model of player.models) {
            DOM.removeModel(player.name, model);
            if (model.placed) {
                DOM.removeShip(player.name, player.board.ships[model.index]);
                this.deleteModel(player, model.index);
            }
        }
    }
    // ============================ OUTPUT ============================
    // ================================================================
    update() {
        DOM.updateButtons(this.state);
        DOM.updateModels(this);
        DOM.updateGameboard(this);
        DOM.updateActivePlayer(this);
    }

    // ============================= MISC =============================
    // ================================================================
    getPlayer(playerName) {
        for (let player of this.players)
            if (player.name === playerName)
                return player;
    }
    getOtherPlayer(playerName) {
        let player = this.getPlayer(playerName);
        let otherIndex = (player.name === this.players[0].name) ? 1 : 0;
        return this.players[otherIndex];
    }
    switchPlayer() {
        let otherIndex = (this.turnPlayer.index === 0) ? 1 : 0;
        this.turnPlayer = this.players[otherIndex];
    }

    isState(stateArgs) {
        for (let state of arguments)
            if (this.state === state)
                return true;
        return false;
    }
    isComputer() {
        return (this.players[1].type === 'computer')
    }

    setDelay(ms) {
        this.delayed = true;
        thump.play(); // TODO: change
        document.body.style.cursor = 'progress';
        setTimeout(() => {
            this.delayed = false;
            document.body.style.cursor = 'default';
        }, ms);
    }
}
