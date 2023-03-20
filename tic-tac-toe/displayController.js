import {xOrO, tie, turn, winner} from '/classic-games/tic-tac-toe/counter.js';
import {getEventArray} from '/classic-games/tic-tac-toe/gameBoard.js';
import {removeListener} from '/classic-games/tic-tac-toe/reset.js';

const status = document.querySelector(".status");
const player1Input = document.querySelector(".player1");
const player2Input = document.querySelector(".player2");

player1Input.addEventListener("input", updateStatusTurn);
player2Input.addEventListener("input", updateStatusTurn);

export function placeMarker() {
    console.log(this);
    this.innerHTML = xOrO();
}

export function resetDisplay() {
    for (let square of getEventArray()) {
        square.innerHTML = "";
    }
    if (player1Input.value == "") {
        status.innerHTML = "Player 1's Turn";
    } else {
        status.innerHTML = String(player1Input.value) + "'s Turn";
    }
}

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

export function updateStatusTurn() {
    if (tie() != true) {
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
    }
}

export function updateStatusTie() {
    status.innerHTML = "It's a Tie!";
}

// when game is won, remove all game inputs
export function removeGameOver() {
    removeHover();
    removeListener();
    updateStatusWon();
}

// remove hover for all squares
function removeHover() {
    for (let event of getEventArray()) {
        if (event.classList.contains("hover")) {
            event.classList.remove("hover");
        } else {
            continue;
        }
    };
}
