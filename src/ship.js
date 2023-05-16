export default class Ship {
    constructor(length, isVertical = true) {
        this.signature = [];
        for (let i = 0; i < length; i++) {
            let x = (isVertical) ? 0 : i;
            let y = (isVertical) ? i : 0;
            this.signature.push(createSegment(x, y));
        }
        this.length = length;
        this.hits = 0;
    }
    hit(segment) {this.signature[segment].isHit = true}
    isSunk() {return (this.hits >= this.length)}
}

function createSegment(x, y) {
    return {x: x, y: y, isHit: false}
}
