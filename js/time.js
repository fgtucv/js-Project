const time = document.querySelector(".time_input");
const button = document.querySelector(".time_button");
const result = document.querySelector(".time_span");

button.addEventListener("click", timeCalculator);

function timeCalculator() {
    const totalDays = parseInt(time.value);

    const hours = Math.floor(totalDays * 24);
    const minutes = hours * 60;

    result.textContent = `${hours} годин ${minutes} хвилин`;

    time.value = "";
};