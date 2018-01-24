'use strict';

var test = require('tape');
var counter = require('./countletters.js');

test('letter counter test', function (t) {
  let actual = counter('eeeeeoooohhoooee');
  let expected = [["e",5],["o",4],["h",2],["o",3],["e",2]];
  t.deepEqual(actual, expected);
  t.end();
});

test('not string test', function (t){
  t.throws(counter.bind(null, [1]));
  t.end();
})

test('empty test', function (t){
  t.throws(counter.bind(null, []));
  t.end();
})

