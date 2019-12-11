/*
============================================
; Title:  Exercise 3.1 - Discussion Solution for Janet Blohn
; Author: Janet Blohn
; Date:   12/11/2019
; Modifications by: James Brown
; Description: Control Statements
; Program with at least two errors that won't execute
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 3.1 - Discussion Solution for Janet Blohn'));

// Welcome message
console.log('\n--Welcome to Exercise 3.1 - Discussion Solution for Janet Blohn--\n');


// Define variables
var test = 5;  // This should print to the console
var message = "";

// Write a message based off the value of the variable named test
if (test == 1) {
  message = "Test was equal to 1";
}
/*JB Error 1- This is a logical error. On line 34 the else if statement else if (test != 3), is supposed to evaluate if test was equal to 3,
however the use of != causes the result to be true, which prints "3 was entered as test". This is not true. To fix this, I changed the evaluation to
else if (test === 3) from else if (test != 3)
*/
else if (test === 3) {
  message = "3 was entered as test";
}
/*JB Error 2: Else should always come after all the other else if clauses. In order to resolve this, I had to add an if keyword after else.
To reiterate, I changed else (test=== 5) to else if (test === 5)*/
else if(test == 5) {
  message = message + test;
}
/*JB Error 3: The end of an if/else chain should always end with else. In order to resolve this issue, I removed the if keyword after
else on line 41. To clarify - I changed else if to else.
*/
else {
  message = "The answer is not found";
}

console.log (message);
