let tree = {
    root: {
    }
};

export function buildTree(start, end) {
    tree.root = new Node(start);
    recurBuild(start, end, tree.root);
}

function recurBuild(start, end, tree) {
    nextMoves(tree, start);

    if (check(tree, end) === true) {
        console.log('true');
        return;
    } else {
        console.log('else');
        for (let i = 1; i <= 8; i++) {
            let nextNode = tree['next'+ i];
            if (nextNode != null) {
                nextMoves(nextNode, nextNode.value);
            }
        };
    }
    console.log(tree);
}

function Node(value, next1=null, next2=null, next3=null, next4=null, next5=null, next6=null, next7=null, next8=null) {
    this.value = value;
    this.next1 = next1;
    this.next2 = next2;
    this.next3 = next3;
    this.next4 = next4;
    this.next5 = next5;
    this.next6 = next6;
    this.next7 = next7;
    this.next8 = next8;
}

// knight has 8 possible moves => calculate 8 possible moves
// remove the moves that go off the board
function nextMoves(tree, start) {
    for (let i = 1; i <= 8; i++) {
        if (i === 1) {
            let next = [start[0] - 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 2) {
            let next = [start[0] - 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 3) {
            let next = [start[0] + 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 4) {
            let next = [start[0] + 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 5) {
            let next = [start[0] - 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 6) {
            let next = [start[0] - 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 7) {
            let next = [start[0] + 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        } else if (i === 8) {
            let next = [start[0] + 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                tree['next' + i] = new Node(next);
            }
        }
    }
}

// return true if the next set of possible move coordinates equal the end move coordinates
function check(tree, end) {
    for (let i = 1; i <= 8; i++) {
        if (tree['next'+ i] != null) {
            let pointer = tree['next'+ i];
            console.log(pointer.value);
            if (pointer.value[0] == end[0] && pointer.value[1] == end[1]) {
                console.log('arrived');
                return true;
            }
        }
    }
}

// return true if given coordinate is out of bounds
function outOfBounds(coordinate) {
    if (coordinate[0] < 0 || coordinate[1] < 0 || coordinate[0] > 8 || coordinate[1] > 8) {
        return true;
    } else {
        return false;
    }
}
