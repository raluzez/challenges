function mutation(arr) {
    arr[0]=arr[0].toLowerCase();
    arr[1]=arr[1].toLowerCase();
    const char = arr[0].split("");
    const word = arr[1].split("");
    for (let i =0;i<word.length;i++){
        if(!char.includes(word[i])){
            return false
        }
    }
    return true
}

export {mutation}