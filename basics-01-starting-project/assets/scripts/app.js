const defaultResult = 0;

let currentResult = defaultResult;

function getNum() {
    return parseInt(userInput.value);
}

function getOutput(operator, prevResult, result){
    const resultDesc = `${prevResult} ${operator} ${result}`;
    outputResult(currentResult, resultDesc);
}

function add(num1, num2){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult + newNum;
    getOutput('+', initialNum, newNum);
    
}

function subtract(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult - newNum;
    getOutput('-', initialNum, newNum);

}

function multiply(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult * newNum;
    getOutput('*', initialNum, newNum);
}


function divide(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult / newNum;
    getOutput('/', initialNum, newNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
