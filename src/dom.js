const DOM = {};

DOM.createBoard = function(parent) {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let node = createDiv(parent);
            node.dataset.x = x;
            node.dataset.y = y;
        }
    }
}

export default DOM;

function createDiv(parent) {
    let node = document.createElement('div');
    parent.appendChild(node);
    return node;
}
