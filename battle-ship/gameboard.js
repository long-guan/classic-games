

export function gameboard() {
    return {
        position: [],
        createGameboard: function(size) {
            for (let i = 0; i <= size - 1; i++) {
                this.position[i] = [];
                for (let j = 0; j <= size - 1; j++) {
                    this.position[i][j] = null;
                }
            }
        },
        // places ship object in board array with given starting coordinate and orientation
        placeShip: function(startingCoord, shipObject, axis) {
            let xCoord = startingCoord[1];
            let yCoord = startingCoord[0];
            if (checkValidPlacement(xCoord, yCoord, shipObject, axis)) {
                if (axis == 'vertical') {
                    for (let i = 0; i < shipObject.length; i++) {
                        this.position[yCoord][xCoord] = shipObject;
                        yCoord += 1;
                    }
                    console.log(this.position);
                } else { // axis == 'horizontal'
                    for (let i = 0; i < shipObject.length; i++) {
                        this.position[yCoord][xCoord] = shipObject;
                        xCoord += 1;
                    }
                }
            } else {
                return false;
            }
        }
    }
};

// return true if the placement of the ship does not go off the board
function checkValidPlacement(xCoord, yCoord, shipObject, axis) {
    if (axis == 'vertical') {
        if (yCoord + shipObject.length > 9) {
            return false;
        } else {
            return true;
        }
    } else {
        if (xCoord + shipObject.length > 9) {
            return false;
        } else {
            return true;
        }
    }
}
