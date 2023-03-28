import { move2V1H, move2H1V } from "/classic-games/lazy-knight/LMove.js";

// sets duration of adding the markers and the animation movement of knight, this ensures the timing of the knight movement, adding marker, and removing marker are relative to each other
let duration = 500;

export function displaySteps(moves) {
    console.log(moves);
    for (let i = 0; i <= moves.length - 1; i++) {
        showMovement(moves[i + 1], i, moves.length); // i + 1 so it doesn't start with the starting location
        addMarker(moves[i], i, moves.length);
    }
    setTimeout(() => { // remove end marker right before the knight reaches the final move
        let endMarker = document.querySelector('.end-marker');
        endMarker.parentNode.removeChild(endMarker);
    }, duration * (moves.length - 1))
}

// sets a delay for each counter to appear on board
// adds start to the starting location
function addMarker(move, stepCount, totalNumMoves) {
    if (stepCount < totalNumMoves - 1) { // does not add step for final move
        setTimeout(() => {
            if (stepCount === 0) { // mark the start location as Start
                document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker('Start'));
                document.getElementById(move[0] + '' + move[1]).classList.add('marker-background');
            } else { // add step number on board
                document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker(stepCount));
                document.getElementById(move[0] + '' + move[1]).classList.add('marker-background');
            }
        }, stepCount * duration + stepCount * 20); // 20 is the delay need for ID/knight to update
    }
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
function showMovement(move, stepCount, totalNumMoves) {
    if (stepCount <= totalNumMoves - 2) { // minus 1 for index and minus 1 for iterating 1 move ahead since index 0 of moves is the starting location∂
        setTimeout(() => {
            moveAlgorithm(move);
        }, stepCount * (duration + 20)); // the 20 is the extra time needed for the ID
    }
}

// algorithm for determining which direction the knight will move to get to the next move
// takes in current location and location of next move to determine the next movement
function moveAlgorithm(move) {
    let currentId = document.querySelector('.knight').parentNode.id;
    let currentIdX = parseInt(currentId[0]); // convert to int
    let currentIdY = parseInt(currentId[1]); // convert to int
    // up 2, right 1
    if ((currentIdX + 1) == move[0] && (currentIdY + 2) == move[1]) {
        move2V1H('up', 'right', duration);
    }
    // up 2, left 1
    else if ((currentIdX - 1) == move[0] && (currentIdY + 2) == move[1]) {
        move2V1H('up', 'left', duration);
    }
    // down 2, right 1
    else if ((currentIdX + 1) == move[0] && (currentIdY - 2) == move[1]) {
        move2V1H('down', 'right', duration);
    }
    // down 2, left 1
    else if ((currentIdX - 1) == move[0] && (currentIdY - 2) == move[1]) {
        move2V1H('down', 'left', duration);
    }
    // left 2, up 1
    else if ((currentIdX - 2) == move[0] && (currentIdY + 1) == move[1]) {
        move2H1V('left', 'up', duration);
    }
    // left 2, down 1
    else if ((currentIdX - 2) == move[0] && (currentIdY - 1) == move[1]) {
        move2H1V('left', 'down', duration);
    }
    // right 2, up 1
    else if ((currentIdX + 2) == move[0] && (currentIdY + 1) == move[1]) {
        move2H1V('right', 'up', duration);
    }
    // right 2, down 1
    else if ((currentIdX + 2) == move[0] && (currentIdY - 1) == move[1]) {
        move2H1V('right', 'down', duration);
    }
}
