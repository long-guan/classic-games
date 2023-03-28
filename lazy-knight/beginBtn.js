import {removeSelectStyling} from '/classic-games/lazy-knight/selectBtn.js';
import {buildTree} from '/classic-games/lazy-knight/buildTree.js';
import {getMoves} from '/classic-games/lazy-knight/traverseTree_kt.js';
import {displaySteps} from '/classic-games/lazy-knight/displaySteps.js';

let squares = document.querySelectorAll('.board-cont>div');

// remove Select Start and Select End btn styling
// obtain coordinates via the id of the square
// input start and end coordinates to build the tree of possible moves
// traverse tree to find fastest route
// will only run if both start and end marker are marked and returnCoordinates is not false
export function begin() {
    removeSelectStyling();
    let startEndCoord = returnCoordinates(); // finds start and end coordinates
    if (startEndCoord !== false) {
        let startCoord = [parseInt(startEndCoord[0][0]), parseInt(startEndCoord[0][1])];
        let endCoord = [parseInt(startEndCoord[1][0]), parseInt(startEndCoord[1][1])];
        buildTree(startCoord, endCoord); // builds tree
        displaySteps(getMoves(startCoord, endCoord)); // getMoves returns the moves required, displaySteps displays the steps on board
    }
}

// find coordinates of start marker and end marker via the square element id
// returns false if there isn't a start marker or end marker
function returnCoordinates() {
    let coordinates = [];
    for (let square of squares) {
        if (square.hasChildNodes()) {
            if (square.firstChild.classList.contains('knight')) {
                coordinates[0] = square.id;
            } else if (square.firstChild.classList.contains('end-marker')) {
                coordinates[1] = square.id;
            }
        }
    }
    if (coordinates.length !== 2) {
        return false;
    } else {
        return coordinates;
    }
}
