const defaultResult = 0;

let currentResult = defaultResult;

let logEntry = [];

function getNum() {
    return parseInt(userInput.value);
}

function getOutput(operator, prevResult, result){
    const resultDesc = `${prevResult} ${operator} ${result}`;
    outputResult(currentResult, resultDesc);
}

function writeToLog(operationId, prevResult, operationNum, newResult){
    const entry = {
        operation: operationId,
        num: prevResult,
        operand: operationNum,
        result: newResult
    };
    logEntry.push(entry);
    console.log(logEntry);
    
}

function add(num1, num2){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult + newNum;
    getOutput('+', initialNum, newNum);
    writeToLog('Add', initialNum, newNum, currentResult);
}

function subtract(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult - newNum;
    getOutput('-', initialNum, newNum);
    writeToLog('Subtract', initialNum, newNum, currentResult);
}

function multiply(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult * newNum;
    getOutput('*', initialNum, newNum);
    writeToLog('Multiply', initialNum, newNum, currentResult);
}

function divide(){
    const newNum = getNum();
    const initialNum = currentResult;
    currentResult = currentResult / newNum;
    getOutput('/', initialNum, newNum);
    writeToLog('Divide', initialNum, newNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
