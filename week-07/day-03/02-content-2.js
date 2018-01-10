'use strict';
// fill every paragraph with the last one's content.

var lastPar = document.getElementsByClassName('dog')[0];
var pars = document.querySelectorAll('p');
    for(var i = 0; i < pars.length; i++) {
      pars[i].textContent = lastPar.textContent;
    }