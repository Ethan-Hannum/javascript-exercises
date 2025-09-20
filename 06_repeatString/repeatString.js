const repeatString = function(string, num) {
    let final = ""
    for (i = 1; i <= num; i++) {
        final = final.concat(string)
    }
    return final
};

// Do not edit below this line
module.exports = repeatString;
