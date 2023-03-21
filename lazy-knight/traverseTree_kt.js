import {getTree} from '/classic-games/lazy-knight/buildTree.js';

export function getMoves(start, end) {
    let moves = []; // array to save the moves required to get to end
    let tree = getTree();
    moves.push(start); // index 0 of moves array is the starting location
    console.log(traverse(tree.root, end));
    console.log(`The required moves are ${moves}`);
}

// loop through the 8 next possible nodes for the current node
// if node is not null, add to queue
// pop out the first node from the queue
// check if the node value is the value being searched
//
function traverse(tree, end, queue = []) {
    // console.log(tree);
    for (let i = 1; i <= 8; i++) {
        let nextNode = tree['next' + i];
        if (nextNode !== null) {
            queue.push(nextNode);
            // console.log(`i = ${i}`);
        }
    }
    // console.log(queue);
    while (queue.length !== 0) {
        let nextNode = queue.shift();
        // console.log(nextNode.value);
        if (checkCurValue(nextNode, end) === true) {
            // console.log('match');
            return 1;
        } else {
            // console.log('else');
            return 1 + traverse(nextNode, end, queue);
        }
    }
}

// return true if the current move coordinates equal the end move coordinates
function checkCurValue(curNode, end) {
    // console.log(curNode.value);
    if (curNode.value[0] == end[0] && curNode.value[1] == end[1]) {
        return true;
    }
}
