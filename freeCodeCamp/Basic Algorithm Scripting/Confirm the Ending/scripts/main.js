import {confirmEnding} from "/FCC algorithms/Basic Algorithm Scripting/Confirm the Ending/scripts/solution.js";

function check (){
    const str = document.getElementById("stringInput").value;
    const end = document.getElementById("endInput").value;
    let display = document.getElementById("display");
    console.log("str: "+str);
    console.log("end: "+end);
    if(confirmEnding(str,end)===true){
        return display.textContent = end+" is end of string "+str+".";
    } else {
        return display.textContent = end+" is not end of string "+str+".";
    }
}

const button = document.getElementById("check");

button.addEventListener("click",check);