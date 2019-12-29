import {reverseString} from "/FCC algorithms/Basic Algorithm Scripting/Reverse a String/scripts/solution.js";

let testObj={};

if (typeof reverseString("hello")==="string"){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (reverseString("hello")==="olleh"){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (reverseString("Howdy")==="ydwoH"){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (reverseString("Greetings from Earth")==="htraE morf sgniteerG"){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

console.log(testObj);