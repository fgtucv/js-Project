const buttonAdd = document.querySelector(".canculator_button-add");
const buttonMultiply = document.querySelector(".canculator_button-multiply");
const buttonMinus = document.querySelector(".canculator_button-minus");
const buttonDivision = document.querySelector(".canculator_button-division");
const button = document.querySelector(".canculator_button-result");
const resultSpan = document.querySelector(".canculator_result");
const inputOne = document.querySelector(".canculator_number-one");
const inputTwo = document.querySelector(".canculator_number-tow");

let number1, number2, result = 0;

buttonAdd.addEventListener("click", Add);
buttonMultiply.addEventListener("click", Multiply);
buttonMinus.addEventListener("click", Minus);
buttonDivision.addEventListener("click", Division);
button.addEventListener("click", showResult);

function Add() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    if (!isNaN(number1) && !isNaN(number2)) {
        result = number1 + number2;
    } else {
        resultSpan.textContent = "Помилка";
    }
};

function Multiply() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    if (!isNaN(number1) && !isNaN(number2)) {
        result = number1 * number2;
    } else {
        resultSpan.textContent = "Помилка";
    }
};

function Minus() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    if (!isNaN(number1) && !isNaN(number2)) {
        result = number1 - number2;
    } else {
        resultSpan.textContent = "Помилка";
    }
};

function Division() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    if (!isNaN(number1) && !isNaN(number2)) {
        if (number2 !== 0) {
            result = number1 / number2;
        } else {
            resultSpan.textContent = "Помилка";
        }
    } else {
        resultSpan.textContent = "Помилка ";
    }
};

function showResult() {
    resultSpan.textContent = result;
};
