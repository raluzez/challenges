function findElement(arr, func) {
    let num = undefined;
    for (let i = 0;i<arr.length;i++){
        if(func(arr[i])){
            return num = arr[i];
        }
    }
    return num;
};

export {findElement};