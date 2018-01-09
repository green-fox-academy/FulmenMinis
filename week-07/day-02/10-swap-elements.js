
'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

// Solution 1
let abc = ['Arthur', 'Boe', 'Chloe'];
[abc[0], abc[2]] = [abc[2], abc[0]]
console.log(abc)

// Solution 2
let abc = ['Arthur', 'Boe', 'Chloe'];
abc[2] = [abc[0], abc[0] = abc[2]][0];
console.log(abc)

// Solution 3
let abc = ['Arthur', 'Boe', 'Chloe'];
let tmp = abc[0];
abc[0] = abc[2];
abc[2] = tmp;
console.log(abc)
