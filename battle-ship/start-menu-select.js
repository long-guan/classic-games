import {placeShip} from './place-ship.js';

let status = document.querySelector('.status');
let boardCont = document.querySelector('.board-cont')

export function onePlayerMode() {
    removeBoardContEle();
    status.innerHTML = 'Enter player name:';
    addNameInput();
    addStartBtn();
    // document.querySelector('#startGame').addEventListener('click', placeShip);
    document.querySelector('#startGame').addEventListener('click', validateName);
}

function validateName() {
    let nameInput = document.querySelector(".playerName");
    if (nameInput.value === "") {
        nameInput.style.borderColor = "red";
        status.innerHTML = 'Please enter player name to proceed'
    } else {
        placeShip();
    }
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
    newInput.required = true;
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
