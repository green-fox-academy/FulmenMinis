'use strict';

const test = require('tape');
const apple = require('./apples.js');

test('apple tester', function (t) {
  var actual = apple.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

// class Test {
//   constructor(actual, expected) {
//     this.actual = actual;
//     this.expected = expected;
//   }

//   testReturnsApple() {

//   }

//   runTests() {

//   }
// }

// test.runTests()
