
'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"


// Solution 1
var numbers = [1,2,3,4,5,6,8];
if (7 in numbers) {
    console.log('Hoorray')
} else {console.log('Noooooo')}


// Solution 2
var numbers = [1,2,3,4,5,6,8];
var match = 0
for (let i = 0; i < numbers.length; i++) {
    if (i === 7) {match = 1}
}
if (match > 0) {
    console.log('Hoorray')
} else {console.log('Noooooo')}

// Solution 3
var numbers = [1,2,3,4,5,6,7];
numbers.includes(7) ? console.log('Hoorray') : console.log('Noooooo');

//Solution by Kinga
let numbers = [1, 2, 3, 4, 5, 6, 8];
(numbers.indexOf(7) >= 0) ? console.log('Hoorray') : console.log('Noooooo');