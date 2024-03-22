const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1, 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2,
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3,
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4,
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5,
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6,
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7,
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8,
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9,
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10,
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11,
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12,
    } 
];

const section = document.querySelector(".scientist");
const title = document.querySelector(".scientist_title");
const list = document.querySelector(".scientist_list");

scientists.forEach((scientist) => {
    const item = document.createElement("li");
    item.style.width = "100px";
    item.style.height = "100px";
    item.style.backgroundImage = `url(./img/${scientist.surname}.jpg)`;
    item.style.backgroundPosition = "center";
    item.style.backgroundSize = "cover";
    item.style.borderRadius = "20px";
    item.id = `scientist${scientist.surname}`;

    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop3");

    const modal = document.createElement("div");
    modal.classList.add("scientist-modal");

    const img = document.createElement("div");
    img.classList.add("scientist-img");
    img.style.backgroundImage = `url(./img/${scientist.surname}.jpg)`;

    const title = document.createElement("h2");
    title.textContent = `${scientist.name} ${scientist.surname}`;
    title.classList.add("scientist-name");

    const span = document.createElement("span");
    span.textContent = `${scientist.born} - ${scientist.dead}`;
    span.classList.add("scientist-span");

    const button = document.createElement("button");
    button.textContent = "Закрити";
    button.classList.add("scientist-close");

    item.addEventListener("click", () => openInfo(backdrop));
    button.addEventListener("click", () => closeInfo(backdrop));

    function openInfo(openBackdrop) { openBackdrop.style.display = "block"; }

    function closeInfo(closeBackdrop) { closeBackdrop.style.display = "none"; }

    list.append(item);
    item.append(backdrop);
    backdrop.append(modal);
    modal.append(img, title, span, button);
});

section.insertBefore(list, title.nextSibling);

const button1 = document.querySelector('[data-button="button1"]');
// const button2 = document.querySelector('[data-butto="button2"]');
// const button3 = document.querySelector('[data-butto="button3"]');
const button4 = document.querySelector('[data-button="button4"]');
// const button5 = document.querySelector('[data-butto="button5"]');
// const button6 = document.querySelector('[data-butto="button6"]');
// const button7 = document.querySelector('[data-butto="button7"]');
// const button8 = document.querySelector('[data-butto="button8"]');
// const button9 = document.querySelector('[data-butto="button9"]');

button1.addEventListener("click", findScientistByCentury);
// button2
// button3
button4.addEventListener("click", findScientistByYearBorn);
// button5
// button6
// button7
// button8
// button9

function findScientistByCentury() {
    scientists.forEach((scientist) => {
        const century = Math.ceil(scientist.born / 100);

        console.log(century);

        if(century === 19){
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
}

function findScientistByYearBorn() {
    let lastBorn = scientists[0];

    console.log(lastBorn);

    for (let i = 1; i < scientists.length; i++) {
        if(scientists[i].born > lastBorn.born){
            lastBorn = scientists[i];
        }
    }

    scientists.forEach((scientist) => {
        if(scientist.born > lastBorn.born){
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
}