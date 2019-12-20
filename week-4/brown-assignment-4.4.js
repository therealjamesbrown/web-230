/*
============================================
; Title:  Exercise 4.4 - Predicates
; Author: James Brown
; Date:   12/20/2019
; Description: This code executes based on the requirements set in
  exercise 4.3/blackboard.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 4.4 - Predicates'));

// Welcome message
console.log('\n--Welcome to Exercise 4.4 - Predicates--');

//variable declaration
let states, statesSorted, statesSelected;

//variable defining
states = [`Nebraska`, `Iowa`, `Oregon`, `Arizona`, `Washington`];

/**
 * Params: element, value
 * Response: true/false
 * Description: Returns true/false given the comparison
 */
function getState(stringOne, stringTwo){
  if (stringOne === stringTwo){
    return true;
  }
}

/**OUTPUT**/

//Original Array
console.log(`\n-- ORIGINAL ARRAY --`);
for(let i=0; i < states.length; i++){
  console.log(states[i]);
}

//Sorting using sort()
console.log(`\n-- SORTED ARRAY --`);
statesSorted = states.sort();
for(let i=0; i < statesSorted.length; i++){
  console.log(statesSorted[i]);
}

//Selecting and returning a new array using filter()
console.log(`\n-- SELECTED VALUE --`);
statesSelected = states.filter(state => {
  return getState(state, `Arizona`);
})[0]
console.log(statesSelected);

//end program
