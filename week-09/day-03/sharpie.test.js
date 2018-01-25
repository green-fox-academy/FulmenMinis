'use strict';

var test = require('tape');
var Sharpie = require('./sharpie.js');
const blackSharpie = new Sharpie('black', 10);

test('sharpie', function(t) {
  let actual = blackSharpie.inkAmount;
  let expected = 100;

  t.equal(actual, expected);
  t.end();
});

test('use sharpie', function(t) {
  blackSharpie.use();
  let actual = blackSharpie.inkAmount;
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});