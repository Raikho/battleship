import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

test('add ship at coordinates', () => {
    let ship = new Ship(4, 4, 2, 'vertical');
    let gameboard = new Gameboard();
    gameboard.addShip(4, 4, 2, 'vertical');
    expect(gameboard.ships[0]).toEqual(ship);
})

test('reject ship placed out of bounds', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(11, 11, 1, 'vertical');
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship that extends out of bounds', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(9, 9, 2, 'vertical');
    expect(gameboard.ships[0]).toBeUndefined();
    gameboard.addShip(9, 9, 1, 'vertical');
    expect(gameboard.ships[0]).toBeDefined();
})

test('reject ship overlapped with another ship', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.addShip(4, 5, 2, 'vertical');
    expect(gameboard.ships[1]).toBeUndefined();
    gameboard.addShip(4, 6, 2, 'vertical');
    expect(gameboard.ships[1]).toBeDefined();
})

test.skip('receive attack on empty square', () => {
    let gameboard = new Gameboard();
    gameboard.receiveAttack(4, 4);
    gameboard.squares[4][4] = {isHit: true};
})

test.skip('receive attack on ship', () => {
    let gameboard = new Gameboard();
    gameboard.addShip(2, 'vertical', 4, 4);
    gameboard.receiveAttack(3, 3);
    expect(gameboard.ships[0].ship.segments[0].isHit).toBe(false);
    expect(gameboard.ships[0].ship.segments[1].isHit).toBe(false);
    gameboard.receiveAttack(4, 4);
    expect(gameboard.ships[0].ship.segments[0].isHit).toBe(true);
    expect(gameboard.ships[0].ship.segments[1].isHit).toBe(false);
})

test.skip('report when all sinks are sunk', () => {
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