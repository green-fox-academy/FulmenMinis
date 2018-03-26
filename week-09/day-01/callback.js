'use strict';

function ajax (method, url, callback) {//-> univerzális csináló dolog
  const xhr = new.XMLHttpRequest();
  xhr.open(method, url)
  xhr.onload = function() {
    callback(xhr.responsiveText);
  }
  xhr.send();
} 
ajax('GET', 'istvanka.hu/es5', printer)


function add(a,b) {
  console.log (a+b)
}
add(1,2)

let add57= add.bind(this, 5, 7);
add57()
// pl: setintervalban hozzá tudjuk bindolni


function printer(message) {
  console.log(message);
}
setInterval (printer.bind(this, 'alma'), 5000);

// az a callback fv aminek a paraméterében van a fv

// CONSTRUCTOR Function
// elevatoros feladat, tamás Response

// class és konstruktor uaz, nem ad többet a class
