'use strict'

// 8. commit AJAX + START

function ajax (method, url, data, callback) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      let requestAPI = JSON.parse(xhr.response);
      callback(requestAPI);
    }
  });
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
}

// 9. commit CREATING TABLE
function createTable(result){
  let message = document.querySelector('section div.message'); //FIGYELNI AZ ELNEVEZÉSEKRE/UTAKRA
  let table = document.querySelector('section table');
  //if-else csak akkor kell ha már itt szükség van error handlingre ha nem akkor csak az else ág kell!
  if (result.result === 'wrong') {     //result a backendből és ez a paraméter is
    table.innerHTML = '';
    message.innerHTML = `<p>Sorry, the submitted licence plate is not valid!</p>`;
  } else { 
    message.innerHTML = '';//figyelni a feladat elnevezéseit
    table.innerHTML = `<tr> 
                         <th>Plate</th>
                         <th>Brand</th> 
                         <th>Model</th>
                         <th>Color</th>
                         <th>Year</th>
                       </tr>`
    result.data.forEach(function(element) { //mindíg a key-ekre hivatkozom! ezért nem pl:car_brand
      const markup = `<tr>
                        <td>${element.licence}</td>
                        <td class='brand'>${element.brand}</td>
                        <td>${element.model}</td>
                        <td>${element.color}</td>
                        <td>${element.year}</td>
                      </tr>`
      table.innerHTML += markup;
    });
    // normál esetben eddig tart
    //ha egy adott oszlop alapján egy fajtát kell kiválasztanunk:
    let brand = document.querySelectorAll('td.brand') //mindíg stringben listát ad vissza amiben végiglépkedünk a brandek között
    brand.forEach(function(element) {
      element.addEventListener('click', function() {
        let url = 'http://localhost:8080/search/' + element.textContent; // nem queryként hanem paraméterként adjuk át!
        ajax('GET', url, null, createTable); //enélkül nem műküdik!
      });
    });
  }
}

// 10. és utána levő commitok:
// általános EVENTHANDLING -nem elfelejteni a variableeket rendesen elnevezni és meghatározni! 
function eventHandler(baseURL) {}

// BUTTON -SUBMIT EVENTHANDLER FUNCTIONön belül!
  let submit = document.querySelector('section button');
  submit.addEventListener('click', function() {
    if (nameList.value === 'default') {
      message.innerHTML = 'Please select name!';
      message.classList.remove('green');
      message.classList.add('red');
    } else if (sizeList.value === 'default') {
      message.innerHTML = 'Please select size!';
      message.classList.remove('green');
      message.classList.add('red');
    } else if (quantity.value === '') {
      message.innerHTML = 'Please type in quantity!';
      message.classList.remove('green');
      message.classList.add('red');
    } else {
      url = baseURL + `/price-check?item=${nameList.value}&size=${sizeList.value}&quantity=${quantity.value}`;
      ajax('GET', url, null, messageHandler);
    }
  });

// BUTTON -RESET EVENTHANDLER FUNCTIONön belül!
  let reset = document.querySelector('button.reset');
  reset.addEventListener('click', function(){
    plate.value = '';
    diplomat.checked = false;
    police.checked = false;
    ajax('GET', baseUrl + '/cars', null, createTable); // itt is újra kell renderelnem az oldalt
  });

// MESSAGE -> submit buttonnnal va nkezelve eventhandleren belül
function messageHandler(result){
  let message = document.querySelector('div.message');
  if (result.result === 'ok') {
    message.innerHTML = `The items can be ordered, the total price is ${result.total_price}`;
    message.classList.remove('red'); //ha hátterét változtatnia kell fontos, hogy eltávolítsuk, különben ha előzőleg szines volt nem fog megváltozni! csst hozzánézni!
    message.classList.add('green'); // egyeztetni css-ben a neveket/szineket! ne legyen default color!
  } else {
    message.innerHTML = result.result;
    message.classList.remove('green');
    message.classList.add('red');
  }
}
// DROPDOWN LIST --> fontos utána a createTable-be előre berakni!!!! ->nameDropDown(result);
function nameDropDown(result){
  let nameList = document.querySelector('section select.item');
  let allNames = [];
  result.clothes.forEach(function(element) {
    allNames.push(element.item_name)
  });
  let uniqueNames = Array.from(new Set(allNames)); // kiszórja a többször előforduló elemeket a listából!!!!
  uniqueNames.forEach(function(element) {
    nameList.innerHTML += `<option value="${element}">${element}</option>`;
  });
} 
//új sor hozzáadásához
function addNewItem(baseURL) { //mert amikor az ajaxhívás történik ott kell az url bele!
  let itemName = document.querySelector('input.nameInput');
  let itemSize = document.querySelector('input.sizeInput');
  let addButton = document.querySelector('button.addItem');

  addButton.addEventListener('click', function(){
    // console.log('click') --> debug, hogy belefut-e a katt-ba, itt pl elfelejtettük meghívni! eventhandlerben! mást lehet startban is
    if (itemName.value !== '' && itemSize.value !== ''){
      let body = JSON.stringify({ //amit backenden a req.body után az kell itt is a stringifyban
        "item_name": itemName.value,
        "size": itemSize.value
      }); //létrejön a body nevű változó amit elküldünk ajaxxal
      itemName.value = ''; //ezzel ürül ki a beírt mező!
      itemSize.value = '';
      let url = `${baseURL}/warehouse`; // ugyanezt eredményezi ha let url = baseURL + '/warehouse';
      ajax('POST', url, body, start) //ezáltal újra kirenderelődik az oldal a friss árúval a listában és a legördülőbe is bekerül az item name
    }
  });
}

//CHECKBOX HANDLING
function deleteItem(baseURL) {
  let delButton = document.querySelector('button.delItem');
  delButton.addEventListener('click', function() {
    let checkBoxList = document.querySelectorAll('input[type=checkbox]'); //checkboxok tulajdonságai kérődnek le pl az is h checked in vagy nem! akkor is ha nincs default értéke!
    checkBoxList.forEach(function(element) {
      if (element.checked) {
        let url = `${baseURL}/warehouse/${element.id}`; //minden egyes becsekkolt checkboxra elmegy egy AJAX
        ajax('DELETE', url, null, start); //start h újrarenderelődjön az oldal
      }
    });
  });
}
// meg kell hívni itt is a fv-t!!!!!!!!!!!! eventhandler

// INPUT FIELD
//bookstore feladat

// RADIO BUTTON
// button-submitnál a police-diplomat feladat
// htmlben szereplő példához js:
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
  log.innerText = output;
  event.preventDefault();
}, false);
// CHECK

// simple button w p text
var btn = document.querySelector('input');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.value === 'Start machine') {
    btn.value = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.value = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

// 8. commit része
function start() { 
  let baseURL = 'http://localhost:8080'; //egyeztetni, hogy melyik van backenden!!!
  ajax('GET', baseURL + '/all', null, createTable); //csak akkor működik ha createtable már kész
  eventHandler(baseURL); //kikommentelni amíg a function nincs megírva
}

start();