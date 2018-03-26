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
  nameDropDown(result);
  sizeDropDown(result);
  let message = document.querySelector('div.message');
  let table = document.querySelector('section table');
  message.innerHTML = '';
  table.innerHTML = `<tr>
                      <th>Item name</th>
                      <th>Manufacturer</th> 
                      <th>Category</th>
                      <th>Size</th>
                      <th>Unit Price</th>
                    </tr>`
  result.clothes.forEach(function(element) { 
    const markup = `<tr>
                      <td>${element.item_name}</td>
                      <td>${element.manufacturer}</td>
                      <td>${element.category}</td>
                      <td>${element.size}</td>
                      <td>${element.unit_price}</td>
                    </tr>`
    table.innerHTML += markup;
  });
}

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

function sizeDropDown(result){
  let sizeList = document.querySelector('section select.size');
  let allSizes = [];
  result.clothes.forEach(function(element) {
    allSizes.push(element.size)
  });
  let uniqueSizes = Array.from(new Set(allSizes)); 
  uniqueSizes.forEach(function(element) {
    sizeList.innerHTML += `<option value="${element}">${element}</option>`;
  });
}

function eventHandler(baseURL) { 
  let submit = document.querySelector('section button');
  let url;
  let nameList = document.querySelector('section select.item');
  let sizeList = document.querySelector('section select.size');
  let message = document.querySelector('div.message');
  let quantity = document.getElementById('inputField');

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
}
function messageHandler(result){
  let message = document.querySelector('div.message');
  if (result.result === 'ok') {
    message.innerHTML = `The items can be ordered, the total price is ${result.total_price}`;
    message.classList.remove('red');
    message.classList.add('green');
  } else {
    message.innerHTML = result.result;
    message.classList.remove('green');
    message.classList.add('red');
  }
}

function start() { 
  let baseURL = 'http://localhost:5050'; 
  ajax('GET', baseURL + '/warehouse', null, createTable);
  eventHandler(baseURL);
}

start();