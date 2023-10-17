import {placeMarker} from './displayController.js';
import {xOrO, addCount} from './counter.js';
import {checkWin} from './checkWin.js';
import { getNextMove } from './minmaxTree.js';

const square0 = document.querySelector('.square0');
const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const square4 = document.querySelector('.square4');
const square5 = document.querySelector('.square5');
const square6 = document.querySelector('.square6');
const square7 = document.querySelector('.square7');
const square8 = document.querySelector('.square8');

const eventArray = [
    square0, square1, square2, square3, square4, square5, square6, square7, square8
];

// adds eventListeners to add X or O on board
export function initializeBoard() {
    for (let event of eventArray) {
        event.addEventListener('click', placeMarker, {once: true});
        event.addEventListener('click', addClickEvents, {once:true});
    };
}

// add eventListeners for player vs computer mode
export function initializeBoardForComputer() {
    for (let event of eventArray) {
        event.removeEventListener('click', addClickEvents), {once: true};
        event.removeEventListener('click', placeMarker), {once: true};
        event.addEventListener('click', placeMarker, {once: true}); // adds "X" or "O" to display in UI
        event.addEventListener('click', addComputerClickEvents), {once: true};
    }
}

export function getEventArray() {
    return eventArray;
}

export function getBoard() {
    return board;
}

// dict used to track the 9 possible moves on the board
const board = {
    topLeft: "0", topMid: "1", topRight: "2",
    midLeft: "3", midMid: "4", midRight: "5",
    botLeft: "6", botMid: "7", botRight: "8"
};

// updates board array after a move
function updateData(className) {
    board[returnKey(className)] = xOrO();
    console.log(board);
}

// matches class name of UI to board and returns the key
function returnKey(className) {
    for (let [key, value] of Object.entries(board)) {
        if (value == className) {
            return key;
        }
    }
}

// once clicked, remove hover, update board, and check for win
export function addClickEvents() {
    this.classList.remove('hover');
    updateData(this.className[6]); // updates board array
    addCount();
    checkWin(board);
}

function addComputerClickEvents() {
    this.classList.remove('hover');
    updateData(this.className[6]); // updates board array
    addCount();
    checkWin(board);
    computerMove();
    checkWin(board);
}

// board used for testing minimax
const testBoard1 = {
    topLeft: "O", topMid: "1", topRight: "2",
    midLeft: "3", midMid: "X", midRight: "5",
    botLeft: "6", botMid: "7", botRight: "X"
};

const testBoard2 = {
    topLeft: "X", topMid: "1", topRight: "2",
    midLeft: "X", midMid: "O", midRight: "5",
    botLeft: "6", botMid: "X", botRight: "O"
};

function computerMove() {
    let nextMove = getNextMove(testBoard2); // use minimax to calculate computer's next move
    updateData(nextMove.move); // updates board data with the new move
    let computerSquare = document.querySelector(".square" + nextMove.move);
    computerSquare.innerHTML = xOrO(); // places "O" on the UI
    addCount();
    computerSquare.classList.remove('hover');
    computerSquare.removeEventListener('click', placeMarker, {once: true});
    computerSquare.removeEventListener('click', addComputerClickEvents), {once: true};
}
