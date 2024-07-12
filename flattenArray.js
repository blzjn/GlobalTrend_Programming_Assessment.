const readline = require('readline');

function flattenArray(nestedArray) {
    let flatArray = [];

    nestedArray.forEach(element => {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flattenArray(element));
        } else {
            flatArray.push(element);
        }
    });

    return flatArray;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a nested array:', (input) => {
    try {
        let nestedArray = JSON.parse(input);
        if (!Array.isArray(nestedArray)) {
            throw new Error('Input is not a valid array');
        }
        let flattenedArray = flattenArray(nestedArray);
        console.log('Flattened array:', flattenedArray);
    } catch (error) {
        console.error('Invalid input:', error.message);
    }
    rl.close();
});
