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
        this.models[0] = new Model(2, 0);
        this.models[1] = new Model(2, 1);
        this.models[2] = new Model(2, 2);
        this.models[3] = new Model(2, 3);
        this.models[4] = new Model(2, 4);
        this.models[0].selected = true;
        this.models[1].placed = true;
        this.models[2].sunk = true;
    }
}

class Model {
    constructor(length, index) {
        this.ship = new Ship(0, 0, length);
        this.index = index;
        this.selected = false;
        this.placed = false;
        this.sunk = false;
    }
    get bools() {
        return {selected: this.selected, placed: this.placed, sunk: this.sunk};
    }
}