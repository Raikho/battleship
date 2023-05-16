import Ship from '../ship.js';

test('check length and ship default properties', () => {
    expect(new Ship(2)).toEqual({
        length: 2,
        hits: 0,
        isSunk: false,
    });
});

test('check hit method', () => {
    let ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
});
