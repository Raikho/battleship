import Player from './player.js'
import DOM from './dom.js'

export default class Game {
    constructor() {
        this.p1 = new Player();
        this.p2 = new Player();

        DOM.createBoard(document.querySelector('.board.player1'), this.p1);
        DOM.createBoard(document.querySelector('.board.player2'), this.p2);

        this.createStartingShips();
        this.createStartingAttacks();
        this.update();
    }

    update() {
        DOM.updateBoard(document.querySelector('.board.player1'), this.p1);
        DOM.updateBoard(document.querySelector('.board.player2'), this.p2);
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