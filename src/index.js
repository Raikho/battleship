import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import DOM from './dom.js';

console.log('DOM: ', DOM); // debug
let boardNode = document.querySelector('.board');

let player1 = new Player();
let player2 = new Player();

// GAMEMODE STATES
// game-type-selection
// player 1 select pieces
// player 2 select pieces || computer
// gameplay
//      player 1 turn
//      player 2 turn
// stats (reset)