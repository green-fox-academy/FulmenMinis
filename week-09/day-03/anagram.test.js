'use strict';
var test = require('tape');
var anagram = require('./anagram.js');

test('anagram test', function (t) {
  let actual = anagram('William Shakespeare', 'I am a weakish speller');
  let expected = true;
  t.ok(actual, expected);
  t.end();
});
