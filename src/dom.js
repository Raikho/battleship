const DOM = {};

DOM.createBoard = function(parent) {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            let node = createDiv(parent);
            node.dataset.x = x;
            node.dataset.y = y;
        }
    }
}

DOM.updateBoard = function(parent, board) {
    for (let ship of board.ships) {
        for (let segment of ship.segments) {
            let node = parent.querySelector(
                `[data-x="${segment.x}"][data-y="${segment.y}"]`);
            node.classList.add('ship');
        }
    }
    for (let hit of board.hits) {
        let node = parent.querySelector(
            `[data-x="${hit.x}"][data-y="${hit.y}"]`);
        node.classList.add('hit');
        node.textContent = 'x';
    }
}

export default DOM;

function createDiv(parent) {
    let node = document.createElement('div');
    parent.appendChild(node);
    return node;
}
