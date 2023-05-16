import Ship from '../ship.js';

test('create ship with single length', () => {
    expect(new Ship(1)).toEqual({
        signature: [
            {x: 0, y: 0, isHit: false},
        ],
        length: 1,
        hits: 0,
    });
});

test('create longer ship', () => {
    expect(new Ship(2)).toEqual({
        signature: [
            {x: 0, y: 0, isHit: false},
            {x: 0, y: 1, isHit: false},
        ],
        length: 2,
        hits: 0,
    });
});

test('create horizontal ship', () => {
    expect(new Ship(2, false)).toEqual({
        signature: [
            {x: 0, y: 0, isHit: false},
            {x: 1, y: 0, isHit: false},
        ],
        length: 2,
        hits: 0,
    });
});

test('check hit method', () => {
    let ship = new Ship(2);
    ship.hit(1);
    expect(ship.signature[0].isHit).toBe(false);
    expect(ship.signature[1].isHit).toBe(true);
});

test.skip('check if ship sinks after hits', () => {
    let ship = new Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});
