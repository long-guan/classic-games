import {createBoard} from '/classic-games/battle-ship/createBoard.js';
import { removeBoardContEle } from '/classic-games/battle-ship/start-menu-select.js';

export function attackPhaseLoop() {
    setUpAttackPhase();
}

// removes board for placing ships
// creates board for player and computer
// updates board-cont flex direction to be row
function setUpAttackPhase() {
    removeBoardContEle();
    createBoard('player', 'Friendly Water');
    createBoard('computer', 'Enemy Water');
    document.querySelector('.board-cont').style.flexDirection = 'row';
    removeFriendlyHover();
}

// remove hover from friendly water board
function removeFriendlyHover() {
    let friendlySquares = document.querySelectorAll('.player-square>div');
    console.log(friendlySquares);
    Array.from(friendlySquares).forEach(square => {
        square.classList.remove('hover');
    });
}
