/*
============================================
; Title:  Enter Assignment Name
; Author: James Brown
; Date:   12/10/2019
; Description: Code will not execute as there are two errors.
  This code is meant to provide a simple for loop example. The code
  will iterate over an array of names, checking to see if they are enrolled. There is no one in our class named Fred,
  so the code will tell Fred he needs to register. Everyone else in the array
  will receive a confirmation that they are registered through the console.log function.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');


// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Discussion Board 3.1 - Control Statements'));


// Welcome message
console.log('\n--Welcome to Exercise 3.1--');


//variable declaration
var arr, index;


//variable defining
//array to store list of names that we will check to see if are registered
arr = [`Micah`, `Emily`, `Zachary`, `Sarah`, `James`, `Jonathan`, `Nicole`, `Laurie`,
`Diandra`, `Verlee`, `Janet`, `Jeff`, `Michael`, `Fred`];


//for loop to check if Fred is in the list. We know he isn't part of our class, so we need to tell him to sign up.
for (index ; index < arr.length; index++) {
  if (arr[index] === 'Fred'){
    console.log(`${arr[index]}, you are not registered. Please contact Bellevue to sign up.`);
  }else{
    console.log(`Hello ${arr}, you are currently enrolled in Web-231!
    `);
  }
}

//end program

