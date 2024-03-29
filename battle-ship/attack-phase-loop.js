import {createBoard} from './createBoard.js';
import { player1Board, computerBoard } from './gameboard.js';
import { returnLegalMove, hitFeedback } from './computer.js';
import { statusAwaitingOrders, statusPlayer1Hit, statusPlayer1Miss, statusPlayer1Sunk, statusPlayer1Lose, statusComputerHit, statusComputerMiss, statusComputerAim, statusComputerSunk, statusComputerLose } from './attack-phase-loop-status.js';

let gameOver = false;

export function attackPhaseLoop() {
    setUpAttackPhase();
    attackLoop();
};

// removes board for placing ships
// creates board for player and computer
// updates board-cont flex direction to be row
// display friendly ship locations on Friendly Water board
function setUpAttackPhase() {
    document.getElementById('axis').remove(); // remove axis btn
    document.querySelector('.player1Board').remove() // remove player1Board
    createBoard('player1', 'Friendly Water');
    createBoard('computer', 'Enemy Water');
    document.querySelector('.player1SvgBoard').style.height = "490.719px";
    document.querySelector('.board-cont').style.flexDirection = 'row';
    document.querySelector('.board-cont').style.gap = '20px';
    statusAwaitingOrders();
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
        this.style.transition = 'background-color 1s';
        this.style.backgroundColor = 'red';
        statusPlayer1Hit();
        setTimeout(() => {
            this.style.transition = '';
        }, 1000);
    } else if (attack === false) { // .receiveAttack returns false when hit
        this.style.transition = 'background-color 1s';
        this.style.backgroundColor = 'gray';
        statusPlayer1Miss();
        setTimeout(() => {
            this.style.transition = '';
        }, 1000)
    } else {
        this.style.transition = 'background-color 1s';
        this.style.backgroundColor = 'red';
        statusPlayer1Sunk(attack[1]); // .receiveAttack will return [true, shipName] if the ship is sunk
        setTimeout(() => {
            this.style.transition = '';
        }, 1000);
        if (computerBoard.gameOver()) { // checks for win
            gameOver = true;
            setTimeout(() => {
                statusComputerLose();
            }, 1000);
        };
    };
    removeClickForAttack(); // removes eventlisteners after each attack so it prevents clicking and waits for the computer's turn to attack
    if (gameOver === false) {
        setTimeout(() => { // waits 1 second before computer attacks
            computerAttack();
        }, 1000);
    }
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
            hitFeedback(legalCoord, true);
            computerSquare.style.transition = 'background-color 1s';
            computerSquare.style.backgroundColor = 'red';
            statusComputerHit();
            setTimeout(() => {
                computerSquare.style.transition = '';
            }, 1000);
        } else if (attack === false) { // .receiveAttack returns false when hit
            computerSquare.style.transition = 'background-color 1s';
            computerSquare.style.backgroundColor = 'gray';
            hitFeedback(legalCoord, false);
            statusComputerMiss();
            setTimeout(() => {
                computerSquare.style.transition = '';
            }, 1000);
        } else { // .receiveAttack will return [true, shipName] if the ship is sunk
            computerSquare.style.transition = 'background-color 1s';
            computerSquare.style.backgroundColor = 'red';
            statusComputerSunk(attack[1])
            hitFeedback(legalCoord, true, true);
            setTimeout(() => {
                computerSquare.style.transition = '';
            }, 1000);
            if (player1Board.gameOver()) { // checks for win
                gameOver = true;
                setTimeout(() => {
                    statusPlayer1Lose();
                }, 1000)
            };
        };
        if (gameOver === false) {
            addHover();
            addClickForAttack(); // restarts the loop
        }
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
