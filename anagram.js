const readline = require('readline');

function areAnagrams(str1, str2) {
    const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return cleanString(str1) === cleanString(str2);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first string: ', (str1) => {
    rl.question('Enter the second string: ', (str2) => {
        if (areAnagrams(str1, str2)) {
            console.log('The strings are anagrams.');
        } else {
            console.log('The strings are not anagrams.');
        }
        rl.close();
    });
});
