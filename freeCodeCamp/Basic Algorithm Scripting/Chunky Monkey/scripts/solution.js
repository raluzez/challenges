function chunkArrayInGroups(arr, size) {
    const result =[];
    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size))
        console.log(result)
        console.log(i)
    }
    return result;
}

export {chunkArrayInGroups}