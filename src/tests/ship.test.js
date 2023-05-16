import Ship from '../ship.js';

test('check length', () => {
    expect(Ship(2)).toEqual({
        length: 2,
        hits: 0,
        isSunk: false,
    });
});
