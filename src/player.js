import Gameboard from './gameboard.js';

export default class Player {
    constructor(name) {
        this.board = new Gameboard();
        this.name = name;

        this.onClickSquare = this.clickSquare1;
    }

    clickSquare1(x, y) {
        console.log('1: clicked first version of clickSquare: ', x, y);
        this.onClickSquare = this.clickSquare2;
    }
    clickSquare2() {
        console.log('2: clicked second version of clickSquare');
        this.onClickSquare = this.clickSquare1;
    }
}

function clickSquare1() {
    console.log('1: clicked first version of clickSquare')
}
function clickSquare2() {
    console.log('2: clicked second version of clickSquare')
}