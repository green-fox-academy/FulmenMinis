'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangle(sideA, sideB){
  this.sideA = sideA;
  this.sideB = sideB;
}

Rectangle.prototype.getArea = function () {
  return this.sideA * this.sideB;
};
Rectangle.prototype.getCircumference = function () {
  return 2 * (this.sideA + this.sideB);
};

const cube = new Rectangle(5, 5);
console.log(cube.getArea());
console.log(cube.getCircumference());

