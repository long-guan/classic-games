import {getEventArray, addClickEvents, getBoard} from '/classic-games/tic-tac-toe/gameBoard.js';
import {placeMarker, resetDisplay} from '/classic-games/tic-tac-toe/displayController.js';
import {resetMoveCount} from '/classic-games/tic-tac-toe/counter.js';

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

// reset everything and readd eventListeners
function reset() {
    resetBoard();
    resetDisplay();
    removeListener();
    addListeners();
    addHover();
    resetMoveCount();
    resetBackground();
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
    }
}

// add eventListeners for adding marker and click events
function addListeners() {
    for (let event of getEventArray()) {
        event.addEventListener('click', placeMarker, {once: true});
        event.addEventListener('click', addClickEvents, {once:true});
    };
}

// add hover if square doesn't have hover class
function addHover() {
    for (let event of getEventArray()) {
        if (event.classList.contains("hover") == false) {
            event.classList.add("hover");
        }
    };
}
