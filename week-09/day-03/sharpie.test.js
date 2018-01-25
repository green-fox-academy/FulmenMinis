'use strict';

var test = require('tape');
var Sharpie = require('./sharpie.js');


test('sharpie', function(t) {
  const blackSharpie = new Sharpie('black', 10);
  let actual = blackSharpie.inkAmount;
  let expected = 100;

  t.equal(actual, expected);
  t.end();
});

test('use sharpie', function(t) {
  const blackSharpie = new Sharpie('black', 10);
  blackSharpie.use();
  let actual = blackSharpie.inkAmount;
  let expected = 0;

  t.equal(actual, expected);
  t.end();
});