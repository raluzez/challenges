function largestOfAll(arr) {
    const resultArr = [];
    for(let i = 0;i<arr.length;i++){
        resultArr.push(Math.max(...arr[i]))
    }
    return resultArr;
}

export {largestOfAll}