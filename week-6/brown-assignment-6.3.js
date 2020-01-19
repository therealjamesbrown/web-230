/*
============================================
; Title:  Exercise 6.3
; Author: James Brown
; Date:   Enter Date
; Description: Enter Description
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 6.3'));

// Welcome message
console.log('\n--Welcome to Exercise 6.3--');

//variable declaration
var ticket;

ticket = {
  id: '234892892',
  name: 'Help Desk Support',
  requestor: 'James Brown'
}

//output
console.log(`{${ticket.id}, ${ticket.name}, ${ticket.requestor}}`);
