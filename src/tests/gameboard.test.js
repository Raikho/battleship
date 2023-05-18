import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

let gameboard = null;
beforeEach(() => {gameboard = new Gameboard()});

test('add ship at coordinates', () => {
    let ship = new Ship(4, 4, 2, 'vertical');
    expect(gameboard.addShip(4, 4, 2, 'vertical')).toEqual({status: 'success'});
    expect(gameboard.ships[0]).toEqual(ship);
})

test('reject ship placed out of bounds', () => {
    expect(gameboard.addShip(11, 11, 1, 'vertical')).toEqual({
        status: 'failure',
        message: 'ship out of bounds'
    });
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship that extends out of bounds', () => {
    expect(gameboard.addShip(9, 9, 2, 'vertical')).toEqual({
        status: 'failure',
        message: 'ship extends out of bounds'
    });
    expect(gameboard.addShip(9, 9, 1, 'vertical')).toEqual({status: 'success'});
})

test('reject ship overlapped with another ship', () => {
    expect(gameboard.addShip(4, 4, 2, 'vertical')).toEqual({status: 'success'});
    expect(gameboard.addShip(4, 5, 2, 'vertical')).toEqual({
        status: 'failure',
        message: 'ship intersects other ship'
    });
    expect(gameboard.addShip(4, 6, 2, 'vertical')).toEqual({status: 'success'});
})

test('receive attack on empty square', () => {
    expect(gameboard.receiveAttack(4, 4)).toEqual({status: 'success', result: 'empty square'});
    expect(gameboard.hits[0]).toEqual({x: 4, y: 4});
})

test('receive two attacks on same square', () => {
    expect(gameboard.receiveAttack(4, 4)).toEqual({
        status: 'success',
        result: 'empty square'
    });
    expect(gameboard.receiveAttack(4, 4)).toEqual({
        status: 'failure',
        message: 'square already hit'
    });
    expect(gameboard.hits.length).toBe(1);
})

test('receive attack on ship', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    expect(gameboard.receiveAttack(4, 3)).toEqual({
        status: 'success',
        result: 'empty square'
    });
    expect(gameboard.ships[0].segments[1].isHit).toBe(false);
    expect(gameboard.receiveAttack(4, 5)).toEqual({
        status: 'success',
        result: 'enemy ship hit'
    });
    expect(gameboard.ships[0].segments[1].isHit).toBe(true);
})

test('report when ship has sunk', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.addShip(8, 8, 2, 'vertical');
    expect(gameboard.receiveAttack(4, 4)).toEqual({
        status: 'success',
        result: 'enemy ship hit'
    });
    expect(gameboard.receiveAttack(4, 5)).toEqual({
        status: 'success',
        result: 'enemy ship sunk'
    });
    expect(gameboard.ships[0].segments[1].isHit).toBe(true);
})

test('report when all sinks are sunk', () => {
    gameboard.addShip(4, 4, 2, 'vertical');
    gameboard.addShip(8, 4, 2, 'vertical');
    gameboard.receiveAttack(4, 4);
    expect(gameboard.receiveAttack(4, 5)).toEqual({
        status: 'success',
        result: 'enemy ship sunk'
    });
    gameboard.receiveAttack(8, 4);
    expect(gameboard.receiveAttack(8, 5)).toEqual({
        status: 'success',
        result: 'all enemy ships sunk'
    });
})