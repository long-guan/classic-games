import {tie} from './counter.js';
import {updateStatusTurn, removeGameOver} from './displayController.js';

const square0 = document.querySelector('.square0');
const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const square4 = document.querySelector('.square4');
const square5 = document.querySelector('.square5');
const square6 = document.querySelector('.square6');
const square7 = document.querySelector('.square7');
const square8 = document.querySelector('.square8');

 // checks for 3 in a row for all possible combinations
export function checkWin(board) {
    let topLeft = board.topLeft;
    let topMid = board.topMid;
    let topRight = board.topRight;
    let midLeft = board.midLeft;
    let midMid = board.midMid;
    let midRight = board.midRight;
    let botLeft = board.botLeft;
    let botMid = board.botMid;
    let botRight = board.botRight;
    // horizontal wins
    if (topLeft == board.topMid && topLeft == topRight) {
        square0.classList.add("blue-background");
        square1.classList.add("blue-background");
        square2.classList.add("blue-background");
        removeGameOver();
    } else if (midLeft == midMid && midLeft == midRight) {
        square3.classList.add("blue-background");
        square4.classList.add("blue-background");
        square5.classList.add("blue-background");
        removeGameOver();
    } else if (botLeft == botMid && botLeft == botRight) {
        square6.classList.add("blue-background");
        square7.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    // vertical wins
    } else if (topMid == midMid && topMid == botMid) {
        square0.classList.add("blue-background");
        square3.classList.add("blue-background");
        square6.classList.add("blue-background");
        removeGameOver();
    } else if (topRight == midRight && topRight == botRight) {
        square1.classList.add("blue-background");
        square4.classList.add("blue-background");
        square7.classList.add("blue-background");
        removeGameOver();
    }  else if (topLeft == midLeft && topLeft == botLeft) {
        square2.classList.add("blue-background");
        square5.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    // diagonal wins
    } else if (topLeft == midMid && topLeft == botRight) {
        square0.classList.add("blue-background");
        square4.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    } else if (topRight == midMid && topRight == botLeft) {
        square2.classList.add("blue-background");
        square4.classList.add("blue-background");
        square6.classList.add("blue-background");
        removeGameOver();
    } else if (tie() == true) {
        updateStatusTurn();
    } else {
        updateStatusTurn();
    }
}
