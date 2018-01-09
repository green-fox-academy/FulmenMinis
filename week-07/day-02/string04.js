
'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"


// // Solution 1
var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote = quote.replace ('t y', 't always takes longer than y')
console.log(quote);

// // Solution 2
var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote = quote.substr(0, 21) + ' always takes longer than' + quote.substr(20);
console.log(quote);
