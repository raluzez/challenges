import {findElement} from "/FCC algorithms/Basic Algorithm Scripting/Finders Keepers/scripts/solution.js";

let testObj={};

if (findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })=== 8){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })===undefined){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};

console.log(testObj);
