// Fibonacci

//     Write a function that computes a member of the fibonacci sequence by a given index
//     Create tests that covers all types of input (like in the previous workshop exercise)
'use strict';
var fibonacci = {
  compute: function(index) {
    if (index === 0) {
      return 0;
    } else if (index > 0 && Number.isInteger(index)) {
      let sum = 1;
      let num_1 = 0;
      let num_2 = 1;
      for (let i = 0; i < index-1; i++) {
        sum = num_1 + num_2;
        num_1 = num_2;
        num_2 = sum;
      }
      return sum;
    } else {
      return 'Wrong type!';
    }
  }
}
// console.log(fibonacci.compute(10));
module.exports = fibonacci;