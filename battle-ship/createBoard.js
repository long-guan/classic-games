export function createBoard(contName, titleName) {
    createSubBoardCont(contName);
    if (titleName !== undefined) { // if no titleName, don't include title
        createTitle(contName, titleName);
    }
    createSquareCont(contName);
    createSquares(contName)
}


export function createSvgBoard(contName, titleName) {
    createBoard(contName, titleName);
    let svgBoard = document.querySelector('.' + contName);
    svgBoard.classList.add("absolute");
    let svgSquares = document.querySelectorAll('.' + contName + "-square>div");
    Array.from(svgSquares).forEach(square => {
        square.remove();
    });
}

// creates a sub-container for a player or computer
function createSubBoardCont(contName) {
    let boardCont = document.querySelector('.board-cont');
    let subBoardCont = document.createElement('div');
    subBoardCont.classList.add(`${contName}`);
    boardCont.appendChild(subBoardCont);
}

// create title of board and adds it to sub-container
function createTitle(contName, titleName) {
    let newTitle = document.createElement('h3');
    newTitle.innerHTML = `${titleName}`;
    let subBoardCont = document.querySelector('.' + contName);
    subBoardCont.appendChild(newTitle);
}

// creates square board container and adds it to the sub-container
function createSquareCont(contName) {
    let subBoardCont = document.querySelector('.' + contName);
    let div = document.createElement('div');
    div.classList.add('board-style');
    div.classList.add(`${contName}-square`);
    subBoardCont.appendChild(div);
}

// creates squares with ID corresponding to its coordinate
function createSquares(contName) {
    let subBordCont = document.querySelector('.' + contName + '-square');
    for (let i = 0; i < 100; i++) {
        if (i <= 9) { // to get 2 digits for when y = 0 (00, 01, 02, 03...)
            i = '0' + i;
        }
        let div = document.createElement('div');
        div.setAttribute('id', `${i}`);
        div.classList.add('square');
        div.classList.add('hover');
        subBordCont.appendChild(div);
    }
}
