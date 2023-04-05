import {gameboard} from './gameboard.js';
import {createShip} from './ship.js';

test('initializes gameboard to be 10 by 10 array', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    expect(newGameboard.position.length).toBe(10);
});

test('places ship on gameboard at [0,0]', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    let newShip = createShip(5, 'carrier');
    newGameboard.placeShip([0,0] , newShip, 'vertical');
    expect(newGameboard.position[0][0]).toBe(newShip);
});

test('place carrier (length = 5) vertically on gameboard spanning from [0,0] to [4,0]', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    let newShip = createShip(5, 'carrier');
    newGameboard.placeShip([0,0] , newShip, 'vertical');
    expect(newGameboard.position[0][0]).toBe(newShip);
    expect(newGameboard.position[1][0]).toBe(newShip);
    expect(newGameboard.position[2][0]).toBe(newShip);
    expect(newGameboard.position[3][0]).toBe(newShip);
    expect(newGameboard.position[4][0]).toBe(newShip);
});

test('place carrier (length = 5) horizontally on gameboard spanning from [0,0] to [0,4]', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    let newShip = createShip(5, 'carrier');
    newGameboard.placeShip([0,0] , newShip, 'horizontal');
    expect(newGameboard.position[0][0]).toBe(newShip);
    expect(newGameboard.position[0][1]).toBe(newShip);
    expect(newGameboard.position[0][2]).toBe(newShip);
    expect(newGameboard.position[0][3]).toBe(newShip);
    expect(newGameboard.position[0][4]).toBe(newShip);
});

test('does not allow placement of ships to be off the board: place carrier (length = 5) horizontally spanning from [6,0] to [10,0]', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    let newShip = createShip(5, 'carrier');
    expect(newGameboard.placeShip([6,0], newShip, 'horizontal')).toBeFalsy;
});

test('does not allow placement of ships to be off the board: place carrier (length = 5) vertically spanning from [6,0] to [10,0]', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard(10);
    let newShip = createShip(5, 'carrier');
    expect(newGameboard.placeShip([0,6], newShip, 'vertical')).toBeFalsy;
});
