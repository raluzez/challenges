import {truncateString} from "/FCC algorithms/Basic Algorithm Scripting/Truncate a String/scripts/solution.js";

let testObj={};

if (truncateString("A-tisket a-tasket A green and yellow basket", 8)==="A-tisket..."){
    testObj.test1 = "pass";
} else {
    testObj.test1 = "fail";
};

if (truncateString("Peter Piper picked a peck of pickled peppers", 11)==="Peter Piper..."){
    testObj.test2 = "pass";
} else {
    testObj.test2 = "fail";
};
if (truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)==="A-tisket a-tasket A green and yellow basket"){
    testObj.test3 = "pass";
} else {
    testObj.test3 = "fail";
};

if (truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)==="A-tisket a-tasket A green and yellow basket"){
    testObj.test4 = "pass";
} else {
    testObj.test4 = "fail";
};

if (truncateString("A-", 1)==="A..."){
    testObj.test5 = "pass";
} else {
    testObj.test5 = "fail";
};

if (truncateString("Absolutely Longer", 2)==="Ab..."){
    testObj.test6 = "pass";
} else {
    testObj.test6 = "fail";
};

console.log(testObj);