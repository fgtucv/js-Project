const openButton = document.querySelector(".footer_button");
const closeButton = document.querySelector(".thanks-modal_close");
const backdrop = document.querySelector(".backdrop2")

openButton.addEventListener("click", opened);

function opened() {
    backdrop.style.display = "block";
}

closeButton.addEventListener("click", closed);

function closed() {
    backdrop.style.display = "none";
}