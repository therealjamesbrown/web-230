/*
============================================
; Title:  Exercise 4.4 - Filtering
; Author: James Brown
; Date:   12/20/2019
; Description: This code executes based on the requirements set in
  exercise 4.3/blackboard.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 4.4 - Filtering'));

//variable declaration
let vehiclesArray, i;

//variable defining
vehiclesArray = [`Car`, `Four Wheeler`, `Snowmobile`, `Motorcycle`, `Jet Ski`];

/**
 * Params: array, string
 * Response: none
 * Description: iterates the given array to see if the string provided exists in the array.
 */
function getValue(arr, string){
  let i;
  for(i=0; i<arr.length; i++){
    if(arr[i] === string){
      console.log(`\n-- SELECTED OPTION --\n${arr[i]}`);
    }
  }
}

//output
console.log(`\n-- DISPLAYING ARRAY ITEMS --`);
for(i=0; i<vehiclesArray.length; i++){
  console.log(vehiclesArray[i]);
}

getValue(vehiclesArray, `Car`);
getValue(vehiclesArray, `Snowmobile`);
