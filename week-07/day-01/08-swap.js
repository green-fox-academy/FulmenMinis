'use strict';

// Swap the values of these variables
// var a = 123;
// var b = 526;

// console.log(a);
// console.log(b);

var a = 123;
var b = 526;

[a, b] = [b, a]
console.log(a);
console.log(b);

// Solution 2
var a = 123;
var b = 526;

b = [a, a = b][0];
console.log(a);
console.log(b);

// Solution 3
var a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;

// Solution 4
var a = 123;
var b = 526;

a += b
b = a-b
a = a-b

console.log(a);
console.log(b);