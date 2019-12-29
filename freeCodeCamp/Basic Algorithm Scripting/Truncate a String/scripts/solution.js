function truncateString(str, num) {
    let result = ""
    for (let i = 0;i<num;i++){
        result+=str[i]
    }
    if (result.length<str.length){
        return result+"...";
    }
    return str
}

export {truncateString};
