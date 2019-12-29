import {factorialize} from "/FCC algorithms/Basic Algorithm Scripting/Factorialize a Number/scripts/solution.js";

function mainFunction () {
    let display = document.getElementById("displayDiv");
    if (Number.isNaN(Number(this.value))){
        display.textContent = "Please insert numbers only";
    } else {
        display.textContent = factorialize(Number(this.value));
    }
}

let userInput = document.getElementById("input");
userInput.addEventListener("input",mainFunction);