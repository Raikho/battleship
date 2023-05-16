import Ship from './ship.js';

export default class Gamebaord {
    constructor() {
        this.squares = new Array(10);
        for (let square of this.squares)
            square = new Array(10);
        this.ships = [];
    }
    addShip(length, shape, x, y) {
        if (isOutOfBounds(x, y))
            return;
        
        let ship = new Ship(length, shape);
        for (let segment of ship.signature)
            if (isOutOfBounds(segment.x + x, segment.y + y))
                return;

        this.ships.push({ship, x, y});
    }
}

function isOutOfBounds(x, y) {
    return (x > 10 || x < 0 || y > 10 || y < 0);
}