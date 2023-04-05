import { initializeBoard } from "/classic-games/tic-tac-toe/gameBoard.js";
import {updateModeStatus} from '/classic-games/tic-tac-toe/mode.js';

// adds eventListeners to squares
initializeBoard();

// adds eventListener for changing modes
document.querySelector('.player').addEventListener('click', updateModeStatus);
document.querySelector('.computer').addEventListener('click', updateModeStatus);

























































// const counter = (() => {
//     let _moveCount = 0;

//     function addCount() {
//         _moveCount++;
//         console.log(_moveCount);
//     }

//     // alternate X and O
//     function xOrO() {
//         if (_moveCount % 2 == 0) {
//             return "X";
//         } else {
//             return "O";
//         }
//     }

//     // returns which player won
//     function winner() {
//         if (_moveCount % 2 == 0) {
//             return "player2Won";
//         } else {
//             return "player1Won";
//         }
//     }

//     function turn() {
//         if (_moveCount % 2 == 0) {
//             return "player1Turn";
//         } else {
//             return "player2Turn";
//         }
//     }

//     function reset() {
//         _moveCount = 0;
//     }

//     function tie() {
//         if (_moveCount == 9) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     function zero() {
//         if (_moveCount == 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     return {
//         addCount,
//         xOrO,
//         winner,
//         reset,
//         turn,
//         tie,
//         zero
//     }
// })();

// const displayController = (() => {
//     const status = document.querySelector(".status");
//     const player1Input = document.querySelector(".player1");
//     const player2Input = document.querySelector(".player2");

//     player1Input.addEventListener("input", updateStatusTurn);
//     player2Input.addEventListener("input", updateStatusTurn);

//     function turn() {
//         this.innerHTML = counter.xOrO();
//     }

//     function resetDisplay() {
//         for (let square of gameBoard.eventArray) {
//             square.innerHTML = "";
//         }
//         if (player1Input.value == "") {
//             status.innerHTML = "Player 1's Turn";
//         } else {
//             status.innerHTML = String(player1Input.value) + "'s Turn";
//         }
//     }

//     function updateStatusWon() {
//         if (counter.winner() == "player1Won") {
//             if (player1Input.value == "") {
//                 status.innerHTML = "Player 1 Won!";
//             } else {
//                 status.innerHTML = String(player1Input.value) + " Won!";
//             }
//         } else {
//             if (player2Input.value == "") {
//                 status.innerHTML = "Player 2 Won!";
//             } else {
//                 status.innerHTML = String(player2Input.value) + " Won!";
//             }
//         }
//     }

//     function updateStatusTurn() {
//         if (counter.tie() != true) {
//             if (counter.turn() == "player1Turn") {
//                 if (player1Input.value == "") {
//                     status.innerHTML = "Player 1's Turn";
//                 } else {
//                     status.innerHTML = String(player1Input.value) + "'s Turn";
//                 }
//             } else {
//                 if (player2Input.value == "") {
//                     status.innerHTML = "Player 2's Turn";
//                 } else {
//                     status.innerHTML = String(player2Input.value) + "'s Turn";
//                 }
//             }
//         }
//     }

//     function updateStatusTie() {
//         status.innerHTML = "It's a Tie!";
//     }

//     return {
//        turn,
//        resetDisplay,
//        updateStatusWon,
//        updateStatusTurn,
//        updateStatusTie
//     }
// })();


// const gameBoard = (() => {
//     const board = {topLeft: "0", topMid: "1", topRight: "2", midLeft: "3", midMid: "4", midRight: "5", botLeft: "6", botMid: "7", botRight: "8"};

//     const square0 = document.querySelector('.square0');
//     const square1 = document.querySelector('.square1');
//     const square2 = document.querySelector('.square2');
//     const square3 = document.querySelector('.square3');
//     const square4 = document.querySelector('.square4');
//     const square5 = document.querySelector('.square5');
//     const square6 = document.querySelector('.square6');
//     const square7 = document.querySelector('.square7');
//     const square8 = document.querySelector('.square8');
//     const resetBtn = document.querySelector(".reset");
//     const eventArray = [square0, square1, square2, square3, square4, square5, square6, square7, square8];

//     // matches class name of UI to board and returns the key
//     function _returnKey(className) {
//         for (let [key, value] of Object.entries(board)) {
//             if (value == className) {
//                 return key;
//             }
//         }
//     }

//     // checks for 3 in a row
//     function _checkWin() {
//         let topLeft = board.topLeft;
//         let topMid = board.topMid;
//         let topRight = board.topRight;
//         let midLeft = board.midLeft;
//         let midMid = board.midMid;
//         let midRight = board.midRight;
//         let botLeft = board.botLeft;
//         let botMid = board.botMid;
//         let botRight = board.botRight;
//         // horizontal wins
//         if (topLeft == board.topMid && topLeft == topRight) {
//             square0.classList.add("blue-background");
//             square1.classList.add("blue-background");
//             square2.classList.add("blue-background");
//             removeGameOver();
//         } else if (midLeft == midMid && midLeft == midRight) {
//             square3.classList.add("blue-background");
//             square4.classList.add("blue-background");
//             square5.classList.add("blue-background");
//             removeGameOver();
//         } else if (botLeft == botMid && botLeft == botRight) {
//             square6.classList.add("blue-background");
//             square7.classList.add("blue-background");
//             square8.classList.add("blue-background");
//             removeGameOver();
//         // vertical wins
//         } else if (topMid == midMid && topMid == botMid) {
//             square0.classList.add("blue-background");
//             square3.classList.add("blue-background");
//             square6.classList.add("blue-background");
//             removeGameOver();
//         } else if (topRight == midRight && topRight == botRight) {
//             square1.classList.add("blue-background");
//             square4.classList.add("blue-background");
//             square7.classList.add("blue-background");
//             removeGameOver();
//         }  else if (topLeft == midLeft && topLeft == botLeft) {
//             square2.classList.add("blue-background");
//             square5.classList.add("blue-background");
//             square8.classList.add("blue-background");
//             removeGameOver();
//         // diagonal wins
//         } else if (topLeft == midMid && topLeft == botRight) {
//             square0.classList.add("blue-background");
//             square4.classList.add("blue-background");
//             square8.classList.add("blue-background");
//             removeGameOver();
//         } else if (topRight == midMid && topRight == botLeft) {
//             square2.classList.add("blue-background");
//             square4.classList.add("blue-background");
//             square6.classList.add("blue-background");
//             removeGameOver();
//         } else if (counter.tie() == true) {
//             displayController.updateStatusTie();
//         } else {
//             displayController.updateStatusTurn();
//         }
//     }

//     resetBtn.addEventListener("click", reset);

//     // sets key to correspond to index
//     function resetBoard() {
//         let index = 0;
//         for (let [key, value] of Object.entries(board)) {
//             board[key] = index;
//             index++;
//         }
//     }

//     // reset everything and readd eventListeners
//     function reset() {
//         resetBoard();
//         displayController.resetDisplay();
//         removeListener();
//         addListeners();
//         addHover();
//         counter.reset();
//         resetBackground();
//     }

//     function resetBackground() {
//         for (let square of eventArray) {
//             square.classList.remove("blue-background");
//         }
//     }

//     // updates board after a move
//     function _updateData(className) {
//         board[_returnKey(className)] = counter.xOrO();
//     }


//     // remove all eventListeners
//     function removeListener() {
//         for (let square of eventArray) {
//             square.removeEventListener("click", addClickEvents);
//             square.removeEventListener("click", displayController.turn);
//         }
//     }

//     // add eventListeners
//     function addListeners() {
//         for (let event of eventArray) {
//             event.addEventListener('click', displayController.turn, {once: true});
//             event.addEventListener('click', addClickEvents, {once:true});
//         };
//     }

//     // add hover if square doesn't have hover class
//     function addHover() {
//         for (let event of eventArray) {
//             if (event.classList.contains("hover")) {
//                 continue;
//             } else {
//                 event.classList.add("hover");
//             }
//         };
//     }

//     // when game is won, remove all game inputs
//     function removeGameOver() {
//         removeHover();
//         removeListener();
//         displayController.updateStatusWon();
//     }

//     // remove hover for all squares
//     function removeHover() {
//         for (let event of eventArray) {
//             if (event.classList.contains("hover")) {
//                 event.classList.remove("hover");
//             } else {
//                 continue;
//             }
//         };
//     }

//     // once clicked, remove hover, update board, and check for win
//     function addClickEvents() {
//         this.classList.remove('hover');
//         _updateData(this.className[6]);
//         counter.addCount();
//         _checkWin();
//     }

//     // initializes event listeners
//     for (let event of eventArray) {
//         event.addEventListener('click', displayController.turn, {once: true});
//         event.addEventListener('click', addClickEvents, {once:true});
//     };

//     return {
//         eventArray,
//         board
//     };
// })();
