export function displayController() {
    const status = document.querySelector(".status");
    const player1Input = document.querySelector(".player1");
    const player2Input = document.querySelector(".player2");

    player1Input.addEventListener("input", updateStatusTurn);
    player2Input.addEventListener("input", updateStatusTurn);

    function turn() {
        this.innerHTML = counter.xOrO();
    }

    function resetDisplay() {
        for (let square of gameBoard.eventArray) {
            square.innerHTML = "";
        }
        if (player1Input.value == "") {
            status.innerHTML = "Player 1's Turn";
        } else {
            status.innerHTML = String(player1Input.value) + "'s Turn";
        }
    }

    function updateStatusWon() {
        if (counter.winner() == "player1Won") {
            if (player1Input.value == "") {
                status.innerHTML = "Player 1 Won!";
            } else {
                status.innerHTML = String(player1Input.value) + " Won!";
            }
        } else {
            if (player2Input.value == "") {
                status.innerHTML = "Player 2 Won!";
            } else {
                status.innerHTML = String(player2Input.value) + " Won!";
            }
        }
    }

    function updateStatusTurn() {
        if (counter.tie() != true) {
            if (counter.turn() == "player1Turn") {
                if (player1Input.value == "") {
                    status.innerHTML = "Player 1's Turn";
                } else {
                    status.innerHTML = String(player1Input.value) + "'s Turn";
                }
            } else {
                if (player2Input.value == "") {
                    status.innerHTML = "Player 2's Turn";
                } else {
                    status.innerHTML = String(player2Input.value) + "'s Turn";
                }
            }
        }
    }

    function updateStatusTie() {
        status.innerHTML = "It's a Tie!";
    }
};
