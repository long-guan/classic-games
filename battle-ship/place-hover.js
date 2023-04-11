export function placeHover(shipCount, square, yAxis) {
    if (yAxis == true) {
        let hoverSquareId = square.id;
        if (shipCount == 5) {
            yHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 4) {
            yHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 3) {
            yHoverEffect(hoverSquareId, shipCount);
        } else if (shipCount == 2) {
            yHoverEffect(hoverSquareId, shipCount);
        }
    }
}

// adds the place-hover effect for the ships for when mouse hovers over square
// removes the place-hover effect once the mouse leaves the hoverSquareId
function yHoverEffect(hoverSquareId, shipCount) {
    for (let i = 1; i <= shipCount - 1; i++) {
        let newId = parseInt(hoverSquareId) + (i * 10);
        document.getElementById('' + newId).style.backgroundColor = 'red';
        document.getElementById('' + hoverSquareId).addEventListener('mouseleave', () => {
            for (let i = 1; i <= shipCount - 1; i++) {
                let newId = parseInt(hoverSquareId) + (i * 10);
                document.getElementById('' + newId).style.backgroundColor = '';
            }
        });
    }
}
