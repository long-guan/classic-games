import { player1Name } from './place-ship.js';

export function statusAwaitingOrders() {
    let text = `Awaiting orders, Admiral ${player1Name}`;
    clearAndTypeStatus(text);
}

export function statusPlayer1Hit() {
    let text = "You fire a shot into the enemy waters... it's a hit!";
    clearAndTypeStatus(text);
}

export function statusPlayer1Miss() {
    let text = "You fire a shot into the enemy waters... and miss!";
    clearAndTypeStatus(text);
}

// status for when the player hits and sinks one of the enemy's ships
export function statusPlayer1Sunk(shipName) {
    let text = `You fire a shot into the enemy waters... you sunk their ${shipName}`;
    clearAndTypeStatus(text);
}

export function statusPlayer1Lose() {
    let text = 'All friendly ships have sunk, you have lost the battle!';
    clearAndTypeStatus(text);
}

export function statusComputerLose() {
    let text = 'All enemy ships have sunk, you have won the battle!';
    clearAndTypeStatus(text);
}

export function statusComputerAim() {
    let text = "The opponent is aiming...";
    clearAndTypeStatus(text);
}

export function statusComputerHit() {
    let text = "The enemy fires a shot into your waters... it's a hit!";
    clearAndTypeStatus(text);
}

export function statusComputerMiss() {
    let text = "The enemy fires a shot into your waters... and misses!";
    clearAndTypeStatus(text);
}

// status for when the computer hits and sinks one of the player's ships
export function statusComputerSunk(shipName) {
    let text = `The enemy fires a shot into your waters... It's a hit and your ${shipName} has sunk!`;
    clearAndTypeStatus(text);
}

// clears the current status
// displays the new status using the typeWriter effect
export function clearAndTypeStatus(statusText) {
    let status1 = document.querySelector('#status1');
    let status2 = document.querySelector('#status2');
    let status3 = document.querySelector('#status3');
    moveTextUp(status1, status2, status3);
    status1.innerHTML = "";
    typeWriter(statusText, status1);
}

// adds the typing text effect for displaying the status
function typeWriter(text, status1, i = 0) {
    if (i < text.length) {
        status1.innerHTML += text[i];
        i++;
        setTimeout(() => {typeWriter(text, status1, i)}, 5); // update the time to make the typing text effect faster or slower
    }
}

// create of effect of text moving up
function moveTextUp(status1, status2, status3) {
    if (status2.innerHTML == "") {
        status2.innerHTML = status1.innerHTML;
    } else {
        status3.innerHTML = status2.innerHTML;
        status2.innerHTML = status1.innerHTML;
    }
}
