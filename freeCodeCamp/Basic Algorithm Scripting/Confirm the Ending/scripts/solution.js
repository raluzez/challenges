function confirmEnding(str, target) {
    const chars = str.split("");
    const endChars = target.split("");
    for (let i = 0; i<endChars.length; i++){
        if (chars[chars.length-1-i]!==endChars[endChars.length-1-i]){
            return false
        }
    }
    return true
}

export {confirmEnding}