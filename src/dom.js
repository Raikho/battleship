const DOM = {};
export default DOM;

DOM.setButtons = function(game) { // TODO refactor
    let twoPlayerNode = document.getElementById('twoPlayer');
    let computerNode = document.getElementById('computer');
    let autoGenNode = document.getElementById('autoGen');
    let confirmNode = document.getElementById('confirm');
    let resetNode = document.getElementById('reset');
    let peek = document.getElementById('peek');

    twoPlayerNode.onclick = () => function() {game.selectGameType('player');}();
    computerNode.onclick = () => function() {game.selectGameType('computer');}();    
}

DOM.setModels = function(game) {
    for (let boardNode of queryArray(['modelboard'])) {
        for (let y = 0; y < 5; y++)
            for (let x = 0; x < 5; x++)
                createDiv(boardNode, ['square'], {x: x, y: y}); // TODO is x,y needed?

        boardNode.onclick = () => function() {
            game.selectModel(boardNode.dataset.player, boardNode.dataset.index);
        }();
    }
}

DOM.updateModels = function(game) {
    console.log('updating models')
    for (let player of game.players) {
        for (let model of player.models) {
            let node = queryElement(['modelboard'], {player: player.name, index: model.index});
            setClasslist(node, model.bools);
        }
    }
}

DOM.setBoard = function(game) {
    for (let boardNode of queryArray(['gameboard'])) {
        let playerName = boardNode.dataset.player; // TODO move
        for (let y = 0; y < 11; y++) {
            for (let x = 0; x < 11; x++) {
                if (x == 0 && y == 0)
                    createDiv(boardNode);
                else if (x == 0)
                    createTextDiv(boardNode, y)
                else if (y == 0)
                    createTextDiv(boardNode, x);
                else {
                    let node = createDiv(boardNode, ['square']);
                }
            }
        }
    }
}

// ============================ MISC ==================================
// ====================================================================
function createDiv(parent, classArray, dataObject) {
    let node = document.createElement('div');
    parent.append(node);
    if (classArray)
        for (let cls of classArray)
            node.classList.add(cls);
    for (let key in dataObject) {
        let value = dataObject[key];
        node.dataset[key] = value;
    }
}

function createTextDiv(parent, text) {
    let node = document.createElement('div');
    parent.append(node);
    node.textContent = text;
}

function queryArray(classArray, dataObject) {
    let string = '';
    for (let cls of classArray)
        string += '.' + cls;
    for (let key in dataObject)
        string += `[data-${key}="${dataObject[key]}"]`
    return [...document.querySelectorAll(string)];
}

function queryElement(classArray, dataObject) {
    let string = '';
    for (let cls of classArray)
        string += '.' + cls;
    for (let key in dataObject)
        string += `[data-${key}="${dataObject[key]}"]`
    return document.querySelector(string);
}

function setClasslist(node, boolObject) {
    for (let key in boolObject) {
        let value = boolObject[key];
        if (value)
            node.classList.add(key);
        else
            node.classList.remove(key);
    }
}