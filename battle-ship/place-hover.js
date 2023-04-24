import {checkValidHover, showInvalidHover} from '/classic-games/battle-ship/invalid-place-hover.js';
import {yAxisMode, shipCount} from '/classic-games/battle-ship/place-ship.js';

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
    if (checkValidHover(hoverSquareId[0], shipCount)) { // checks if length will fit on board
        for (let i = 1; i <= shipCount - 1; i++) {
            let newId = parseInt(hoverSquareId) + (i * 10);
            document.getElementById('' + newId).style.backgroundColor = 'gray';
            // yRemoveHover(hoverSquareId, shipCount); // remove hover when leaving square
            document.getElementById('' + hoverSquareId).addEventListener('mouseleave', yRemoveHover); // removes hover when mouse leaves the square
        }
    } else { // updates UI to show invalid placement: makes hover square red with not allowed cursor
        showInvalidHover(hoverSquareId);
    }
}

// add listener to remove place-hover effect when the mouse moves out of the square
export function yRemoveHover() {
    for (let i = 1; i <= shipCount - 1; i++) {
        let newId = parseInt(this.id) + (i * 10);
        document.getElementById('' + newId).style.backgroundColor = '';
    }
}

// for x-axis
// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function xAddHoverEffect(hoverSquareId, shipCount) {
    if (checkValidHover(hoverSquareId[1], shipCount)) { // check if length will fit
        for (let i = 1; i <= shipCount - 1; i++) {
            let newId = parseInt(hoverSquareId) + (i * 1);
            if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
                newId = '0' + newId;
            }
            document.getElementById('' + newId).style.backgroundColor = 'gray';
            document.getElementById('' + hoverSquareId).addEventListener('mouseleave', xRemoveHover);
        }
    } else { // updates UI to show invalid placement: makes hover square red with not allowed cursor
        showInvalidHover(hoverSquareId);
    };
}

// add listener to remove place-hover effect when the mouse moves out of the square
export function xRemoveHover() {
    for (let i = 1; i <= shipCount - 1; i++) {
        let newId = parseInt(this.id) + (i * 1);
        if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
            newId = '0' + newId;
        }
        document.getElementById('' + newId).style.backgroundColor = '';
    }
}
