const palindromes = function (str) {
    // Split str into arr and save the length of arr - 1 to arrLength
    let arr = str.split("")
    const arrLength = arr.length - 1;

    /* Create object punctuation that finds punctuation characters in arr and
    saves the index as a key with the character being it's value. Then splices
    the character out of arr.*/
    let punctuation = arr.reduce((obj, char, index) => {
        if (char === (("!") || (".") || (",") || ("?") || (` `))) {
            obj[index] = char;
            arr.splice(index, 1);
            return obj;
        } else {
            return obj;
        }
    }, {});

    let finalArr = [];
    // Take arrLength and use that to build finalArr as a reversed arr
    // If index is not a punctuation key, unshift character at index of arr
    // Else unshift punctuation character at index of punctuation
    for (index = arrLength; index >= 0; --index) {
        if (punctuation[index] === undefined) {
            finalArr.unshift(arr[index]);
        } else {
            finalArr.unshift(punctuation[index]);
        }
    }

    // Compare original string to finalArr joined into string
    // Return true if palindrome; Return false if not palindrome
    return str === finalArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
