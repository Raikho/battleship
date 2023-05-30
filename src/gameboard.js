import Ship from './ship.js';

export default class Gameboard {
    constructor() {
        this.hits = [];
        this.ships = Array.apply(null, Array(5));
        this.models = [];
        this.genDefaultModels();
        // this.genDefaultShips();
    }

    addShip(x, y, length = 1, shape = 'vertical', index) {
        if (isOutOfBounds(x, y))
            return {status: 'failure', message: 'ship out of bounds'};
        
        let ship = new Ship(x, y, length, shape);

        for (let segment of ship.segments)
            if (isOutOfBounds(segment.x, segment.y))
                return {status: 'failure', message: 'ship extends out of bounds'};

        for (let segment1 of ship.segments)
            for (let ship2 of this.ships) {
                if (!ship2)
                    continue;
                for (let segment2 of ship2.segments)
                    if (segment1.x == segment2.x && segment1.y == segment2.y)
                        return {status: 'failure', message: 'ship intersects other ship'};
            }

        this.ships[index] = ship;
        // let seg0 = ship.segments[0]; // debug
        // let seg1 = ship.segments[1]; // debug
        // seg0.hit = true; // DEBUG
        // seg1.hit = true; // DEBUG
        // seg0.sunk = ship.isSunk(); // DEBUG
        // seg1.sunk = ship.isSunk(); // DEBUG
        // this.hits.push({x: seg0.x, y: seg0.y}); // debug
        // this.hits.push({x: seg1.x, y: seg1.y}); // debug
        return {status: 'success'};
    }

    get shipsFull() {
        for (let ship of this.ships)
            if (!ship)
                return false;
        return true;
    }

    addModel(x, y, length = 1, shape = 'vertical') {
        let ship = new Ship(x, y, length, shape);

        this.models.push({ship: ship, index: null, placed: false, sunk: false});
    }

    receiveAttack(x, y) {
        for (let hit of this.hits)
            if (hit.x == x && hit.y == y)
                return {status: 'failure', message: 'square already hit'};

        this.hits.push({x, y});
        let response = {status: 'success', result: 'empty square'};

        for (let ship of this.ships) {
            for (let segment of ship.segments) {
                if (segment.x == x && segment.y == y) {
                    segment.hit = true;

                    if (!ship.isSunk())
                        response.result = 'enemy ship hit';
                    else if (this.areShipsSunk())
                        response.result = 'all enemy ships sunk';
                    else
                        response.result = 'enemy ship sunk';
                }
            }
            if (ship.isSunk())
                for (let segment of ship.segments)
                    segment.sunk = true;
        }
        return response;
    }

    receiveSmartAttack() {
        let hitSegments = [];
        for (let ship of this.ships)
            for (let segment of ship.segments)
                if (segment.hit && !ship.isSunk())
                    hitSegments.push(segment);

        if (hitSegments.length == 0) {
            let x = Math.ceil(Math.random()*10);
            let y = Math.ceil(Math.random()*10);
            console.log('First auto attack w/ random x,y');
            return this.receiveAttack(x, y);
        }

        let adjacentHits = [];
        for (let segment of hitSegments) {
            adjacentHits.push({x: segment.x + 1, y: segment.y});
            adjacentHits.push({x: segment.x - 1, y: segment.y});
            adjacentHits.push({x: segment.x, y: segment.y + 1});
            adjacentHits.push({x: segment.x, y: segment.y - 1});
        }

        let boundFiltered = adjacentHits.filter(hit => !isOutOfBounds(hit.x, hit.y))
        let hitFiltered = boundFiltered.filter(hit => {
            for (let prevHit of this.hits) {
                if (hit.x == prevHit.x && hit.y == prevHit.y)
                    return false;
            }
            return true;
        });

        return this.receiveAttack(hitFiltered[0].x, hitFiltered[0].y);
    }

    areShipsSunk() {
        for (let ship of this.ships)
            if (!ship.isSunk())
                return false;
        return true;
    }

    genDefaultShips() {
        this.ships = [];
        this.addShip(1, 1, 2, 'vertical', 0);
        this.addShip(3, 3, 2, 'vertical', 1);
        this.addShip(5, 5, 2, 'vertical', 2);
        this.addShip(7, 7, 2, 'vertical', 3);
        this.addShip(9, 4, 2, 'vertical', 4);
    }

    genDefaultModels() {
        this.models = [];
        this.addModel(2, 1, 2);
        this.addModel(2, 1, 3);
        this.addModel(2, 1, 3);
        this.addModel(2, 0, 4);
        this.addModel(2, 0, 5);

        for (let i = 0; i < this.models.length; i++)
            this.models[i].index = i;
    }

    clear() {
        this.ships = [];
        this.hits = [];
    }
}

function isOutOfBounds(x, y) {
    return (x > 10 || x <= 0 || y > 10 || y <= 0);
}