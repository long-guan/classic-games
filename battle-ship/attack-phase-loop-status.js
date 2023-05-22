let status = document.querySelector('.status');

export function statusPlayer1Hit() {
    status.innerHTML = '';
    let text = "You fire a shot into the enemy waters... it's a hit!";
    typeWriter(text);
}

export function statusPlayer1Miss() {
    status.innerHTML = '';
    let text = "You fire a shot into the enemy waters... and miss!";
    typeWriter(text);
}

// status for when the player hits and sinks one of the enemy's ships
export function statusPlayer1Sunk(shipName) {
    status.innerHTML = '';
    let text = `You fire a shot into the enemy waters... you sunk their ${shipName}`;
    typeWriter(text);
}

export function statusPlayer1Lose() {
    let text = 'All friendly ships have sunk, you have lost the battle!';
    typeWriter(text);
}

export function statusComputerLose() {
    status.innerHTML = '';
    let text = 'All enemy ships have sunk, you have won the battle!';
    typeWriter(text);
}

export function statusComputerAim() {
    status.innerHTML = '';
    let text = "The opponent is aiming...";
    typeWriter(text);
}

export function statusComputerHit() {
    status.innerHTML = '';
    let text = "The enemy fires a shot into your waters... it's a hit!";
    typeWriter(text);
}

export function statusComputerMiss() {
    status.innerHTML = '';
    let text = "The enemy fires a shot into your waters... and misses!";
    typeWriter(text);
}

// status for when the computer hits and sinks one of the player's ships
export function statusComputerSunk(shipName) {
    status.innerHTML = '';
    let text = `The enemy fires a shot into your waters... It's a hit and your ${shipName} has sunk!`;
    typeWriter(text);
}

function typeWriter(text, i = 0) {
    if (i < text.length) {
        console.log(i);
        console.log(text[i]);
        status.innerHTML += text[i];
        i++;
        setTimeout(() => {typeWriter(text, i)}, 10);
    }
}
