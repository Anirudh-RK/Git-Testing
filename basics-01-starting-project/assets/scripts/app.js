const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2){
    const result = num1 + num2;
    return result;
}

add(7, 5);

currentResult = currentResult + 10;

let desc = `( ${defaultResult} + 10)`;

outputResult(currentResult, desc);

