const readline = require('readline');

function filterEvenNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers:', (input) => {
    try {
        let numbers = input.split(',').map(item => parseInt(item.trim()));
        let oddNumbers = filterEvenNumbers(numbers);
        console.log('Output:', oddNumbers);
    } catch (error) {
        console.error('Invalid input. Please enter numbers separated by commas.');
    }
    rl.close();
});
