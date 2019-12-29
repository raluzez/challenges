import {findElement} from "/FCC algorithms/Basic Algorithm Scripting/Finders Keepers/scripts/solution.js";
import {addNumber} from "/FCC algorithms/Basic Algorithm Scripting/Finders Keepers/scripts/addNumber.js";
import {find} from "/FCC algorithms/Basic Algorithm Scripting/Finders Keepers/scripts/find.js";

const addNumButton = document.getElementById("addNumButton");
const findButton = document.getElementById("button");

addNumButton.addEventListener("click",addNumber)
findButton.addEventListener("click",find);