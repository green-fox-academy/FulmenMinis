
'use strict';
// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`

// Solution 2
let p1 = [1, 2, 3];
let p2 = [4, 5];
if (p2.length > p1.length) { 
    console.log(true);
} else {
    console.log(false);
}

// Solution by Kinga
let p1 = [1, 2, 3];
let p2 = [4, 5];
console.log(p2.length > p1.length)