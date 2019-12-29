function titleCase(str) {
    const array = str.split(" ");
    let toStr = ""
    for(let i =0;i<array.length;i++){
        let word = array[i].toLowerCase();
        toStr += word[0].toUpperCase()+word.substring(1);
        if (i<(array.length-1)){
            toStr += " ";
        } else {
            toStr +=".";
        }
    }
    return toStr;
}

export {titleCase};