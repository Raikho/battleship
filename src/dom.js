const DOM = {};

DOM.createBoard = function(parent, game, player) {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let node = createDiv(parent);
            node.classList.add('square');
            node.dataset.x = x;
            node.dataset.y = y;
            node.dataset.name = player.name;

            node.onclick = () => function() {
                game.squareClicked(x, y, player.name)
            }();
        }
    }
}

DOM.updateBoard = function(parent, player) {
    clearChildClasses(parent);
    for (let ship of player.board.ships) {
        for (let segment of ship.segments) {
            let node = parent.querySelector(
                `[data-x="${segment.x}"][data-y="${segment.y}"]`);
            node.classList.add('ship');
        }
    }
    for (let hit of player.board.hits) {
        let node = parent.querySelector(
            `[data-x="${hit.x}"][data-y="${hit.y}"]`);
        node.classList.add('hit');
        node.textContent = 'x';
    }
}

DOM.hide = function(boardNode1, boardNode2) {
    boardNode1.classList.add('hidden');
    boardNode2.classList.add('hidden');
}
DOM.reveal = function(boardNode) {
    console.log('classlist before revealing: ', boardNode.classList)
    boardNode.classList.remove('hidden');
    console.log('classlist after revealing: ', boardNode.classList)
}

DOM.updateCurrentPlayer = function(player) {
    let currentNum = (player.name === 'p1') ? 1 : 2;
    let otherNum = (player.name === 'p2') ? 1 : 2

    let currentNode = document.querySelector(`.board.player${currentNum}`);
    let otherNode = document.querySelector(`.board.player${otherNum}`);

    currentNode.dataset.active = true;
    otherNode.dataset.active = false;
}

DOM.setButtons = function(game) {
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let showP1 = {}; // TODO
    let showP2 = {}; // TODO
    twoPlayerNode.onclick = () => function() {game.start('twoPlayer');}();
    computerNode.onclick = () => function() {game.start('computer');}();
    autoGenNode.onclick = game.autoGen.bind(game);
    confirmNode.onclick = game.confirm.bind(game);
    resetNode.onclick = () => function() {
        console.log('%crestart %cbutton pressed', 'color: skyblue', null);
        game.updateState('start');
    }();
    showP1.onclick = () => function() { // TODO
        if (game.canShow('p1'))
            return;
    }();
}

DOM.updateButtons = function(state) {
    console.log('updating buttons...');
    switch(state) {
        case 'start':
            setButtonActive('twoPlayer', true);
            setButtonActive('computer', true);
            break;
        case 'p1pick':
            setButtonActive('twoPlayer', false);
            setButtonActive('computer', false);
            setButtonActive('autoGen', true);
            setButtonActive('reset', true);
            break;
        case 'p1Confirm':
            setButtonActive('autoGen', false);
            setButtonActive('confirm', true);
            break;
        case 'p2pick':
            setButtonActive('autoGen', true);
            setButtonActive('confirm', false);
            break;
        case 'p2Confirm':
            setButtonActive('autoGen', false);
            setButtonActive('confirm', true);
            break;
        case 'game':
            setButtonActive('confirm', false);
            break;
        case 'results':
            break;
    }
}

export default DOM;

function createDiv(parent) {
    let node = document.createElement('div');
    parent.appendChild(node);
    return node;
}

function clearChildClasses(parent) {
    const children = [...parent.childNodes];
    for (let child of children) {
        child.classList.remove('ship');
        child.classList.remove('hit');
    }
}

function setButtonActive(id, isActive) {
    let node = document.getElementById(id);
    if (isActive)
        node.classList.add('active');
    else
        node.classList.remove('active');
}
