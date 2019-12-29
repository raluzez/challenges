import {largestOfAll} from "/FCC algorithms/Basic Algorithm Scripting/Return Largest Numbers in Arrays/scripts/solution.js";



function addNewInput(){
    const newInput = document.createElement("input");
    const inputsDiv = document.getElementById("inputsDiv");
    newInput.setAttribute("class","array");
    inputsDiv.appendChild(newInput);
}

function find (){
    const array = document.getElementsByClassName("array");
    const wholeArr = [];
    let display = document.getElementById("display");

    for (let i = 0; i<array.length; i++){
        wholeArr.push(((array[i].value).split(",")).map(Number));
    }
    return display.textContent = largestOfAll(wholeArr)
}

const addButton         = document.getElementById("addArrayInput");
const calculateButton   = document.getElementById("find");

addButton.addEventListener("click",addNewInput);
calculateButton.addEventListener("click",find);
