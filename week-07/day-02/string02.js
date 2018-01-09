'use strict';
// Reverse the string!
// var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"


// Solution 1
var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
reversed = reversed.split("").reverse().join("");
console.log(reversed);

// Solution 2
var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

function reverse(string) {
    for (var i = string.length - 1, newString = ''; i >= 0; newString += string[i--]) { }
    return newString;
  }
console.log(reverse(reversed))

// Solution 3
var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
function reverse(string) {
    var newString = '';
    for (var i = string.length - 1; i >= 0; i--)
    newString += string[i];
    return newString;
  }
console.log(reverse(reversed))

