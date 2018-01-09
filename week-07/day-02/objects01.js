'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

//Solution 1
function candyCounter(data) {
    let candyNumber = 0;
    for (var i = 0; i < data.length; i++){
        candyNumber += data[i].candies;
        }
    return candyNumber;
}
console.log(candyCounter(students));
      
function ageSummer(data) {
    let age = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].candies < 5) {
            age += data[i].age;
        }
    }
    return age;
}
console.log(ageSummer(students));

//Solution 2
function candyCounter(inputList) {
  let candyNumber = 0;
  inputList.forEach(function(item) {
    candyNumber += item.candies;
  })
  console.log(candyNumber);
}

function ageSummer(inputList) {
  let age = 0;
  inputList.forEach(function(item) {
    (item.candies < 5) ? age += item.age : age;
  })
  console.log(age);
}

candyCounter(students);
ageSummer(students);