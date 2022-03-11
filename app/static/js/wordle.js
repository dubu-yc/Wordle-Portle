const num_guesses = 6;

function initBoard() {
    let board = document.getElementById("wordle-board");
    for (let i = 0; i < num_guesses; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initBoard()