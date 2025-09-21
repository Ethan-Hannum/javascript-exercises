const sumAll = function(numOne, numTwo) {
    let arr = [numOne, numTwo]
    // Return an error if a number is negative, non integer, non number/array)
    if ((numOne < 0) || (numTwo < 0)) return "ERROR";
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR";
    /* If numOne bigger than numTwo, let i = numTwo + 1 and iterate over i,
     pushing i into arr then adding one to i while i is less than numOne.
     Else do the same but reverse numOne and numTwo*/
   /* if (numOne > numTwo) {
        let i = numTwo + 1;
        while (i < numOne) {
            arr.push(i);
            i++
        }
    } else {
        let i = numOne + 1;
        while (i < numTwo) {
            arr.push(i);
            i++
        }
    }
    // Return the sum of arr
    return arr.reduce((sum, current) => sum + current, 0);
    */

    // Cleaner more readable code from solution, rewrote for practice
    if (numOne > numTwo) [numOne, numTwo] = [numTwo, numOne];

    let sum = 0;
    for (let i = numOne; i <= numTwo; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
