const palindromes = function (str) {
    // Split str at each letter, reverse the array, then join array together 
    // and assign it to arr
    let arr = str.split("")

    let punctuation = arr.reduce((obj, char, index) => {
        if (char === (("!") || (".") || (",") || ("?") || (` `))) {
            obj[index] = char;
            arr.splice(index, 1);
            return obj;
        } else {
            return obj;
        }
    }, {});

    arr.reverse();

    // Take punctuation out of arr and assign it to an object with the key being
    // the index of punctuation and value being the punctuation itself
    

    return arr;
};

// Do not edit below this line
module.exports = palindromes;
