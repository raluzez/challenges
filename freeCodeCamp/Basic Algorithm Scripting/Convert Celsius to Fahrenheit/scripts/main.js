import {convertToF} from "/FCC algorithms/Basic Algorithm Scripting/Convert Celsius to Fahrenheit/scripts/solution.js";

function getC () {
    let result = document.getElementById("display");
    if (Number.isNaN(Number(this.value))) {
        result.textContent = "Please insert numbers only";
    } else {
        result.textContent = convertToF(this.value)+"° F";
    }
};

let userInput = document.getElementById("inputDegC");

userInput.addEventListener("input",getC)