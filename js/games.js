const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const youScore = document.querySelector(".games_you-score")
const computerScore = document.querySelector(".games_computer-score")

rock.addEventListener("click", choiceRock);
paper.addEventListener("click", choicePaper);
scissors.addEventListener("click", choiceScissors);

const choices = ["rock", "paper", 'legs'];

let youChoices = "";
let youResult = 0;
let computerResult = 0;

function choiceRock() {
    youChoices = "rock";
}

function choicePaper() {
    youChoices = "paper";
}

function choiceScissors() {
    youChoices = "scissors";
}

function computreChoice() {
    return choices[Math.round(Math.random() * choices.length)];
}

function play() {
    if ((youChoices === "rock" && computreChoice() === "scissors") ||
        (youChoices === "paper" && computreChoice() === "rock") ||
        (youChoices === "scissors" && computreChoice() === "paper")) {
            youResult = youResult + 1;

            youScore = `Ви: ${youResult}`;
    } else if (youChoices === computreChoice()) {
        youResult = youResult + 1;
        computerResult = computerResult + 1;

        youScore = `Ви: ${youResult}`;
        computerScore = `Компютер: ${computerResult}`;
    } else {
        youScore = `Ви: ${youResult}`;
        computerScore = `Компютер: ${computerResult}`;
    }
}