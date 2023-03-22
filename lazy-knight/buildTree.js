let tree = {
    root: {
    }
};

// NOT USED
// 8x8 2D array used to track which spots have been traveled, spots do not align with the board coordinate system
// let spotsVisited = [
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7],
//     [0,1,2,3,4,5,6,7]
// ];

// set the start as the root
// build tree
export function buildTree(start, end) {
        tree.root = new Node(start); // level 1
        // spotsVisited[start[0]][start[1]] = 'filled';
        recurBuild(start, end, tree.root);
        console.log("The built tree is")
        console.log(tree);
}

export function getTree() {
    return tree;
}

// brute force method to find possible moves assuming that it takes a max of 6 moves to get from one position to another
function recurBuild(curNode, end, tree) {
    nextMoves(tree, curNode); // creates level 2 nodes
    // if (check(tree, end) === true) {
    //     return true;
    // } else {
        // level 3, for each node in level 2, find the 8 possible moves
        for (let i = 1; i <= 8; i++) {
            let level2Node = tree['next'+ i]; // pointer for level 2 nodes
            if (level2Node != null) {
                nextMoves(level2Node, level2Node.value); // creates level 3 nodes
                // if (check(level3Node, end) === true) {
                //     return;
                // }
                for (let j = 1; j <= 8; j++) {
                    let level3Node = level2Node['next' + j]; // pointer for level 3 nodes
                    if (level3Node != null) {
                        nextMoves(level3Node, level3Node.value); // creates level 4 nodes
                        // if (check(level4Node, end) === true) {
                        //     return;
                        // }
                        for (let k = 1; k <= 8; k++) {
                            let level4Node = level3Node['next' + k]; // pointer for level 4 nodes
                            if (level4Node != null) {
                                nextMoves(level4Node, level4Node.value); // creates level 5 nodes
                                // if (check(level5Node, end) === true) {
                                //     return;
                                // }
                                for (let l = 1; l <= 8; l++) {
                                    let level5Node = level4Node['next' + l]; // pointer for level 5 nodes
                                    if (level5Node != null) {
                                        nextMoves(level5Node, level5Node.value); // creates level 6 nodes
                                        // if (check(level6Node, end) === true) {
                                        //     return;
                                        // }
                                        for (let n = 1; n <= 8; n++) {
                                            let level6Node = level5Node['next' + n]; // pointer for level 6 nodes
                                            if (level6Node != null) {
                                                nextMoves(level6Node, level6Node.value); // creates level 7 nodes
                                                // if (check(level7Node, end) === true) {
                                                //     return;
                                                // }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    // }
    // console.log(tree);
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

// knight has 8 possible moves => calculate 8 possible moves => create new node
// function outOfBounds => does not calculate the moves that go off the board
// function checkEmpty => does not move to spots that have already been traveled
function nextMoves(tree, start) {
    for (let i = 1; i <= 8; i++) {
        if (i === 1) {
            let next = [start[0] - 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 2) {
            let next = [start[0] - 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 3) {
            let next = [start[0] + 1, start[1] - 2];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 4) {
            let next = [start[0] + 2, start[1] - 1];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 5) {
            let next = [start[0] - 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 6) {
            let next = [start[0] - 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 7) {
            let next = [start[0] + 1, start[1] + 2];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        } else if (i === 8) {
            let next = [start[0] + 2, start[1] + 1];
            if (outOfBounds(next) != true) {
                // if (checkEmpty(next) === true) {
                    tree['next' + i] = new Node(next);
                // }
            }
        }
    }
}

// NOT USED
// use 2D array to keep track of positions that are already been traveled
// returns true if position is empty
// function checkEmpty(next) {
//     // console.log(next);
//     if (spotsVisited[next[0]][next[1]] !== 'filled') {
//         spotsVisited[next[0]][next[1]] = 'filled';
//         return true;
//     }
// }

// return true if the next set of possible move coordinates equal the end move coordinates
function check(curNode, end) {
    for (let i = 1; i <= 8; i++) {
        if (curNode['next'+ i] != null) {
            let pointer = curNode['next'+ i];
            if (pointer.value[0] == end[0] && pointer.value[1] == end[1]) {
                // console.log(curNode);
                // console.log(pointer);
                console.log('Distination Reached');
                return true;
            }
        }
    }
}

// return true if given coordinate is out of bounds
function outOfBounds(coordinate) {
    if (coordinate[0] < 0 || coordinate[1] < 0 || coordinate[0] > 7 || coordinate[1] > 7) {
        return true;
    } else {
        return false;
    }
}
