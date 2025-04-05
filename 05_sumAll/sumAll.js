const sumAll = function (numOne, numTwo) {
    let sum = 0;

    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return `ERROR`; 
    
    if (numOne < 0 || numTwo < 0) return `ERROR`;

    if (numOne >= numTwo) {
        let i = numTwo;
        for (i; i <= numOne; i++){
            sum += i;
        }
    } else { 
        let i = numOne;
        for (i; i <= numTwo; i++){
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
