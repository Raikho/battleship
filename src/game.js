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

        this.createStartingShips();
        this.createStartingAttacks();
        this.update();
    }

    squareClicked(x, y, name) {
        console.log(`square clicked at x: ${x}, y: ${y}, name: ${name}`);
    };

    update() {
        DOM.updateBoard(boardNode1, this.p1);
        DOM.updateBoard(boardNode2, this.p2);
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