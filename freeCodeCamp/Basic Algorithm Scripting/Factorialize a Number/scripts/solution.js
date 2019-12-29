function factorialize(num) {
    let result = 1
    for (num;num>0;num--){
        result *= num;
    }
    return result;
};
export {factorialize}