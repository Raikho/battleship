import Gameboard from '../gameboard.js';

test('test gamebaord object', () => {
    expect(new Gameboard()).toEqual({
        ships: [],
    });
});