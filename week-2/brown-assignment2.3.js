/*
============================================
; Title:  Enter Assignment Name
; Author: James Brown
; Date:   12/4/2019
; Description: Exercise 2.3 - Function Properties
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

//function that returns name
function myName(){
  return `${myName.james} ${myName.brown}`;
}

//function properties. setting myName function properties
myName.james = `James`;
myName.brown = `Brown`;

//output - call header method with assignment values and call myName function.
console.log(`\n--Welcome to Exercise 2.3--
${header.display('James', 'Brown', 'Exercise 2.3')}\n
Hello ${myName()}!`);

//end program
