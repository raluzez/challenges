import {confirmEnding} from "/FCC algorithms/Basic Algorithm Scripting/Confirm the Ending/scripts/solution.js";

let testObj={};

if (confirmEnding("Bastian", "n")===true){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (confirmEnding("Congratulation", "on")===true){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (confirmEnding("Connor", "n")===false){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")===false){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (confirmEnding("He has to give me a new name", "name")===true){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

if (confirmEnding("Open sesame", "same")===true){
    testObj.test6 = "pass";
} else {
    testObj.test6 = "fail";
};

if (confirmEnding("Open sesame", "pen")===false){
    testObj.test7 = "pass";
} else {
    testObj.test7 = "fail";
};

if (confirmEnding("Open sesame", "game")===false){
    testObj.test8 = "pass";
} else {
    testObj.test8 = "fail";
};

if (confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")===false){
    testObj.test9 = "pass";
} else {
    testObj.test9 = "fail";
};

if (confirmEnding("Abstraction", "action")===true){
    testObj.test10 = "pass";
} else {
    testObj.test10 = "fail";
};

console.log(testObj);