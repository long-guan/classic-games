import {placeAllShips} from '/classic-games/battle-ship/place-ship.js';
import {placeHover, xRemoveHover, yRemoveHover} from '/classic-games/battle-ship/place-hover.js';
import {removeInvalidHover} from '/classic-games/battle-ship/invalid-place-hover.js';

// removes placeAllShips event listener
// removes placeHover event listener
// removes hover class from square
// remove mouseleave event listener
export function removeListeners(i, j) {
    let square = document.getElementById('' + i + '' + j);
    square.removeEventListener('click', placeAllShips);
    square.removeEventListener('mouseover', placeHover);
    square.removeEventListener('mouseleave', xRemoveHover);
    square.removeEventListener('mouseleave', yRemoveHover);
    square.removeEventListener('mouseleave', removeInvalidHover);
    square.classList.remove('hover');
    square.style.backgroundColor = "";
}
