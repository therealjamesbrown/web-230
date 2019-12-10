/*
============================================
; Title:  Exercise 3.2 - Pattern Matching Functions
; Author: James Brown
; Date:   12/10/2019
; Description: This code executes based on the requirements set in
  exercise 3.2/blackboard. In summary - it uses logical error handling to
  return values.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Enter Exercise Name'));

// Welcome message
console.log('\n--Welcome to Exercise 3.2--\n');

//begin program

//function declaration
function matchWithTwoParameters(inputOne, inputTwo){
  if(inputOne === inputTwo){
    return true;
  }else{
    return false;
  }
}

function logMismatch(inputOne, inputTwo){
  return `${inputOne} and ${inputTwo} do not match!`;
}

function logMatch(inputOne, inputTwo){
  return `${inputOne} and ${inputTwo} do match!`;
}


//variable declaration
var one, two, three, four, five, six;
one = 1;
two = 1;
three = 3;
four = 4;
five = 5;
six = 6;

/*********************/

//Output
//out from the match()function
console.log(`//Output form the matchWithTwoParameters function():\n${matchWithTwoParameters(one,two)}\n${matchWithTwoParameters(three, four)}\n${matchWithTwoParameters(five, six)}\n\n`);


//If/Else statements to test all six variables
//test 1 and two variables
console.log(`//Output from the if...else blocks`);
if(matchWithTwoParameters(one, two) === true){
  console.log(`${logMatch(one, two)}`);
}else{
  console.log(`${logMismatch(one, two)}`);
}

//test three and four variables
if(matchWithTwoParameters(three, four) === true){
  console.log(`${logMatch(three, four)}`);
}else{
  console.log(`${logMismatch(three, four)}`);
}

//test five and six variables
if(matchWithTwoParameters(five, six) === true){
  console.log(`${logMatch(five, six)}`);
}else{
  console.log(`${logMismatch(five, six)}`);
}


//end program
