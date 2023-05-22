import {clearAndTypeStatus} from "/classic-games/battle-ship/attack-phase-loop-status.js"

export function updatePlaceShipStatus(shipCount, player1Name) {
    if (shipCount === 5) {
        let placeShipText = `${player1Name}, place your Carrier`;
        console.log('ran')
        clearAndTypeStatus(placeShipText);
    } else if (shipCount === 4) {
        let placeShipText = `${player1Name}, place your Battleship`;
        clearAndTypeStatus(placeShipText);
    } else if (shipCount === 3) {
        let placeShipText = `${player1Name}, place your Cruiser`;
        clearAndTypeStatus(placeShipText);
    } else if (shipCount === 2) {
        let placeShipText = `${player1Name}, place your Submarine`;
        clearAndTypeStatus(placeShipText);
    } else if (shipCount === 1) {
        let placeShipText = `${player1Name}, place your Destroyer`;
        clearAndTypeStatus(placeShipText);
    }
}
