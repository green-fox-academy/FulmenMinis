'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...strings){
    for (var i=0; i < strings.length; i++) {
        console.log(i);
    }
}
console.log(1, 2, 3, 'beep')
        
