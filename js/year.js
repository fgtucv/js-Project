const input = document.querySelector(".year_input");
const button = document.querySelector(".year_button");
const span = document.querySelector(".year_span");

span.textContent = "Введіть рік";

button.addEventListener("click", verifYear);

function verifYear() {
    const year = Number(input.value);

    if ((!isNaN(year)) && year !== undefined && year !== Number("")) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            span.textContent = "Ви народилися у високосний рік!";
            span.style.color = "green";
            input.value = "";
        } else {
            span.textContent = "Ви народилися у не високосний рік!";
            span.style.color = "red";
            input.value = "";
        }
    } else {
        span.textContent = "Введіть правельний рік";
        span.style.color = "red";
        input.value = "";
    }
}