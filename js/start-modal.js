// 1.Перевірити імя в Input
// 2.відправити значення з Input в localStorage
// 3.Після перезавантаження сторінки перевірети ч є значення в localStorage

const button = document.querySelector(".start-model_button");
const backdrop = document.querySelector(".backdrop");
const input = document.querySelector(".start-model_input");
const name = document.querySelector(".header_login");

console.log(localStorage.getItem("permanentUserName"))


if(localStorage.getItem("permanentUserName") === "" || localStorage.getItem("permanentUserName") === null){
    backdrop.style.display = "block";

    button.addEventListener("click", closeModal);

    function closeModal() {
        const userName = input.value;
    
        if (userName !== "" || userName !== undefined) {
                backdrop.style.display = "none";
    
                name.textContent = `Вітаю, ${input.value}!`;
        }
    
        localStorage.setItem("permanentUserName", userName);
    }
} else{
    name.textContent = `Вітаю, ${localStorage.getItem("permanentUserName")}!`;
}