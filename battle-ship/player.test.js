import {player} from './player.js';

test('inputs the player name', () => {
    let player1 = player('Ashley');
    expect(player1.name).toBe('Ashley');
});
