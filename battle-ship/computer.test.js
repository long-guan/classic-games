import {returnRandMove, returnLegalMove} from './computer.js';
import {gameboard} from './gameboard.js';

test('computer randomizes a coordinate that is on the board', () => {
    let randomMove = returnRandMove();
    expect(randomMove[0] <= 9).toBeTruthy();
    expect(randomMove[1] <= 9).toBeTruthy();
});

test('checkLegal: checks that the random generated coordinate is not shooting the same coordinate. If "TypeError: this.position[yCoord][xCoord].hit is not a function" appears, this means it is shooting the same coordinate', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    for (let i = 1; i <= 75; i++) { //generate 70 random hits on the board
        let newCoordinate = returnLegalMove(newGameboard.coordinatesHit)
        newGameboard.receiveAttack(newCoordinate);
    };
    let numOfHit = 0;
    for (let i = 0; i <= 9; i++) { // count the number of hits on the board
        for (let j = 0; j <= 9; j++) {
            if (newGameboard.position[i][j] !== null) {
                numOfHit++;
            }
        }
    };
    expect(numOfHit).toBe(75);
});
