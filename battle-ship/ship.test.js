import {createShip} from './ship.js';

test('adds 1 + 2 to equal 3', () => {
    let test = createShip(1, 2)
    expect(test.sum()).toBe(3);
});
