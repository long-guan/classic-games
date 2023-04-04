let _moveCount = 0;

export function addCount() {
    _moveCount++;
    // console.log(_moveCount);
}

// uses odd or even counter to alternatively return X or O
export function xOrO() {
    if (_moveCount % 2 == 0) {
        return "X";
    } else {
        return "O";
    }
}

// after checkWin will check all possible winning combinations and the board is full, return true
export function tie() {
    if (_moveCount == 9) {
        return true;
    } else {
        return false;
    }
}

// returns which player won using odd or even counter
export function winner() {
    if (_moveCount % 2 == 0) {
        return "player2Won";
    } else {
        return "player1Won";
    }
}

// returns which player's turn using odd or even counter
export function turn() {
    if (_moveCount % 2 == 0) {
        return "player1Turn";
    } else {
        return "player2Turn";
    }
}

// reset odd or even counter to 0
export function resetMoveCount() {
    _moveCount = 0;
}
