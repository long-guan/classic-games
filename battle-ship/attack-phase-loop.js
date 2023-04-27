import {createBoard} from '/classic-games/battle-ship/createBoard.js';
import { removeBoardContEle } from '/classic-games/battle-ship/start-menu-select.js';
import { displayShipPlacement } from '/classic-games/battle-ship/display-new-move.js';
import { player1Board, computerBoard } from '/classic-games/battle-ship/gameboard.js';

export function attackPhaseLoop() {
    setUpAttackPhase();
}

// removes board for placing ships
// creates board for player and computer
// updates board-cont flex direction to be row
// display friendly ship locations on Friendly Water board
function setUpAttackPhase() {
    removeBoardContEle();
    createBoard('player', 'Friendly Water');
    createBoard('computer', 'Enemy Water');
    document.querySelector('.board-cont').style.flexDirection = 'row';
    removeFriendlyHover();
    displayShipPlacement(player1Board);
    addClickForAttack();
}

// remove hover from friendly water board
function removeFriendlyHover() {
    let friendlySquares = document.querySelectorAll('.player-square>div');
    Array.from(friendlySquares).forEach(square => {
        square.classList.remove('hover');
    });
}

function addClickForAttack() {
    let enemySquares = document.querySelectorAll('.computer-square>div');
    Array.from(enemySquares).forEach(square => {
        square.addEventListener('click', playerAttack, {once: true});
    });
}

// updates color to be red if hit and gray if miss
// updates computerBoard.position
function playerAttack() {
    if (computerBoard.receiveAttack(this.id)) {
        this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = 'gray';
    }
}
