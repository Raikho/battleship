import Ship from './ship.js';

export default class Gameboard {
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
        let coords = ship.segments.map(segment => {
            return {x: segment.x+x, y: segment.y+y}
        });

        for (let coord of coords)
            if (isOutOfBounds(coord.x, coord.y))
                return

        for (let coord of coords)
            if (this.squares[coord.x][coord.y].ship != null)
                return;

        this.ships.push({ship, x, y});
        coords.forEach(coord => this.squares[coord.x][coord.y].ship = ship);
    }

    receiveAttack(x, y) {
        this.squares[x][y] = {isHit: true};

        for (let shipData of this.ships) {
            let ship = shipData.ship;
            for (let segment of ship.segments) {
                if (segment.x + shipData.x == x && segment.y + shipData.y == y)
                    segment.isHit = true;
            }
        }
    }

    areShipsSunk() {
        for (let shipData of this.ships)
            if (!shipData.ship.isSunk())
                return false;
        return true;
    }
}

function isOutOfBounds(x, y) {
    return (x > 10 || x < 0 || y > 10 || y < 0);
}