let status = document.querySelector('.status');

export function statusPlayer1Hit() {
    status.innerHTML = "You fire a shot into the enemy waters... it's a hit!";
}

export function statusPlayer1Miss() {
    status.innerHTML = "You fire a shot into the enemy waters... and miss!";
}

export function statusPlayer1Sunk(shipName) {
    status.innerHTML = `You fire a shot into the enemy waters... you sunk their ${shipName}`;
}

export function statusComputerAim() {
    status.innerHTML = "The opponent is aiming...";
}

export function statusComputerHit() {
    status.innerHTML = "The enemy fires a shot into your waters... it's a hit!";
}

export function statusComputerMiss() {
    status.innerHTML = "The enemy fires a shot into your waters... and misses";
}
