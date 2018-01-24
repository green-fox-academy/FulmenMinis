// Anagram
//     Write a function, that takes two strings and 
//     returns a boolean value based on if the two strings are Anagramms or not.
//     Create a test for that.
'use strict';

function anagram(s1, s2){
  return s1.replace(/ /g,'').toLowerCase().split('').sort().join('') === s2.replace(/ /g,'').toLowerCase().split('').sort().join('');
}

module.exports = anagram;
// anagram('William Shakespeare', 'I am a weakish speller')
