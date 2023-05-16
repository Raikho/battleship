import Gameboard from '../gameboard.js';

test.only('skip', () => {expect(1).toBe(1)});

test('test gamebaord object', () => {
    expect(new Gameboard()).toEqual({
        ships: [],
    });
});