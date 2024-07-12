const readline = require('readline');

function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');
    let result = 0;
    let currentNumber = '';
    let currentOperator = '+';
    
    for (let char of expression) {
        if (!isNaN(char)) {
            currentNumber += char;
        } else {
            if (currentOperator === '+') {
                result += Number(currentNumber);
            } else if (currentOperator === '-') {
                result -= Number(currentNumber);
            }
            currentOperator = char;
            currentNumber = '';
        }
    }
    
    if (currentOperator === '+') {
        result += Number(currentNumber);
    } else if (currentOperator === '-') {
        result -= Number(currentNumber);
    }
    
    return result;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter arithmetic expression: ', (expression) => {
    console.log('Result:', evaluateExpression(expression));
    rl.close();
});
