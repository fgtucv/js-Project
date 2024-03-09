const input = document.querySelector(".find_input");
const button = document.querySelector(".find_button");
const span = document.querySelector(".find_span");

span.style.color = "red";
span.textContent = "Введіть число";

button.addEventListener("click", findNumber);

function findNumber() {

    const number = parseInt(input.value);
    const computeNumber = Math.round(Math.random() * 10 + 1);

    if (number == computeNumber) {
        span.style.color = "green";
        span.textContent = `Ви вгадали число ${computeNumber}`;
    } else {
        span.style.color = "red";
        span.textContent = `Ви не вгадали число`;
    }
}