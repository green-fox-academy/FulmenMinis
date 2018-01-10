'use strict';
// Does the third p have a red-dot class?
// If so, alert 'OMG DOTS!'
var par = document.querySelectorAll('p');
if(document.querySelector('.cat').className.split(" ").indexOf('red-dot') > -1) {
  alert("OMG DOTS!");
}
// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
if(par[3].className.split('').indexOf('dolphin') > -1) {
  document.querySelector('.apple').textContent = 'pear';
}
// If the first p has an 'apple' class, replace cat's content with 'dog'
if(par[0].classList.contains('apple')) {
  document.querySelector('.cat').textContent = 'dog';
}
// Make apple red by adding a .red class
par[0].classList.add('red');

// Make balloon less balloon-like
par[1].classList.remove("balloon");
