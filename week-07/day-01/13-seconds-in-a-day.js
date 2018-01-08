'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var remainingHours = 24-currentHours;
var remainingMinutes = 60-currentMinutes;
var remainingSeconds = 60-currentSeconds;
console.log(remainingSeconds + remainingMinutes * 60 + remainingHours * 3600);