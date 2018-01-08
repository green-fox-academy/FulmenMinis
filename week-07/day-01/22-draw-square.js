'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


var str = "%".repeat(lineCount - 1)
console.log(str)
for (var i = 0; i < lineCount - 2; i++) {
    console.log(str[0] + ' '.repeat(lineCount - 3) + str[0])
}
console.log(str)