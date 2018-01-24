// Count Letters

//     Write a function, that takes a string as an argument and 
//     returns a dictionary with all letters in the string as keys, 
//     and numbers as values that shows how many occurrences there are.
//     Create a test for that.
'use strict';

function letterCount(str){
  if (typeof str !== 'string'){
    throw new Error('"str" is not a string');
  } else {
      var s= str.match(/([a-zA-Z])\1*/g)||[];
      return s.map(function(itm){
        return [itm.charAt(0), itm.length];
    });
  }  
}
module.exports = letterCount;