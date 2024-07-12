const readline = require('readline');

function toTitleCase(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
    let titleCasedString = toTitleCase(inputString);
    console.log('Title-cased string:', titleCasedString);
    rl.close();
});
