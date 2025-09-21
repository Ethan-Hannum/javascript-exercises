const removeFromArray = function(arr, ...removal) {
    // Declare workingArr and initialize it to arr
    let workingArr = arr.slice();
    /* workingArr iterates through its items, and if the item IS NOT included in removal array... 
    then filter it through. Then return all filtered items*/
    return workingArr.filter((item) => !removal.includes(item));
     
     
};

// Do not edit below this line
module.exports = removeFromArray;
