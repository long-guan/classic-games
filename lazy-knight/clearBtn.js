

let squares = document.querySelectorAll('.board-cont>div');


// clears out every square on board

export function clear() {
    clearBoard();
}


// clears out every square on board
function clearBoard() {
    for (let square of squares) {
        if (square.hasChildNodes()) {
            square.innerHTML = '';
        }
    }
}
