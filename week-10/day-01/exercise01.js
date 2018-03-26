'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animal(talk){
  this.talk = talk
}

Animal.prototype.say = function () {
  console.log(this.talk);
};

const Slash = new Animal('wuff');
Slash.say();

// Tojás version

function Animal(talk) {
  function say() {
    console.log(talk);
  }
  return {
    say: say
  }
}

const dog = Animal('vau')
dog.say();