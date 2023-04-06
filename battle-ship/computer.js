export function computerMove() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

export function checkLegal(coordinatesHit) {
    let randomCoord = computerMove();
    for (let coordinate of coordinatesHit) {
        console.log(coordinate);
        console.log(randomCoord);
        if (coordinate[0] == randomCoord[0] && coordinate[1] == randomCoord[1]) {
            return checkLegal(coordinatesHit);
        }
    }
    return computerMove();
}
