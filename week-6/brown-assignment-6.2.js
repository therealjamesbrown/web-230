/*
============================================
; Title:  Assignment 6.2
; Author: James Brown
; Date:   1/16/2020
; Description: Demonstrating try/catch/finally statements. This checks to see if hte name
the variables are set to match or not. I purposely left out the space between first and last
name, so that an error is invoked.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 6.2'));

// Welcome message
console.log('\n--Welcome to Exercise 6.2--');

//variable declaration
var firstName, lastName, fullName;

try {
//variable defining
  firstName = `James`;
  lastName = `Brown`;
  fullName = firstName + lastName;
//output
if (fullName != `James Brown`) throw "NameMismatchException";
  console.log(fullName);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...");
}
//end program
