import {gameboard} from './gameboard.js';

test('initializes gameboard to be 10 by 10 array', () => {
    let newGameboard = gameboard();
    newGameboard.createGameboard();
    expect(newGameboard.position.length).toBe(10);
});
