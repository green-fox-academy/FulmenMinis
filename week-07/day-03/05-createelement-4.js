'use strict';
const kids = [{"pet_name":"Wattled crane","owner":"Bryant"},
{"pet_name":"Devil, tasmanian","owner":"Alejandro"},
{"pet_name":"Mynah, common","owner":"Nelie"},
{"pet_name":"Dolphin, common","owner":"Mariele"},
{"pet_name":"Gray duiker","owner":"Maddalena"},
{"pet_name":"Crab (unidentified)","owner":"Lucine"},
{"pet_name":"Ant (unidentified)","owner":"Lorianna"},
{"pet_name":"Bison, american","owner":"Tommie"},
{"pet_name":"Yellow mongoose","owner":"Vivyan"},
{"pet_name":"Carpet snake","owner":"Veda"},
{"pet_name":"Lesser mouse lemur","owner":"Isidor"}];
// 1) Create an <article> element for each kid
// 2) Create a <h3> and a <p> element for each article and append them as a child to the <article>
// - The H3 should contain the owner's name
// - The p should contain the pet's name
// 3) Add the article to the pets div.
var petsDiv = document.getElementById('pets');
kids.forEach(function(element) {
  var newArt = document.createElement('article');
  var newHeader3 = document.createElement('h3');
  newHeader3.textContent = element['owner'];
  var newP = document.createElement('p');
  newP.textContent = element['pet_name'];
  newArt.appendChild(newHeader3);
  newArt.appendChild(newP);
  petsDiv.appendChild(newArt);
});
