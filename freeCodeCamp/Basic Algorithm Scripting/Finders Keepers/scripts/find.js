import {findElement} from "/FCC algorithms/Basic Algorithm Scripting/Finders Keepers/scripts/solution.js";

function find(){
    const array = document.getElementsByClassName("num");
    const operator = document.getElementById("operator").value;
    const condition = Number(document.getElementById("condition").value);
    const result = Number(document.getElementById("result").value);
    let arrOfNumbers = [];
    let display = document.getElementById("display");
    let func;

    for(let i = 0;i<array.length;i++){
        arrOfNumbers.push(array[i].value);
    };

    arrOfNumbers = arrOfNumbers.map(Number);

    switch (operator) {
        case "+":
            func = function(num){return num + condition === result};
        case "-":
            func = function(num){return num - condition === result};
        case "*":
            func = function(num){return num * condition === result};
        case "/":
            func = function(num){return num / condition === result};
        case "%":
            func = function(num){return num % condition === result};
    }
    return display.textContent = findElement(arrOfNumbers, func)
}

export {find}