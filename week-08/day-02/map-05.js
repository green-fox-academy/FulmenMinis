'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
var letterE = fruits.map(function(item) {
  var counter = 0;
  for (var i = 0; i < item.length; i++) {
    if (item[i] === 'e') {
      counter++;
    } 
  }
  return counter;
});
console.log(letterE)
