'use strict';

// var lineCount = 7;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount = 7;
let lineCountHalf = lineCount / 2;
if (lineCount % 2 === 0) {  
    for (let i = 1; i < lineCountHalf + 1; i++) {
      console.log(' '.repeat(lineCountHalf - i) + '*'.repeat(i) + '*'.repeat(i-1));
    }
    
    for (let i = lineCountHalf; i > 0; i--) {
      console.log(' '.repeat(lineCountHalf - i) + '*'.repeat(i) + '*'.repeat(i-1));
    }
} else {
    for (let i = 1; i < lineCountHalf + 1; i++) {
      console.log(' '.repeat(lineCountHalf - i + 1) + '*'.repeat(i) + '*'.repeat(i-1));
    }
    
    for (let i = lineCountHalf; i > 0; i--) {
      console.log(' '.repeat(lineCountHalf - i + 1) + '*'.repeat(i) + '*'.repeat(i-1));
    }
}

//Solution by Kinga
let lineCount = 7;
let x = Math.floor(lineCount / 2);

for (let i = 0; i < x + 1; i++) {
    console.log(' '.repeat(x - i) + '*'.repeat(2 * i + 1) + ' '.repeat(x - i));
}

for (let i = x - 1; i >= 0; i--) {
    console.log(' '.repeat(x - i) + '*'.repeat(2 * i + 1) + ' '.repeat(x - i));
}