// Extension

// Check out the javascript folder. There's a work file and a test file.

//     Run the tests, some should passing, some should fail.
//     Modify the fuctions and every tests shoulb be green(passing).

'use strict';


// Adds a and b, returns as result
const addNumbers = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Invalid value');
  }
  return a + b;
}

// Returns the highest value from the three given params
const maxOfThree = function(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Invalid value');
  } else if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } return c
}

//Returns the median value of a list given as param
const median = function(pool){
  if (pool.filter(item => typeof item === 'number').length === pool.length) {
    let sortedPool = pool.sort(function(a, b){return a-b});
    if (pool.length % 2 === 1) {
      return sortedPool[(pool.length - 1) / 2];
    } else {
      return((sortedPool[(pool.length) / 2] + sortedPool[(pool.length) / 2 - 1]) / 2);
    }
  } else {
    return 'Invalid value';
  }
}

// Returns true if the param is a vovel
const isVovel = function(char){
  if (char === '' || char.length !== 1) {
    return 'Please, give me one character';
  } 
  return 'aeiouúéáőűöüóí'.includes(char);
}

// Create a method that translates hungarian into the teve language
const translate = function(hungarian) {
  if (typeof hungarian === 'string') {
    let text = hungarian.split('');
    let teve = '';
    text.forEach(function(char){
      if (isVovel(char)){
        teve += char + 'v'+ char;
      } else {
        teve += char;
      }
    });
    return teve;
  } else {
    return 'Invalid value';
  }
}

module.exports = {
  addNumbers: addNumbers,
  maxOfThree: maxOfThree,
  median: median,
  isVovel: isVovel,
  translate: translate
}