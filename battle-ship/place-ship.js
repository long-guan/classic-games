import {createBoard, createSvgBoard} from './createBoard.js';
import { removeBoardContEle } from './start-menu-select.js';
import { placeHover } from './place-hover.js';
import { player1Board, computerBoard } from './gameboard.js';
import { createShip } from './ship.js';
import {updatePlaceShipStatus} from './place-ship-status.js';
import { placeComputerShips } from './computer.js';
import {attackPhaseLoop} from './attack-phase-loop.js';
import { displayShipSvg } from './add-ship-svg.js';

let boardCont = document.querySelector('.board-cont')
export let player1Name = '';
export let yAxisMode = true;
export let shipCount = 5; // used to track which ship to place and how many squares of place-hover effect

// creates board and add listeners to squares to place ships
// updates the styling for the status box
export function placeShip() {
    player1Name = document.querySelector('.playerName').value;
    document.querySelector('.status').innerHTML = ""; // removes "Enter Player Name:" from status
    updateStatusBoxStyling();
    updatePlaceShipStatus(shipCount, player1Name);
    placeComputerShips(computerBoard); // randomly place computer ships
    removeBoardContEle();
    addAxisBtn();
    createSvgBoard('player1SvgBoard');
    createBoard('player1Board');
    document.querySelector('#axis').addEventListener('click', addAxisBtnFunc);
    addSquareFunc();
}

// updates the styling for the status box
// adds 3 divs inside Status div
function updateStatusBoxStyling() {
    let status = document.querySelector('.status');
    status.style.backgroundColor = "white";
    status.style.width = "850px";
    status.style.height = "100px";
    status.style.borderRadius = "20px";
    status.style.borderStyle = "solid";
    createSubStatusDivs(status); // creates 3 divs inside Status div
}

// creates 3 divs inside the Status div
function createSubStatusDivs(status) {
    for (let i = 3; i >= 1; i--) {
        let newDiv = document.createElement("div");
        newDiv.id = "status" + i;
        status.appendChild(newDiv);
    }
}

// creates axis button and adds it to board-cont
function addAxisBtn() {
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Axis: Y';
    newButton.id = 'axis';
    let gameCont = document.querySelector('.game-sub-cont');
    gameCont.insertBefore(newButton, boardCont)
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

// select all the squares to add listeners
function addSquareFunc() {
    let coordinates = document.querySelectorAll('.square');
    for (let square of coordinates) {
        square.addEventListener('click', placeAllShips); // adds place ship
        square.addEventListener('mouseover', placeHover); // adds place-hover effect
    }
}

// select all the squares and remove placeAllShips function, hover effect, and hover effect
function removeSquareFunc() {
    let coordinates = document.querySelectorAll('.square');
    for (let square of coordinates) {
        square.removeEventListener('click', placeAllShips); // remove place ship
        square.removeEventListener('mouseover', placeHover); // remove place-hover effect
        square.classList.remove('hover');
    }
}

// places ship for player1
// uses ship count to track which ship has been placed
// updates player1Board for the placed ships
// display the placed ship on the board
// updates status
export function placeAllShips() {
    let carrier = createShip(5, 'Carrier');
    let battleship = createShip(4, 'Battleship');
    let cruiser = createShip(3, 'Cruiser');
    let submarine = createShip(3, 'Submarine');
    let destroyer = createShip(2, 'Destroyer');
    if (shipCount == 5) { // place Carrier (5)
        // player1Board returns true if placement of ship is valid
        if (player1Board.placeShip(this.id, carrier, yAxisMode)) {
            // displayShipPlacement(player1Board);
            displayShipSvg(this.id, carrier, yAxisMode);
            shipCount--;
            updatePlaceShipStatus(shipCount, player1Name);
        };
    } else if (shipCount == 4) { // place Battleship (4)
        if (player1Board.placeShip(this.id, battleship, yAxisMode)) {
            // displayShipPlacement(player1Board);
            displayShipSvg(this.id, battleship, yAxisMode);
            shipCount--;
            updatePlaceShipStatus(shipCount, player1Name);
        };
    } else if (shipCount == 3) { // place Cruiser (3)
        if (player1Board.placeShip(this.id, cruiser, yAxisMode)) {
            // displayShipPlacement(player1Board);
            displayShipSvg(this.id, cruiser, yAxisMode);
            shipCount--;
            updatePlaceShipStatus(shipCount, player1Name);
        };
    } else if (shipCount == 2) { // place Submarine (3)
        if (player1Board.placeShip(this.id, submarine, yAxisMode)) {
            // displayShipPlacement(player1Board);
            displayShipSvg(this.id, submarine, yAxisMode);
            shipCount--;
            updatePlaceShipStatus(shipCount, player1Name);
        };
    } else if (shipCount == 1) { // place Destroyer (2)
        if (player1Board.placeShip(this.id, destroyer, yAxisMode)) {
            // displayShipPlacement(player1Board);
            displayShipSvg(this.id, destroyer, yAxisMode);
            removeSquareFunc();
            attackPhaseLoop(); // starts the game
        };
    }
}
