import Ship from '../ship.js';

test('create ship with single length', () => {
    expect(new Ship(1)).toEqual({
        segments: [
            {x: 0, y: 0, isHit: false},
        ],
    });
});

test('create longer ship', () => {
    expect(new Ship(2)).toEqual({
        segments: [
            {x: 0, y: 0, isHit: false},
            {x: 0, y: 1, isHit: false},
        ],
    });
});

test('create horizontal ship', () => {
    expect(new Ship(2, false)).toEqual({
        segments: [
            {x: 0, y: 0, isHit: false},
            {x: 1, y: 0, isHit: false},
        ],
    });
});

test('check hit method', () => {
    let ship = new Ship(2);
    ship.hit(1);
    expect(ship.segments[0].isHit).toBe(false);
    expect(ship.segments[1].isHit).toBe(true);
    expect(ship.hits).toBe(1);
});

test('check if ship sinks after hits', () => {
    let ship = new Ship(2);
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});
