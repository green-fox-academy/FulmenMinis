'use strict';
// Create and object called car
//  - It should store its petrol level called petrolLevel
//  - It should store its petrol capacity called petrolCapacity
//  - It should have a refill(amount) method, that increments the petrol level,
//    than returns how much petrol it consumed from the given amount
//  - Initialize the petrol level to zero and the capacity to 50 
//
// Create an object called station
//  - It should store petrol amount called petrolStorage
//  - It should have a provide(car) method that calls the refill method of the car
//    with the stored petrol amount as a parameter, then decrement the used petrol
//  - Initialize the petrol amount to 3000

var car = {
  petrolLevel: 0,
  petrolCapacity: 50,
  refill: function (amount) {
    let consumedPetrol = this.petrolCapacity - this.petrolLevel
    if (consumedPetrol >= amount) {
      this.petrolLevel += amount;
    } else {this.petrolLevel += consumedPetrol};
    return consumedPetrol
    console.log(consumedPetrol); 
  }
};

var station = {
  petrolStorage: 3000,
  provide: function (car) {
    let usedPetrol = car.refill(this.petrolStorage);
    // car.refill(this.petrolStorage);
    this.petrolStorage -= usedPetrol; // new val doesnt need this.!
  }
};


console.log(car.petrolLevel);
console.log(station.petrolStorage);

station.provide(car);

console.log(car.petrolLevel);
console.log(station.petrolStorage);