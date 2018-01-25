'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci.js');

test('fibonacci 10', function (t) {
  let actual = fibonacci.compute(10);
  let expected = 55;

  t.equal(actual, expected);
  t.end();
});

test('zero test', function (t) {
  var actual = fibonacci.compute(0);
  var expected = 0;
  t.equal(actual, expected);
  t.end();
});

test('number 1 test', function (t) {
  var actual = fibonacci.compute(1);
  var expected = 1;
  t.equal(actual, expected);
  t.end();
});

test('NaN test', function (t) {
  var actual = fibonacci.compute(NaN);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('undefined test', function (t) {
  var actual = fibonacci.compute(undefined);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('string test', function (t) {
  var actual = fibonacci.compute('string');
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('float number test', function (t) {
  var actual = fibonacci.compute(3.35);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});

test('boolean test', function (t) {
  var actual = fibonacci.compute(true);
  var expected = 'Wrong type!';
  t.equal(actual, expected);
  t.end();
});