/*
============================================
; Title:  Exercise 3.4 - Pattern Matching Functions
; Author: Richard Krasso
; Date:   12/10/2019
; Modifications by: James Brown
; Description: This code executes based on the requirements set in
  exercise 3.4/blackboard. In summary - it uses logical error handling to
  return values.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 3.4'));

// Welcome message
console.log('\n--Welcome to Exercise 3.4--\n');

//variable declaration
var number;
number = 7;

//function declaration
/**
 * Params: inputOne, inputTwo
 * Response: string value
 * Description: Returns a boolean of true or false if the inputs match.
 */
function matchWithTwoParameters(inputOne, inputTwo){
  if(inputOne === inputTwo){
    return true;
  }else{
    return false;
  }
}

/**
 * Params: inputOne, inputTwo
 * Response: string value
 * Description: Returns a string that states the inputs do not match
 */
function logMismatch(inputOne, inputTwo){
  return `${inputOne} does not match ${inputTwo}!`;
}

/**
 * Params: inputOne, inputTwo
 * Response: string value
 * Description: Returns a string that states the inputs match
 */
function logMatch(inputOne, inputTwo){
  return `${inputOne} does match ${inputTwo}!`;
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}



//output
for(var index = 0; index < 10; index++){
  randNumber = randomNumber();
  if (matchWithTwoParameters(randNumber, number)){
    console.log(logMatch(randNumber, number));
  }else{
    console.log(logMismatch(randNumber, number));
  }
}
