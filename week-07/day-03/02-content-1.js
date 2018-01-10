'use strict';
// 1. Alert the content of the heading.
var heading = document.getElementsByTagName('h1')[0];
alert(heading.innerHTML);

// 2. Write the content of the first paragraph to the console.
var firstPar = document.querySelector('p');
console.log(firstPar.innerHTML);

// 3. Alert the content of the second paragraph.
var secondPar = document.getElementsByClassName('other')[0];
alert(secondPar.textContent);

// 4. Replace the heading's content with 'New content'.
heading.innerHTML = 'New content';

// 5. Replace the last paragraph's content with the first paragraph's content.
var lastPar = document.getElementsByClassName('result')[0];
lastPar.innerHTML = heading.innerHTML;
