import Ship from '../ship.js'
import Gameboard from '../gameboard.js';

let gameboard = null;
beforeEach(() => {gameboard = new Gameboard()});

test('add ship at coordinates', () => {
    let ship = new Ship(4, 4, 2, 'vertical');
    let response = {};

    response = gameboard.addShip(4, 4, 2, 'vertical');
    expect(response).toEqual({status: 'failure', message: 'no index'});
    response = gameboard.addShip(4, 4, 2, 'vertical', 0);
    expect(response).toEqual({status: 'success'});

    expect(gameboard.ships[0]).toEqual(ship);
})

test('reject ship placed out of bounds', () => {
    expect(gameboard.addShip(11, 11, 1, 'vertical', 0)).toEqual({
        status: 'failure',
        message: 'ship out of bounds'
    });
    expect(gameboard.ships[0]).toBeUndefined();
})

test('reject ship that extends out of bounds', () => {
    expect(gameboard.addShip(10, 10, 2, 'vertical', 0)).toEqual({
        status: 'failure',
        message: 'ship extends out of bounds'
    });
    expect(gameboard.addShip(10, 10, 1, 'vertical', 0)).toEqual({status: 'success'});
})

test('reject ship overlapped with another ship', () => {
    expect(gameboard.addShip(4, 4, 2, 'vertical', 0)).toEqual({status: 'success'});
    expect(gameboard.addShip(4, 5, 2, 'vertical', 0)).toEqual({
        status: 'failure',
        message: 'ship intersects other ship'
    });
    expect(gameboard.addShip(4, 6, 2, 'vertical', 0)).toEqual({status: 'success'});
})

test('receive attack on empty square', () => {
    let response = gameboard.receiveAttack(4, 4);
    expect(response).toEqual({status: 'success', result: 'empty square'});
    expect(gameboard.hits[0]).toEqual({x: 4, y: 4});
})

test('receive two attacks on same square', () => {
    let response = gameboard.receiveAttack(4, 4);
    expect(response).toEqual({status: 'success', result: 'empty square'});
    response = gameboard.receiveAttack(4, 4);
    expect(response).toEqual({status: 'failure', message: 'square already hit'});
    expect(gameboard.hits.length).toBe(1);
})

test('receive attack on ship', () => {
    gameboard.addShip(4, 4, 2, 'vertical', 0);
    let response = gameboard.receiveAttack(4, 3);
    expect(response).toEqual({status: 'success',result: 'empty square'});
    expect(gameboard.ships[0].segments[1].hit).toBe(false);
    response = gameboard.receiveAttack(4, 5);
    expect(response).toEqual({status: 'success',result: 'enemy ship hit'});
    expect(gameboard.ships[0].segments[1].hit).toBe(true);
})

test('report when ship has sunk', () => {
    gameboard.addShip(4, 4, 2, 'vertical', 0);
    gameboard.addShip(8, 8, 2, 'vertical', 1);
    expect(gameboard.receiveAttack(4, 4)).toEqual({
        status: 'success',
        result: 'enemy ship hit'
    });
    expect(gameboard.receiveAttack(4, 5)).toEqual({
        status: 'success',
        result: 'enemy ship sunk'
    });
    expect(gameboard.ships[0].segments[1].hit).toBe(true);
})

test('report when all sinks are sunk', () => {
    gameboard.addShip(4, 4, 2, 'vertical', 0);
    gameboard.addShip(8, 4, 2, 'vertical', 1);
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

test('generate default ships', () => {
    gameboard.genDefaultShips();
    for (let ship of gameboard.ships)
        expect(ship).toBeDefined();
})

test('clear board', () => {
    gameboard.genDefaultShips();
    gameboard.clear();
    for (let ship of gameboard.ships)
        expect(ship).toBeUndefined();
    expect(gameboard.hits.length).toBe(0);
})