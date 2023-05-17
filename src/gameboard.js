import Ship from './ship.js';

export default class Gamebaord {
    constructor() {
        this.squares = [];
        for (let x = 0; x < 10; x++) {
            let col = [];
            for (let i = 0; i < 10; i++)
                col.push({isHit: false, ship: null});
            this.squares.push(col);
        }
        this.ships = [];
    }
    addShip(length, shape, x = 0, y = 0) {
        if (isOutOfBounds(x, y))
            return;
        
        let ship = new Ship(length, shape);
        for (let segment of ship.signature)
            if (isOutOfBounds(segment.x + x, segment.y + y))
                return;

        this.ships.push({ship, x, y});
        for (let segment of ship.signature)
            this.squares[x + segment.x][y + segment.y].ship = ship;
    }
    receiveAttack(x, y) {
        this.squares[x][y] = {isHit: true};

        for (let shipData of this.ships) {
            let ship = shipData.ship;
            for (let segment of ship.signature) {
                if (segment.x + shipData.x == x && segment.y + shipData.y == y)
                    segment.isHit = true;
            }
        }
    }
}

function isOutOfBounds(x, y) {
    return (x > 10 || x < 0 || y > 10 || y < 0);
}