export function gameBoard() {
    const board = {topLeft: "0", topMid: "1", topRight: "2", midLeft: "3", midMid: "4", midRight: "5", botLeft: "6", botMid: "7", botRight: "8"};

    const square0 = document.querySelector('.square0');
    const square1 = document.querySelector('.square1');
    const square2 = document.querySelector('.square2');
    const square3 = document.querySelector('.square3');
    const square4 = document.querySelector('.square4');
    const square5 = document.querySelector('.square5');
    const square6 = document.querySelector('.square6');
    const square7 = document.querySelector('.square7');
    const square8 = document.querySelector('.square8');
    const resetBtn = document.querySelector(".reset");
    const eventArray = [square0, square1, square2, square3, square4, square5, square6, square7, square8];

    // matches class name of UI to board and returns the key
    function _returnKey(className) {
        for (let [key, value] of Object.entries(board)) {
            if (value == className) {
                return key;
            }
        }
    }

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

    // when game is won, remove all game inputs
    function removeGameOver() {
        removeHover();
        removeListener();
        displayController.updateStatusWon();
    }

    // remove hover for all squares
    function removeHover() {
        for (let event of eventArray) {
            if (event.classList.contains("hover")) {
                event.classList.remove("hover");
            } else {
                continue;
            }
        };
    }

    // once clicked, remove hover, update board, and check for win
    function addClickEvents() {
        this.classList.remove('hover');
        _updateData(this.className[6]);
        counter.addCount();
        _checkWin();
    }

    // initializes event listeners
    for (let event of eventArray) {
        event.addEventListener('click', displayController.turn, {once: true});
        event.addEventListener('click', addClickEvents, {once:true});
    };
};
