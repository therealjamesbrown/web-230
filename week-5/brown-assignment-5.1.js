/*
============================================
; Title:  Exercise 5.1
; Author: James Brown
; Date:   Enter Date
; Description: Enter Description
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 5.1'));

// Welcome message
console.log('\n--Welcome to Exercise 5.1 --');

//variable declaration
var foodTypes;

//keyed collection defining
foodTypes = Map();

//set key value pairs in the map
foodTypes.set(`Bar`, `A Rueben`);
foodTypes.set(`Italian`, `Pasta`);
foodTypes.set(`Chinese`, `Lo Mein`);
foodTypes.set(`Mexican`, `A Tostada`);

/**
 * Params: none
 * Response: console logs key value pairs in map
 * Description: console logs key value pairs in map
 */
function loopKeys(){
for (var [key, value] of foodTypes) {
  console.log(value + ' is considered ' + key + ` food`);
}
};

//output
loopKeys;

//end program
