let endBtnStatus = false;

// add event listeners to all squares
let squares = document.querySelectorAll('.board-cont>div');
for (let square of squares) {
    square.addEventListener('click', addEnd);
}

// updates status of startBtnStatus and updates interface for Select Start btn
export function selectEnd() {
    btnStatus(this);
}

// if startBtnStatus is true, add end marker to the selected square
function addEnd() {
    if (endBtnStatus === true) {
        removeExEnd();
        this.appendChild(createKnightImg());
    }
}

// removes any existing knights on board
function removeExEnd() {
    for (let square of squares) {
        if (square.hasChildNodes()) {
            square.innerHTML = '';
        }
    }
}

// returns knight SVG element
function createKnightImg() {
    let img = document.createElement("img");
    img.src = '/classic-games/image/chess-knight.svg';
    img.classList.add('knight');
    return img;
}

// add bolder and larger font and change background color of btn to show selection
// updates startBtnStatus to true or false
function btnStatus(btn) {
    // console.log(btn);
    if (btn.classList.contains('selected')) {
        btn.classList.remove('selected');
        if (btn.classList.contains('start')) {
            startBtnStatus = false;
        }
    } else {
        btn.classList.add('selected');
        if (btn.classList.contains('start')) {
            startBtnStatus = true;
        }
    }
}
