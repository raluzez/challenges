import {findLongestWordLength} from "/FCC algorithms/Basic Algorithm Scripting/Find the Longest Word in a String/scripts/solution.js";

let testObj={};

if (typeof findLongestWordLength("The quick brown fox jumped over the lazy dog")==="number"){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (findLongestWordLength("The quick brown fox jumped over the lazy dog")===6){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (findLongestWordLength("May the force be with you")===5){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (findLongestWordLength("Google do a barrel roll")===6){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (findLongestWordLength("What is the average airspeed velocity of an unladen swallow")===8){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

if (findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")===19){
    testObj.test6 = "pass";
} else {
    testObj.test6 = "fail";
};

console.log(testObj);