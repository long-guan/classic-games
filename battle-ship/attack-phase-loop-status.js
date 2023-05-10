let status = document.querySelectorAll('.status');

export function statusPlayer1Hit() {
    status.innerHTML = "You fire a shot into the enemy waters... it's a hit!";
}

export function statusPlayer1Miss() {
    status.innerHTML = "You fire a shot into the enemy waters... and miss!";
}

export function statusPlayer1Sunk() {

}
