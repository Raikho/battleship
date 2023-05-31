import Ship from '../ship.js';

test('create ship with single length', () => {
    let ship = new Ship(3, 4, 1);
    expect(ship.x).toBe(3);
    expect(ship.y).toBe(4);
    expect(ship.shape).toBe('vertical');
    expect(ship.length).toBe(1);
    expect(ship.segments).toEqual([
        {x: 3, y: 4, hit: false, sunk: false,
            cornerTL: false, cornerTR: false, cornerBL: false, cornerBR: false},
    ]);
});

test('create longer ship at coords, test corners', () => {
    let ship = new Ship(3, 4, 2);
    expect(ship.segments[0]).toEqual(
        {x: 3, y: 4, hit: false, sunk: false,
            cornerTL: false, cornerTR: false, cornerBL: true, cornerBR: true},
    );
    expect(ship.segments[1]).toEqual(
        {x: 3, y: 5, hit: false, sunk: false,
            cornerTL: true, cornerTR: true, cornerBL: false, cornerBR: false},
    );
});

test('create horizontal ship, test corners', () => {
    let ship = new Ship(3, 4, 2, 'horizontal');
    expect(ship.shape).toBe('horizontal');
    expect(ship.segments[0]).toEqual(
        {x: 3, y: 4, hit: false, sunk: false,
            cornerTL: false, cornerTR: true, cornerBL: false, cornerBR: true},
    );
    expect(ship.segments[1]).toEqual(
        {x: 4, y: 4, hit: false, sunk: false,
            cornerTL: true, cornerTR: false, cornerBL: true, cornerBR: false},
    );
});

test('check hit method', () => {
    let ship = new Ship(0, 0, 2);
    ship.hit(0, 1);
    expect(ship.segments[0].hit).toBe(false);
    expect(ship.segments[1].hit).toBe(true);
    expect(ship.isSunk()).toBe(false);
});

test('check if ship sinks after hits', () => {
    let ship = new Ship(0, 0, 2);
    ship.hit(0, 0);
    expect(ship.isSunk()).toBe(false);
    ship.hit(0, 1);
    expect(ship.isSunk()).toBe(true);
});
