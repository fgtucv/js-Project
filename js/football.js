const filed = document.querySelector(".football_filed");
const ball = document.querySelector(".football_ball");

const ballWidth = ball.clientWidth;
const ballHeight = ball.clientHeight;

const filedWidth = filed.clientWidth;
const filedHeight = filed.clientHeight;

ball.style.left = filedWidth / 2 - ballWidth / 2 + "px";
ball.style.top = filedHeight / 2 - ballHeight / 2 + "px";

filed.addEventListener("click", moveBall);

function moveBall(event){
    ball.style.left = event.pageX - filed.offsetLeft - ballWidth / 2 + "px"
    ball.style.top = event.pageY - filed.offsetTop - ballHeight / 2 + "px"

    if (parseInt(ball.style.left) < 0){
        ball.style.left = "0px"
    }
    if (parseInt(ball.style.top) < 0){
        ball.style.top = "0px"
    }
    if (parseInt(ball.style.left) > filedWidth - ballWidth){
        ball.style.left = filedWidth - ballWidth + "px"
    }
    if (parseInt(ball.style.top) > filedHeight - ballHeight){
        ball.style.top = filedHeight - ballHeight + "px"
    }
};