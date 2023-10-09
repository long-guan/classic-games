import {removeSelectStyling} from './selectBtn.js';

let squares = document.querySelectorAll('.board-cont>div');

export function clear() {
    clearBoard(); // clears every square on board
    removeSelectStyling(); // removes styling for select btns and turns the status to false
}

// clears every square on board
function clearBoard() {
    for (let square of squares) {
        if (square.hasChildNodes()) {
            square.innerHTML = '';
        }
        square.classList.remove('marker-background'); // removes background color change
    }
}
