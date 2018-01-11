'use strict';
// On the click of the button,
// Count the items in the list
// And display the result in the result element.
var button = document.querySelector('button');
var myList = document.querySelectorAll('li');

function counting () {
  document.querySelector(".result").textContent = myList.length; //same as:var pCounter = document.querySelector('p.result'); pCounter.textContent = myList.length;
}
button.addEventListener('click', counting);
