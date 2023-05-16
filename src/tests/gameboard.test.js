import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

test('10x10 array creation', () => {
    let array2d = new Array(10);
    for (let array of array2d)
        array = new Array(10);

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
    gameboard.addShip(2, 'veritcal', 10, 10);
    expect(gameboard.ships[0]).toBeUndefined();
})