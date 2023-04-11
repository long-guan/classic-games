import {createBoard} from '/classic-games/battle-ship/createBoard.js';
import { removeBoardContEle } from '/classic-games/battle-ship/start-menu-select.js';
import { placeHover } from '/classic-games/battle-ship/place-hover.js';

let status = document.querySelector('.status');
let boardCont = document.querySelector('.board-cont')
let player1Name = '';
let yAxisMode = true;
let shipCount = 5;

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

// select all the squares and add listeners to place ship and to add place-hover effect
function addSquareFunc() {
    let coordinates = document.querySelectorAll('.square');
    for (let square of coordinates) {
        square.addEventListener('click', () => {
            placeAllShips();
            console.log(square.id);
        })
        square.addEventListener('mouseover', () => { // add place-hover effect
            placeHover(shipCount, square, yAxisMode);
        });
        square.addEventListener('mouseleave', () => {

        });
    }
}

function placeAllShips() {
    if (shipCount == 5) {
        count--;
    } else if (shipCount == 4) {
        count--;
    } else if (shipCount == 3) {
        count--;
    } else if (shipCount == 2) {

    }
}
