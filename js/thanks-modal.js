const openButton = document.querySelector(".footer_button");
const closeButton = document.querySelector(".thanks-modal_close");
const backdrop = document.querySelector(".backdrop2");
const input = document.querySelector(".footer_input");
const form = document.querySelector(".footer_form");

if(JSON.parse(localStorage.getItem("text")) !== null || JSON.parse(localStorage.getItem("text")) !== ""){
    input.value = JSON.parse(localStorage.getItem("text"));

    localStorage.removeItem("text");
}

form.addEventListener("submit", opened);

input.addEventListener("input", sendTextToLocalStorage)

function sendTextToLocalStorage() {
    const text = input.value;

    localStorage.setItem("text", JSON.stringify(text));
}



function opened(event) {
    event.preventDefault();

    if(input.value.indexOf("@") !== -1 && input.value.indexOf("gmail.com") !== -1){
        backdrop.style.display = "block";
        backdrop.style.opacity = "1";
    }

    localStorage.removeItem("text");
    input.value = "";
}

closeButton.addEventListener("click", closed);

function closed() {
    backdrop.style.display = "none";
    backdrop.style.opacity = "0";
}