
'use strict';
// // Check if array contains all of the following elements: 4,8,12,16
// // Create a 'numChecker' function that accepts 'listOfNumbers' as an input
// // it should return "true" if it contains all, otherwise "false"


// Solution 1
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
function numChecker(numbers) {
    if(numbers.includes(4) && numbers.includes(8) && numbers.includes(12) && numbers.includes(16)) {
        return true;
    } return false;
}
console.log(numChecker(listOfNumbers))

// Solution 2
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
function numChecker(listOfNumbers) {
    let requiredElements = [4, 8, 12, 16];
    for (let i = 0; i < requiredElements.length; i++) {
        if (!listOfNumbers.includes(requiredElements[i])) {
            return false;
        }
    }
    return true;
}
console.log(numChecker(listOfNumbers));

// Solution 3 -not working
var listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]
var list2 = [4, 8, 12, 16]
function numChecker(numbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        for (let j = 0; i <= list2.length; i++) {
            if (listOfNumbers[i] === list2[j]) {
                return true;} else {return false;} //returns with the first value & doesn't continue
        }
    }
}
console.log(numChecker(listOfNumbers))
