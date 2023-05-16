export default class Gamebaord {
    constructor() {
        this.squares = [[],[],[],[],[],[],[],[],[],[]];
        for (let square of this.squares) {
            for (let i = 0; i < 10; i++)
                square.push(null);
        }
        this.ships = [];
    }
}