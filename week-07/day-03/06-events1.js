'use strict';
// Turn the party on and off by clicking the button. (the whole page)
var button = document.querySelector('button');
function partyOnOff () {
  var myDiv = document.querySelector('div');
  if (myDiv.classList.contains('party')) {
    myDiv.classList.remove('party');
  } else {
    myDiv.classList.add('party');
  }
}
button.addEventListener('click', partyOnOff);