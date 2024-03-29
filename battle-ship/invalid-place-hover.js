import {player1Board} from './gameboard.js';

// returns true if the length of the ship will fit on board
export function checkOutOfBoundHover(coord, shipCount) {
    if (parseInt(coord) + (shipCount - 1) > 9) { // check for out of bounds. shipCount - 1 since hover square is length 1, only need to add remaining length
        return false;
    } else {
        return true;
    }
}

// check if any of the squares are already taken by placed ships
// return true if there are ships in the area already
export function checkAgainstBoardHover(hoverSquareId, shipCount, yAxisMode) {
    if (yAxisMode === true) {
        for (let i = 0; i <= shipCount - 1; i++) {
            let squareId = String(parseInt(hoverSquareId) + (i * 10));
            if (squareId.length <= 1) {
                squareId = '0' + squareId;
            };
            if (player1Board.position[squareId[0]][squareId[1]] !== null) {
                return false;
            };
        }
    } else { // yAxisMode = false for x axis
        for (let i = 0; i <= shipCount - 1; i++) {
            let squareId = String(parseInt(hoverSquareId) + (i * 1));
            if (squareId.length <= 1) {
                squareId = '0' + squareId;
            };
            if (player1Board.position[squareId[0]][squareId[1]] !== null) {
                return false;
            };
        }
    }
    return true;
}

// show invalid ship placement: updates background color to red and adds not allowed cursor
export function showInvalidHover(hoverSquareId) {
    let hoverSquare = document.getElementById(`${hoverSquareId}`);
    hoverSquare.style.backgroundColor = 'red';
    hoverSquare.style.cursor = 'not-allowed';
    hoverSquare.addEventListener('mouseleave', removeInvalidHover);
}

// remove invalid hover styling
export function removeInvalidHover() {
    this.style.backgroundColor = '';
    this.style.cursor = '';
}
