import Player from './player.js'
import DOM from './dom.js'

// const boardNode1 = document.querySelector('.board.player1');
// const boardNode2 = document.querySelector('.board.player2');

export default class Game {
    constructor() {
        this.players = [new Player('p1', 0, 'player'), 
                        new Player('p2', 1, 'player')];
        console.log(this.players); // DEBUG
        this.turnPlayer = null;
        this.selectedModel = null;
        // p1pick, p1confirm, p2pick, p2confirm, game, result, aipick?
        this.state = 'start'; 
        
        DOM.setButtons(this);
        DOM.setModels(this);
        DOM.setGameboard(this);
        this.update();
    }

    updateState(state) {
        if (this.state === state) return;
        this.state = state;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        switch(state) {
            case 'start':
                // clear board
                // reset models
                // reset ship select
                // hide boards?
                // update ??
                break;
            case 'p1pick':
                this.turnPlayer = this.players[0];
                break;
            case 'confirm':
                break;
            case 'p2pick':
                this.turnPlayer = this.players[1];
                break;
        }
        this.update();
    }

    // ============================ INPUT =============================
    // ================================================================
    selectGameType(type) {
        if (!this.isState('start')) return;

        this.players[1].type = type;
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
     
        let nextState = (this.state === 'p1confirm') ? 'p2pick' : 'game';
        this.updateState(nextState);
    }

    clickModel(playerName, index) {
        console.log(`model clicked at ${playerName}, ${index}`);

        // Check state
        this.selectModel(playerName, index)

        this.update();
    }
    clickSquare(x, y, playerName) {
        console.log(`square clicked at ${playerName}, x:${x}, y:${y}`);
        let result = {status: 'failure'};

        if (this.isState('p1pick', 'p2pick', 'p1confirm', 'p2confirm'))
            if (this.selectedModel && !this.selectedModel.placed) // TODO: allow replace ships
                if (playerName === this.selectedModel.name && playerName === this.turnPlayer.name) {
                    result = this.placeModel(x, y, this.getPlayer(playerName));
                }

        if (result.status === 'success')
            this.update();
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

    placeModel(x, y, player) {
        let result = player.board.addShip(x, y, this.selectedModel.ship.length);
        console.log('placing model...', result); // DEBUG

        if (result.status === 'success') {
            this.selectedModel.placed = true;
            if (player.board.ships.length >= 5) {
                let nextState = (this.state === 'p1pick') ? 'p1confirm' : 'p2confirm';
                this.updateState(nextState);
            }
        }
        return result;
    }

    autoGen() {
        console.log(`auto generating ships for ${this.turnPlayer.name}`)
        this.turnPlayer.board.genDefaultShips();
        // TODO: update default ships, randomize
        return;
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

    isState(stateArgs) {
        for (let state of arguments)
            if (this.state === state)
                return true;
        return false;
    }
}


export class Game_old {
    constructor() {
        this.p1 = new Player('p1');
        this.p2 = new Player('p2');
        this.turnPlayer = this.p1;
        this.currentShip = null; // remove
        this.activeModel = null;
        DOM.createBoard(boardNode1, this, this.p1);
        DOM.createBoard(boardNode2, this, this.p2);
        DOM.createModels(this, this.p1); // TODO
        DOM.createModels(this, this.p2); // TODO
        DOM.setShipSelect(this);
        DOM.setButtons(this);

        // 'start', 'p1pick', 'p1Confirm', 'p2pick', 'p2Confirm', 'game', 'resulst';
        this.state = 'start';
        DOM.post('Select game mode');
        this.update();
    }

    updateState(state) {
        if (this.state === state) return;
        console.log(`%cnew state: %c${state}`, '', 'color: goldenrod; font-weight: bold');

        this.state = state;
        switch(state) {
            case 'start':
                this.p1.board.clear();
                this.p2.board.clear();
                DOM.resetShipSelect();
                this.hide();
                this.update();
                break;
            case 'p1pick':
                this.reveal(this.p1);
                this.turnPlayer = this.p1;
                DOM.post('Player 1, select your ships');
                break;
            case 'p1Confirm':
                DOM.post('Player 1, confirm your ship placement');
                break;
            case 'p2pick':
                this.hide();
                this.reveal(this.p2);
                this.turnPlayer = this.p2;
                DOM.post('Player 2, select your ships');
                break;
            case 'p2Confirm':
                DOM.post('Player 2, confirm your ship placement');
                break;
            case 'game':
                DOM.post('Start the game! Player 1, attack a square');
                this.turnPlayer = this.p1;
                this.hide();
                this.update();
                break;
            case 'results':
                break;
        }
        DOM.updateButtons(state);
    }

    start(type) {
        console.log(`%c${type}`+' %cbutton pressed', 'color: skyblue', null);
        if (this.state !== 'start')
            return;
        if (type === 'twoPlayer')
            this.updateState('p1pick');
    }

    confirm() {
        console.log('%cconfirm %cbutton pressed', 'color: skyblue', null);
        if (this.state === 'p1Confirm')
            this.updateState('p2pick');
        else if (this.state === 'p2Confirm')
            this.updateState('game');
    }

    hide() {
        console.log('hiding player ships');
        DOM.hide(boardNode1, boardNode2);
    }
    reveal(player) {
        console.log(`revealing %c${player.name}'s ships`, 'color: skyblue');
        let boardNode = (player.name === this.p1.name) ? boardNode1 : boardNode2;
        DOM.reveal(boardNode);
    }
    peek() {
        console.log(`Peeking at ${this.turnPlayer.name}'s ships`);
    }

    autoGen() {
        console.log('%cautoGen %cbutton pressed', 'color: skyblue', null);

        if (this.state === 'p1pick') {
            this.p1.board.genDefaultShips();
            this.updateState('p1Confirm');
        } else if (this.state === 'p2pick') {
            this.p2.board.genDefaultShips();
            this.updateState('p2Confirm');
        } else return;
        console.log('after gen: ', this.p1);
        this.update();
 }

    squareClicked(x, y, name) {
        console.log(`clicked x:%c${x}%c y:%c${y}%c | board: %c${name}%c | turn: ${this.turnPlayer.name}`,
            'color: lightcoral', null, 'color: lightcoral', null, 'color: lightcoral', null);

        if (this.state === `${name}pick`) {
            let model = this.activeModel.model;
            console.log('got this far'); // DEBUG

            if (this.activeModel && !model.placed) {
                console.log('placing ship: ', model); // DEBUG

                let response = this.turnPlayer.board.addShip(x, y, model.ship.segments.length);
                if (response.status === 'failure')
                    return;

                // this.currentShip.callback(); // TODO
                model.placed = true;
                this.activeModel = null;
                this.update();

                if (this.turnPlayer.board.ships.length >= 5)
                    this.updateState(`${name}Confirm`);
                return;
            }
        }

        if (this.state === `${name}pick`) {
            if (this.currentShip && !this.currentShip.used) {
                console.log('placing ship: ', this.currentShip);
                let response = this.turnPlayer.board.addShip(x, y, this.currentShip.length);
                if (response.status === 'failure')
                    return;

                this.currentShip.callback();
                this.currentShip = null;
                this.update();

                if (this.turnPlayer.board.ships.length >= 5)
                    this.updateState(`${name}Confirm`);
                return;
            }
        }

        if (this.state != 'game')
            return;

        if (this.turnPlayer.name === name)
            return console.log("Error: click other player's board");

        let response = this.getOtherPlayer(name).board.receiveAttack(x, y);
        console.log('response: ', response);
        
        if (response.status === 'failure')
            return;

        switch (response.result) {
            case 'empty square':
                break;
            case 'enemy ship hit':
                break;
            case 'enemy ship sunk':
                break;
            case 'all enemy ships sunk':
                this.updateState('results');
                break;
        }

        this.switchPlayer();
        let nameString = (this.turnPlayer === this.p1) ? 'Player 1' : 'Player 2';
        DOM.post(`${nameString}, attack a square`);
        this.update();
    };
    shipLabelClicked(playerName, index, type, used, callback) {
        console.log(`clicked ship index:%c${index}%c type:%c${type}%c | player: %c${playerName}`,
            'color: lightcoral', null, 'color: lightcoral', null, 'color: lightcoral');
        let player = this.getPlayer(playerName);

        this.currentShip = {length: Number(type), used: used, callback: callback};
    }

    shipModelClicked(player, index) {
        console.log(`clicked model index:%c${index}%c| player: %c${player.name}`,
            'color: lightcoral', null, 'color: lightcoral');

        this.activeModel = {model: player.board.models[index], player: player};
        this.update();
        console.log('active model: ', this.activeModel);


        // this.currentShip = {length: Number(type), used: used, callback: callback};
    }


    switchPlayer() {
        this.turnPlayer = (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }
    getPlayer(name) {
        return (this.turnPlayer.name === this.p1.name) ? this.p1 : this.p2;
    }
    getOtherPlayer(name) {
        return (this.turnPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }
 
    update() {
        DOM.updateBoard(boardNode1, this.p1);
        DOM.updateBoard(boardNode2, this.p2);
        DOM.updateModels(this, this.p1);
        DOM.updateModels(this, this.p2);
        DOM.updateCurrentPlayer(this.turnPlayer);
    }
}

