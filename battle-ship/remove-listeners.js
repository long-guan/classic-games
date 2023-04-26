import {placeAllShips} from '/classic-games/battle-ship/place-ship.js';
import {placeHover, xRemoveHover, yRemoveHover} from '/classic-games/battle-ship/place-hover.js';

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
    square.classList.remove('hover');
}
