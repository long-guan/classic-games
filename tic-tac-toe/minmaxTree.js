let tree = {
    root: {

    }
};

let highestScore = {
    score: -100,
    node: {}
};

let lowestScore = {
    score: -100,
    node: {}
}

let moves = {
    score: -100,
    node: {}
}

// BFS
// when it is the human's turn, we want to choose the lowest score. If it doesn't find a score

// when it is the computer's turn, we want to choose the highest score (greater than or equal to 0). If it doesn't find a score with the available moves (all null), then it looks at the next available set of moves for human and chooses a move that is 0. If no 0, then it looks at the next set moves to find the highest score and returns the moves

// positive points = computer
// 0 = tie
// null = game did not end

let iterationCount = 0;

let sumNodeScore = {

}

function traverseTree(tree, queue, pointer=tree.root) {
    // start with root node
    for (let i = 0; i <= 8; i++) {
        let nextBoard = pointer['nextBoard' + i];
        if (nextBoard !== null) { // if nextBoard is not null, then game has not ended
            queue.push(nextBoard);
        }
    }
    while (queue.length !== 0) {
        let sumArr = [];
        iterationCount++;
        console.log("count: ", iterationCount);
        let dequeue = queue.shift();
        getNodeScore(dequeue, sumArr);
        sumNodeScore[dequeue.stats.nextMoves[0]["O"]] = sumArr;
        // if (dequeue.stats.moveCount % 2 === 0) { // computer's turn (max score)
        //     console.log('computer turn');
        //     console.log(dequeue);
        //     // if (moves.score >= 0) { // empty queue to stop the loop since score >= 0 means computer won or tied
        //     //     queue = [];
        //     // }
        //     if (dequeue.stats.points > highestScore.score && dequeue.stats.points !== null) {
        //         highestScore.score = dequeue.stats.points;
        //         highestScore.node = dequeue;
        //         moves.node = dequeue;
        //         moves.score = dequeue.stats.points;
        //     } else {
        //         return traverseTree(tree, queue, dequeue);
        //     }
        // }
        // else { // human's turn (min score)
        //     console.log('human turn');
        //     console.log(dequeue);
        //     // if (moves.score >= 0) { // empty queue to stop the loop since score >= 0 means computer won or tied
        //     //     queue = [];
        //     // }
        //     if (dequeue.stats.points > lowestScore.score && dequeue.stats.points !== null) {
        //         highestScore.score = 0;
        //         lowestScore.score = dequeue.stats.points;
        //         lowestScore.node = dequeue;
        //         moves.node = dequeue;
        //         moves.score = dequeue.stats.points;
        //     } else {
        //         return traverseTree(tree, queue, dequeue);
        //     }
        // }
    }
}

function getNodeScore(node, arr) {
    if (node.stats.points !== null) { // base case
        return arr.push(node.stats.points);
    }
    for (let i = 0; i <= 8; i++) { // add the children of the current node
        let nextBoard = node['nextBoard' + i];
        if (nextBoard !== null) { // check if this position is a valid move (already taken)
            getNodeScore(nextBoard, arr);
        }
    }
}

export function getNextMove(dictBoard) {
    let result = convertDict2Arr(dictBoard);
    let arrBoard = result[0];
    let points = checkArrWin(arrBoard);
    console.log("arrBoard: ", arrBoard);
    // moveCount is used to determine if it is a tie
    let moveCount = result[1];
    // sets the root of tree
    tree.root = new Position(arrBoard, points, {}, moveCount);
    buildMinmaxTree(arrBoard, [], moveCount);
    console.log(tree);
    let nextMove = traverseTree(tree, []);
    console.log("sumNodeScore", sumNodeScore);
    console.log(getLargestNode(sumNodeScore));
    // console.log(nextMove.stats.nextMoves[0]);
    // console.log('highestScore');
    // console.log(highestScore);
    // console.log('lowestScore');
    // console.log(lowestScore);
    // console.log('moves');
    // console.log(moves);
    // console.log(moves.node.stats.nextMoves[0]);
}

function getLargestNode(sumNodeScore) {
    let largestNode = {
        average: -100,
        move: null
    }
    for (const [key, value] of Object.entries(sumNodeScore)) {
        console.log("key", key);
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }
        console.log("sum", sum);
        let average = sum/value.length
        if (average > largestNode.average) {
            largestNode.average = average;
            largestNode.move = key;
        }
    }
    return largestNode;
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
    if (topLeft == topMid && topLeft == topRight && topLeft !== null) {
        return returnScore(topLeft, moveCount);
    } else if (midLeft == midMid && midLeft == midRight && midLeft !== null) {
        return returnScore(midLeft, moveCount);
    } else if (botLeft == botMid && botLeft == botRight && botLeft !== null) {
        return returnScore(botLeft, moveCount);
    } else if (topMid == midMid && topMid == botMid && topMid !== null) {
        return returnScore(topMid, moveCount);
    } else if (topRight == midRight && topRight == botRight && topRight !== null) {
        return returnScore(topRight, moveCount);
    } else if (topLeft == midLeft && topLeft == botLeft && topLeft !== null) {
        return returnScore(topLeft, moveCount);
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
