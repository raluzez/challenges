function findLongestWordLength(str) {
    let arr = str.split(" ");
    let numArr = [];
    for (let i =0;i<arr.length;i++){
        numArr.push(arr[i].length);
    };
    return Math.max(...numArr);
};


export {findLongestWordLength};