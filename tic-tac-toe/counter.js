let _moveCount = 0;

export function addCount() {
    _moveCount++;
    // console.log(_moveCount);
}

// alternate X and O
export function xOrO() {
    if (_moveCount % 2 == 0) {
        return "X";
    } else {
        return "O";
    }
}

export function tie() {
    if (_moveCount == 9) {
        return true;
    } else {
        return false;
    }
}

// returns which player won
export function winner() {
    if (_moveCount % 2 == 0) {
        return "player2Won";
    } else {
        return "player1Won";
    }
}

export function turn() {
    if (_moveCount % 2 == 0) {
        return "player1Turn";
    } else {
        return "player2Turn";
    }
}

export function resetMoveCount() {
    _moveCount = 0;
}



function zero() {
    if (_moveCount == 0) {
        return true;
    } else {
        return false;
    }
}
