const add = function(valOne, valTwo) {
  return valOne + valTwo;
};

const subtract = function(valOne, valTwo) {
	return valOne - valTwo;
};

const sum = function(arr) {

  const sum = arr.reduce((total, item) => total + item, 0);
  return sum;

};

const multiply = function(arr) {
  const total = arr.reduce((total, item) => total * item);
  return total;
};

const power = function(valOne, valTwo) {
	return valOne ** valTwo;
};

const factorial = function(val) {
	let result = 1;
  for (let i = 2; i <= val; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
