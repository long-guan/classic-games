import {createBoard} from '/classic-games/battle-ship/createBoard.js';
import { removeBoardContEle } from '/classic-games/battle-ship/start-menu-select.js';
import { placeHover } from '/classic-games/battle-ship/place-hover.js';
import { player1Board } from '/classic-games/battle-ship/gameboard.js';
import { createShip } from '/classic-games/battle-ship/ship.js';
import { displayShipPlacement } from '/classic-games/battle-ship/display-new-move.js';

let status = document.querySelector('.status');
let boardCont = document.querySelector('.board-cont')
let player1Name = '';
export let yAxisMode = true;
export let shipCount = 5; // used to track which ship to place and how many squares of place-hover effect

// creates board and add listeners to squares to place ships
export function placeShip() {
    player1Name = document.querySelector('.playerName').value;
    removeBoardContEle();
    addAxisBtn();
    createBoard('player1Board');
    document.querySelector('#axis').addEventListener('click', addAxisBtnFunc);
    addSquareFunc();
}

// creates axis button and adds it to board-cont
function addAxisBtn() {
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Axis: Y';
    newButton.id = 'axis';
    boardCont.appendChild(newButton);
}

// toggles true or false for yAxisMode and updates button axis text
function addAxisBtnFunc() {
    if (this.innerHTML.includes('Y')) {
        this.innerHTML = 'Axis: X';
        yAxisMode = false;
    } else {
        this.innerHTML = 'Axis: Y';
        yAxisMode = true;
    }
}

// select all the squares to add listeners to place ship and to add place-hover effect
function addSquareFunc() {
    let coordinates = document.querySelectorAll('.square');
    for (let square of coordinates) {
        square.addEventListener('click', placeAllShips);
        square.addEventListener('mouseover', placeHover);
    }
}

// places ship for player1
// uses ship count to track which ship has been placed
// updates player1Board for the placed ships
// display the placed ship on the board
export function placeAllShips() {
    if (shipCount == 5) { // place Carrier (5)
        let carrier = createShip(5, 'Carrier');
        recurPlaceShip(this.id, carrier, yAxisMode);
    } else if (shipCount == 4) { // place Battleship (4)
        let battleship = createShip(4, 'Battleship');
        player1Board.placeShip(this.id, battleship, yAxisMode);
        displayShipPlacement(player1Board);
        shipCount--;
    } else if (shipCount == 3) { // place Cruiser (3)
        let cruiser = createShip(3, 'Cruiser');
        player1Board.placeShip(this.id, cruiser, yAxisMode);
        displayShipPlacement(player1Board);
        shipCount--;
    } else if (shipCount == 2) { // place Submarine (3)
        let submarine = createShip(3, 'Submarine');
        player1Board.placeShip(this.id, submarine, yAxisMode);
        displayShipPlacement(player1Board);
        shipCount--;
    } else if (shipCount == 1) { // place Destroyer (2)
        let destroyer = createShip(2, 'Destroyer');
        player1Board.placeShip(this.id, destroyer, yAxisMode);
        displayShipPlacement(player1Board);
        shipCount--;
    }
}

// recursively repeat the same ship placement if placement of ship is invalid
function recurPlaceShip(id, ship, yAxisMode) {
    if (player1Board.placeShip(id, ship, yAxisMode) === true) {
        displayShipPlacement(player1Board);
        shipCount--;
    } else { // invalid ship placement
        placeAllShips();
    }
}
