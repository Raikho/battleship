import Player from '../player.js';

test('player initial test', () => {
    let player = new Player();
    expect(player.board).toBeDefined();
});

test('generate models', () => {
    let player = new Player();
    player.generateModels();
    for (let model of player.board.models) {
        expect(model).toBeDefined();
    }
});