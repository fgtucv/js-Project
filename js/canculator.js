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
    result = number1 + number2;
};

function Multiply() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    result = number1 * number2;
};

function Minus() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    result = number1 - number2;
};

function Division() {
    number1 = Number(inputOne.value);
    number2 = Number(inputTwo.value);
    result = number1 / number2;
};

function showResult() {
    resultSpan.textContent = result;
};