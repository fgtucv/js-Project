const numbersSection = document.querySelectorAll('[data-game="numbers"]');
const playingSection = document.querySelectorAll('[data-game="playing"]');
const acquaintanceSection = document.querySelectorAll('[data-game="acquaintance"]');
const select = document.querySelector(".form-select");
// const selectAll = document.querySelector("#all");
// const selectNumbers = document.querySelector("#numbers");
// const selectPlaying = document.querySelector("#playing");
// const selectAcquaintance = document.querySelector("#acquaintance");

select.addEventListener("change", selected);

function selected(event) {
    if (event.target.value === "all") {
        const sections = [...numbersSection, ...playingSection, ...acquaintanceSection];

        console.log(event.target.value)

        sections.forEach((section) => {
            section.classList.remove("hidden-section");
        });
    } else if (event.target.value === "numbers") {
        const sections = [...playingSection, ...acquaintanceSection];

        sections.forEach((section) => {
            section.classList.add("hidden-section");
        });

        numbersSection.forEach((section) => {
            section.classList.remove("hidden-section");
        });
    } else if (event.target.value === "playing") {
        const sections = [...numbersSection, ...acquaintanceSection];

        sections.forEach((section) => {
            section.classList.add("hidden-section");
        });

        playingSection.forEach((section) => {
            section.classList.remove("hidden-section");
        });
    } else if (event.target.value === "acquaintance") {
        const sections = [...numbersSection, ...playingSection];

        sections.forEach((section) => {
            section.classList.add("hidden-section");
        });

        acquaintanceSection.forEach((section) => {
            section.classList.remove("hidden-section");
        });
    }
}