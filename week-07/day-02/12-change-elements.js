
'use strict';
// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

// Solution 1
let s = [1, 2, 3, 8, 5, 6];
s = s.map(function(item) {
    if (item === 8) {return 4} else {return item}
})
console.log(s[3]);

// Solution 2
let s = [1, 2, 3, 8, 5, 6];
s = s.map(function(item) {
    return item === 8
    ? 4
    : item;
})
console.log(s[3]);

// Solution 3
let s = [1, 2, 3, 8, 5, 6];
s = s.map(item =>{return item === 8 ? 4 : item;})
console.log(s[3]);
