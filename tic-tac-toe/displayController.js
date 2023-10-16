import {xOrO, tie, turn, winner} from './counter.js';
import {getEventArray} from './gameBoard.js';
import {removeListener} from './reset.js';

const status = document.querySelector(".status");
const player1Input = document.querySelector(".player1");
const player2Input = document.querySelector(".player2");

player1Input.addEventListener("input", updateStatusTurn);
player2Input.addEventListener("input", updateStatusTurn);

// places X or O at selected square for player vs player mode
export function placeMarker() {
    this.innerHTML = xOrO();
}

// reset square and status
export function resetDisplay() {
    resetSquareDisplay();
    resetStatusDisplay();
}

// when game is won, remove all UI for board
export function removeGameOver() {
    removeHover();
    removeListener();
    updateStatusWon();
}

// resets the status to player 1 or inputted name
function resetStatusDisplay() {
    if (player1Input.value == "") {
        status.innerHTML = "Player 1's Turn";
    } else {
        status.innerHTML = String(player1Input.value) + "'s Turn";
    }
}

// resets all the squares
function resetSquareDisplay() {
    for (let square of getEventArray()) {
        square.innerHTML = "";
    }
}

// displays the winning player's status
function updateStatusWon() {
    if (winner() == "player1Won") {
        if (player1Input.value == "") {
            status.innerHTML = "Player 1 Won!";
        } else {
            status.innerHTML = String(player1Input.value) + " Won!";
        }
    } else {
        if (player2Input.value == "") {
            status.innerHTML = "Player 2 Won!";
        } else {
            status.innerHTML = String(player2Input.value) + " Won!";
        }
    }
}

// displays whose turn it is or displays tie status
export function updateStatusTurn() {
    if (tie() !== true) {
        if (turn() == "player1Turn") {
            if (player1Input.value == "") {
                status.innerHTML = "Player 1's Turn";
            } else {
                status.innerHTML = String(player1Input.value) + "'s Turn";
            }
        } else {
            if (player2Input.value == "") {
                status.innerHTML = "Player 2's Turn";
            } else {
                status.innerHTML = String(player2Input.value) + "'s Turn";
            }
        }
    } else {
        status.innerHTML = "It's a Tie!";
    }
}

// remove hover for all squares
function removeHover() {
    for (let event of getEventArray()) {
        if (event.classList.contains("hover")) {
            event.classList.remove("hover");
        }
    };
}

// when in player vs computer mode, update the name input to computer and disable it
// when in player vs player mode, allow for player 2 name input
export function updateNameInput(computerModeStatus) {
    if (computerModeStatus) {
        player2Input.placeholder = "Computer";
        player2Input.value = "Computer";
        player2Input.disabled = true;
    } else {
        player2Input.placeholder = "Player 2";
        player2Input.value = "";
        player2Input.disabled = false;
    }
}
