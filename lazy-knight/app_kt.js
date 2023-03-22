import {buildTree} from '/classic-games/lazy-knight/buildTree.js';
import {getMoves} from '/classic-games/lazy-knight/traverseTree_kt.js';
import {selectStart} from '/classic-games/lazy-knight/select.js';

// add functionality for Select Start btn
document.querySelector('.start').addEventListener('click', selectStart);

knightMoves([0,0], [7,7]);



// builds the tree of possible moves and returns the possible moves
function knightMoves(start, end) {
    buildTree(start, end);
    getMoves(start, end);
};
