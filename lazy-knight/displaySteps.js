import { move2V1H, move2H1V } from "/classic-games/lazy-knight/LMove.js";

export function displaySteps(moves) {
    console.log(moves);
    let stepCount = 0;

    for (let move of moves) {
        showMovement(move, stepCount);
        addMarker(move, stepCount);
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
    if (stepCount == 0) { // first move is the starting location
         // do nothing
    } else {
        setTimeout(() => {
            console.log(move);
            moveAlgorithm(move);
        }, stepCount * 1050); // need extra time for the ID/knight to update compared to the totalDuration set for moving in an L
    }
}

// algorithm for determining which direction the knight will move to get to the next move
// takes in current location and location of next move to determine the next movement
function moveAlgorithm(move) {
    let currentId = document.querySelector('.knight').parentNode.id;
    console.log(currentId);
    console.log(parseInt(currentId) + 12);
    let duration = 1000;
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
        console.log('down2right1');
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
