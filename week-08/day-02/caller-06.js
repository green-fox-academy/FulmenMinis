'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array

// // Solution 1
function printNumber(num) {
  console.log(num);
}
function selectLastEvenNumber(numberArray, callback) {
  var evenNumber;
  numberArray.forEach(function(item) {
    if (item % 2 === 0) {
      evenNumber = item;
    }
  });
  callback(evenNumber);
}

// Solution 2
function printNumber(num) {
  console.log(num);
}
function selectLastEvenNumber(numberArray, callback) {
  var evenNumber;
  const result = numberArray.filter(number => number % 2 === 0);
  evenNumber = result.pop()
  callback(evenNumber);
}




selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
selectLastEvenNumber([2, 5, 7, 8, 9, 12], printNumber); 
selectLastEvenNumber([2, 5, 7, 3, 9, 11], printNumber); 