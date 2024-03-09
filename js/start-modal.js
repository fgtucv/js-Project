const button = document.querySelector(".start-model_button");
const backdrop = document.querySelector(".backdrop");
const input = document.querySelector(".start-model_input");
const name = document.querySelector(".header_login");

button.addEventListener("click", closeModal);

function closeModal() {
    if (input.value !== "" || undefined) {
        backdrop.style.display = "none";

        name.textContent = `Вітаю, ${input.value}`;
    }
}
                