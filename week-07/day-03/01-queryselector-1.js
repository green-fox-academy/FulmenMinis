'use strict';
// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
var king = document.getElementById('b325');
console.log('king', king);
  
// 2. store the element that contains the text 'The Conceited Man'
// in the 'conceited' variable.
var conceited = document.getElementsByClassName('asteroid b326');
// show the result in an 'alert' window.
alert(conceited.innerHTML);
// 3. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
var businesslamp = document.getElementsByClassName('big');

// console.log each of them.
console.log('asteroid big', businesslamp);
console.log('asteroid b329 big', businesslamp);

// 4. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
var conceitedKing = document.querySelectorAll("section > div");
for (var i = 0; i < conceitedKing.length; i++) {
  alert(conceitedKing[i]);
}

// 5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
var noBusiness = document.querySelectorAll('div');
console.log('asteroid', noBusiness);
console.log('asteroid b326', noBusiness);
console.log('asteroid b329 big', noBusiness);

// 6. store 'The Businessman' in the 'allBizniss' variable.
// show the result in an 'alert' window.
var allBizniss = document.querySelectorAll('p');
alert(allBizniss);