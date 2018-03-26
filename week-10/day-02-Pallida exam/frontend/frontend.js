'use strict'

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

function createTable(result){
  let message = document.querySelector('section div.message');
  let table = document.querySelector('section table');
  if (result.result === 'wrong') {     //result a backendből és ez a paraméter is
    table.innerHTML = '';
    message.innerHTML = `<p>Sorry, the submitted licence plate is not valid!</p>`;
  } else {
    message.innerHTML = '';
    table.innerHTML = `<tr>
                         <th>Plate</th>
                         <th>Brand</th> 
                         <th>Model</th>
                         <th>Color</th>
                         <th>Year</th>
                       </tr>`
    result.data.forEach(function(element) { //mindíg a key-ekre hivatkozom! ezért nem car_brand
      const markup = `<tr>
                        <td>${element.licence}</td>
                        <td class='brand'>${element.brand}</td>
                        <td>${element.model}</td>
                        <td>${element.color}</td>
                        <td>${element.year}</td>
                      </tr>`
      table.innerHTML += markup;
    });
    
    let brand = document.querySelectorAll('td.brand') //mindíg stringben listát ad vissza amiben végiglépkedünk a brandek között
    brand.forEach(function(element) {
      element.addEventListener('click', function() {
        let url = 'http://localhost:8080/search/' + element.textContent; // nem queryként hanem paraméterként adjuk át!
        ajax('GET', url, null, createTable); //enélkül nem műküdik!
      });
    });
  }
}


function eventHandler(baseUrl) { 
  let submit = document.querySelector('button.submit');
  let reset = document.querySelector('button.reset');
  let plate = document.querySelector('input');
  let diplomat = document.getElementById('diplomat');
  let police = document.getElementById('police');
  let url;

  reset.addEventListener('click', function(){
    plate.value = '';
    diplomat.checked = false;
    police.checked = false;
    ajax('GET', baseUrl + '/cars', null, createTable); // itt is újra kell renderelnem az oldalt
  });

  submit.addEventListener('click', function(){
    if (plate.value && police.checked){ //checked - jár együtt a radiobuttonnal!
      url = baseUrl + `/search?q=${plate.value}&police=1`;
    } else if (plate.value && diplomat.checked){ //checked - jár együtt a radiobuttonnal!
      url = baseUrl + `/search?q=${plate.value}&diplomat=1`;
    } else if (police.checked){ 
      url = baseUrl + `/search?police=1`;
    } else if (diplomat.checked){ 
      url = baseUrl + `/search?diplomat=1`;
    } else if (plate.value){ 
      url = baseUrl + `/search?q=${plate.value}`;
    } else {url = baseUrl + '/cars'};
    ajax('GET', url, null, createTable); // itt is újra kell renderelnem az oldalt
  });
}

function start() { //elindítja az ajax kérést és kilistázza a cars endpointon lévő kocsikat, majd elindítja az eventhandlert ami figyeli a gombokat és az inputmezőt
  let baseURL = 'http://localhost:8080'; //hogy hozzá lehessen adni egyéb végződéseket
  ajax('GET', baseURL + '/cars', null, createTable);
  eventHandler(baseURL);
}

start();
