/*
============================================
; Title:  Exercise 5.4
; Author: James Brown
; Date:   1/11/2020
; Description: Filtering/Reducing Complex Data Structures
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 5.4'));

// Variable declaration
var composers, ratings, genres;

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

//Using .map to create new array/object to get composer rating and last name
ratings = composers.map(function(composer){
  var ratingsObject = {
    rating: composer.rating,
    lastName: composer.lastName
  }
  return ratingsObject;
});

//Using .map to create new array/object to get composer genre and last name
genres = composers.map(function(composer){
  var genresObject = {
    genre: composer.genre,
    lastName: composer.lastName
  }
  return genresObject;
});

//output

//output for composer and rating
console.log(`\n-- COMPOSER BY RATING --`);
ratings.forEach(function(composer){
  console.log(`Rating: ${composer.rating}\nComposer: ${composer.lastName}\n`);
});

//output for composer and genre
console.log(`\n-- COMPOSER BY GENRE --`);
genres.forEach(function(composer){
  console.log(`Genre: ${composer.genre}\nComposer: ${composer.lastName}\n`);
});

//end program
