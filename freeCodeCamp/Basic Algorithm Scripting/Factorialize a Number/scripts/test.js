import {factorialize} from "/FCC algorithms/Basic Algorithm Scripting/Factorialize a Number/scripts/solution.js";

let testObj={};

if (typeof factorialize(5)==="number"){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (factorialize(5)===120){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (factorialize(10)===3628800){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (factorialize(20)===2432902008176640000){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (factorialize(0)===1){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

console.log(testObj);