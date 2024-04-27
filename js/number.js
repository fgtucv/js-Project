const input1 = document.querySelector(".numbers_input1");
const input2 = document.querySelector(".numbers_input2");
const input3 = document.querySelector(".numbers_input3");
const result = document.querySelector(".numbers_result");

input1.addEventListener("input", findBigestNumber);
input2.addEventListener("input", findBigestNumber);
input3.addEventListener("input", findBigestNumber);

function findBigestNumber() {
    const number1 = Number(input1.value);
    const number2 = Number(input2.value);
    const number3 = Number(input3.value);

    const numberArray = [number1, number2, number3];

    let bigestNumber = numberArray[0];

    numberArray.forEach(number => {
        if (number > bigestNumber) {
            bigestNumber = number;
        }
    });

    console.log(bigestNumber)

    if (isNaN(bigestNumber) === true) {
        result.textContent = "Введіть правильне число";
    } else {
        result.textContent = `Найбільше число, яке ви ввели - ${bigestNumber}`;
    }

};
