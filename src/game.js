import Player from './player.js'
import DOM from './dom.js'

const boardNode1 = document.querySelector('.board.player1');
const boardNode2 = document.querySelector('.board.player2');

export default class Game {
    constructor() {
        this.p1 = new Player('p1');
        this.p2 = new Player('p2');

        DOM.createBoard(boardNode1, this, this.p1);
        DOM.createBoard(boardNode2, this, this.p2);

        this.createStartingShips(); // DEBUG
        this.createStartingAttacks(); // DEBUG
        this.state = null;
        this.currentPlayer = this.p1;
        this.updateState('p1');
        this.update();

    }

    updateState(state) {
        this.state = state;
    }

    squareClicked(x, y, name) {
        console.log(`---\nclicked x:${x} y:${y} | board: ${name} | turn: ${this.currentPlayer.name}`);
        // TODO: check state

        if (this.currentPlayer.name === name)
            return console.log("Error: click other player's board");

        let response = this.getOtherPlayer(name).board.receiveAttack(x, y);
        console.log('response: ', response);
        if (response.status === 'failure')
            return;

        // TODO: possibly change state

        this.switchPlayer();
        this.update();
    };

    switchPlayer() {
        this.currentPlayer = (this.currentPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }

    getOtherPlayer(name) {
        return (this.currentPlayer.name === this.p1.name) ? this.p2 : this.p1;
    }

    update() {
        DOM.updateBoard(boardNode1, this.p1);
        DOM.updateBoard(boardNode2, this.p2);
        DOM.updateCurrentPlayer(this.currentPlayer);
    }
    createStartingShips() {
        this.p1.board.addShip(1, 1, 2);
        this.p1.board.addShip(3, 1, 2);
        this.p1.board.addShip(5, 1, 2);
        this.p1.board.addShip(7, 1, 3);
        this.p1.board.addShip(9, 1, 4);
        this.p2.board.addShip(0, 1, 2);
        this.p2.board.addShip(2, 1, 2);
        this.p2.board.addShip(4, 1, 3);
        this.p2.board.addShip(6, 1, 4);
        this.p2.board.addShip(8, 1, 2);
    }
    createStartingAttacks() {
        this.p1.board.receiveAttack(1, 2);
        this.p2.board.receiveAttack(7, 4);
    }
}