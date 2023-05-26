import Gameboard from './gameboard.js';
import Ship from './ship.js';

export default class Player {
    constructor(name, index, type) {
        this.board = new Gameboard();
        this.name = name;
        this.index = index;
        this.type = type;

        this.models = new Array(5);
        this.generateModels();
    }

    generateModels() {
        this.models[0] = new Model(this.name, 2, 0, 'vertical');
        this.models[1] = new Model(this.name, 3, 1, 's'); // todo
        this.models[2] = new Model(this.name, 3, 2, 'vertical');
        this.models[3] = new Model(this.name, 4, 3, 'vertical');
        this.models[4] = new Model(this.name, 5, 4, 'vertical');
    }
}

class Model {
    constructor(playerName, length, index, shape) {
        this.name = playerName;
        this.ship = new Ship(0, 0, length, shape);
        this.index = index;
        this.selected = false;
        this.placed = false;
        this.sunk = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.recenter();
    }
    get bools() {
        return {selected: this.selected, placed: this.placed, sunk: this.sunk};
    }
    rotate() {
        let newShape = (this.ship.shape === 'vertical') ? 'horiztonal' : 'vertical';
        this.ship = new Ship(this.ship.x, this.ship.y, this.ship.length, newShape);
        this.recenter();
    }
    recenter() {
        let leftoverWidth = 5 - this.ship.width;
        let leftoverHeight = 5 - this.ship.height;
        this.offsetX = Math.floor(leftoverWidth / 2);
        this.offsetY = Math.floor(leftoverHeight / 2);
    }
}