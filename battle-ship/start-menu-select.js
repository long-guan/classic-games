import {placeShip} from '/classic-games/battle-ship/place-ship.js';

let status = document.querySelector('.status');
let boardCont = document.querySelector('.board-cont')

export function onePlayerMode() {
    removeBoardContEle();
    status.innerHTML = 'Enter Player Name:';
    addNameInput();
    addStartBtn();
    document.querySelector('#startGame').addEventListener('click', placeShip);
}

// remove all child elements from board-cont
export function removeBoardContEle() {
    while(boardCont.firstChild) {
        boardCont.removeChild(boardCont.firstChild);
    }
}

// creates name input field and adds it to board-cont
function addNameInput() {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add('playerName');
    newInput.placeholder = 'Captain Jack Sparrow';
    boardCont.appendChild(newInput);
}

// creates Start Game button and adds it to board-cont
function addStartBtn() {
    let newButton = document.createElement('button');
    newButton.innerHTML = 'Start Game';
    newButton.id = 'startGame';
    boardCont.appendChild(newButton);
    boardCont.style.flexDirection = 'column';
}
