/*
============================================
; Title:  Discussion 6.1
; Author: James Brown
; Date:   1/16/2020
; Description: working with objects
;===========================================
*/


/**
    Expected output
        James Brown
        Discussion 6.1
        Date: 1/16/2020
        brown-assignment-6.1.js:14

        --Welcome to Discussion 6.1--
        brown-assignment-6.1.js:17
        James is 27 years old. His year of birth is 1992.
 */


// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Discussion 6.1'));

// Welcome message
console.log('\n--Welcome to Discussion 6.1--');

//variable declaration
var jamesObject;

//variable defining
jamesObject = {
  firstName: 'James',
  lastName: 'Brown',
  birthYear 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  //calcAge creates an age key value pair and adds it to the jamesObject
  //To use it, simply call the function outside of the object
  calcAge: function() {
      this.age = 2019 - this.birthYear;
  }
};

//call calcAge function within the james Object. This will create the age key value pair you see me calling below in the console log
Object.calcAge();

//output
console.log(`${jamesObject.firstName} is ${jamesObject.age} years old.\nHis year of birth is ${jamesObject.birthYear}.\n`);
