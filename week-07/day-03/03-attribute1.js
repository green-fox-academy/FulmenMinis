'use strict';
// 1. Write the image's url to the console.
console.log(document.querySelector('img').getAttribute('src'));

// 2. Replace the image with a picture of your favorite animal.
document.querySelector('img').setAttribute('src', 'graduation poodle.png');

// 3. Make the link point to the Green Fox Academy website.
document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

// 4. Disable the second button.
document.querySelector('.this-one').disabled = true;

// 5. Replace its text with 'Don't click me!'.
document.querySelector('.this-one').innerHTML = "Don't click me!";

