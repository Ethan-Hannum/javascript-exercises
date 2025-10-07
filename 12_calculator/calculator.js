const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, item) => product * item, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let arr = [num]
  for (let i = num - 1; i >= 1; i--) {
    arr.push(i);
  }

  return arr.reduce((product, item) => product * item);
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
