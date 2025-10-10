const fibonacci = function(interval) {
    // The fibonacci sequence as data. 
    // Far is the integer to be replaced
    // Previous is the previous integer done in the fibonacci sequence
    // Current is the most recent integer in the fibonacci sequence
    // The value in current will replace the value in previous
    const sequence = {
        far: 0,
        previous: 1,
        current: 1
    };

    if (interval = 0) return 0;
    if (interval < 0) return "OOPS";

    // Fibonacci loop
    // Start loop at second fibonacci sequence and loop until at desired interval
    for (i = 2; i <= interval; ++i) {
        sequence.current = sequence.far + sequence.previous;
        sequence.far = sequence.previous;
        sequence.previous = sequence.current;
    }
    
    return sequence.current;

};

// Do not edit below this line
module.exports = fibonacci;
