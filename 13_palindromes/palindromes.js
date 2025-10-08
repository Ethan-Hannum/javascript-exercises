const palindromes = function (str) {
    // Split str at each letter, reverse the array, then join array together 
    // and assign it to arr
    let arr = str.split("").reverse().join("");
    return arr === str;
};

// Do not edit below this line
module.exports = palindromes;
