/*
============================================
; Title:  Exercise 5.3
; Author: James Brown
; Date:   1/8/2020
; Description: Object Collections
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 5.3'));

// Welcome message
console.log('\n--Welcome to Exercise 5.3--');

// Variable declaration
var composers;

//variable defining - creating array of composer objects
composers = [
  {
    firstName: `Post`,
    lastName: `Malone`,
    genre: `Hip Hop`,
    rating: `5`
  },
  {
    firstName: `Richard`,
    lastName: `Wagner`,
    genre: `Classical`,
    rating: `8`
  },
  {
    firstName: `Frederic` ,
    lastName: `Chopin`,
    genre: `Classical`,
    rating: `6`
  },
  {
    firstName: `Joseph`,
    lastName: `Haydn`,
    genre: `Classical`,
    rating: `8`
  },
  {
    firstName: `John` ,
    lastName: `Lennon`,
    genre: `Rock`,
    rating: `10`
  },
];

//output, iterate over composer object
composers.forEach(function(composer){
  console.log(`Last Name: ${composer.lastName}, Genre: ${composer.genre}, Rating: ${composer.rating}`);
});

