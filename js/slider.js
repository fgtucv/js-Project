const slides = document.querySelectorAll(".slide");
let indexSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    indexSlide = (indexSlide + 1) % slides.length;
    showSlide(indexSlide);
}

function prevSlide() {
    indexSlide = (indexSlide - 1 + slides.length) % slides.length;
    showSlide(indexSlide);
}

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

showSlide(indexSlide);