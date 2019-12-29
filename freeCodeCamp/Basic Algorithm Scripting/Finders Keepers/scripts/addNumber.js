function addNumber (){
    const newNum = document.createElement("input");
    const numDiv = document.getElementById("arrayInputDiv");
    newNum.setAttribute("class","num");
    newNum.setAttribute("type","number");
    newNum.setAttribute("required","");
    numDiv.appendChild(newNum);
}
export {addNumber}