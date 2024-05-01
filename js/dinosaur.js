const games = document.querySelector(".dinosaur_game");
const dinosaur = document.querySelector(".dinosaur_img");
const cactus = document.querySelector(".dinosaur_cactus");
const modal = document.querySelector(".dinosaur_backdrop");
const closeButton = document.querySelector(".dinosaur-modal_button");
const score = document.querySelector(".dinosaur_score");
const instruction = document.querySelector(".dinosaur_instruction");

let gameInterval;
let isGameOver = false;
let countScore = 0;
let interval;

games.style.backgroundColor = "rgba(126, 126, 126, 0.5)";

games.addEventListener("click", startGame);

function startGame(event) {
    isGameOver = false;
    document.addEventListener("keydown", dinosaurJump);

    games.style.backgroundColor = "transparent";
    instruction.style.opacity = "0";

    interval = setInterval(addScore, 20);

    function addScore(){
        countScore += 1;
        score.textContent = `score: ${countScore}`;
    }

    const startPossition = dinosaur.style.top;
    cactus.style.right = "0";
    cactus.classList.add("move");

    gameInterval = setInterval(() => {
        moveCactus();
        checkCollision();
    }, 100);
}

function dinosaurJump(event) {
    if (event.key === "ArrowUp") {
        dinosaur.style.top = `${45}%`;

        setTimeout(() => {
            dinosaur.style.top = "75%";
        }, 500);
    }
}

function moveCactus() {
    const currentRight = parseInt(cactus.style.right);
    if (currentRight >= 100) {
        cactus.style.right = "0";
    } else {
        cactus.style.right = `${currentRight + 1}%`;
    }
}

function checkCollision() {
    const dinosaurRect = dinosaur.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinosaurRect.bottom >= cactusRect.top &&
        dinosaurRect.right >= cactusRect.left &&
        dinosaurRect.left <= cactusRect.right
    ) {
        endGame();
    }
}

function endGame() {
    isGameOver = true;
    clearInterval(gameInterval);
    modal.style.display = "block";
    cactus.classList.remove("move");
    games.style.backgroundColor = "rgba(126, 126, 126, 0.5)";
    instruction.style.opacity = "1";
    clearInterval(interval)
}

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});
