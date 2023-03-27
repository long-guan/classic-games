import {createImg} from '/classic-games/lazy-knight/selectBtn.js';

// animate the knight moving in 2 spaces in a given direction
function calculateTwoSpaces(direction) {
    let height = (document.querySelector('.board-cont').offsetHeight) - 3;
    let width = (document.querySelector('.board-cont').offsetWidth) - 3;
    let verticalDist = height / 8; // calculates distance to go vertically to get to center of square
    let horizontalDist = width / 8; // calculates distance to go horizontally to get to center of square
    if (direction == 'up') {
        return [{transform: `translate(0,-${2 * verticalDist}px)`}];
    } else if (direction == 'down') {
        return [{transform: `translate(0,${2 * verticalDist}px)`}];
    } else if (direction == 'left') {
        return [{transform: `translate(-${2 * horizontalDist}px)`}];
    } else { // direction = 'right'
        return [{transform: `translate(${2 * horizontalDist}px)`}];
    }
}

// animate the knight moving 1 space in a given direction
function calculateOneSpace(direction) {
    let height = (document.querySelector('.board-cont').offsetHeight) - 3;
    let width = (document.querySelector('.board-cont').offsetWidth) - 3;
    let verticalDist = height / 8; // calculates distance to go vertically to get to center of square
    let horizontalDist = width / 8; // calculates distance to go horizontally to get to center of square
    if (direction == "up") {
        return [{transform: `translate(0,-${verticalDist}px)`}];
    } else if (direction == 'down') {
        return [{transform: `translate(0,${verticalDist}px)`}];
    } else if (direction == 'left') {
        return [{transform: `translate(-${horizontalDist}px)`}];
    } else { // right
        return [{transform: `translate(${horizontalDist}px)`},];
    }
}

// move up 2 spaces and right 1 space
export function moveLUpRight() {
    let knight = document.querySelector('.knight');
    knight.animate(calculateTwoSpaces('up'), 500);
    setTimeout(() => {
        let currentId = knight.parentNode.id;
        knight.parentNode.innerHTML = ''; // removes current knight
        let newId = String(parseInt(currentId) + 20); // gets Id of 2 squares above current square
        document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        knight = document.querySelector('.knight');
        knight.animate(calculateOneSpace('right'), 250);
        setTimeout(() => {
            currentId = knight.parentNode.id;
            knight.parentNode.innerHTML = '';
            newId = String(parseInt(currentId) + 1);
            document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        }, 250)
    }, 500);
}

// algorithm for showing animation of a knight moving 2 spaces up or down and 1 space left or right
// 1) animates up or down movement
// 2) at the end of up or down animation, remove knight at starting location and add knight at the new location
// 3) animate left or right movement
// 4) remove knight at starting location and add knight at the new location
// argument vertical moves knight 2 squares up or down
// argument horizontal moves knight 1 square left or right
// argument totalDuration is total duration from start to finish
export function move2V1H(vertical, horizontal, totalDuration) {
    let duration = totalDuration / 3;
    let knight = document.querySelector('.knight');
    knight.animate(calculateTwoSpaces(vertical), duration * 2); // move 2 spaces up or donw
    setTimeout(() => { // up and down movement
        let currentId = knight.parentNode.id;
        console.log(currentId);
        knight.parentNode.innerHTML = ''; // removes current knight
        let newId = '';
        if (vertical == 'up') {
            newId = String(parseInt(currentId) + 2); // gets Id of 2 squares above current square
            if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                newId = '0' + newId;
            }
        } else { // vertical = 'down'
            newId = String(parseInt(currentId) - 2); // gets Id of 2 squares above current square
            if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                newId = '0' + newId;
            }
        }
        document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        knight = document.querySelector('.knight');
        knight.animate(calculateOneSpace(horizontal), duration);
        setTimeout(() => { // left or right movement
            currentId = knight.parentNode.id;
            knight.parentNode.innerHTML = ''; // removes current knight
            if (horizontal == 'left') {
                newId = String(parseInt(currentId) - 10);
                if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                    newId = '0' + newId;
                }
            } else { // horizontal = 'right'
                newId = String(parseInt(currentId) + 10)
            }
            document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        }, duration)
    }, duration * 2);
}

// algorithm for showing animation of a knight moving 2 spaces left or right and 1 space up or down
// 1) animates left or right movement
// 2) at the end of left or right animation, remove knight at starting location and add knight at the new location
// 3) animate up or down movement
// 4) remove knight at starting location and add knight at the new location
// argument vertical moves knight 1 square up or down
// argument horizontal moves knight 2 squares left or right
// argument totalDuration is total duration from start to finish
export function move2H1V(horizontal, vertical, totalDuration) {
    let knight = document.querySelector('.knight');
    let duration = totalDuration / 3;
    knight.animate(calculateTwoSpaces(horizontal), duration * 2); // move 2 spaces up or down
    setTimeout(() => { // up and down movement
        let currentId = knight.parentNode.id;
        console.log(currentId);
        knight.parentNode.innerHTML = ''; // removes current knight
        let newId = '';
        if (horizontal == 'left') {
            newId = String(parseInt(currentId) - 20); // gets Id of 2 squares left of current square
            if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                newId = '0' + newId;
            }
        } else { // horizontal = 'right'
            newId = String(parseInt(currentId) + 20); // gets Id of 2 squares right of current square
            if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                newId = '0' + newId;
            }
        }
        document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        knight = document.querySelector('.knight');
        knight.animate(calculateOneSpace(vertical), duration);
        setTimeout(() => { // up or down movement
            currentId = knight.parentNode.id;
            knight.parentNode.innerHTML = ''; // removes current knight
            if (vertical == 'up') {
                newId = String(parseInt(currentId) + 1);
                if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                    newId = '0' + newId;
                }
            } else { // vertical = 'down'
                newId = String(parseInt(currentId) - 1)
                if (newId < 10) { // squares with ID under 10 are 01, 02, 03... need to add 0
                    newId = '0' + newId;
                }
            }
            document.getElementById(newId).appendChild(createImg('/classic-games/image/chess-knight.svg', 'knight'));
        }, duration)
    }, duration * 2);
}
