import {selectStart, selectEnd} from '/classic-games/lazy-knight/selectBtn.js';
import {begin} from '/classic-games/lazy-knight/beginBtn.js';


// add functionality for Select Start btn
document.querySelector('.start').addEventListener('click', selectStart);

// add functionality of Select End btn
document.querySelector('.end').addEventListener('click', selectEnd);

document.querySelector('.begin').addEventListener('click', begin);

// knightMoves([0,0], [7,7]);
