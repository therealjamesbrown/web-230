/*
============================================
; Title:  Welcome to Exercise 5.2
; Author: James Brown
; Date:   1/8/2020
; Description: ES5 Built-In Functions
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Enter Exercise Name'));

// Welcome message
console.log('\n--Welcome to Exercise 5.2--');

//variable declaration
var favoriteFoodTypes;

//variable defining as string array
favoriteFoodTypes = [`Pizza`, `Chinese`, `Mexican`, `Italian`, `I love pretty much anything`];

//output - iterating over array using forEach method
favoriteFoodTypes.forEach(function(food){
  console.log(food)
});
