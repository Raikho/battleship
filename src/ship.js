export default class Ship {
    constructor(length, shape = 'vertical') {
        this.signature = [];
        for (let i = 0; i < length; i++) {
            let x = (shape === 'vertical') ? 0 : i;
            let y = (shape === 'vertical') ? i : 0;
            this.signature.push(createSegment(x, y));
        }
    }
    get hits() {
        return this.signature.reduce((prev, curr) => 
            prev += (curr.isHit) ? 1 : 0, 0);
    }
    hit(segment) {this.signature[segment].isHit = true}
    isSunk() {return (this.hits >= this.signature.length)}
}

function createSegment(x, y) {return {x, y, isHit: false}}
