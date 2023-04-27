export const player1Board = gameboard();
player1Board.createGameboard(10); // create gameboard size
export const computerBoard = gameboard();
computerBoard.createGameboard(10); // create gameboard size

export function gameboard() {
    return {
        position: [],
        shipLeft: 17,
        coordinatesHit: [], // tracks the hits on board
        createGameboard: function(size) {
            for (let i = 0; i <= size - 1; i++) {
                this.position[i] = [];
                for (let j = 0; j <= size - 1; j++) {
                    this.position[i][j] = null;
                }
            }
        },
        // places ship object in board array with given starting coordinate and orientation
        placeShip: function(startingCoord, shipObject, yAxis) {
            let xCoord = startingCoord[1];
            let yCoord = startingCoord[0];
            if (checkOutOfBounds(xCoord, yCoord, shipObject, yAxis) && checkExistShipPlacement(startingCoord, shipObject, yAxis, this.position)) {
                if (yAxis == true) { // for placing ships along y-axis
                    for (let i = 0; i < shipObject.length; i++) {
                        this.position[yCoord][xCoord] = shipObject;
                        yCoord = parseInt(yCoord) + 1;
                    }
                } else { // yAxis == false for placing ships along x-axis
                    for (let i = 0; i < shipObject.length; i++) {
                        this.position[yCoord][xCoord] = shipObject;
                        xCoord = parseInt(xCoord) + 1;
                    }
                }
                console.log('ship was placed');
                return true; // return true if ship placement is valid
            } else { // return false if ship placement is invalid
                console.log('ship was not placed');
                return false;
            }
        },
        // records 'missed' in board array if coordinate is null
        // records 'hit' in board array if coordinate is object (not null)
        // subtracts 1 to shipLeft when hit
        receiveAttack: function(coordinate) {
            this.coordinatesHit.push(coordinate);
            let xCoord = coordinate[1];
            let yCoord = coordinate[0];
            if (this.position[yCoord][xCoord] == null) {
                this.position[yCoord][xCoord] = 'missed';
            } else {
                this.position[yCoord][xCoord].hit(); // increases hitCount for ship object
                this.position[yCoord][xCoord] = 'hit';
                this.shipLeft--;
            }
        }
    }
};

// return true if the placement of the ship does not go off the board
function checkOutOfBounds(xCoord, yCoord, shipObject, yAxis) {
    if (yAxis === true) {
        if (parseInt(yCoord) + (shipObject.length - 1) > 9) { // shipObject.length - 1 because hover square is length 1
            return false;
        } else {
            return true;
        }
    } else { // yAxis === false, place ship horizontally
        if (parseInt(xCoord) + (shipObject.length - 1) > 9) { // shipObject.length - 1 because hover square is length 1
            return false;
        } else {
            return true;
        }
    }
}

// returns true if the placement of ship does not intersect already placed ships
function checkExistShipPlacement(startingCoord, shipObject, yAxis, position) {
    console.log(startingCoord);
    if (yAxis === true) {
        for (let i = 0; i <= shipObject.length - 1; i++) {
            let arrayId = String(parseInt(startingCoord) + (i * 10));
            if (arrayId < 10) { // parseInt removes the first 0 when coordinates are less than 10
                arrayId = '0' + arrayId; // add the first 0 back (00, 01, 02...)
            }
            if (position[arrayId[0]][arrayId[1]] !== null) {
                console.log('false');
                return false;
            }
        }
    } else { // yAxis === false, place ship horizontally
        for (let i = 0; i <= shipObject.length - 1; i++) {
            let arrayId = String(parseInt(startingCoord) + (i * 1));
            if (arrayId < 10) { // parseInt removes the first 0 when coordinates are less than 10
                arrayId = '0' + arrayId; // add the first 0 back (00, 01, 02...)
            }
            if (position[arrayId[0]][arrayId[1]] !== null) {
                console.log('false');
                return false;
            }
        }
    }
    return true;
}
