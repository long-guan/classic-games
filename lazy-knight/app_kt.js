import {buildTree} from '/classic-games/lazy-knight/buildTree.js';
import {getMoves} from '/classic-games/lazy-knight/traverseTree_kt.js';

knightMoves([0,0], [7,7]);

document.querySelector('.start').addEventListener('click', ()=> {
    console.log('working');
});

function knightMoves(start, end) {
    buildTree(start, end);
    getMoves(start, end);
};
