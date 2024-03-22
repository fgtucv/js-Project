const numbersSection = document.querySelectorAll('[data-game="numbers"]');
const playingSection = document.querySelectorAll('[data-game="playing"]');
const acquaintanceSection = document.querySelectorAll('[data-game="acquaintance"]');
const selectAll = document.querySelector("#all");
const selectNumbers = document.querySelector("#numbers");
const selectPlaying = document.querySelector("#playing");
const selectAcquaintance = document.querySelector("#acquaintance");

selectAll.addEventListener("click", selectedAll);

function selectedAll() {
    const allSection = [...numbersSection, ...playingSection, ...acquaintanceSection];

    allSection.forEach((section) => {
        section.classList.remove("hidden-section");
    });
}

selectNumbers.addEventListener("click", selectedNumbers);

function selectedNumbers() {
    const hideSection = [...playingSection, ...acquaintanceSection];

    console.log(hideSection)

    hideSection.forEach((section) => {
        section.classList.add("hidden-section");
    });
};

selectPlaying.addEventListener("click", selectedPlaying);

function selectedPlaying() {
    const hideSection = [...numbersSection, ...acquaintanceSection];

    hideSection.forEach((section) => {
        section.classList.add("hidden-section");
    });
};

selectAcquaintance.addEventListener("click", selectedAcquaintance);

function selectedAcquaintance() {
    const hideSection = [...numbersSection, ...playingSection];

    hideSection.forEach((section) => {
        section.classList.add("hidden-section");
    });
};