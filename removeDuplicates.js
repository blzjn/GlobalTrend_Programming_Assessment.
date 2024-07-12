const readline = require('readline');

function removeDuplicates(array) {
    let uniqueArray = [];
    for (let element of array) {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    }
    return uniqueArray;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an array: ', (input) => {
    try {
        let arrayWithDuplicates = input.split(',').map(item => parseInt(item.trim()));
        let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
        console.log('Array without duplicates:', arrayWithoutDuplicates);
    } catch (error) {
        console.error('Invalid input:', error.message);
    }
    rl.close();
});
