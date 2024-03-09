const field = document.querySelector(".football_filed");
const ball = document.querySelector(".football_ball");

field.addEventListener("click", moveBall);

function moveBall(event) {
    const x = event.clientX;
    const y = event.clientY;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}