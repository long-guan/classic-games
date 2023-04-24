import { removeListeners } from "/classic-games/battle-ship/remove-listeners.js";

// takes in gameboard data and displays the new ship placement
// uses the gameboard data to remove event listeners and hover class from square
export function displayShipPlacement(gameboard) {
    console.log(gameboard.position);
    for (let i = 0; i < gameboard.position.length; i++) {
        for (let j = 0; j < gameboard.position[i].length; j++) {
            if (gameboard.position[i][j] !== null) {
                removeListeners(i, j);
                document.getElementById('' + i + '' + j).style.backgroundColor = 'black';
            }
        }
    }
}
