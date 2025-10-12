const findTheOldest = function(arr) {
    const date = new Date();

    // If yearOfDeath is undefined on person, set it to todays date
    arr.forEach(person => {
        if (person.yearOfDeath === undefined) person.yearOfDeath = date.getFullYear();
    });

    let sorted = arr.sort((itemA, itemB) => {
        // yearOfDeath - yearOfBirth is age of person. Sorts array based of age
        if (itemA.yearOfDeath - itemA.yearOfBirth > itemB.yearOfDeath - itemB.yearOfBirth) {
            return 1;
        } else {
            return -1;
        }
    });

    return sorted.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
