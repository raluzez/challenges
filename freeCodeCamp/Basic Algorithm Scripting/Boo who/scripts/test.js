import {booWho} from "/FCC algorithms/Basic Algorithm Scripting/Boo who/scripts/solution.js";

let testObj={};

if (booWho(true)===true){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (booWho(false)===true){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (booWho([1, 2, 3])===false){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (booWho([].slice)===false){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (booWho({ "a": 1 })===false){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

if (booWho(1)===false){
    testObj.test6 = "pass";
} else {
    testObj.test6 = "fail";
};

if (booWho(NaN)===false){
    testObj.test7 = "pass";
} else {
    testObj.test7 = "fail";
};

if (booWho("a")===false){
    testObj.test8 = "pass";
} else {
    testObj.test8 = "fail";
};

if (booWho("true")===false){
    testObj.test9 = "pass";
} else {
    testObj.test9 = "fail";
};

if (booWho("false")===false){
    testObj.test10 = "pass";
} else {
    testObj.test10 = "fail";
};

console.log(testObj);