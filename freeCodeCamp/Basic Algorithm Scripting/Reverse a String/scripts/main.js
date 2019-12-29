import {reverseString} from "/FCC algorithms/Basic Algorithm Scripting/Reverse a String/scripts/solution.js";

function getValue () {
    let display = document.getElementById("displayDiv");
    display.textContent = reverseString(this.value);
}
let input = document.getElementById("input");

input.addEventListener("input",getValue);