

export function buildTree(start, end, tree) {

    nextMoves(tree, start);

    if (check(tree, end) === true) {
        return;
    } else {
        for (let i = 1; i <= 8; i++) {
            if (tree[i] != undefined) {
                console.log('ran');
                buildTree(tree[i], end, tree);
            }
        };
    }
    console.log(tree);
}

// knight has 8 possible moves => calculate 8 possible moves
// remove the moves that go off the board
function nextMoves(tree, start) {
    for (let i = 1; i <= 8; i++) {
        if (i === 1) {
            let next = [start[0] - 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 2) {
            let next = [start[0] - 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 3) {
            let next = [start[0] + 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 4) {
            let next = [start[0] + 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 5) {
            let next = [start[0] - 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 6) {
            let next = [start[0] - 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 7) {
            let next = [start[0] + 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        } else if (i === 8) {
            let next = [start[0] + 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                tree[i] = next;
            }
        }
    }
}

// base case: if the current move coordinates equal the end move coordinates
function check(tree, end) {
    for (let i = 1; i <= 8; i++) {
        if (tree[i][0] == end[0] && tree[i][1] == end[1]) {
            console.log('arrived');
            return true;
        }
    }
}

function outOfBounds(coordinate) {
    if (coordinate[0] < 0 || coordinate[1] < 0 || coordinate[0] > 8 || coordinate[1] > 8) {
        return true;
    } else {
        return false;
    }
}
