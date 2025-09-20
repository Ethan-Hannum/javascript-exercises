const repeatString = function(string, num) {
    let final = ""
    if (num < 0) return "ERROR";
    for (i = 1; i <= num; i++) {
        final = final.concat(string);
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;
