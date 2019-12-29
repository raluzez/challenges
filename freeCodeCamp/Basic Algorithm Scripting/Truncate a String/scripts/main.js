import {truncateString} from "/FCC algorithms/Basic Algorithm Scripting/Truncate a String/scripts/solution.js";

function truncate(){
    const str = document.getElementById("str").value;
    const num = Number(document.getElementById("num").value);
    let display = document.getElementById("display");
    return display.textContent = truncateString(str,num);
}

const button = document.getElementById("button");
button.addEventListener("click",truncate);