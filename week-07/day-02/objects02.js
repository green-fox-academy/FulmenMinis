'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies(data) {
    let names = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].candies > 4) {
            names += data[i].name + ' ';
        }
    }
    return names;
}
console.log(moreCandies(students));

function averageCandies(data) {
    let candies = 0
    for (var i = 0; i < data.length; i++) {
        candies += data[i].candies;
    }
    return candies /= data.length;
}
console.log(averageCandies(students));

// Solution 2

function moreThanFour(students){
    let filtered = [];
    students.map(function(student){
      if (student['candies'] > 4){
        filtered.push(student['name']);
      }
    });
    return filtered;
}
console.log(moreThanFour(students));

function averageCandies(students){
    let candies = 0;
    students.forEach(function(student){
      candies += student['candies'];
    });
    return candies / students.length;
}
console.log(averageCandies(students));