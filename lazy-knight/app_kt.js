import {selectStart, selectEnd} from '/classic-games/lazy-knight/selectBtn.js';
import {begin} from '/classic-games/lazy-knight/beginBtn.js';
import {clear} from '/classic-games/lazy-knight/clearBtn.js';


// add functionality for Select Start btn
document.querySelector('.start').addEventListener('click', selectStart);

// add functionality of Select End btn
document.querySelector('.end').addEventListener('click', selectEnd);

// add functionality for Begin Journey btn
document.querySelector('.begin').addEventListener('click', begin);

// add functionality for Clear btn
document.querySelector('.clear').addEventListener('click', clear);

// knightMoves([0,0], [7,7]);
