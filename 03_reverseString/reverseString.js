const reverseString = function(string) {
    let newReversedString = "";
    for (let i = 0; i < string.length; i++){
        newReversedString = string[i] + newReversedString;
    }
    return newReversedString;
};

// Do not edit below this line
module.exports = reverseString;
