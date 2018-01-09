
'use strict';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away 
// console.log(string)

// // Solution 1
let string = 'In a dishwasher far far away';
string = string.replace ('dishwasher', 'galaxy');
console.log(string);

// Solution 2
let string = 'In a dishwasher far far away';
string = string.substr(0, 4) + ' galaxy ' + string.substr(16, 29);
console.log(string);

