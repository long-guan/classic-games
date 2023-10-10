import {reset} from './reset.js'
import {updateNameInput} from './displayController.js'

const playerMode = document.querySelector('.player');
const computerMode = document.querySelector('.computer');

let playerModeStatus = true; // default mode
let computerModeStatus = false;

// changes appearance of the mode buttons and updates the status only when a different mode is clicked
// clicking the same mode that is already selected will do nothing
// turns off the other mode when new mode is selected
export function updateModeStatus() {
    if (this.classList.contains('selected') == false && playerModeStatus == false && this.classList.contains('player')) {
        this.classList.add('selected');
        playerModeStatus = true;
        computerMode.classList.remove('selected');
        computerModeStatus = false;
        changeModeSettings();
    } else if (this.classList.contains('selected') == false && computerModeStatus == false && this.classList.contains('computer')) {
        this.classList.add('selected');
        computerModeStatus = true;
        playerMode.classList.remove('selected');
        playerModeStatus = false;
        changeModeSettings();
    }
}

function changeModeSettings() {
    reset();
    updateNameInput(computerModeStatus);
}
