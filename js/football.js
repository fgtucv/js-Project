const field = document.querySelector(".football_filed");
const ball = document.querySelector(".football_ball");

const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;

ball.style.left = (field.clientWidth / 2 - ballWidth / 2) + "px";
ball.style.top = (field.clientHeight / 2 - ballHeight / 2) + "px";

field.addEventListener("click", moveBall);

function moveBall(event) {
    const x = event.clientX;
    const y = event.clientY;

    ball.style.top = (y - field.clientTop - ballHeight / 2) + "px";
    ball.style.left = (x - field.clientLeft - ballWidth / 2) + "px";

    if(ball.style.left < 0){
        ball.style.left = "0px";
    } else if (ball.style.top < 0){
        ball.style.top = "0px";
    } else if (ball.style.left > field.clientWidth){
        ball.style.left = field.clientWidth - ballWidth + "px";
    } else if (ball.style.top > field.clientHeight){
        ball.style.top = field.clientHeight - ballHeight + "px";
    }

    // ball.style.left = `${x}px`;
    // ball.style.top = `${y}px`;
}