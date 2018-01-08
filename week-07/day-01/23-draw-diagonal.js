'use strict';

var lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is


console.log('%'.repeat(lineCount - 1));

for (var i = 1; i < lineCount - 2; i++) {
    console.log('%' + ' '.repeat(i-1) + '%' + ' '.repeat(lineCount - 3 - i) + '%');
}

console.log('%'.repeat(lineCount - 1));