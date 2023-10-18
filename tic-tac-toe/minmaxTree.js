let tree = {
    root: {

    }
};

export function getNextMove(dictBoard) {
    let result = convertDict2Arr(dictBoard);
    let arrBoard = result[0];
    let points = checkArrWin(arrBoard);
    console.log("arrBoard: ", arrBoard);
    let moveCount = result[1];     // moveCount is used to determine if it is a tie
    tree.root = new Position(arrBoard, points, {}, moveCount);     // sets the root of tree
    buildMinmaxTree(arrBoard, [], moveCount); // build the tree and set the points of each node
    console.log(tree);
    let nextMove = traverseTreeLoop();
    console.log("next move: ", nextMove);
    // nextMove = getLargestAvgNode(sumNodeScore);
    return nextMove;
}

function traverseTreeLoop2(startBoard=tree.root) {
    let scoreArr1 = [];
    for (let i = 0; i <= 8; i++) { // grab scores for next "O"
        let nextBoard1 = startBoard['nextBoard' + i];
        if (nextBoard1 !== null) { // "O"
            if (nextBoard1.stats.points !== null) {
                scoreArr1.push([i, nextBoard1.stats.points]);
            } else {
                let scoreArr2 = [];
                for (let j = 0; j <= 8; j++) { // "O", "X"
                    let nextBoard2 = nextBoard1['nextBoard' + j]
                    if (nextBoard2 !== null) {
                        if (nextBoard2.stats.points !== null) {
                            scoreArr2.push([j, nextBoard2.stats.points]);
                        } else {

                        }
                    }
                }
            }
        }
    }
}

function twoMoves(loop, paramBoard, paramScoreArr, nextBoard, nextScoreArr) {
    for (loop; loop <= 8; loop++) { // next O
        let nextBoard = paramBoard['nextBoard' + loop];
        let nextScoreArr = [];
        if (nextBoard !== null) {
            console.log("loop:", loop);
            if (nextBoard3.stats.points !== null) {
                scoreArr3.push([loop2, nextBoard3.stats.points])
            } else {
                for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                    let nextBoard4 = nextBoard3['nextBoard' + loop4];
                    if (nextBoard4 !== null) {
                        console.log("loop4:", loop4);
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

function traverseTreeLoop(startBoard=tree.root) {
    let scoreArr1 = [];
    if (startBoard.stats.moveCount === 7) {
        console.log("O, X")
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                console.log("loop1:", loop1);
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        if (nextBoard2 !== null) {
                            console.log("loop2:", loop2);
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
    } else if (startBoard.stats.moveCount === 5) {
        console.log("O, X, O, X");
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                console.log("loop1:", loop1);
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        let scoreArr3 = [];
                        if (nextBoard2 !== null) {
                            console.log("loop2:", loop2);
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            } else {
                                for (let loop3 = 0; loop3 <= 8; loop3++) { // next O
                                    let nextBoard3 = nextBoard2['nextBoard' + loop3];
                                    let scoreArr4 = [];
                                    if (nextBoard3 !== null) {
                                        console.log("loop3:", loop3);
                                        if (nextBoard3.stats.points !== null) {
                                            scoreArr3.push([loop2, nextBoard3.stats.points])
                                        } else {
                                            for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                                                let nextBoard4 = nextBoard3['nextBoard' + loop4];
                                                if (nextBoard4 !== null) {
                                                    console.log("loop4:", loop4);
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
    } else if (startBoard.stats.moveCount === 3) {
        console.log("O, X, O, X, O, X");
        for (let loop1 = 0; loop1 <= 8; loop1++) { // next O
            let nextBoard1 = startBoard['nextBoard' + loop1];
            let scoreArr2 = [];
            if (nextBoard1 !== null) {
                console.log("loop1:", loop1);
                if (nextBoard1.stats.points !== null) {
                    scoreArr1.push([loop1, nextBoard1.stats.points]);
                } else {
                    for (let loop2 = 0; loop2 <= 8; loop2++) { // next X
                        let nextBoard2 = nextBoard1['nextBoard' + loop2];
                        let scoreArr3 = [];
                        if (nextBoard2 !== null) {
                            console.log("loop2:", loop2);
                            if (nextBoard2.stats.points !== null) {
                                scoreArr2.push([loop1, nextBoard2.stats.points]);
                            } else {
                                for (let loop3 = 0; loop3 <= 8; loop3++) { // next O
                                    let nextBoard3 = nextBoard2['nextBoard' + loop3];
                                    let scoreArr4 = [];
                                    if (nextBoard3 !== null) {
                                        console.log("loop3:", loop3);
                                        if (nextBoard3.stats.points !== null) {
                                            scoreArr3.push([loop2, nextBoard3.stats.points])
                                        } else {
                                            for (let loop4 = 0; loop4 <= 8; loop4++) { // next X
                                                let nextBoard4 = nextBoard3['nextBoard' + loop4];
                                                let scoreArr5 = [];
                                                if (nextBoard4 !== null) {
                                                    console.log("loop4:", loop4);
                                                    if (nextBoard4.stats.points !== null) {
                                                        scoreArr4.push([loop3, nextBoard4.stats.points])
                                                    } else {
                                                        for (let loop5 = 0; loop5 <= 8; loop5++) { // next O
                                                            let nextBoard5 = nextBoard4['nextBoard' + loop5];
                                                            let scoreArr6 = [];
                                                            if (nextBoard5 !== null) {
                                                                console.log("loop5:", loop5);
                                                                if (nextBoard5.stats.points !== null) {
                                                                    scoreArr5.push([loop4, nextBoard5.stats.points])
                                                                } else {
                                                                    for (let loop6 = 0; loop6 <= 8; loop6++) { // next X
                                                                        let nextBoard6 = nextBoard5['nextBoard' + loop6];
                                                                        if (nextBoard6 !== null) {
                                                                            console.log("loop6:", loop6);
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
    }
    console.log(scoreArr1);
    return returnNextMove(scoreArr1);
        // for (let i = 0; i <= 8; i++) { // grab scores for next "O"
    //     let nextBoard1 = startBoard['nextBoard' + i];
    //     if (nextBoard1 !== null) {
    //         if (nextBoard1.stats.points !== null) {
    //             scoreArr1.push([i, nextBoard1.stats.points]);
    //         }
    //     }
    // }
    // console.log("ScoreArr1: ", scoreArr1);
    // if (scoreArr1.length === 9 - startBoard.stats.moveCount) { // cannot make a decision unless all spots have points
    //     return returnNextMove(scoreArr1);
    // } else { // grabs scores for next "O", "X"
    // }
    // if (scoreArr1.length === 9 - startBoard.stats.moveCount) { // cannot make a decision unless all spots have points
    //     return returnNextMove(scoreArr1);
    // } else { // grabs scores for next "O", "X", "O"
    //     console.log("O, X, O");
    //     scoreArr1 = [];
    //     for (let i = 0; i <= 8; i++) { // next O
    //         console.log("i:", i);
    //         let nextBoard1 = startBoard['nextBoard' + i];
    //         let scoreArr2 = [];
    //         if (nextBoard1 !== null) {
    //             if (nextBoard1.stats.points !== null) {
    //                 scoreArr1.push([i, nextBoard1.stats.points]);
    //             } else {
    //                 for (let j = 0; j <= 8; j++) { // next X
    //                     console.log("j:", j);
    //                     let nextBoard2 = nextBoard1['nextBoard' + j];
    //                     let scoreArr3 = [];
    //                     if (nextBoard2 !== null) {
    //                         if (nextBoard2.stats.points !== null) {
    //                             scoreArr2.push([i, nextBoard2.stats.points]);
    //                         } else {
    //                             for (let k = 0; k <= 8; k++) { // next O
    //                                 let nextBoard3 = nextBoard2['nextBoard' + k];
    //                                 if (nextBoard3 !== null) {
    //                                     if (nextBoard3.stats.points !== null) {
    //                                         scoreArr3.push([j, nextBoard3.stats.points]);
    //                                     }
    //                                 }
    //                             }
    //                             if (scoreArr3.length > 0) {
    //                                 scoreArr2.push([j, checkHigh(scoreArr3)]);
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         if (scoreArr2.length > 0) {
    //             scoreArr1.push([i, checkLow(scoreArr2)]);
    //         }
    //     }
    // }
    // console.log(scoreArr1);
    // if (scoreArr1.length === 9 - startBoard.stats.moveCount) { // cannot make a decision unless all spots have points
    //     return returnNextMove(scoreArr1);
    // } else { // grabs scores for next "O", "X", "O", "X"

    // }

    // if (scoreArr1.length === 9 - startBoard.stats.moveCount) { // cannot make a decision unless all spots have points
    //     return returnNextMove(scoreArr1);
    // }
}

function checkHigh(scoreArr) { // look for highest score for computer
    console.log("checkHigh:", scoreArr);
    let highestScore = -1000;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] >= highestScore) {
            highestScore = scoreArr[i][1];
        }
    }
    console.log("checkHigh return: ", highestScore);
    return highestScore;
}

function checkLow(scoreArr) { // look for lowest score for human
    console.log("checkLow:", scoreArr);
    let lowestScore = 1000;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] <= lowestScore) {
            lowestScore = scoreArr[i][1];
        }
    }
    console.log("checkLow return: ", lowestScore);
    return lowestScore;
}

function returnNextMove(scoreArr) {
    let nextMove = null;
    let highestScore = 0;
    for (let i = 0; i < scoreArr.length; i++) {
        if (scoreArr[i][1] >= highestScore) {
            nextMove = scoreArr[i][0];
            highestScore = scoreArr[i][1];
        }
    }
    return nextMove;
}

// traverses the nodes and finds the min and max score for each node
function traverseTree(currentBoard=tree.root) {
    // start with root node
    let scoreArr = [];
    for (let i = 0; i <= 8; i++) {
        let nextBoard = currentBoard['nextBoard' + i];
        if (nextBoard !== null) { // if nextBoard is not null, then game has not ended so calculate score
            // console.log("NEW NODE--------------------------------")
            // console.log("i: ", i);
            // console.log(nextBoard);
            if (nextBoard.stats.points !== null) {
                scoreArr.push([i, nextBoard.stats.points]);
                console.log(nextBoard);
            }
            // getNodeScore(nextBoard, miniMaxScoreArr);
            // sumNodeScore[nextBoard.stats.nextMoves[0]["O"]] = miniMaxScoreArr;
        }
    }
    console.log("SCORE ARR");
    console.log(scoreArr);
    if (scoreArr.length > 0) {
        if (currentBoard.stats.moveCount % 2 === 1) {
            let nextMove = scoreArr[0][0];
            let highestScore = scoreArr[0][1];
            for (let i = 1; i < scoreArr.length; i++) {
                if (scoreArr[i][1] > highestScore) {
                    nextMove = scoreArr[i][0];
                    highestScore = scoreArr[i][1];
                }
            }
            console.log("highestScore: ", highestScore);
            let lastMove = currentBoard.stats.nextMoves.length - 1;
            if (sumNodeScore[currentBoard.stats.nextMoves[0]["X"]] !== undefined) {
                // sumNodeScore[currentBoard.stats.nextMoves[0]["X"]].push([currentBoard.stats.moveCount + 1, highestScore]);
                sumNodeScore[currentBoard.stats.nextMoves[0]["X"]].push([nextMove, highestScore]);
            } else {
                sumNodeScore[currentBoard.stats.nextMoves[0]["O"]].push([nextMove, highestScore]);
            }
            return nextMove;
        } else {
            let nextMove = scoreArr[0][0];
            let lowestScore = scoreArr[0][1];
            for (let i = 1; i < scoreArr.length; i++) {
                if (scoreArr[i].points > lowestScore) {
                    nextMove = scoreArr[i][0];
                    lowestScore = scoreArr[i][1];
                }
            }
            console.log("lowestScore: ", lowestScore);
            let lastMove = currentBoard.stats.nextMoves.length - 1;
            if (sumNodeScore[currentBoard.stats.nextMoves[0]["X"]] !== undefined) {
                sumNodeScore[currentBoard.stats.nextMoves[0]["X"]].push([nextMove, lowestScore]);
            } else {
                sumNodeScore[currentBoard.stats.nextMoves[0]["O"]].push([nextMove, lowestScore]);
            }
            return nextMove;
        }
    } else {
        for (let i = 0; i <= 8; i++) {
            let nextBoard = currentBoard['nextBoard' + i];
            if (nextBoard !== null) {
                traverseTree(nextBoard);
            }
        }
    }
}

// calculates score for that square (node)
function getNodeScore(node, minimaxScore) {
    // console.log(node);
    let minimaxTracker = {
        min: null,
        max: null
    }
    if (node.stats.points === null) {
        for (let i = 0; i <= 8; i++) {
            let currentMove = node['nextBoard' + i];
            // console.log("inner i: ", i);
            // console.log(currentMove);
            if (currentMove !== null) { // if move is not takened
                if (currentMove.stats.points !== null) { // if that board has points
                    if (currentMove.stats.moveCount % 2 === 0) { // return max for computer's turn
                        // initialize the max score
                        if (minimaxTracker.max === null && currentMove.stats.points >= 0) {
                            minimaxTracker.max = currentMove.stats.points;
                            // console.log(minimaxTracker);
                        } else if (currentMove.stats.points > minimaxTracker.max) {
                            minimaxTracker.max = currentMove.stats.points;
                            // console.log(minimaxTracker);
                        }
                    } else { // return min for player's turn
                        // initialize the min score
                        if (minimaxTracker.min === null && currentMove.stats.points <= 0) {
                            minimaxTracker.min = currentMove.stats.points;
                            // console.log(minimaxTracker);
                        }
                        if (currentMove.stats.points < minimaxTracker.min) {
                            minimaxTracker.min = currentMove.stats.points;
                            // console.log(minimaxTracker);
                        }
                    }
                }
            }
        }
        // if there is score, return the score
        if (minimaxTracker.max !== null) {
            let score = minimaxTracker.max;
            minimaxTracker.max = null; // reset the tracker
            return minimaxScore.push(score);
        } else if (minimaxTracker.min !== null) {
            let score = minimaxTracker.min;
            minimaxTracker.min = null; // reset the tracker
            return minimaxScore.push(score);
        } else { // recursively repeat if there is no score. No score means the game has not ended
            for (let i = 0; i <= 8; i++) {
                let nextBoard = node['nextBoard' + i];
                if (nextBoard !== null) { // if nextBoard is not null, then game has not ended so calculate score
                    getNodeScore(nextBoard, minimaxScore);
                }
            }
        }
    } else { // if node has points, then it doesn't have to look at the next possible moves and can return the points
        return minimaxScore.push(node.stats.points);
    }
}

function returnBestMove(sumNodeScore) {
    let largest = {
        largest: -1000,
        move: null
    }
    for (const [key, value] of Object.entries(sumNodeScore)) {
        console.log("key", key);
        let count = {};
        for (let i = 0; i < value.length; i++) {
            if (count[value[i]] === undefined) {
                count[value[i]] = 1;
            } else {
                count[value[i]] = count[value[i]] + 1;
            }
        }
        console.log("count", count);
    }
    return largest.move;
}

// calculates the highest score node and returns it as the next best move
function getLargestSumNode(sumNodeScore) {
    let largestNode = {
        average: -1000,
        move: null
    }
    for (const [key, value] of Object.entries(sumNodeScore)) {
        console.log("key", key);
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }
        console.log("sum", sum);
        let average = sum;
        if (average > largestNode.average) {
            largestNode.average = average;
            largestNode.move = key;
        }
    }
    return largestNode;
}

function getLargestAvgNode(sumNodeScore) {
    let largestNode = {
        average: -1000,
        move: null
    }
    for (const [key, value] of Object.entries(sumNodeScore)) {
        console.log("key", key);
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }
        console.log("sum", sum);
        let average = sum / value.length;
        if (average > largestNode.average) {
            largestNode.average = average;
            largestNode.move = key;
        }
    }
    return largestNode;
}

function getSmallestAvgNode(sumNodeScore) {
    let smallestNode = {
        average: 1000,
        move: null
    }
    for (const [key, value] of Object.entries(sumNodeScore)) {
        console.log("key", key);
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }
        console.log("sum", sum);
        let average = sum / value.length;
        if (average < smallestNode.average) {
            smallestNode.average = average;
            smallestNode.move = key;
        }
    }
    return smallestNode;
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


// while (queue.length !== 0) {
//     let dequeue = queue.shift();
//     if (dequeue.stats.moveCount % 2 === 0) { // computer's turn (max score)
//         console.log('computer turn');
//         console.log(dequeue);
//         // if (moves.score >= 0) { // empty queue to stop the loop since score >= 0 means computer won or tied
//         //     queue = [];
//         // }
//         if (dequeue.stats.points > highestScore.score && dequeue.stats.points !== null) {
//             highestScore.score = dequeue.stats.points;
//             highestScore.node = dequeue;
//             moves.node = dequeue;
//             moves.score = dequeue.stats.points;
//         } else {
//             return traverseTree(tree, queue, dequeue);
//         }
//     }
//     else { // human's turn (min score)
//         console.log('human turn');
//         console.log(dequeue);
//         // if (moves.score >= 0) { // empty queue to stop the loop since score >= 0 means computer won or tied
//         //     queue = [];
//         // }
//         if (dequeue.stats.points > lowestScore.score && dequeue.stats.points !== null) {
//             highestScore.score = 0;
//             lowestScore.score = dequeue.stats.points;
//             lowestScore.node = dequeue;
//             moves.node = dequeue;
//             moves.score = dequeue.stats.points;
//         } else {
//             return traverseTree(tree, queue, dequeue);
//         }
//     }
// }
