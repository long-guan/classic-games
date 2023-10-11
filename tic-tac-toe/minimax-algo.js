export function minmax(board, nextMoves, moveCount) {
    // base case
    let points = checkArrWin(board, moveCount);
    console.log("points: ", points);
    console.log(board);
    console.log("nextMoves: ", nextMoves);
    console.log("moveCount: ", moveCount);
    if (points !== null) {
        return [board, nextMoves, moveCount, points];
    } else {
        for (let i = 0; i <= 8; i++) {
            // check if square is empty
            console.log("i: ", i);
            let copyBoard = [...board]; // make a copy so array is not referenced
            let copyNextMoves = [...nextMoves]; // make a copy so array is not referenced
            if (copyBoard[i] === null) {
                // odd moveCount means X (player 1)
                if (moveCount % 2 === 1) {
                    copyBoard[i] = "O";
                    moveCount++;
                    copyNextMoves.push({"X": i});
                    minmax(copyBoard, copyNextMoves, moveCount);
                }
                // even moveCount means O (computer)
                else {
                    copyBoard[i] = "X";
                    moveCount++;
                    copyNextMoves.push({"O": i});
                    minmax(copyBoard, copyNextMoves, moveCount);
                }
            }
        }
    }
}

// convert to array and returns moveCount
function convertDict2Arr(dictBoard) {
    let arrBoard = [];
    let moveCount = 0;
    for (const [key, value] of Object.entries(dictBoard)) {
        if (value === "X" || value === "O") {
            arrBoard.push(value);
            moveCount++;
        } else {
            arrBoard.push(null);
        }
    }
    return [arrBoard, moveCount];
}

export function getNextMove(dictBoard) {
    let result = convertDict2Arr(dictBoard);
    let arrBoard = result[0];
    console.log("arrBoard: ", arrBoard);
    let moveCount = result[1];
    // console.log("moveCount: ", moveCount);
    let nextMoves = minmax(arrBoard, [], moveCount);
    console.log("nextMoves: ", nextMoves);
}

// checks board array for win or tie
function checkArrWin(board, moveCount) {
    let topLeft = board[0];
    let topMid = board[1];
    let topRight = board[2];
    let midLeft = board[3];
    let midMid = board[4];
    let midRight = board[5];
    let botLeft = board[6];
    let botMid = board[7];
    let botRight = board[8];
    if (topLeft == topMid && topLeft == topRight && topLeft !== null) {
        return returnScore(topLeft);
    } else if (midLeft == midMid && midLeft == midRight && midLeft !== null) {
        return returnScore(midLeft);
    } else if (botLeft == botMid && botLeft == botRight && botLeft !== null) {
        return returnScore(botLeft);
    } else if (topMid == midMid && topMid == botMid && topMid !== null) {
        return returnScore(topMid);
    } else if (topRight == midRight && topRight == botRight && topRight !== null) {
        return returnScore(topRight);
    } else if (topLeft == midLeft && topLeft == botLeft && topLeft !== null) {
        return returnScore(topLeft);
    } else if (topLeft == midMid && topLeft == botRight && topLeft !== null) {
        return returnScore(topLeft);
    } else if (topRight == midMid && topRight == botLeft && topRight !== null) {
        return returnScore(topRight);
    } else if (moveCount === 9) {
        return 0;
    } else {
        return null;
    }
}

function returnScore(xOrO) {
    if (xOrO === "X") {
        return 10;
    } else {
        return -10;
    }
}
