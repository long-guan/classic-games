// returns true if the length of the ship will fit on board
export function checkValidHover(coord, shipCount) {
    if (parseInt(coord) + (shipCount - 1) > 9) { // shipCount - 1 since hover square is length 1, only need to add remaining length
        return false;
    } else {
        return true;
    }
}

// show invalid ship placement: updates background color to red and adds not allowed cursor
export function showInvalidHover(hoverSquareId) {
    let hoverSquare = document.getElementById(`${hoverSquareId}`);
    hoverSquare.style.backgroundColor = 'red';
    hoverSquare.style.cursor = 'not-allowed';
    hoverSquare.addEventListener('mouseleave', () => { // removes invalid hover when leaving square
        hoverSquare.style.backgroundColor = '';
        hoverSquare.style.cursor = '';
    });
}
