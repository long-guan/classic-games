import { move2V1H, move2H1V } from "/classic-games/lazy-knight/LMove.js";

export function displaySteps(moves) {
    console.log(moves);
    let stepCount = 0;

    for (let move of moves) {
        showMovement(move, stepCount);
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
    }, stepCount * 1000);
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
    let currentCoord = document.querySelector('.knight').parentNode.id;
    console.log(currentCoord);
    setTimeout(() => {
        move2V1H('down', 'right', 1000);
    }, stepCount * 1000);
}
