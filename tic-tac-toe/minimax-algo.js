export function minmax(board, sum) {

    // max


    // min
}

function convertDict2Arr(dictBoard) {
    let arrBoard = [];
    for (const [key, value] of Object.entries(dictBoard)) {
        arrBoard.push(value);
    }
    return arrBoard;
}

export function getNextMove(dictBoard) {
    let arrBoard = convertDict2Arr(dictBoard);
    minmax(arrBoard);
}
