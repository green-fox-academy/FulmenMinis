
'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

// Solution 1
var ai = [3, 4, 5, 6, 7]
var sum = ai.reduce((a, b) => a + b, 0);
console.log(sum);

// // Solution 2
// var ai = [3, 4, 5, 6, 7]
// for (let num=0; num in ai; num++) {
//     let total += num;
// }
// // console.log( )