const leapYears = function(year) {
    // If year is divisible by 4
    // AND EITHER not divisible by 100 OR || divisible by 400 it is a leap year
    if ((year % 4 === 0) && ((year % 100 !== 0) || year % 400 === 0)) {
        return true
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
