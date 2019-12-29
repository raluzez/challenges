import {repeatStringNumTimes} from "/FCC algorithms/Basic Algorithm Scripting/Repeat a String/scripts/solution.js";

function repeat(){
    const str = document.getElementById("str").value;
    const num = document.getElementById("num").value;
    let display = document.getElementById("display");

    return display.textContent = repeatStringNumTimes(str,num);
}

const button = document.getElementById("button");

button.addEventListener("click",repeat);