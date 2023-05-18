import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

let gameboard = null;
beforeEach(() => {gameboard = new Gameboard()});

test('add ship at coordinates', () => {
    let ship = new Ship(4, 4, 2, 'vertical');
    gameboard.addShip(4, 4, 2, 'vertical');
    expect(gameboard.ships[0]).toEqual(ship);
})

test('reject ship placed out of bounds', () => {
    gameboard.addShip(11, 11, 1, 'vertical');
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship that extends out of bounds', () => {
    gameboard.addShip(9, 9, 2, 'vertical');
    expect(gameboard.ships[0]).toBeUndefined();
    gameboard.addShip(9, 9, 1, 'vertical');
    expect(gameboard.ships[0]).toBeDefined();
})

test('reject ship overlapped with another ship', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.addShip(4, 5, 2, 'vertical');
    expect(gameboard.ships[1]).toBeUndefined();
    gameboard.addShip(4, 6, 2, 'vertical');
    expect(gameboard.ships[1]).toBeDefined();
})

test('receive attack on empty square', () => {
    gameboard.receiveAttack(4, 4);
    expect(gameboard.hits[0]).toEqual({x: 4, y: 4});
    expect(gameboard.hits.length).toBe(1);
})

test('receive two attacks on same square', () => {
    gameboard.receiveAttack(4, 4);
    expect(gameboard.hits[0]).toEqual({x: 4, y: 4});
    gameboard.receiveAttack(4, 4);
    expect(gameboard.hits.length).toBe(1);
})

test('receive attack on ship', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.receiveAttack(4, 3);
    expect(gameboard.ships[0].segments[1].isHit).toBe(false);
    gameboard.receiveAttack(4, 5);
    expect(gameboard.ships[0].segments[1].isHit).toBe(true);
})

test('report when all sinks are sunk', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.addShip(8, 4, 2, 'vertical');
    gameboard.receiveAttack(4, 4);
    gameboard.receiveAttack(4, 5);
    gameboard.receiveAttack(8, 4);
    expect(gameboard.areShipsSunk()).toBe(false);
    gameboard.receiveAttack(8, 5);
    expect(gameboard.areShipsSunk()).toBe(true);
})