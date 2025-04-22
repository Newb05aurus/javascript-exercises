const palindromes = function (str) {
    const cleanedString = reverseCleanString(str);
    return cleanedString === cleanedString.split('').reverse().join('');  // Compare the cleaned string with its reverse
};

function reverseCleanString(str) {
    return str
        .split('')
        .filter(char => /[a-zA-Z0-9]/.test(char))  // keep only letters and numbers
        .reverse()
        .join('')
        .toLowerCase();
};
    


// Do not edit below this line
module.exports = palindromes;
