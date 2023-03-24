let squares = document.querySelectorAll('.board-cont>div');

export function displaySteps(moves) {
    console.log(moves);
    let stepCount = 0;
    for (let move of moves) {
        addMarker(move, stepCount);
        stepCount++;
        console.log(stepCount);
    }
}

function addMarker(move, stepCount) {
    setTimeout(() => {
        if (stepCount === 0) {
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker('Start'));
        } else {
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker(stepCount));
        }
    }, stepCount * 750);
}

// return a div marker for the board
function createStepMarker(markerText) {
    let div = document.createElement('div');
    div.classList.add('step-marker');
    div.innerHTML = markerText;
    return div;
}
