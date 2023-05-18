import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import DOM from './dom.js';

console.log('DOM: ', DOM); // debug
let p1BoardNode = document.querySelector('.board.player1');
let p2BoardNode = document.querySelector('.board.player2');
DOM.createBoard(p1BoardNode);
DOM.createBoard(p2BoardNode);

let player1 = new Player();
let player2 = new Player();

player1.board.addShip(1, 1, 2);
player1.board.addShip(3, 1, 2);
player1.board.addShip(5, 1, 2);
player1.board.addShip(7, 1, 3);
player1.board.addShip(9, 1, 4);

player2.board.addShip(0, 1, 2);
player2.board.addShip(2, 1, 2);
player2.board.addShip(4, 1, 3);
player2.board.addShip(6, 1, 4);
player2.board.addShip(8, 1, 2);

player1.board.receiveAttack(1, 2);
player2.board.receiveAttack(7, 4);

DOM.updateBoard(p1BoardNode, player1.board);
DOM.updateBoard(p2BoardNode, player2.board);

// GAMEMODE STATES
// game-type-selection
// player 1 select pieces
// player 2 select pieces || computer
// gameplay
//      player 1 turn
//      player 2 turn
// stats (reset)