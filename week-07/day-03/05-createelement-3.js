'use strict';
// Remove the king from the list.
var ulList = document.querySelector('ul.asteroids');
ulList.removeChild(document.querySelector('li'));

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content. 
const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]
planetData.forEach(function(element) {
  if (element['asteroid']) {
    var newItem = document.createElement('li');
    newItem.textContent = element['content'];
    newItem.classList.add(element['category']);
    ulList.appendChild(newItem);
  }
});
//Solution 2
// for(var i = 0; i < planetData.length; i++) {
//   if(planetData[i].asteroid) {
//   var newLi = document.createElement('li');
//   newLi.classList.add(planetData[i].category);
//   newLi.textContent = planetData[i].content;
//   ulList.appendChild(newLi);
//   }
// }