import Player from '../player.js';

test('player initial test', () => {
    let player = new Player();
    expect(player.board).toBeDefined();
});