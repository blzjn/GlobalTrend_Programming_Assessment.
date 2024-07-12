const readline = require('readline');

function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
    let capitalizedString = capitalizeWords(inputString);
    console.log('Capitalized string:', capitalizedString);
    rl.close();
});
