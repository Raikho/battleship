const DOM = {};

DOM.createBoard = function(parent, game, player) {
    for (let y = 0; y < 11; y++) {
        for (let x = 0; x < 11; x++) {
            if (x == 0 && y == 0) {
                let node = createDiv(parent);
            }
            else if (x == 0) {
                let node = createDiv(parent);
                node.textContent = y;
            }
            else if (y == 0) {
                let node = createDiv(parent);
                node.textContent = x;
            }
            else if (x != 0 && y != 0) {
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
}

DOM.updateBoard = function(parent, player) {
    clearChildClasses(parent);
    for (let ship of player.board.ships) {
        for (let segment of ship.segments) {
            let node = parent.querySelector(`[data-x="${segment.x}"][data-y="${segment.y}"]`);
            node.classList.add('ship');

            if (segment.corner.TL) node.classList.add('cornerTL');
            if (segment.corner.TR) node.classList.add('cornerTR');
            if (segment.corner.BL) node.classList.add('cornerBL');
            if (segment.corner.BR) node.classList.add('cornerBR');

            if (ship.isSunk())
                node.classList.add('sunk');
        }
    }
    for (let hit of player.board.hits) {
        let node = parent.querySelector(
            `[data-x="${hit.x}"][data-y="${hit.y}"]`);
        node.classList.add('hit');
        node.textContent = 'x';
    }
}

DOM.createModels = function(game, player) {
    for (let container of [...document.querySelectorAll(`.model-container.${player.name}`)]) {
        let index = container.dataset.index;

        let boardNode = createDiv(container);
        boardNode.classList.add('model-board');

        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                let node = createDiv(boardNode);
                node.classList.add('square');
                node.dataset.x = x;
                node.dataset.y = y;
            }
        }

        boardNode.onclick = () => function() {
            game.shipModelClicked(player, index);
                // (node.dataset.used === 'true') ? true : false,
                // () => {node.dataset.used = true;}
            // );
        }();
    }
}

DOM.updateModels = function(game, player) {
    for (let containerNode of [...document.querySelectorAll(`.model-container.${player.name}`)]) {
        let index = containerNode.dataset.index;
        let boardNode = containerNode.querySelector('.model-board');
        clearChildClasses(boardNode);

        // CHECK IF IT IS ACTIVE // TODO
        if (game.activeModel && game.activeModel.model.index == index) {
            let activeName = game.activeModel.player.name;
            let activeIndex = game.activeModel.model.index;
            console.log({activeName, activeIndex}); // DEBUG
        }

        let model = player.board.models[index];
        if (model.placed)
            boardNode.classList.add('placed');

        for (let segment of model.ship.segments) {
            let node = boardNode.querySelector(`[data-x="${segment.x}"][data-y="${segment.y}"]`);
            node.classList.add('ship');

            if (segment.corner.TL) node.classList.add('cornerTL');
            if (segment.corner.TR) node.classList.add('cornerTR');
            if (segment.corner.BL) node.classList.add('cornerBL');
            if (segment.corner.BR) node.classList.add('cornerBR');
        }
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

DOM.setShipSelect = function(game) {
    for (let node of [...document.querySelectorAll('.ship-label')]) {
        let playerName = node.dataset.player;
        let index = Number(node.dataset.index);
        let type = node.dataset.type;
        node.onclick = () => function() {
            game.shipLabelClicked(playerName, index, type, 
                (node.dataset.used === 'true') ? true : false,
                () => {node.dataset.used = true;}
            );
        }();
    }
}
DOM.resetShipSelect = function() {
    for (let node of [...document.querySelectorAll('.ship-label')])
        node.dataset.used = false;
}

DOM.setButtons = function(game) {
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let peek = document.getElementById('peek');
    twoPlayerNode.onclick = () => function() {game.start('twoPlayer');}();
    computerNode.onclick = () => function() {game.start('computer');}();
    autoGenNode.onclick = game.autoGen.bind(game);
    confirmNode.onclick = game.confirm.bind(game);
    resetNode.onclick = () => function() {
        console.log('%crestart %cbutton pressed', 'color: skyblue', null);
        game.updateState('start');
    }();
    peek.onmousedown = () => function() {game.reveal(game.turnPlayer);}();
    peek.onmouseup = () => function() {game.hide();}();
}

DOM.updateButtons = function(state) {
    console.log('updating buttons...');
    switch(state) {
        case 'start':
            setButtonActive('twoPlayer', true);
            setButtonActive('computer', true);
            setButtonActive('peek', false);
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
            setButtonActive('peek', true);
            break;
        case 'results':
            setButtonActive('peek', false);
            break;
    }
}

DOM.post = function(message) {
    document.getElementById('logs').textContent = message;
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
        child.classList.remove('ship', 'hit', 'sunk', 'placed');
        if(child.classList.contains('square')) {
            child.textContent = '';
            child.classList.remove('cornerTL', 'cornerTR', 'cornerBL', 'cornerBR');
        }
    }
}

function setButtonActive(id, isActive) {
    let node = document.getElementById(id);
    if (isActive)
        node.classList.add('active');
    else
        node.classList.remove('active');
}
