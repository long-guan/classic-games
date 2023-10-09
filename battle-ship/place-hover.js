import {checkOutOfBoundHover, showInvalidHover, checkAgainstBoardHover} from './invalid-place-hover.js';
import {yAxisMode, shipCount} from './place-ship.js';

// shows place-hover effect
export function placeHover() {
    let hoverSquareId = this.id;
    if (yAxisMode == true) {
        if (shipCount == 5) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 4) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 3) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 2) {
            yAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Submarine (3)
        } else if (shipCount == 1) {
            yAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Destroyer (2)
        }
    } else { // yAxis == false
        if (shipCount == 5) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 4) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 3) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 2) {
            xAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Submarine (3)
        } else if (shipCount == 1) {
            xAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Destroyer (2)
        }
    }
}

// for y-axis
// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function yAddHoverEffect(hoverSquareId, shipCount) {
    if (checkOutOfBoundHover(hoverSquareId[0], shipCount)) { // checks if length will fit on board
        if (checkAgainstBoardHover(hoverSquareId, shipCount, yAxisMode)) { // check if any of the squares are already taken by placed ships
            for (let i = 1; i <= shipCount - 1; i++) {
                let newId = parseInt(hoverSquareId) + (i * 10);
                document.getElementById('' + newId).style.backgroundColor = 'gray';
                document.getElementById('' + hoverSquareId).addEventListener('mouseleave', yRemoveHover, {once: true}); // removes hover when mouse leaves the square
            }
        } else {
            showInvalidHover(hoverSquareId);
        }
    } else { // updates UI to show invalid placement: makes hover square red with not allowed cursor
        showInvalidHover(hoverSquareId);
    }
}

// add listener to remove place-hover effect when the mouse moves out of the square
export function yRemoveHover() {
    let revisedShipCount = shipCount;
    if (shipCount === 2 || shipCount === 1) {
        revisedShipCount += 1;
    };
    for (let i = 1; i <= revisedShipCount - 1; i++) {
        let newId = parseInt(this.id) + (i * 10);
        document.getElementById('' + newId).style.backgroundColor = '';
    }
}

// for x-axis
// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function xAddHoverEffect(hoverSquareId, shipCount) {
    if (checkOutOfBoundHover(hoverSquareId[1], shipCount)) { // check if ship is not out of bounds
        if (checkAgainstBoardHover(hoverSquareId, shipCount, yAxisMode)) { // check if any of the squares are already taken by placed ships
            for (let i = 1; i <= shipCount - 1; i++) {
                let newId = parseInt(hoverSquareId) + (i * 1);
                if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
                    newId = '0' + newId;
                }
                document.getElementById('' + newId).style.backgroundColor = 'gray';
                document.getElementById('' + hoverSquareId).addEventListener('mouseleave', xRemoveHover, {once: true}); // removes hover when mouse leaves the square
            }
        } else {
            showInvalidHover(hoverSquareId);
        }
    } else { // updates UI to show invalid placement: makes hover square red with not allowed cursor
        showInvalidHover(hoverSquareId);
    };
}

// add listener to remove place-hover effect when the mouse moves out of the square
export function xRemoveHover() {
    let revisedShipCount = shipCount;
    if (shipCount === 2 || shipCount === 1) {
        revisedShipCount += 1;
    };
    for (let i = 1; i <= revisedShipCount - 1; i++) {
        let newId = parseInt(this.id) + (i * 1);
        if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
            newId = '0' + newId;
        }
        document.getElementById('' + newId).style.backgroundColor = '';
    }
}
