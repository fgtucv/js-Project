const time = document.querySelector(".time_input");
const button = document.querySelector(".time_button");
const resault = document.querySelector(".time_span");

button.addEventListener("click", timeCanculator);

function timeCanculator() {
    const totalTime = parseInt(time.value);

    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;

    resault.textContent = `${hours}:${minutes}`;
};