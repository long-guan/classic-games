import {selectStart, selectEnd} from './selectBtn.js';
import {begin} from './beginBtn.js';
import {clear} from './clearBtn.js';


// add functionality for Select Start btn
document.querySelector('.start').addEventListener('click', selectStart);

// add functionality of Select End btn
document.querySelector('.end').addEventListener('click', selectEnd);

// add functionality for Begin Journey btn
document.querySelector('.begin').addEventListener('click', begin);

// add functionality for Clear btn
document.querySelector('.clear').addEventListener('click', clear);
