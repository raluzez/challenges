function reverseString(str) {
    let arr = str.split("");
    let resultArr = [];
    for (let i = 0; i<arr.length; i++){
        resultArr.unshift(arr[i]);
    }
    str = resultArr.join("");
    return str;
}

export {reverseString};