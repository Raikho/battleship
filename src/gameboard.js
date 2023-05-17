import Ship from './ship.js';

export default class Gameboard {
    constructor() {
        this.ships = [];
    }

    addShip(x, y, length = 1, shape = 'vertical') {
        if (isOutOfBounds(x, y))
            return;
        
        let ship = new Ship(x, y, length, shape);

        for (let segment of ship.segments)
            if (isOutOfBounds(segment.x, segment.y))
                return;

        for (let segment1 of ship.segments)
            for (let ship2 of this.ships)
                for (let segment2 of ship2.segments)
                    if (segment1.x == segment2.x && segment1.y == segment2.y)
                        return;

        this.ships.push(ship);
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
    return (x >= 10 || x < 0 || y >= 10 || y < 0);
}