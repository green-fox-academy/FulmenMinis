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
  let queryString = `SELECT * FROM warehouse ORDER BY id DESC`; // order by megfordítja a sorrendet, az új item kerül felülre
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

//POST endpoint feladata új ruhákat insertáljon az adatbázisba, a mysql szerveren lévő adathalmazba visz bele új elemeket
app.post('/warehouse', function(req, res) { //azt kell használni ami az alapkiterjesztés, de ha lesz másik post annak más név kell
  //SORBESZÚRÁS INSERT! lényeges, hogy az a név egyezzen ami az első felsorolásban van! 
  let queryString = `INSERT INTO warehouse (item_name, manufacturer, category, size, unit_price, in_store) VALUES ('${req.body.item_name}', 'gucci', 'polo', '${req.body.size}', 300.00, 12)`; //figyelni h melyik float int vagy string, ami nem $ az áll ért
  let queryCheck = `SELECT * FROM warehouse WHERE item_name = '${req.body.item_name}'`

  connection.query(queryString, function(err, result) { //lehet bele error kezelést írni de nem muszály
    if (err){
      res.send({'status': 'error', 'result': err.toString()});// visszaküldi a hibaüzentet, a toString kiszedi a konkrét hibaüzenetet az error objectből
      return;
    } 
    // else { nem kell az else ág mert returnölök, teszteléshez ez ok de ahhoz sem szükséges
    //  res.send('ok'); //sima stringet is küldhetek teszt célból
    //}
  // második query lényege, hogy visszaküldjük azt az adatot amit bevittünk - ez a feladatleírásban szokott lenni ezért kell a conn query
    connection.query(queryCheck, function(err, result) { 
      if (err){
        res.send({'status': 'error', 'result': err.toString()});
        return;
      } 
      res.send({'status': 'ok', 'result': result[0]});    
    });
  });
// ---> postmanes tesztelésnél itt body-t is be kell állítani(raw), header uaz mint a másiknál (accept, json; content-type, json)
});

//DELETE endpoint feladata törölni id szerint az adatbázisból
app.delete('/warehouse/:id', function(req, res) { //itt még kell a :az id elé, postmanben tesztelésnél warehouse/31-létező id nevet adjunk be-ha ne mlétező nem ad errort query ok 0 rows affected :D
  let queryString = `DELETE FROM warehouse WHERE id = ${req.params.id}`;
  connection.query(queryString, function (err, result) {
    if (err) {
      res.status(500).send({'status': 'error', 'result': err.toString()});
      return;
    }
    res.send({'status': 'Item has been removed'}); //objectnek kell lennie!!!
  });
});
// eltávolítja a táblázatból azt az id-t de utána nem idz-za újra auto, azt az id újra sem osztja ki!

// //DELETE endpoint queryvel (nem használjuk mert a param megtartja a számtipust!)
// app.delete('/warehouse', function(req, res) { 
//   let queryString = `DELETE FROM warehouse WHERE id = ${Number(req.query.id)}`; // frontend oldalon figyelni h a query.id val küldeni
//   connection.query(queryString, function (err, result) {
//     if (err) {
//       res.status(500).send({'status': 'error', 'result': err.toString()});
//       return;
//     }
//     res.send({'status': 'Item has been removed'}); //objectnek kell lennie!!!
//   });
// });




app.listen(5050, () => console.log('It works'));
