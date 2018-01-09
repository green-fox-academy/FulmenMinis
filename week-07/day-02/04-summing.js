'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(number){
    var total = 0
    for (let i=1; i < number; i++) {
        total += i
    }
    return total
}
console.log(sum(5))

