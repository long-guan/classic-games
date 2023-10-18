import {getEventArray, addClickEvents, getBoard, initializeBoard, initializeBoardForComputer, addComputerClickEvents} from './gameBoard.js';
import {placeMarker, resetDisplay} from './displayController.js';
import {resetMoveCount} from './counter.js';
import { getMode } from './mode.js';

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

// reset everything and readd eventListeners
export function reset() {
    resetBoard();
    resetDisplay();
    removeListener();
    addHover();
    resetMoveCount();
    resetBackground();
    if (getMode() === false) {
        initializeBoard();
    } else {
        initializeBoardForComputer();
    }
}

// resets board array to correspond to index (0, 1, 2, ...)
function resetBoard() {
    let index = 0;
    let board = getBoard(); // obtains board array
    for (let key of Object.keys(board)) {
        board[key] = index;
        index++;
    }
}

// removes blue background for winning squares
function resetBackground() {
    for (let square of getEventArray()) {
        square.classList.remove("blue-background");
    }
}

// remove all eventListeners for adding marker and click events
export function removeListener() {
    for (let square of getEventArray()) {
        square.removeEventListener("click", addClickEvents);
        square.removeEventListener("click", placeMarker);
        square.removeEventListener('click', addComputerClickEvents);
    }
}

// add hover if square doesn't have hover class
function addHover() {
    for (let event of getEventArray()) {
        if (event.classList.contains("hover") == false) {
            event.classList.add("hover");
        }
    };
}
