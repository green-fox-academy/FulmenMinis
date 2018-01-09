'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

// Solution 1
var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];

for (let i=0; i < girls.length; i++) {
    order.push(girls[i]);
    order.push(boys[i]);
}
order.push(boys[5]);
console.log(order);

// Solution 2
let girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
let boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
let order = [];

girls.forEach(function(item, index) {
    order.push(item, boys[index]);
})
console.log(order);
