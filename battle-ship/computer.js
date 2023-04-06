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
