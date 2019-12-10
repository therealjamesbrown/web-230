/*
============================================
; Title:  Exercise 3.3 - Control Statements
; Author: Richard Krasso
; Date:   12/10/2019
; Modifications by: James Brown
; Description: updating code to use switch statements, instead of if/else statements.
  The code checks to see which key was pressed by a user on their keyboard and displays the result in
  the console.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Enter Exercise Name'));

// Welcome message
console.log('\n--Welcome to Exercise 3.3--\n');


let eventKeyCode = 13;

switch(eventKeyCode){
  case 13:
      console.log('The enter key was pressed.');
      break;
  case 16:
      console.log('The shift key was pressed.');
      break;
  case 32:
      console.log('The spacebar key was pressed.');
      break;
  case 8:
      console.log('The backspace / delete key was pressed.');
      break;
  default:
      console.log('Unrecognized key.');
      break;
}
