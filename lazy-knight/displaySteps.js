let squares = document.querySelectorAll('.board-cont>div');

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
        document.querySelector('.knight').style.position = 'relative';
        document.querySelector('.knight').animate(moveKnight('right'), 500);
    // }, stepCount * 600);
}

// calculates pixels of each individual move
// moves Knight in the given direction
function moveKnight(direction) {
    let height = (document.querySelector('.board-cont').offsetHeight) - 3;
    let width = (document.querySelector('.board-cont').offsetWidth) - 3;
    let verticalDist = height / 8; // calculates distance to go vertically to get to center of square
    let horizontalDist = width / 8; // calculates distance to go horizontally to get to center of square
    if (direction == "up") {
        return [{transform: `translate(0,-${verticalDist}px)`}];
    } else if (direction == 'bottom') {
        return [{transform: `translate(0,${verticalDist}px)`}];
    } else if (direction == 'left') {
        return [{transform: `translate(-${horizontalDist}px)`}];
    } else { // right
        return [{transform: `translate(${horizontalDist}px)`}];
    }
}
