import Ship from '../ship.js';

test('create ship with single length', () => {
    expect(new Ship(0, 0, 1)).toEqual({
        segments: [
            {x: 0, y: 0, isHit: false, corner: {TL: false, TR: false, BL: false, BR: false}},
        ],
    });
});

test('create longer ship at coords', () => {
    expect(new Ship(4, 4, 2)).toEqual({
        segments: [
            {x: 4, y: 4, isHit: false, corner: {TL: false, TR: false, BL: true, BR: true}},
            {x: 4, y: 5, isHit: false, corner: {TL: true, TR: true, BL: false, BR: false}},
        ],
    });
});

test('create horizontal ship', () => {
    expect(new Ship(0, 0, 2, 'horizontal')).toEqual({
        segments: [
            {x: 0, y: 0, isHit: false, corner: {TL: false, TR: true, BL: false, BR: true}},
            {x: 1, y: 0, isHit: false, corner: {TL: true, TR: false, BL: true, BR: false}},
        ],
    });
});

test('check hit method', () => {
    let ship = new Ship(0, 0, 2);
    ship.hit(0, 1);
    expect(ship.segments[0].isHit).toBe(false);
    expect(ship.segments[1].isHit).toBe(true);
    expect(ship.hits).toBe(1);
});

test('check if ship sinks after hits', () => {
    let ship = new Ship(0, 0, 2);
    ship.hit(0, 0);
    expect(ship.isSunk()).toBe(false);
    ship.hit(0, 1);
    expect(ship.isSunk()).toBe(true);
});
