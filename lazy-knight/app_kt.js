import {buildTree} from '/classic-games/lazy-knight/buildTree.js';

knightMoves([0,0], [7,0]);

document.querySelector('.start').addEventListener('click', ()=> {
    console.log('working');
});

function knightMoves(start, end) {
    buildTree(start, end);
};
