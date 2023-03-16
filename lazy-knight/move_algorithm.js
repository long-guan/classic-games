import {buildTree} from '/classic-games/knight-travails/buildTree.js';

let tree = {
    root: {
    }
};

export function knightMoves(start, end) {
    tree.root.value = [start];
    buildTree(start, end, tree.root);
};
