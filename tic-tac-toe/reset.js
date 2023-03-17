const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

   // sets key to correspond to index
   function resetBoard() {
    let index = 0;
    for (let [key, value] of Object.entries(board)) {
        board[key] = index;
        index++;
    }
}

// reset everything and readd eventListeners
function reset() {
    resetBoard();
    displayController.resetDisplay();
    removeListener();
    addListeners();
    addHover();
    counter.reset();
    resetBackground();
}

function resetBackground() {
    for (let square of eventArray) {
        square.classList.remove("blue-background");
    }
}

// updates board after a move
function _updateData(className) {
    board[_returnKey(className)] = counter.xOrO();
}


// remove all eventListeners
function removeListener() {
    for (let square of eventArray) {
        square.removeEventListener("click", addClickEvents);
        square.removeEventListener("click", displayController.turn);
    }
}

// add eventListeners
function addListeners() {
    for (let event of eventArray) {
        event.addEventListener('click', displayController.turn, {once: true});
        event.addEventListener('click', addClickEvents, {once:true});
    };
}

// add hover if square doesn't have hover class
function addHover() {
    for (let event of eventArray) {
        if (event.classList.contains("hover")) {
            continue;
        } else {
            event.classList.add("hover");
        }
    };
}
