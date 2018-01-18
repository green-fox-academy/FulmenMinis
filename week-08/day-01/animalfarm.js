// Animal Farm
// Create an Animal constructor function

//     Every animal has a hunger property, which is a number
//     Every animal has a thirst property, which is a number
//     When creating a new animal object these properties are created with the default 5 value
//     Every animal can eat() which decreases their hunger by one
//     Every animal can drink() which decreases their thirst by one
//     Every animal can play() which increases both by one

// Create a Farm constructor function

//     The farm has slots which defines the number of free places for animals
//     The farm has list of Animals
//     The farm can breed() which creates a new animal if there's place for it
//     The farm can slaughter() which removes the least hungry animal
//     The farm can print reports about their current state:
//         The farm has 11 living animals we are bankrupt
//     The farm can progress from day to a new day by calling it's progress() method:
//         All animals should have their methods called randomly with 50% chance
//         The farm should call its breed and slaughter method at the end of each day
//         The farm should print report at the end of each day
//             Print the number of sheeps
//             Print "bankrupt" if no animals left
//             Print "okay" if the number of animals is above zero and under the slot number
//             Print "full" if the number of animals are at the maximum allowed

function Animal(name) {
  this.name = name;
  this.hunger = 10;
  this.thirst = 10;
  this.eat = function() {
    this.hunger--;
  }
  this.drink = function() {
    this.thirst--;
  }
  this.play = function() {
    this.hunger++;
    this.thirst++;
  }
}

function Farm(slots) {
  this.freeSlots = slots;
  this.animals = [];
  this.animalID = 0;

  this.breed = function() {
    if (this.freeSlots > 0) {
      this.animals.push(new Animal('Animal ' + this.animalID++));
      this.freeSlots--;
    }
  }
  this.slaughter = function() {
    let hungerValues = this.animals.map(x => x.hunger);
    this.animals.splice(hungerValues.indexOf(Math.min(...hungerValues)), 1);
    this.freeSlots++;
  }

  this.report = function() {
    if (this.animals.length === 0) {
      return 'Bankrupt!'
    } else if (this.freeSlots === 0) {
      return 'FULL';
    } else {
      return 'We have ' + this.animals.length + ' living animals.';
    }
  }

  this.listOfAnimals = function() {
    this.animals.forEach(function(animal) {
      console.log(animal.name);
    });
  }

  this.progress = function() {
    this.animals.forEach(function(animal) {
      if (Math.random() >= 0.5) {
        animal.eat();
      }
      if (Math.random() >= 0.5) {
        animal.drink();
      }
      if (Math.random() >= 0.5) {
        animal.play();
      }
    });
    this.slaughter();
    this.breed();
  }
}

function messageRender(message) {
  messageField = document.getElementById('message');
  messageField.innerHTML = message;
}

function tableRender(myFarm) {
  var table = document.querySelector('table');
  table.innerHTML = `<tr>
  <th>Name</th>
  <th>Hunger</th>
  <th>Thirst</th> 
  </tr>`
  myFarm.animals.forEach(function(animal) {
    const markup = `<tr>
    <td>${animal.name}</td>
    <td>${animal.hunger}</td>
    <td>${animal.thirst}</td>
    </tr>
    `
    table.innerHTML += markup;
  });
}

function core() {
  messageRender('Press the breed button to fill up the farm!')
  var myFarm = new Farm(20);
  var breed = document.querySelector('.breed');
  var progress = document.querySelector('.progress');

  breed.addEventListener('click', function () {
    myFarm.breed();
    var message = myFarm.report();
    tableRender(myFarm);
    messageRender(message);
  });
  progress.addEventListener('click', function () {
    myFarm.progress();
    var message = myFarm.report();
    tableRender(myFarm);
    messageRender(message);
  });
}

core();

// // Create a sheep farm with 20 slots
// const SheepFarm = new Farm(20);

// console.log(SheepFarm.animals); // Should log 20 Animal objects

// const button = document.querySelector('button');

// // Add a click event to the button and call 'progress'

// // The progress function should log the following to the console:
// //  - The farm has 20 living animals, we are full