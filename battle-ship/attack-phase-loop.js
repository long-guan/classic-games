import {createBoard} from '/classic-games/battle-ship/createBoard.js';
import { removeBoardContEle } from '/classic-games/battle-ship/start-menu-select.js';
import { displayShipPlacement } from '/classic-games/battle-ship/display-new-move.js';
import { player1Board, computerBoard } from '/classic-games/battle-ship/gameboard.js';
import { returnLegalMove } from '/classic-games/battle-ship/computer.js';
import { statusPlayer1Hit, statusPlayer1Miss, statusPlayer1Sunk, statusComputerHit, statusComputerMiss, statusComputerAim, statusComputerSunk } from '/classic-games/battle-ship/attack-phase-loop-status.js';
import { player1Name } from '/classic-games/battle-ship/place-ship.js';

export function attackPhaseLoop() {
    setUpAttackPhase();
    attackLoop();
};

// removes board for placing ships
// creates board for player and computer
// updates board-cont flex direction to be row
// display friendly ship locations on Friendly Water board
function setUpAttackPhase() {
    removeBoardContEle();
    createBoard('player', 'Friendly Water');
    createBoard('computer', 'Enemy Water');
    document.querySelector('.board-cont').style.flexDirection = 'row';
    removeHover('.player');
    displayShipPlacement(player1Board);
    document.querySelector('.status').innerHTML = `Awaiting orders, Admiral ${player1Name}`;
};

// alternates the player and computer turn until someone wins
function attackLoop() {
    addClickForAttack();
}

// adds eventlisteners for player to choose a coordinate to attack on enemy's board
function addClickForAttack() {
    let enemySquares = document.querySelectorAll('.computer-square>div');
    Array.from(enemySquares).forEach(square => {
        if (square.style.backgroundColor == "") { // only the non-attacked squares will be clickable
            square.addEventListener('click', playerAttack, {once: true});
        }
    });
};

// removes eventlisteners for attacking from all squares for enemy board
// removes hover from all squares
function removeClickForAttack() {
    let enemySquares = document.querySelectorAll('.computer-square>div');
    Array.from(enemySquares).forEach(square => {
        if (square.style.backgroundColor == "") { // only the non-attacked squares will be clickable
            square.removeEventListener('click', playerAttack);
            removeHover('.computer');
        }
    });
};

// updates color to be red if hit and gray if miss
// updates computerBoard.position
// removes eventlisteners after each attack
// computer attacks after player attacks
function playerAttack() {
    let attack = computerBoard.receiveAttack(this.id);
    if (attack === true) { // .receiveAttack returns true when hit
        this.style.backgroundColor = 'red';
        statusPlayer1Hit();
    } else if (attack === false) { // .receiveAttack returns false when hit
        this.style.backgroundColor = 'gray';
        statusPlayer1Miss();
    } else {
        this.style.backgroundColor = 'red';
        statusPlayer1Sunk(attack[1]); // .receiveAttack will return [true, shipName] if the ship is sunk
    }
    removeClickForAttack(); // removes eventlisteners after each attack so it prevents clicking and waits for the computer's turn to attack
    setTimeout(() => { // waits 1.5 second before computer attacks
        computerAttack();
    }, 1500);
};

// updates color to be red if hit and gray if miss on Friendly Water board
// updates playerBoard.position
function computerAttack() {
    let legalCoord = returnLegalMove(player1Board.coordinatesHit)
    let computerSquare = document.getElementById('' + legalCoord[0] + legalCoord[1]);
    statusComputerAim();
    setTimeout(() => {
        let attack = player1Board.receiveAttack(legalCoord);
        if (attack === true) { // .receiveAttack returns true when hit
            computerSquare.style.backgroundColor = 'red';
            statusComputerHit();
        } else if (attack === false) { // .receiveAttack returns false when hit
            computerSquare.style.backgroundColor = 'gray';
            statusComputerMiss();
        } else { // .receiveAttack will return [true, shipName] if the ship is sunk
            computerSquare.style.backgroundColor = 'red';
            statusComputerSunk(attack[1])
        }
        addHover();
        addClickForAttack(); // restarts the loop
    }, 1000);
}

// remove hover from board
// argument is the string of the board class name to be removed
function removeHover(board) {
    let squares = document.querySelectorAll(`${board}-square>div`);
    Array.from(squares).forEach(square => {
        square.classList.remove('hover');
    });
};

// add hover to board
function addHover() {
    let squares = document.querySelectorAll('.computer-square>div');
    Array.from(squares).forEach(square => {
        if (square.style.backgroundColor == "") { // only the non-attacked squares will be hoverable
            square.classList.add('hover');
        }
    });
}
