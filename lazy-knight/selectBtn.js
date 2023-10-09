let startBtnStatus = false; // true when Select Start btn is selected
let endBtnStatus = false; // true when Select End btn is selected

let selectStartBtn = document.querySelector('.start');
let selectEndBtn = document.querySelector('.end');

// add event listeners to all squares
let squares = document.querySelectorAll('.board-cont>div');
for (let square of squares) {
    square.addEventListener('click', addMarker);
}

// updates status of startBtnStatus and updates interface for Select Start btn
export function selectStart() {
    btnStatus(this);
}

// updates status of endBtnStatus and updates interface for Select End btn
export function selectEnd() {
    btnStatus(this)
}

// add bolder and larger font and change background color of btn to show selection
// updates Select Start and Select End button status to true or false
function btnStatus(btn) {
    if (btn.classList.contains('selected')) { // remove styling
        btn.classList.remove('selected');
        startBtnStatus = false;
        endBtnStatus = false;
    } else { // add styling
        clearBoard();
        btn.classList.add('selected');
        if (btn.classList.contains('start')) {
            startBtnStatus = true;
            selectEndBtn.classList.remove('selected');
            endBtnStatus = false;
        } else if (btn.classList.contains('end')) {
            endBtnStatus = true;
            selectStartBtn.classList.remove('selected');
            startBtnStatus = false;
        }
    }
}

// clears the board of everything except for the knight marker and end marker
function clearBoard() {
    for (let square of squares) {
        if (square.hasChildNodes()) {
            if (square.classList.contains('marker-background')) {
                square.classList.remove('marker-background');
                square.innerHTML = '';
            };
        }
        square.classList.remove('marker-background'); // removes background color change
    }
}

// if status is true, add markers to the selected square
function addMarker() {
    if (this.hasChildNodes() === false) { // prevents markers being added to squares with markers already
        if (startBtnStatus === true) {
            removeExMarkers();
            this.appendChild(createImg('../image/chess-knight.svg', 'knight'));
        } else if (endBtnStatus === true) {
            removeExMarkers();
            this.appendChild(createImg('../image/map-marker.svg', 'end-marker'))
        }
    }
}

// removes any existing marker on board for new selection
function removeExMarkers() {
    for (let square of squares) {
        if (square.hasChildNodes()) { // check if it has child nodes
            if (startBtnStatus === true) { // remove knight marker
                if (square.firstChild.classList.contains('knight')) {
                    square.innerHTML = '';
                }
            } else if (endBtnStatus === true) { // remove end marker
                if (square.firstChild.classList.contains('end-marker')) {
                    square.innerHTML = '';
                }
            }
        }
    }
}

// creates image with given source and class
export function createImg(src, classList) {
    let img = document.createElement("img");
    img.src = src;
    img.classList.add(classList);
    return img;
}

export function removeSelectStyling() {
    startBtnStatus = false;
    selectStartBtn.classList.remove('selected');
    endBtnStatus = false;
    selectEndBtn.classList.remove('selected');
}
