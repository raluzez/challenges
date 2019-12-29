function frankenSplice(arr1, arr2, n) {
    let result = [];
    for (let i=0;i<arr2.length;i++){
        result[i]=arr2[i];
    }
    for (let i=0;i<arr1.length;i++){
        result.splice(n+i,0,arr1[i])
    }
    console.log(arr2)
    return result;
}
