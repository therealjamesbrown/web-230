/*
============================================
; Title:  Exercise 4.1 - Discussion Solution for Laurie Mailloux
; Author: Laurie Mailloux
; Date:   12/20/2019
; Modifications by: James Brown
; Description: Laurie Mailloux's discussion board that iterates through arrays and logs them to the console.
  James brown edits.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 4.1 - Discussion Solution for Laurie Mailloux'));

// Welcome message
console.log('\n--Welcome to EExercise 4.1 - Discussion Solution for Laurie Mailloux--\n');


//start program

//arrays
//JB first error identified. farmAnmals variable is declared as farmAnimals everywhere through the program. Added an I to farmAnmals to fix issue.
let farmAnimals = ["Horse", "Pig", "Goat"];

let domesticAnimals = ["Cat", "Dog", "Hamster"];

//call farm animals
console.log("Farm Animals");
for (var x = 0; x < farmAnimals.length; x++) {
console.log(farmAnimals[x]);
}
//new line
console.log();

//call domestic animals
console.log("Domestic Animals");
for (var x = 0; x < domesticAnimals.length; x++) {
//JB second error. consolelog was missing a period. In order to fix this, I added console.log.
console.log(domesticAnimals[x]);
}
//end program
