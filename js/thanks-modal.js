const openButton = document.querySelector(".footer_button");
const closeButton = document.querySelector(".thanks-modal_close");
const backdrop = document.querySelector(".backdrop2");
const input = document.querySelector(".footer_input");

openButton.addEventListener("click", opened);

function opened() {
    if(input.value.indexOf("@") !== -1 && input.value.indexOf("gmail.com") !== -1){
        backdrop.style.display = "block";
    }
}

closeButton.addEventListener("click", closed);

function closed() {
    backdrop.style.display = "none";
}