import {repeatStringNumTimes} from "/FCC algorithms/Basic Algorithm Scripting/Repeat a String/scripts/solution.js";

let testObj={};

if (repeatStringNumTimes("*", 3)==="***"){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (repeatStringNumTimes("abc", 3)==="abcabcabc"){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (repeatStringNumTimes("abc", 4)==="abcabcabcabc"){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (repeatStringNumTimes("abc", 1)==="abc"){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (repeatStringNumTimes("*", 8)==="********"){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

if (repeatStringNumTimes("abc", -2)===""){
    testObj.test6 = "pass";
} else {
    testObj.test6 = "fail";
};

console.log(testObj);