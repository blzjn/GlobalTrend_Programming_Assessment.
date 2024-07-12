const readline = require('readline');

function generateFibonacci(n) {
    let fibonacci = [0, 1];

    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fibonacci;
    }

    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number : ', (input) => {
    try {
        let n = parseInt(input);
        if (isNaN(n) || n <= 0) {
            throw new Error('Invalid input. Please enter a positive integer.');
        }
        let fibonacciSequence = generateFibonacci(n);
        console.log(`First ${n} Fibonacci numbers:`, fibonacciSequence);
    } catch (error) {
        console.error('Error:', error.message);
    }
    rl.close();
});
