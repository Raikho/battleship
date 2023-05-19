import Player from './player.js'
import DOM from './dom.js'

export default class Game {
    constructor() {
        this.p1 = new Player();
        this.p2 = new Player();

        DOM.createBoard(document.querySelector('.board.player1'), this.p1);
        DOM.createBoard(document.querySelector('.board.player2'), this.p2);

        createStartingShips(this.p1, this.p2);
        createStartingAttacks(this.p1, this.p2);
        update(this);
    }
}

function update(game) {
    DOM.updateBoard(document.querySelector('.board.player1'), game.p1);
    DOM.updateBoard(document.querySelector('.board.player2'), game.p2);
}

function createStartingShips(p1, p2) {
    p1.board.addShip(1, 1, 2);
    p1.board.addShip(3, 1, 2);
    p1.board.addShip(5, 1, 2);
    p1.board.addShip(7, 1, 3);
    p1.board.addShip(9, 1, 4);
    p2.board.addShip(0, 1, 2);
    p2.board.addShip(2, 1, 2);
    p2.board.addShip(4, 1, 3);
    p2.board.addShip(6, 1, 4);
    p2.board.addShip(8, 1, 2);
}

function createStartingAttacks(p1, p2) {
    p1.board.receiveAttack(1, 2);
    p2.board.receiveAttack(7, 4);
}