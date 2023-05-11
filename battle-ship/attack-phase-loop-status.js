let status = document.querySelector('.status');

export function statusPlayer1Hit() {
    status.innerHTML = "You fire a shot into the enemy waters... it's a hit!";
}

export function statusPlayer1Miss() {
    status.innerHTML = "You fire a shot into the enemy waters... and miss!";
}

// status for when the player hits and sinks one of the enemy's ships
export function statusPlayer1Sunk(shipName) {
    status.innerHTML = `You fire a shot into the enemy waters... you sunk their ${shipName}`;
}

export function statusPlayer1Lose() {
    status.innerHTML = 'All friendly ships have sunk, you have lost the battle!';
}

export function statusComputerLose() {
    status.innerHTML = 'All enemy ships have sunk, you have won the battle!';
}

export function statusComputerAim() {
    status.innerHTML = "The opponent is aiming...";
}

export function statusComputerHit() {
    status.innerHTML = "The enemy fires a shot into your waters... it's a hit!";
}

export function statusComputerMiss() {
    status.innerHTML = "The enemy fires a shot into your waters... and misses!";
}

// status for when the computer hits and sinks one of the player's ships
export function statusComputerSunk(shipName) {
    status.innerHTML = `The enemy fires a shot into your waters... It's a hit and your ${shipName} has sunk!`;
}
