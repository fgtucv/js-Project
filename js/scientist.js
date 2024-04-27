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
window.addEventListener("load", () => {createElement(scientists)})

function createElement(arr) {
    list.innerHTML = '';

    arr.forEach((scientist) => {
        const item = document.createElement("li");
        item.classList.add("scientist_item")

        item.style.backgroundImage = `url(./img/${scientist.surname}.jpg)`;
        item.id = `scientist${scientist.surname}`;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("scientist_info-div");

        const title = document.createElement("h2");
        title.textContent = `${scientist.name} ${scientist.surname}`;
        title.classList.add("scientist_info-title");

        const span = document.createElement("span");
        span.textContent = `${scientist.born} - ${scientist.dead}`;
        span.classList.add("scientist_info-span");

        // const backdrop = document.createElement("div");
        // backdrop.classList.add("scientist-backdrop");
        // backdrop.classList.add("is-hidden");

        // const modal = document.createElement("div");
        // modal.classList.add("scientist-modal");

        // const img = document.createElement("div");
        // img.classList.add("scientist-img");
        // img.style.backgroundImage = `url(./img/${scientist.surname}.jpg)`;

        // const title = document.createElement("h2");
        // title.textContent = `${scientist.name} ${scientist.surname}`;
        // title.classList.add("scientist-name");

        // const span = document.createElement("span");
        // span.textContent = `${scientist.born} - ${scientist.dead}`;
        // span.classList.add("scientist-span");

        // const button = document.createElement("button");
        // button.type = "button";
        // button.textContent = "Закрити";
        // button.classList.add("scientist-close");

        // item.addEventListener("click", openInfo);
        // button.addEventListener("click", closeInfo);

        // function openInfo() {
        //     backdrop.classList.remove("is-hidden");
        // }

        // function closeInfo() {
        //     console.log(backdrop);
        //     backdrop.style.backgroundColor = "red";
        //     backdrop.classList.add("is-hidden");
        // }

        list.append(item);
        item.append(infoDiv);
        infoDiv.append(title, span);
        // backdrop.append(modal);
        // modal.append(img, title, span, button);
    });
}



section.insertBefore(list, title.nextSibling);

const button1 = document.querySelector('[data-button="button1"]');
const button2 = document.querySelector('[data-button="button2"]');
const button3 = document.querySelector('[data-button="button3"]');
const button4 = document.querySelector('[data-button="button4"]');
const button5 = document.querySelector('[data-button="button5"]');
const button6 = document.querySelector('[data-button="button6"]');
const button7 = document.querySelector('[data-button="button7"]');
const button8 = document.querySelector('[data-button="button8"]');
const button9 = document.querySelector('[data-button="button9"]');

button1.addEventListener("click", findScientistByCentury);
button2.addEventListener("click", sortedScientistByName)
button3.addEventListener("click", sortedScientistByYear)
button4.addEventListener("click", findScientistByYearBorn);
button5.addEventListener("click", findFirstLetterNameAndSurname);
button6.addEventListener("click", findMostAndLeastLife);
button7.addEventListener("click", deletScientistByFirstNameLetter);
button8.addEventListener("click", findScientistByFirstSurenameLetter);
button9.addEventListener("click", findAlberBornYear);

function findScientistByCentury() {
    createElement(scientists)

    scientists.forEach((scientist) => {
        const century = Math.ceil(scientist.born / 100);

        if (century !== 19) {
            console.log(century);
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
};

function findScientistByYearBorn() {
    createElement(scientists)

    let lastBorn = scientists[0];

    for (let i = 1; i < scientists.length; i++) {
        if (scientists[i].born > lastBorn.born) {
            lastBorn = scientists[i];
        }
    }

    scientists.forEach((scientist) => {
        if (scientist.born < lastBorn.born) {
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
};

function deletScientistByFirstNameLetter() {
    createElement(scientists)

    scientists.forEach((scientist) => {

        const letterIndex = scientist.name.indexOf("A");

        if (letterIndex === 0) {
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
};

function findScientistByFirstSurenameLetter() {
    createElement(scientists)

    scientists.forEach((scientist) => {

        const letterIndex = scientist.surname.indexOf("C");

        if (letterIndex !== 0) {
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        }
    });
};

function findMostAndLeastLife() {
    createElement(scientists)

    let mostLife = scientists[0].dead - scientists[0].born;
    let leastLife = scientists[0].dead - scientists[0].born;

    function findMostLife() {
        scientists.forEach((scientist) => {
            const life = scientist.dead - scientist.born;

            if (life > mostLife) {
                mostLife = life;
            };
        });

        return mostLife;
    };

    function findLeastLife() {
        createElement(scientists)

        scientists.forEach((scientist) => {
            const life = scientist.dead - scientist.born;

            if (life < leastLife) {
                leastLife = life;
            };
        });
        return leastLife;
    };

    scientists.forEach((scientist) => {
        const life = scientist.dead - scientist.born;


        if (findMostLife() <= life || findLeastLife() >= life) {
            const noneHideScientist = document.querySelector(`#scientist${scientist.surname}`);
            noneHideScientist.style.display = "block";
        } else {
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        };
    });
};

function findAlberBornYear() {
    createElement(scientists)

    scientists.forEach((scientist) => {
        if (scientist.surname !== "Einstein" && scientist.name !== "Albert") {
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        };
    });
};

function sortedScientistByName() {
    const sortedArr = scientists.sort((currentElement, nextElement) => currentElement.name.localeCompare(nextElement.name));

    createElement(sortedArr);
};

function sortedScientistByYear(){
    const sortedArr = scientists.sort((currentElement, nextElement) => currentElement.dead - nextElement.born);

    createElement(sortedArr);
};

function findFirstLetterNameAndSurname(){
    createElement(scientists)

    scientists.forEach((scientist) => {
        if(scientist.name[0] !== scientist.surname[0]){
            const hideScientist = document.querySelector(`#scientist${scientist.surname}`);
            hideScientist.style.display = "none";
        };
    });
};