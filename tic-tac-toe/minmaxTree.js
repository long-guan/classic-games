let tree = {
    root: {

    }
};

export function getNextMove(dictBoard) {
    let result = convertDict2Arr(dictBoard); // convert dict board to arr
    let arrBoard = result[0];
    let points = checkArrWin(arrBoard);
    console.log("arrBoard: ", arrBoard);
    let moveCount = result[1];     // moveCount is used to determine if it is a tie
    tree.root = new Position(arrBoard, points, {}, moveCount);     // sets the root of tree
    buildMinmaxTree(arrBoard, [], moveCount); // build the tree and set the points of each node
    console.log(tree);
    let nextMove = traverseTreeLoop();
    console.log("next move: ", nextMove);
    return nextMove;
}

// this minimax algorithm works by giving a score to each empty spot
// 1. put O on each empty spot and get score for each spot
// 2. if there is score for each empty spot, then evaluate for the highest score and that's the next move
// 3. if not all spot has score, then evaluate scores for the spots without score
// 4. To evaluate score for the spots without score, put O down for the spot without score
// and put X down for each empty spot and get score.
// 5. if there is score for each empty spot for X, then return the smallest score and that is the score
// for the O spot
// 6. repeat steps 1-5 if spots still do not have a score
function traverseTreeLoop(startBoard=tree.root) {
    let scoreArr1 = [];
    if (startBoard.stats.moveCount === 7) { // O, X
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        if (nextBoard2 !== null) {
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            }
                        }
                    }
                }
            }
            if (scoreArr2.length > 0) {
                scoreArr1.push([loop1, checkLow(scoreArr2)]);
            }
        }
    } else if (startBoard.stats.moveCount === 5) { // O, X, O, X
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        let scoreArr3 = [];
                        if (nextBoard2 !== null) {
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            } else {
                                for (let loop3 = 0; loop3 <= 8; loop3++) { // next O
                                    let nextBoard3 = nextBoard2['nextBoard' + loop3];
                                    let scoreArr4 = [];
                                    if (nextBoard3 !== null) {
                                        if (nextBoard3.stats.points !== null) {
                                            scoreArr3.push([loop2, nextBoard3.stats.points])
                                        } else {
                                            for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                                                let nextBoard4 = nextBoard3['nextBoard' + loop4];
                                                if (nextBoard4 !== null) {
                                                    if (nextBoard4.stats.points !== null) {
                                                        scoreArr4.push([loop3, nextBoard4.stats.points])
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (scoreArr4.length > 0) {
                                        scoreArr3.push([loop3, checkLow(scoreArr4)])
                                    }
                                }
                            }
                        }
                        if (scoreArr3.length > 0) {
                            scoreArr2.push([loop2, checkHigh(scoreArr3)]);
                        }
                    }
                }
            }
            if (scoreArr2.length > 0) {
                scoreArr1.push([loop1, checkLow(scoreArr2)]);
            }
        }
    } else if (startBoard.stats.moveCount === 3) { // O, X, O, X, O, X
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        let scoreArr3 = [];
                        if (nextBoard2 !== null) {
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            } else {
                                for (let loop3 = 0; loop3 <= 8; loop3++) { // next O
                                    let nextBoard3 = nextBoard2['nextBoard' + loop3];
                                    let scoreArr4 = [];
                                    if (nextBoard3 !== null) {
                                        if (nextBoard3.stats.points !== null) {
                                            scoreArr3.push([loop2, nextBoard3.stats.points])
                                        } else {
                                            for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                                                let nextBoard4 = nextBoard3['nextBoard' + loop4];
                                                let scoreArr5 = [];
                                                if (nextBoard4 !== null) {
                                                    if (nextBoard4.stats.points !== null) {
                                                        scoreArr4.push([loop3, nextBoard4.stats.points])
                                                    } else {
                                                        for (let loop5 = 0; loop5 <= 8; loop5++) { // next O
                                                            let nextBoard5 = nextBoard4['nextBoard' + loop5];
                                                            let scoreArr6 = [];
                                                            if (nextBoard5 !== null) {
                                                                if (nextBoard5.stats.points !== null) {
                                                                    scoreArr5.push([loop4, nextBoard5.stats.points])
                                                                } else {
                                                                    for (let loop6 = 0; loop6 <= 8; loop6++) { // next X
                                                                        let nextBoard6 = nextBoard5['nextBoard' + loop6];
                                                                        if (nextBoard6 !== null) {
                                                                            if (nextBoard6.stats.points !== null) {
                                                                                scoreArr6.push([loop5, nextBoard6.stats.points])
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            if (scoreArr6.length > 0) {
                                                                scoreArr5.push([loop5, checkLow(scoreArr6)]);
                                                            }
                                                        }
                                                    }
                                                }
                                                if (scoreArr5.length > 0) {
                                                    scoreArr4.push([loop4, checkHigh(scoreArr5)]);
                                                }
                                            }
                                        }
                                    }
                                    if (scoreArr4.length > 0) {
                                        scoreArr3.push([loop3, checkLow(scoreArr4)]);
                                    }
                                }
                            }
                        }
                        if (scoreArr3.length > 0) {
                            scoreArr2.push([loop2, checkHigh(scoreArr3)]);
                        }
                    }
                }
            }
            if (scoreArr2.length > 0) {
                scoreArr1.push([loop1, checkLow(scoreArr2)]);
            }
        }
    } else if (startBoard.stats.moveCount === 1) { // O, X, O, X, O, X, O, X
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        let scoreArr3 = [];
                        if (nextBoard2 !== null) {
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            } else {
                                for (let loop3 = 0; loop3 <= 8; loop3++) { // next O
                                    let nextBoard3 = nextBoard2['nextBoard' + loop3];
                                    let scoreArr4 = [];
                                    if (nextBoard3 !== null) {
                                        if (nextBoard3.stats.points !== null) {
                                            scoreArr3.push([loop2, nextBoard3.stats.points])
                                        } else {
                                            for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                                                let nextBoard4 = nextBoard3['nextBoard' + loop4];
                                                let scoreArr5 = [];
                                                if (nextBoard4 !== null) {
                                                    if (nextBoard4.stats.points !== null) {
                                                        scoreArr4.push([loop3, nextBoard4.stats.points])
                                                    } else {
                                                        for (let loop5 = 0; loop5 <= 8; loop5++) { // next O
                                                            let nextBoard5 = nextBoard4['nextBoard' + loop5];
                                                            let scoreArr6 = [];
                                                            if (nextBoard5 !== null) {
                                                                if (nextBoard5.stats.points !== null) {
                                                                    scoreArr5.push([loop4, nextBoard5.stats.points])
                                                                } else {
                                                                    for (let loop6 = 0; loop6 <= 8; loop6++) { // next X
                                                                        let nextBoard6 = nextBoard5['nextBoard' + loop6];
                                                                        let scoreArr7 = [];
                                                                        if (nextBoard6 !== null) {
                                                                            if (nextBoard6.stats.points !== null) {
                                                                                scoreArr6.push([loop5, nextBoard6.stats.points])
                                                                            } else {
                                                                                for (let loop7 = 0; loop7 <= 8; loop7++) { // next O
                                                                                    let nextBoard7 = nextBoard6['nextBoard' + loop7];
                                                                                    let scoreArr8 = [];
                                                                                    if (nextBoard7 !== null) {
                                                                                        if (nextBoard7.stats.points !== null) {
                                                                                            scoreArr7.push([loop6, nextBoard7.stats.points])
                                                                                        } else {
                                                                                            for (let loop8 = 0; loop8 <= 8; loop8++) { // next X
                                                                                                let nextBoard8 = nextBoard7['nextBoard' + loop8];
                                                                                                if (nextBoard8 !== null) {
                                                                                                    if (nextBoard8.stats.points !== null) {
                                                                                                        scoreArr8.push([loop7, nextBoard8.stats.points])
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                    if (scoreArr8.length > 0) {
                                                                                        scoreArr7.push([loop7, checkLow(scoreArr8)]);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                        if (scoreArr7.length > 0) {
                                                                            scoreArr6.push([loop6, checkHigh(scoreArr7)]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            if (scoreArr6.length > 0) {
                                                                scoreArr5.push([loop5, checkLow(scoreArr6)]);
                                                            }
                                                        }
                                                    }
                                                }
                                                if (scoreArr5.length > 0) {
                                                    scoreArr4.push([loop4, checkHigh(scoreArr5)]);
                                                }
                                            }
                                        }
                                    }
                                    if (scoreArr4.length > 0) {
                                        scoreArr3.push([loop3, checkLow(scoreArr4)]);
                                    }
                                }
                            }
                        }
                        if (scoreArr3.length > 0) {
                            scoreArr2.push([loop2, checkHigh(scoreArr3)]);
                        }
                    }
                }
            }
            if (scoreArr2.length > 0) {
                scoreArr1.push([loop1, checkLow(scoreArr2)]);
            }
        }
    }
    console.log(scoreArr1);
    return returnNextMove(scoreArr1);
}

// chooses the highest score for computer
function checkHigh(scoreArr) {
    // console.log("checkHigh:", scoreArr);
    let highestScore = -1000;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] >= highestScore) {
            highestScore = scoreArr[i][1];
        }
    }
    // console.log("checkHigh return: ", highestScore);
    return highestScore;
}

// chooses the lowest score for human
function checkLow(scoreArr) {
    // console.log("checkLow:", scoreArr);
    let lowestScore = 1000;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] <= lowestScore) {
            lowestScore = scoreArr[i][1];
        }
    }
    // console.log("checkLow return: ", lowestScore);
    return lowestScore;
}

// returns the move for the computer that yields the highest score
function returnNextMove(scoreArr) {
    let nextMove = []; // saves all the moves with the same highest score
    let highestScore = 0;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] > highestScore) {
            nextMove = []; // empty out the array if a new highest score is found
            nextMove.push(scoreArr[i][0]);
            highestScore = scoreArr[i][1];
        } else if (scoreArr[i][1] === highestScore) {
            nextMove.push(scoreArr[i][0]);
        }
    }
    if (nextMove.length === 1) { // if only one option, return that option
        return nextMove[0];
    } else { // randomize the moves with the same score and return
        return nextMove[getRandomInt(0, nextMove.length)];
    }
}

// get random number to randomized the moves with the same score
// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function Position(board, points, nextMoves, moveCount) {
    this.stats = {
        "board": board,
        "points": points,
        "nextMoves": nextMoves,
        "moveCount": moveCount
    },
    this.nextBoard0 = null,
    this.nextBoard1 = null,
    this.nextBoard2 = null,
    this.nextBoard3 = null,
    this.nextBoard4 = null,
    this.nextBoard5 = null,
    this.nextBoard6 = null,
    this.nextBoard7 = null,
    this.nextBoard8 = null
}

// builds the tree with every end case
function buildMinmaxTree(board, nextMoves, moveCount, pointer=tree.root) {
    let points = checkArrWin(board, moveCount);
    // no points mean the game has not ended, so continue plotting the next moves
    if (points === null) {
        for (let i = 0; i <= 8; i++) {
            // check if square is empty
            let copyBoard = [...board]; // make a copy so array is not referenced
            let copyNextMoves = [...nextMoves]; // make a copy so array is not referenced
            let unrefMoveCount = moveCount;
            if (copyBoard[i] === null) {
                // odd moveCount means O (computer)
                if (unrefMoveCount % 2 === 1) {
                    copyBoard[i] = "O";
                    unrefMoveCount++;
                    copyNextMoves.push({"O": i});
                    let points = checkArrWin(copyBoard, unrefMoveCount)
                    let nextBoard = new Position(copyBoard, points, copyNextMoves, unrefMoveCount);
                    pointer['nextBoard' + i] = nextBoard;
                    let nextPointer = pointer['nextBoard' + i];
                    buildMinmaxTree(copyBoard, copyNextMoves, unrefMoveCount, nextPointer);
                }
                // even moveCount means X (human)
                else {
                    copyBoard[i] = "X";
                    unrefMoveCount++;
                    copyNextMoves.push({"X": i});
                    let points = checkArrWin(copyBoard, unrefMoveCount)
                    let nextBoard = new Position(copyBoard, points, copyNextMoves, unrefMoveCount);
                    pointer['nextBoard' + i] = nextBoard;
                    let nextPointer = pointer['nextBoard' + i];
                    buildMinmaxTree(copyBoard, copyNextMoves, unrefMoveCount, nextPointer);
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
    // horizontal wins
    if (topLeft == topMid && topLeft == topRight && topLeft !== null) {
        return returnScore(topLeft, moveCount);
    } else if (midLeft == midMid && midLeft == midRight && midLeft !== null) {
        return returnScore(midLeft, moveCount);
    } else if (botLeft == botMid && botLeft == botRight && botLeft !== null) {
        return returnScore(botLeft, moveCount);
    // vertical wins
    } else if (topMid == midMid && topMid == botMid && topMid !== null) {
        return returnScore(topMid, moveCount);
    } else if (topRight == midRight && topRight == botRight && topRight !== null) {
        return returnScore(topRight, moveCount);
    } else if (topLeft == midLeft && topLeft == botLeft && topLeft !== null) {
        return returnScore(topLeft, moveCount);
    // diagnoal wins
    } else if (topLeft == midMid && topLeft == botRight && topLeft !== null) {
        return returnScore(topLeft, moveCount);
    } else if (topRight == midMid && topRight == botLeft && topRight !== null) {
        return returnScore(topRight, moveCount);
    } else if (moveCount === 9) {
        return 0;
    } else {
        return null;
    }
}

// 10 means computer won and -10 means player won
function returnScore(xOrO, moveCount) {
    if (xOrO === "O") {
        return 10 - moveCount;
    } else {
        return -10 + moveCount;
    }
}
