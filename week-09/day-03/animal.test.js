'use strict';

var test = require('tape');
var Animal = require('./animal.js');



test('hunger amount', function(t) {
  const Slash = new Animal('Slash');
  let actual = Slash.hunger;
  let expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('thirst amount', function(t) {
  const Slash = new Animal('Slash');
  let actual = Slash.thirst;
  let expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('hunger amount after eating', function(t) {
  const Slash = new Animal('Slash');
  Slash.eat();
  let actual = Slash.hunger;
  let expected = 49;

  t.equal(actual, expected);
  t.end();
});

test('thirst amount after drinking', function(t) {
  const Slash = new Animal('Slash');
  Slash.drink();
  let actual = Slash.thirst;
  let expected = 49;

  t.equal(actual, expected);
  t.end();
});

test('hunger amount after playing', function(t) {
  const Slash = new Animal('Slash');
  Slash.play();
  let actual = Slash.hunger;
  let expected = 51;

  t.equal(actual, expected);
  t.end();
});

test('thirst amount after playing', function(t) {
  const Slash = new Animal('Slash');
  Slash.play();
  let actual = Slash.thirst;
  let expected = 51;

  t.equal(actual, expected);
  t.end();
});

