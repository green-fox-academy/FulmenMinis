'use strict';
const database = [

  {'name': 'walnut', 'CH': 12, 'kcal': 654},
  {'name': 'peanut', 'CH': 8.5, 'kcal': 690},
  {'name': 'chickenbreast', 'CH': 0.5, 'kcal': 109},
  {'name': 'apple', 'CH': 7, 'kcal': 33},
  {'name': 'orange', 'CH': 8.5, 'kcal': 41},
  {'name': 'turorudi', 'CH': 39, 'kcal': 361},
  {'name': 'salad', 'CH': 3, 'kcal': 100}

]

function kcalIntake(data) {
  let calories = 0
  for (var i = 0; i < data.length; i++){
    calories += data[i].kcal;
    }
  return calories;
}

function chIntake(data) {
  let carbs = 0
  for (var i = 0; i < data.length; i++){
    carbs += data[i].CH;
    }
  return carbs;
}