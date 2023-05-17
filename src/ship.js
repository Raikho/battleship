export default class Ship {
    constructor(length, shape = 'vertical') {
        this.segments = [];
        for (let i = 0; i < length; i++) {
            let x = (shape === 'vertical') ? 0 : i;
            let y = (shape === 'vertical') ? i : 0;
            this.segments.push(createSegment(x, y));
        }
    }
    get hits() {
        return this.segments.reduce((prev, curr) => 
            prev += (curr.isHit) ? 1 : 0, 0);
    }
    hit(segment) {this.segments[segment].isHit = true}
    isSunk() {return (this.hits >= this.segments.length)}
}

function createSegment(x, y) {return {x, y, isHit: false}}
