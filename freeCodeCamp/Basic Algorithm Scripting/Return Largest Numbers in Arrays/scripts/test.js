import {largestOfAll} from "/FCC algorithms/Basic Algorithm Scripting/Return Largest Numbers in Arrays/scripts/solution.js";


let testObj={};
const testOutputs = [[27, 5, 39, 1001],[9, 35, 97, 1000000],[25, 48, 21, -3]]

if (Array.isArray(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])===testOutputs[0]){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])===testOutputs[1]){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])===testOutputs[2]){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

console.log(testObj);