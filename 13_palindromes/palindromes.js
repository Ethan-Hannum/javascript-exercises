const palindromes = function (str) {
    // Make the string lowercase then split it into an array
    let lowerStr = str.toLowerCase();
    let arr = lowerStr.split("")
    
    // Filter through copyArr multiple times to remove all punctuation.
    /* Tried using just one filter method, but anytime I added OR operator
    the array would not be filtered correctly.*/
    let copyArr = arr.filter((char) => {
        if (char != " ") {
            return char;
        }
    });

    copyArr = copyArr.filter((char) => {
        if (char != "!") {
            return char;
        }
    });

    copyArr = copyArr.filter((char) => {
        if (char != ",") {
            return char;
        }
    });

    copyArr = copyArr.filter((char) => {
        if (char != ".") {
            return char;
        }
    });

    // Slice(copy) copyArr to reverseStr then reverse the new array
    let reverseStr = copyArr.slice();
    reverseStr.reverse();


    // Compare the joined reversed array to the joined original array
    // Return true if palindrome; Return false if not palindrome
    return reverseStr.join("") === copyArr.join("");
};

// Do not edit below this line
module.exports = palindromes;
