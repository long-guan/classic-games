import {createShip} from './ship.js';

let firstHit = null
let lastMove = null; // null means computer has not landed a hit
let downOne = {
    "attempt": false,
    "hit": null,
    "continue": null
};
let upOne = {
    "attempt": false,
    "hit": null,
    "continue": null
};
let leftOne = {
    "attempt": false,
    "hit": null,
    "continue": null
};
let rightOne = {
    "attempt": false,
    "hit": null,
    "continue": null
};

// updates boolean logic for continuing to attack adjacent coordinates until ship is sunken
export function hitFeedback(lastMoveOnBoard, hitBool, sunkBool=false) {
    // console.log("lastMoveOnBoard: ", lastMoveOnBoard);
    // console.log("hitBool: ", hitBool);
    // console.log("sunkBool: ", sunkBool);
    if (sunkBool === true) { // reset variables after ship has sunk
        firstHit = null; // null means computer has not landed a hit
        lastMove = null;
        downOne = {
            "attempt": false,
            "hit": null,
            "continue": null
        };
        upOne = {
            "attempt": false,
            "hit": null,
            "continue": null
        };
        leftOne = {
            "attempt": false,
            "hit": null,
            "continue": null
        };
        rightOne = {
            "attempt": false,
            "hit": null,
            "continue": null
        };
        // console.log(upOne, downOne, leftOne, rightOne);
    } else if (hitBool === true) {
        if (firstHit === null) {
            firstHit = lastMoveOnBoard;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (downOne.attempt === true && downOne.hit === null) { // true and null when first attempting that direction
            downOne.hit = true;
            lastMove = lastMoveOnBoard;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (upOne.attempt === true && upOne.hit === null) {
            upOne.hit = true;
            lastMove = lastMoveOnBoard;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (leftOne.attempt === true && leftOne.hit === null) {
            leftOne.hit = true;
            lastMove = lastMoveOnBoard;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (rightOne.attempt === true && rightOne.hit === null) {
            rightOne.hit = true;
            lastMove = lastMoveOnBoard;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else {
            lastMove = lastMoveOnBoard;
        }
    } else { // hitBool === false
        if (downOne.attempt === true && downOne.hit === null) { // true and null when first attempting that direction
            downOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (upOne.attempt === true && upOne.hit === null) {
            upOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (leftOne.attempt === true && leftOne.hit === null) {
            leftOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (rightOne.attempt === true && rightOne.hit === null) {
            rightOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (downOne.attempt === true && downOne.hit === true) { // true and true when attempting that direction landed a hit
            downOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (upOne.attempt === true && upOne.hit === true) {
            upOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (leftOne.attempt === true && leftOne.hit === true) {
            leftOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        } else if (rightOne.attempt === true && rightOne.hit === true) {
            rightOne.hit = false;
            lastMove = firstHit;
            // console.log(upOne, downOne, leftOne, rightOne);
        }
    }
}

// iterates through coordinatesHit array to check if the coordinates have already been hit
// recursively repeats until a legal move is obtained
export function returnLegalMove(coordinatesHit) {
    if (firstHit === null) { // return random coordinate if computer has not landed a hit
        let randomCoord = returnRandMove(); // gets a random coordinate
        for (let coordinate of coordinatesHit) { // looks through the board and checks if coordinates has been hit
            if (coordinate[0] == randomCoord[0] && coordinate[1] == randomCoord[1]) {
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        }
        return randomCoord;
    } else { // computer has landed a hit, so continue attacking until ship is sunken
        let nextMove = null;
        if (lastMove === null) {
            lastMove = firstHit;
        }
        if (downOne.attempt === true && downOne.hit === true) { // true and true when attacking an adjacent coord lands a hit
            nextMove = [lastMove[0] + 1, lastMove[1]];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                console.log("downOne");
                downOne.hit = false;
                lastMove = firstHit;
                console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (upOne.attempt === true && upOne.hit === true) {
            nextMove = [lastMove[0] - 1, lastMove[1]];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                console.log("upOne");
                upOne.hit = false;
                lastMove = firstHit;
                console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (leftOne.attempt === true && leftOne.hit === true) {
            nextMove = [lastMove[0], lastMove[1] - 1];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                // console.log("leftOne");
                leftOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (rightOne.attempt === true && rightOne.hit === true) {
            nextMove = [lastMove[0], lastMove[1] + 1];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                console.log("rightOne");
                rightOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (downOne.attempt === false) {
            downOne.attempt = true;
            nextMove = [lastMove[0] + 1, lastMove[1]];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                // console.log("downOne");
                downOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (upOne.attempt === false) {
            upOne.attempt = true;
            nextMove = [lastMove[0] - 1, lastMove[1]];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                // console.log("upOne");
                upOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (leftOne.attempt === false) {
            leftOne.attempt = true;
            nextMove = [lastMove[0], lastMove[1] - 1];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                // console.log("leftOne");
                leftOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        } else if (rightOne.attempt === false) {
            rightOne.attempt = true;
            nextMove = [lastMove[0], lastMove[1] + 1];
            // console.log(nextMove);
            if (withinBounds(nextMove, coordinatesHit) === false) {
                // console.log("rightOne");
                rightOne.hit = false;
                lastMove = firstHit;
                // console.log(upOne, downOne, leftOne, rightOne);
                return returnLegalMove(coordinatesHit); // recursively repeats
            }
        }
        return nextMove;
    }

}

// return true if move is not off the board and see if the move is already attacked
function withinBounds(nextMove, coordinatesHit) {
    for (let coordinate of coordinatesHit) { // looks through the board and checks if coordinates has been hit
        if (coordinate[0] == nextMove[0] && coordinate[1] == nextMove[1]) {
            return false;
        }
    }
    if (nextMove[0] <= 9 && nextMove[0] >= 0 && nextMove[1] <= 9 && nextMove[1] >= 0) {
        return true;
    } else {
        return false;
    }
}

// return random array ranging from [0,0] to [9,9]
export function returnRandMove() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
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
    };
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
