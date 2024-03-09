const games = document.querySelector(".dinosaur_game");
const dinosaur = document.querySelector(".dinosaur_img");
const cactus = document.querySelector(".dinosaur_cactus");

games.addEventListener("click", startGame);

function startGame(event) {

    document.addEventListener("keydown", dinosaurJump);

    const startPossition = dinosaur.style.top;

    cactus.classList.add("move");

    function dinosaurJump(event) {
        if (event.key === "ArrowUp") {
            dinosaur.style.top = `${45}%`;

            setTimeout(() => {
                dinosaur.style.top = startPossition;
            }, 350);
        }
    }
}