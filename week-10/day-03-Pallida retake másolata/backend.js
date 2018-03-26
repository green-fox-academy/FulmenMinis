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
  database: 'warehouse'
});

connection.connect();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/warehouse', function(req, res) {
  let data = [];
  let queryString = `SELECT * FROM warehouse`; 
  connection.query(queryString, function(err, result) {
    result.forEach(function(element){
      data.push({'id': element.id, 'item_name': element.item_name, 'manufacturer': element.manufacturer, 'category': element.category, 'size': element.size, 'unit_price': element.unit_price});
    });
  res.send({'result': 'OK', 'clothes': data})
  })
});

//GET /price-check/?item=[string]&size=s&quantity=[integer]
app.get('/price-check', function(req, res) {
  let data = [];
  let quantity = Number(req.query.quantity);
  let queryString = `SELECT in_store, unit_price FROM warehouse WHERE item_name = '${req.query.item}' AND size = '${req.query.size}'`;
  connection.query(queryString, function(err, result) {
    if (quantity > result[0].in_store) { 
      res.send({'result': "error, we don't have enough items in store"});
    } else if (quantity >= 3) {
      res.send({'result': 'ok', 'total_price': quantity * result[0].unit_price});
    } else {
      res.send({'result': 'please order at least 3, one for yourself, two for your friends'});
    }
  });
});

app.listen(5050, () => console.log('It works'));