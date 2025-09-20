const reverseString = function(string) {
    // let finalString = ""
    let finalString = ""
    // for loop letting i = string.length - 1, while i >=0, i--
    for (let i = string.length - 1; i >= 0; i--) {
        // finalString concats the letter at i of string
        finalString = finalString.concat(string[i]);
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
