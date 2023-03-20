import {getEventArray, addClickEvents, getBoard} from '/classic-games/tic-tac-toe/gameBoard.js';
import {placeMarker, resetDisplay} from '/classic-games/tic-tac-toe/displayController.js';
import {resetMoveCount} from '/classic-games/tic-tac-toe/counter.js';

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

// sets key to correspond to index
function resetBoard() {
    let index = 0;
    let board = getBoard();
    for (let [key, value] of Object.entries(board)) {
        board[key] = index;
        index++;
    }
}

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

function resetBackground() {
    for (let square of getEventArray()) {
        square.classList.remove("blue-background");
    }
}

// remove all eventListeners
export function removeListener() {
    for (let square of getEventArray()) {
        square.removeEventListener("click", addClickEvents);
        square.removeEventListener("click", placeMarker);
    }
}

// add eventListeners
function addListeners() {
    for (let event of getEventArray()) {
        event.addEventListener('click', placeMarker, {once: true});
        event.addEventListener('click', addClickEvents, {once:true});
    };
}

// add hover if square doesn't have hover class
function addHover() {
    for (let event of getEventArray()) {
        if (event.classList.contains("hover")) {
            continue;
        } else {
            event.classList.add("hover");
        }
    };
}
