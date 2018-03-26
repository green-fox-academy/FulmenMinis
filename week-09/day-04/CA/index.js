'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
  console.log('i am a middleware');
  next();
});

app.use(function (req, res, next) {
  console.log('i am an other middleware');
  next();
});

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({a: 1});
});

app.post('/', (req, res) => {
  if (req.body.number % 2 === 0) {
    res.status(500).send('paros');
  } else {
    res.send('paratlan');
  }
});

app.listen(3000, function () {
  console.log('the app is running');
});
