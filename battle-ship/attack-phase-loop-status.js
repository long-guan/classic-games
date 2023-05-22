let status = document.querySelector('.status');

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

// adds the typing text effect for displaying the status
function typeWriter(text, i = 0) {
    if (i < text.length) {
        status.innerHTML += text[i];
        i++;
        setTimeout(() => {typeWriter(text, i)}, 10); // update the time to make the typing text effect faster or slower
    }
}

// clears the current status
// displays the new status using the typeWriter effect
export function clearAndTypeStatus(statusText) {
    status.innerHTML = "";
    typeWriter(statusText);
}
