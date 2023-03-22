let startBtnStatus = false;


// add event listeners to all squares
let squares = document.querySelectorAll('.board-cont>div');
for (let square of squares) {
    square.addEventListener('click', addKnight);
}

// updates status of startBtnStatus and updates interface for Select Start btn
export function selectStart() {
    btnStatus(this);
}

// if startBtnStatus is true, add knight to the selected square
function addKnight() {
    if (startBtnStatus === true) {
        removeExKnight();
        this.appendChild(createKnightImg());
    }
}

// removes any existing knights on board
function removeExKnight() {
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
