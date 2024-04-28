const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultSpan = document.querySelector(".games_span");
const scoreSpan = document.querySelector(".games_score");
const startButton = document.querySelector(".games_get-button");

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", choicesRock);

function choicesRock() {
    started("rock");
}

paperButton.addEventListener("click", paperChoice);

function paperChoice() {
    started("paper");
}

// scissorsButton.addEventListener("click", scissorsChoice);

function scissorsChoice() {
    started("scissors");
}
function started(choice){
    startButton.addEventListener("click", () => {
        playStart(choice)
    });
}


function playStart(youChoice) {

    if (youChoice === competerChoice()) {
        resultSpan.textContent = "Нічия!";
        resultSpan.style.color = "#000000";

    } else if (
        (youChoice === "rock" && competerChoice() === "scissors") ||
        (youChoice === "paper" && competerChoice() === "rock") ||
        (youChoice === "scissors" && competerChoice() === "paper")
    ) {
        resultSpan.textContent = "Ви виграли раунд!";
        resultSpan.style.color = "#039900";
        playerScore++;
    } else {
        resultSpan.textContent = "Комп'ютер виграв раунд!";
        resultSpan.style.color = "#990000";
        computerScore++;
    }
    updateScore();

}

function competerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function updateScore() {
    scoreSpan.textContent = ` Рахунок:
    Комп’ютер: ${computerScore}
    Ви: ${playerScore}`;
}