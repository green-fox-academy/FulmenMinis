'use strict';
// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)

// Solution 1
var shop_items = ["Cupcake", 2, "Brownie", false]
for (let i in shop_items) {
    if (shop_items[i] === 2) {
    shop_items[i] = 'Croissant';
    } else if (shop_items[i] === false) {
    shop_items[i] = 'Ice cream';}
}
console.log(shop_items)

// Solution 2
var shop_items = ["Cupcake", 2, "Brownie", false]
shop_items[1] = "Croissant"
shop_items[3] = "Ice Cream"
console.log(shop_items)