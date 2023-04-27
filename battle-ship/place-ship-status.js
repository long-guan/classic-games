let status = document.querySelector('.status');

export function updatePlaceShipStatus(shipCount, player1Name) {
    if (shipCount === 5) {
        status.innerHTML = `${player1Name}, place your Carrier`;
    } else if (shipCount === 4) {
        status.innerHTML = `${player1Name}, place your Battleship`;
    } else if (shipCount === 3) {
        status.innerHTML = `${player1Name}, place your Cruiser`;
    } else if (shipCount === 2) {
        status.innerHTML = `${player1Name}, place your Submarine`;
    } else if (shipCount === 1) {
        status.innerHTML = `${player1Name}, place your Destroyer`;
    }
}
