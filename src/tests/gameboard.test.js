import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

test.only('10x10 array creation', () => {
    let array2d = [];
    for (let x = 0; x < 10; x++) {
        let col = [];
        for (let y = 0; y < 10; y++)
            col.push({isHit: false, ship: null});
        array2d.push(col);
    }

    let gameboard = new Gameboard();
    expect(gameboard.squares).toEqual(array2d);
    expect(gameboard.squares.length).toBe(10);
});

test('adds a ship with parameters', () => {
    let ship = new Ship(2, 'vertical');
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical');
    expect(gameboard.ships[0].ship).toEqual(ship);
});

test('add ship at coordinates', () => {
    let ship = new Ship(2, 'vertical');
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 4, 4);
    expect(gameboard.ships[0]).toEqual({
        ship: ship,
        x: 4,
        y: 4,
    })
    expect(gameboard.squares[4][4]).toEqual({isHit: false, ship: ship})
    expect(gameboard.squares[4][5]).toEqual({isHit: false, ship: ship})
    
})

test('reject ship placed out of bounds', () => {
    let ship = new Ship(2, 'vertical');
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'veritcal', 11, -1);
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship that extends out of bounds', () => {
    let ship = new Ship(2, 'vertical');
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 10, 10);
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship overlapped with another ship', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 4, 4);
    gameboard.addShip(2, 'vertical', 4, 5);
    expect(gameboard.ships[1]).toBeUndefined();
    gameboard.addShip(2, 'vertical', 4, 6);
    expect(gameboard.ships[1]).toBeDefined();
})

test('receive attack on empty square', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack(4, 4);
    gameboard.squares[4][4] = {isHit: true};
})

test('receive attack on ship', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 4, 4);
    gameboard.receiveAttack(3, 3);
    expect(gameboard.ships[0].ship.segments[0].isHit).toBe(false);
    expect(gameboard.ships[0].ship.segments[1].isHit).toBe(false);
    gameboard.receiveAttack(4, 4);
    expect(gameboard.ships[0].ship.segments[0].isHit).toBe(true);
    expect(gameboard.ships[0].ship.segments[1].isHit).toBe(false);
})

test('report when all sinks are sunk', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 4, 4);
    gameboard.addShip(2, 'vertical', 8, 4);
    gameboard.receiveAttack(4, 4);
    gameboard.receiveAttack(4, 5);
    gameboard.receiveAttack(8, 4);
    expect(gameboard.areShipsSunk()).toBe(false);
    gameboard.receiveAttack(8, 5);
    expect(gameboard.areShipsSunk()).toBe(true);
})