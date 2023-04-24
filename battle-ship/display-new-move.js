// takes in gameboard data and displays the new ship placement
export function displayShipPlacement(gameboard) {
    console.log(gameboard.position);
    for (let i = 0; i < gameboard.position.length; i++) {
        for (let j = 0; j < gameboard.position[i].length; j++) {
            if (gameboard.position[i][j] !== null) {
                document.getElementById('' + i + '' + j).style.backgroundColor = 'black';
                console.log(gameboard.position[i][j]);
            }
        }
    }
}
