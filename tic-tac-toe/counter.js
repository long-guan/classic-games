export function counter() {
    let _moveCount = 0;

    function addCount() {
        _moveCount++;
        console.log(_moveCount);
    }

    // alternate X and O
    function xOrO() {
        if (_moveCount % 2 == 0) {
            return "X";
        } else {
            return "O";
        }
    }

    // returns which player won
    function winner() {
        if (_moveCount % 2 == 0) {
            return "player2Won";
        } else {
            return "player1Won";
        }
    }

    function turn() {
        if (_moveCount % 2 == 0) {
            return "player1Turn";
        } else {
            return "player2Turn";
        }
    }

    function reset() {
        _moveCount = 0;
    }

    function tie() {
        if (_moveCount == 9) {
            return true;
        } else {
            return false;
        }
    }

    function zero() {
        if (_moveCount == 0) {
            return true;
        } else {
            return false;
        }
    }
};
