'use strict';

var test = require('tape');
var sum = require('./sum.js');

test('empty test', function (t) {
  let actual = sum.sumElements([]);
  let expected = 0;
  t.equal(actual, expected);
  t.end();
});

test('one element test', function (t) {
  let actual = sum.sumElements([1]);
  let expected = 1;
  t.equal(actual, expected);
  t.end();
});

test('multiple elements test', function (t) {
  let actual = sum.sumElements([1, 2, 3]);
  let expected = 6;
  t.equal(actual, expected);
  t.end();
});

test('null test', function (t) {
  let actual = sum.sumElements(null);
  let expected = 'This is not an array!';
  t.equal(actual, expected);
  t.end();
});

test('string test', function (t) {
  let actual = sum.sumElements('cool');
  let expected = 'This is not an array!';
  t.equal(actual, expected);
  t.end();
});

