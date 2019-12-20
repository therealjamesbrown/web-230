/*
============================================
; Title:  Exercise 4.2 - Arrays
; Author: James Brown
; Date:   12/20/2019
; Description: This code executes based on the requirements set in
  exercise 4.2/blackboard. In summary, this demonstrates looping through an
  array's contents
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 4.2 - Arrays'));

// Welcome message
console.log('\n--Welcome to Exercise 4.2 - Arrays--');

//variable declaration
var fruitArray;

//variable defining
fruitArray = [`mangos`, `bananas`, `apples`, `oranges`, `watermelon`];

//function that accepts an array as a param, iterates the array, and logs the array's contents to the console.
function getFruit(param){
  var i;
  for(i=0; i<param.length; i++){
    console.log(param[i]);
  }
}

//output
getFruit(fruitArray);

//end program
