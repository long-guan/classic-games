export function placeHover(shipCount, square, yAxis) {
    let hoverSquareId = square.id;
    if (yAxis == true) {
        if (shipCount == 5) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 4) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 3) {
            yAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 2) {
            yAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Submarine (3)
        } else if (shipCount == 1) {
            yAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Destroyer (2)
        }
    } else { // yAxis == false
        if (shipCount == 5) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 4) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 3) {
            xAddHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 2) {
            xAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Submarine (3)
        } else if (shipCount == 1) {
            xAddHoverEffect(hoverSquareId, shipCount + 1); // shipCount + 1 for Destroyer (2)
        }
    }
}

// for y-axis
// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function yAddHoverEffect(hoverSquareId, shipCount) {
    for (let i = 1; i <= shipCount - 1; i++) {
        let newId = parseInt(hoverSquareId) + (i * 10);
        document.getElementById('' + newId).style.backgroundColor = 'gray';
        yRemoveHover(hoverSquareId, shipCount); // remove hover when leaving square
    }
}

// add listener to remove place-hover effect when the mouse moves out of the square
function yRemoveHover(hoverSquareId, shipCount) {
    document.getElementById('' + hoverSquareId).addEventListener('mouseleave', () => {
        for (let i = 1; i <= shipCount - 1; i++) {
            let newId = parseInt(hoverSquareId) + (i * 10);
            document.getElementById('' + newId).style.backgroundColor = '';
        }
    });
}

// for x-axis
// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function xAddHoverEffect(hoverSquareId, shipCount) {
    for (let i = 1; i <= shipCount - 1; i++) {
        let newId = parseInt(hoverSquareId) + (i * 1);
        if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
            newId = '0' + newId;
        }
        document.getElementById('' + newId).style.backgroundColor = 'gray';
        xRemoveHover(hoverSquareId, shipCount); // remove hover when leaving square
    }
}

// add listener to remove place-hover effect when the mouse moves out of the square
function xRemoveHover(hoverSquareId, shipCount) {
    document.getElementById('' + hoverSquareId).addEventListener('mouseleave', () => {
        for (let i = 1; i <= shipCount - 1; i++) {
            let newId = parseInt(hoverSquareId) + (i * 1);
            if (newId <= 9) { // for when y = 0 (00, 01, 02, 03, 04...)
                newId = '0' + newId;
            }
            document.getElementById('' + newId).style.backgroundColor = '';
        }
    });
}
