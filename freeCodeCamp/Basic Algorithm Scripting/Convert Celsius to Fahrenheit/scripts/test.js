import {convertToF} from "/FCC algorithms/Basic Algorithm Scripting/Convert Celsius to Fahrenheit/scripts/solution.js";

let testObj={};

    if (typeof convertToF(0)==="number"){
        testObj.test1 = "pass";
    } else {
        testObj.test1 = "fail";
    };

    if (convertToF(-30)===-22){
        testObj.test2 = "pass";
    } else {
        testObj.test2 = "fail";
    };
    if (convertToF(-10)===14){
        testObj.test3 = "pass";
    } else {
        testObj.test3 = "fail";
    };

    if (convertToF(0)===32){
        testObj.test4 = "pass";
    } else {
        testObj.test4 = "fail";
    };

    if (convertToF(20)===68){
        testObj.test5 = "pass";
    } else {
        testObj.test5 = "fail";
    };

    if (convertToF(30)===86){
        testObj.test6 = "pass";
    } else {
        testObj.test6 = "fail";
    };

    console.log(testObj);