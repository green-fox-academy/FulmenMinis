'use strict'

let express = require('express');
let cors = require('cors');
let mysql = require('mysql');
let app = express();

app.use(express.json());

app.use(express.static('./frontend'));
app.use('/assets', express.static('./assets'));
app.use(cors());

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GreenFoxEmese',
  database: 'license_plates'
});

connection.connect();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/cars', function(req, res) {
  let data = [];
  // ha hosszú a parancs érdemes rá vált csin -ha több táblázatot kellene joinolni azt itt kell!
  let queryString = `SELECT * FROM licence_plates`; //még ne mad vissza semmit
  connection.query(queryString, function(err, result) { // querystring!
    result.forEach(function(element){
      data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});
    });
  res.send({'result': 'OK', 'data': data})//object megy vissza
  })
});

app.get('/search', function(req, res) {
  let data = [];
  let status = 'OK';
  let queryString = `SELECT * FROM licence_plates`; 
  connection.query(queryString, function(err, result) { // querystring, be kell hozzá állítani a frontendet is!
    result.forEach(function(element){ //rsz-k az elementben vannak benne, ahogy a többi adat is
      if (req.query.q && req.query.police === '1' && req.query.q.length < 7) { //kev mint 7 de létezik
        if (element.plate.toLowerCase().includes(req.query.q.toLowerCase()) && element.plate.slice(0, 2) === 'RB') {
          data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});        }
      } else if (validLicence(req.query.q) && req.query.diplomat === '1' && req.query.q.length < 7) { 
        if (element.plate.toLowerCase().includes(req.query.q.toLowerCase()) && element.plate.slice(0, 2) === 'DT') {
          data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});        }
      } else if (req.query.police === '1'  && req.query.q.length < 7) { //ki az ut
        if (element.plate.slice(0, 2) === 'RB') {
          data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});        }
      } else if (req.query.diplomat === '1'  && req.query.q.length < 7) { //ki az ut
        if (element.plate.slice(0, 2) === 'DT') {
          data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});        }
      } else if (validLicence(req.query.q) && req.query.q.length < 7) { 
        if (element.plate.toLowerCase().includes(req.query.q.toLowerCase())) {
          data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});        }
      } else { // nincs v hosszabb
        status = 'No query'
      }
    });
  res.send({'result': status, 'data': data});
  });
});

app.get('/search/:brandName', function(req, res) { //mivel paraméteres átadás 
  let data = [];
  let queryString = `SELECT * FROM licence_plates WHERE car_brand = '${req.params.brandName}'`; //mivel paraméteres
  connection.query(queryString, function(err, result) { 
    result.forEach(function(element){
      data.push({'licence': element.plate, 'brand': element.car_brand, 'model': element.car_model, 'year': element.year, 'color': element.color});
    });
  res.send({'result': 'OK', 'data': data})//object megy vissza
  })
});

function validLicence(plate) {
  if (plate && plate.match(/[^a-zA-Z0-9-]/g) === null) {
    return true;
  } else {return false}
}

app.listen(8080, () => console.log('It works'));