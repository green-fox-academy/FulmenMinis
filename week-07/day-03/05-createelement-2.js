'use strict';
// Remove the Mega juicy candy from the list.
var myList = document.querySelector('ul.candyshop');
var listItem = document.querySelector('li');
myList.removeChild(listItem);

// Add 16 list items saying 'Empty box' to the list and add an index to it, like:
// Empty box #1
// Empty box #2
// Empty box #3
for (let i = 1; i < 17; i++) {
  var newItem = document.createElement('li');
  newItem.textContent = "Empty box #" + i;
  myList.appendChild(newItem);
}