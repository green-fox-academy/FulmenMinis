'use strict';
// fill output1 with the first paragraph's content, text only.
// fill output2 with the first paragraph's content keeping the cat strong.
var firstPar = document.querySelector('p');
var out1 = document.getElementsByClassName('output1')[0];
var out2 = document.getElementsByClassName('output2')[0];
out1.innerHTML = firstPar.textContent;
out2.innerHTML = firstPar.innerHTML;
