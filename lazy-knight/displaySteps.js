let squares = document.querySelectorAll('.board-cont>div');

export function displaySteps(moves) {
    console.log(moves);
    let stepCount = 0;
    for (let move of moves) {
        if (stepCount === 0) {
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker('Start'));
            stepCount++;
        } else {
            document.getElementById(move[0] + '' + move[1]).appendChild(createStepMarker(stepCount));
            stepCount++;
        }
    }
}

function createStepMarker(markerText) {
    let div = document.createElement('div');
    div.classList.add('step-marker');
    div.innerHTML = markerText;
    return div;
}
