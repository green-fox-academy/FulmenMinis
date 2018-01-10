'use strict';
// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
var items = ["apple", "banana", "cat", "dog"];
var ulList = document.querySelectorAll("li");
for(var i = 0; i < items.length; i++) {
  ulList[i].textContent = items[i];
}

// 2) change the <ul> element's background color to 'limegreen'
//   - don't just add a CSS class
//   - use the .style attribute

var ul = document.getElementsByTagName('ul')[0];
ul.style.backgroundColor = 'limegreen';
// Solution 2
document.querySelector('ul').style.backgroundColor = 'limegreen';