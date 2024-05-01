const time = document.querySelector(".time_input");
const button = document.querySelector(".time_button");
const result = document.querySelector(".time_span");

button.addEventListener("click", timeCalculator);

function timeCalculator() {
    const inputValue = time.value.trim();

    if (inputValue !== "") {
        const totalDays = parseInt(inputValue);

        if (!isNaN(totalDays)) {
            const hours = Math.floor(totalDays * 24);
            const minutes = hours * 60;

            result.textContent = `${hours} годин ${minutes} хвилин`;
            time.value = "";
        } else {
            result.textContent = "Введіть час";
            result.style.color = "red";
        }
    } else {
        result.textContent = "Введіть час";
        result.style.color = "red";
    }
};
