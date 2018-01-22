'use strict';
// Add "a" to every string in far

// var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];

// console.log(far);

// Solution 1
var far = ["kuty", "macsk", "kacs", "rók", "halacsk"];
far = far.map(item => item + 'a');
console.log(far);

// Solution 2
let far = ["kuty", "macsk", "kacs", "rók", "halacsk"];
far.forEach(function(item) {
  far[far.indexOf(item)] += "a";
});
console.log(far);