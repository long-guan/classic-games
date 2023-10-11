import { initializeBoard } from "./gameBoard.js";
import {updateModeStatus} from './mode.js';

// adds eventListeners to squares
initializeBoard();

// adds eventListener for changing modes
document.querySelector('.player').addEventListener('click', updateModeStatus);
document.querySelector('.computer').addEventListener('click', updateModeStatus);
