import {getTree} from './buildTree.js';

// builds tree
// traverses tree BFS to find
// return coordinates of moves
export function getMoves(start, end) {
    let moves = [start]; // array to initate the traverse, used to track previously traveled nodes. start coordinate is always the first traveled coordinate
    let tree = getTree(); // obtains built tree
    let nodes = traverse(tree.root, end, [], moves); // BFS search the tree
    let requiredMoves = getCoord(nodes); // converts nodes to coordinates
    printMoves(requiredMoves, start, end);
    return requiredMoves;
}

// takes in the requiredMoves and console.logs it for better readability
function printMoves(moves, start, end) {
    let first = `knightMoves([${start}],[${end}]) == `;
    let second = '[';
    let count = 0;
    for (let item of moves) {
        if (count === 0) {
            second = second + '[' + item + ']';
            count++;
        } else {
            second = second + ',[' + item + ']';
        }
    };
    let third = ']';
    console.log(first + second + third);
}

// Breadth first search
// loop through the 8 next possible nodes for the current node
// if node is not null, add node to end previouseRoute
// add nextRoute to queue
// pop out the first route from the queue
// check if the last node value is the value being searched
// if not, insert last node to check for next 8 nodes
// repeat
// returns an array of moves for the knight to reach distination
function traverse(tree, end, queue, previousRoute) {
    for (let i = 1; i <= 8; i++) {
        let nextRoute = previousRoute;
        let nextNode = tree['next' + i];
        if (nextNode !== null) {
            queue.push(nextRoute.concat(nextNode));
        }
    }
    while (queue.length !== 0) {
        let dequeue = queue.shift(); // each dequeue is a set of ordered moves to reach a certain spot
        let lastNode = dequeue[dequeue.length - 1]; // get last index of dequeue to get the last node
        if (checkCurValue(lastNode, end) === true) { // if the last node is the distination, return array of moves
            return dequeue;
        } else { // insert the last checked node to check if it has children nodes to add to queue
            return traverse(lastNode, end, queue, dequeue);
        }
    }
}

// return true if the current move coordinates equal the end move coordinates
function checkCurValue(currentNode, end) {
    if (currentNode.value[0] == end[0] && currentNode.value[1] == end[1]) {
        return true;
    }
}

// return the value of the nodes (return the moves in coordinates instead of nodes)
function getCoord(node) {
    let coordinates = [];
    console.log(node);
    for (let item of node) { // grabs value (coordinate) of each node
        if (item.value == undefined) {
            coordinates.push(item);
        } else {
            coordinates.push(item.value);
        }
    }
    return coordinates;
}
