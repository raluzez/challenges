function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b)=>{return a-b});
    console.log(arr)
    return arr.indexOf(num)
}

export {getIndexToIns}