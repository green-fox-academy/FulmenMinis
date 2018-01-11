'use strict';
// Add an item that says 'The Green Fox' to the asteroid list.
var asteroidList = document.querySelector('ul.asteroids');
var newAsteroid = document.createElement('li');
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list.
var newerAsteroid = document.createElement('li');
newerAsteroid.textContent = 'The Lamplighter';
asteroidList.appendChild(newerAsteroid);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
var divContainer = document.querySelector('div.container');
var heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';
divContainer.appendChild(heading);

// Add an image, any image, to the container.
var newImg = document.createElement('img');
newImg.setAttribute('src', 'graduation poodle.png');
divContainer.appendChild(newImg);