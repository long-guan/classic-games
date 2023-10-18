import {placeMarker, addMarker} from './displayController.js';
import {xOrO, addCount} from './counter.js';
import {checkWin} from './checkWin.js';
import { getNextMove } from './minmaxTree.js';
import { createLoader } from './displayController.js';
import { removeListener } from './reset.js';

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
        event.removeEventListener('click', addClickEvents, {once: true});
        event.removeEventListener('click', placeMarker, {once: true});
        event.addEventListener('click', addHumanClickEvents, {once: true});
        event.addEventListener('click', computerMove, {once: true});
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
export function updateData(className) {
    board[returnKey(className)] = xOrO();
    // console.log(board);
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

export function addHumanClickEvents() {
    this.classList.remove('hover');
    updateData(this.className[6]); // updates board array
    addMarker(this);
    addCount();
    checkWin(getBoard());
}

// board used for testing minimax
const testBoard1 = {
    topLeft: "O", topMid: "1", topRight: "X",
    midLeft: "3", midMid: "X", midRight: "5",
    botLeft: "6", botMid: "O", botRight: "X"
};

export function computerMove() {
    showLoaders();
    disableClicking();
    let nextMove = getNextMove(board); // use minimax to calculate computer's next move
    if (nextMove !== null && nextMove !== undefined) { // getNextMove returns null when it is a tie
        setTimeout(() => { // show spinning loaders for 0.75 seconds
            removeLoaders();
            updateData(nextMove); // updates board data with the new move
            let computerSquare = document.querySelector(".square" + nextMove);
            computerSquare.innerHTML = xOrO(); // places "O" on the UI
            computerSquare.style.color = "black";
            addCount();
            computerSquare.classList.remove('hover');
            computerSquare.removeEventListener('click', placeMarker, {once: true});
            computerSquare.removeEventListener('click', addHumanClickEvents, {once: true});
            checkWin(board);
        }, 750)
    }
}

// add loading spinners to empty spots
function showLoaders() {
    for (let event of eventArray) {
        if (event.innerHTML === "") {
            event.appendChild(createLoader());
        }
    }
}

// remove loading spinners from empty spots
function removeLoaders() {
    for (let event of eventArray) {
        if (event.firstChild && event.innerHTML !== "X" && event.innerHTML !== "O") {
            event.removeChild(event.firstChild);
            enableClicking(event);
        }
    }
}

// disables clicking during the Computer thinking phase (when spinner loaders are displayed)
function disableClicking() {
    removeListener();
}

// add clicking back after the computer thinking phase (spinner loaders) is over
function enableClicking(square) {
    square.addEventListener('click', addHumanClickEvents, {once: true});
    square.addEventListener('click', computerMove, {once: true});
}
