const palindromes = function (str) {
    // Split str at each letter and assign it to arr
    let arr = str.split("");
    // Reverse and join arr
    arr.reverse();
    let joinedArr = arr.join("");
    // Return checking if arr === str;
    return joinedArr === str;
};

// Do not edit below this line
module.exports = palindromes;
