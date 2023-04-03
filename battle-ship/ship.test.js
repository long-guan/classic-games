import {createShip} from './ship.js';

test('adds length to ship object', () => {
    let newShip = createShip(5)
    expect(newShip.length).toBe(5);
});

test('adds hit counter to be equal 0 when ship is created', () => {
    let newShip = createShip(3);
    expect(newShip.hitCount).toBe(0);
});

test('adds hit() function to increase the hit counter by 1', () => {
    let newShip = createShip(3);
    newShip.hit();
    expect(newShip.hitCount).toBe(1);
});

test('adds isSunk() function to check if ship is sunken', () => {
    let newShip = createShip(2);
    newShip.hit();
    newShip.hit();
    expect(newShip.isSunk()).toBe(true);
});
