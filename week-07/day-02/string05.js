'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

//Solution 1
var todoText = " - Buy milk\n";
todoText = 'My todo:\n' + todoText + " - Download games\n" + "\t - Diablo";
console.log(todoText);

//Solution 2
var todoText = " - Buy milk\n";
var todoTemp = Array(todoText);
todoTemp.unshift('My todo:\n');
todoTemp.push(' - Download games\n');
todoTemp.push('\t - Diablo');
todoText = todoTemp.join('');
console.log(todoText);