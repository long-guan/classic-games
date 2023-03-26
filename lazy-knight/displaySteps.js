import { move2V1H, move2H1V } from "/classic-games/lazy-knight/LMove.js";

export function displaySteps(moves) {
    console.log(moves);
    let stepCount = 0;
    showMovement(moves, stepCount);
    for (let move of moves) {
        // addMarker(move, stepCount);
        stepCount++;
    }
}

// sets a delay for each counter to appear on board
function addMarker(move, stepCount) {
    setTimeout(() => {
        if (stepCount === 0) { // mark the start location as Start
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker('Start'));
        } else { // add step number on board
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker(stepCount));
        }
    }, stepCount * 600);
}

// return a div marker for the board
function createStepMarker(markerText) {
    let div = document.createElement('div');
    div.classList.add('step-marker');
    div.innerHTML = markerText;
    return div;
}

// finds height of the game-cont container (board)
// moves knight move by move to each coordinate
function showMovement(move, stepCount) {
    // setTimeout(() => {
        // document.querySelector('.knight').animate(moveTwoSpaces('up'), 500);
    // }, stepCount * 600);
    move2V1H('down', 'right', 500);
    move2H1V('right', 'down', 500);
}
