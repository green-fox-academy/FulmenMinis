'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients = [
	{ "name": "vodka", "in_stock": 1, "needs_cooling": true },
	{ "name": "coffee_liqueur", "in_stock": 0, "needs_cooling": true },
	{ "name": "fresh_cream", "in_stock": 1, "needs_cooling": true },
	{ "name": "captain_morgan_rum", "in_stock": 2, "needs_cooling": true },
	{ "name": "mint_leaves", "in_stock": 0, "needs_cooling": false },
	{ "name": "sugar", "in_stock": 0, "needs_cooling": false },
	{ "name": "lime juice", "in_stock": 0, "needs_cooling": true },
	{ "name": "soda", "in_stock": 0, "needs_cooling": true }
]
function tablePrinter(ingredients){
  var length1 = [];
  var length2 = ' Needs cooling '.length;
  var length3 = ' In stock '.length;

  var stock = [];
  var cool_list = [];
  for(var i = 0;i < ingredients.length;i++) {
    if(length1.length < ingredients[i].name.length){
        length1 = ingredients[i].name;
    }
    if(ingredients[i].needs_cooling == true)  {
        cool_list.push('Yes');
    } else {
        cool_list.push('No');
    }
    if (ingredients[i].in_stock == 0) {
        stock.push('-');
    } else {
        stock.push(ingredients[i].in_stock);
    }
  }

  console.log("+"+"-".repeat(length1.length+2)+"+"+"-".repeat(length2)+"+"+"-".repeat(length3)+"+");
  console.log("|"+" "+"Ingredient"+" ".repeat(length1.length-"Ingredient ".length +2)+"|"+" Needs cooling "+"|"+" In stock "+"|");
  console.log("+"+"-".repeat(length1.length+2)+"+"+"-".repeat(length2)+"+"+"-".repeat(length3)+"+");

  for(let i = 0; i < ingredients.length; i++) {
    console.log("|"+" "+ingredients[i].name+" ".repeat(length1.length-ingredients[i].name.length +1)+"|"+" "+cool_list[i] +" ".repeat(length2-1-cool_list[i].length)+"|"+" "+stock[i]+" ".repeat(length3-2)+"|");
  }   
  console.log("+"+"-".repeat(length1.length+2)+"+"+"-".repeat(length2)+"+"+"-".repeat(length3)+"+");
}

tablePrinter(ingredients);