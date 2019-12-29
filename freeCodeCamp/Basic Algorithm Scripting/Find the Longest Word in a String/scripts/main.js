import {findLongestWordLength} from "/FCC algorithms/Basic Algorithm Scripting/Find the Longest Word in a String/scripts/solution.js";

function getLongestWord(){
    const words = (this.value).split(" ");
    const longestWords = [];
    let result =document.getElementById("display");
    for (let i = 0;i<words.length; i++){
      if(words[i].length>=findLongestWordLength(this.value)){
            longestWords.push(words[i]);
        }
    } return result.textContent = findLongestWordLength(this.value)+" "+longestWords;
};

let userInput = document.getElementById("input");

userInput.addEventListener("input",getLongestWord);