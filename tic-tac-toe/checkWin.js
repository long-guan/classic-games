 // checks for 3 in a row
 function _checkWin() {
    let topLeft = board.topLeft;
    let topMid = board.topMid;
    let topRight = board.topRight;
    let midLeft = board.midLeft;
    let midMid = board.midMid;
    let midRight = board.midRight;
    let botLeft = board.botLeft;
    let botMid = board.botMid;
    let botRight = board.botRight;
    // horizontal wins
    if (topLeft == board.topMid && topLeft == topRight) {
        square0.classList.add("blue-background");
        square1.classList.add("blue-background");
        square2.classList.add("blue-background");
        removeGameOver();
    } else if (midLeft == midMid && midLeft == midRight) {
        square3.classList.add("blue-background");
        square4.classList.add("blue-background");
        square5.classList.add("blue-background");
        removeGameOver();
    } else if (botLeft == botMid && botLeft == botRight) {
        square6.classList.add("blue-background");
        square7.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    // vertical wins
    } else if (topMid == midMid && topMid == botMid) {
        square0.classList.add("blue-background");
        square3.classList.add("blue-background");
        square6.classList.add("blue-background");
        removeGameOver();
    } else if (topRight == midRight && topRight == botRight) {
        square1.classList.add("blue-background");
        square4.classList.add("blue-background");
        square7.classList.add("blue-background");
        removeGameOver();
    }  else if (topLeft == midLeft && topLeft == botLeft) {
        square2.classList.add("blue-background");
        square5.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    // diagonal wins
    } else if (topLeft == midMid && topLeft == botRight) {
        square0.classList.add("blue-background");
        square4.classList.add("blue-background");
        square8.classList.add("blue-background");
        removeGameOver();
    } else if (topRight == midMid && topRight == botLeft) {
        square2.classList.add("blue-background");
        square4.classList.add("blue-background");
        square6.classList.add("blue-background");
        removeGameOver();
    } else if (counter.tie() == true) {
        displayController.updateStatusTie();
    } else {
        displayController.updateStatusTurn();
    }
}
