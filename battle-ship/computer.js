import {createShip} from '/classic-games/battle-ship/ship.js';

// return random array ranging from [0,0] to [9,9]
export function returnRandMove() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

// iterates through coordinatesHit array to check if the coordinates have already been hit
export function returnLegalMove(coordinatesHit) {
    let randomCoord = returnRandMove();
    for (let coordinate of coordinatesHit) {
        if (coordinate[0] == randomCoord[0] && coordinate[1] == randomCoord[1]) {
            return returnLegalMove(coordinatesHit);
        }
    }
    return randomCoord;
}

// randomly place computer ships
export function placeComputerShips(computerBoard) {
    for (let i = 5; i >= 1; i--) {
        if (i == 5) {
            let carrier = createShip(5, 'Carrier');
            recursivelyPlaceShip(carrier, computerBoard);
        } else if (i == 4) {
            let battleship = createShip(4, 'Battleship');
            recursivelyPlaceShip(battleship, computerBoard);
        } else if (i == 3) {
            let cruiser = createShip(3, 'Cruiser');
            recursivelyPlaceShip(cruiser, computerBoard);
        } else if (i == 2) {
            let submarine = createShip(3, 'Submarine');
            recursivelyPlaceShip(submarine, computerBoard);
        } else { // i === 1
            let destroyer = createShip(2, 'Destroyer');
            recursivelyPlaceShip(destroyer, computerBoard);
        }
    }
}

// randomly generate starting coordinate of ship placement and check if random coordinate will yield valid placement
function recursivelyPlaceShip(ship, computerBoard) {
    let randomCoordArray = returnRandMove(); // get random array ranging from [0,0] to [9,9]
    let randomCoordString = randomCoordArray[0] + '' + randomCoordArray[1]; // convert to string
    if (computerBoard.placeShip(randomCoordString, ship, returnTrueOrFalse()) === false) {
        recursivelyPlaceShip(ship, computerBoard);
    }
}

// used to randomize the vertical or horizontal orientation of ship
function returnTrueOrFalse() {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum  <= 4) {
        return true;
    } else {
        return false;
    }
}
