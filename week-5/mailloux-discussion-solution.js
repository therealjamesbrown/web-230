/*
============================================
; Title: Assignment 5.1
; Author: Laurie Mailloux
; Date:   January 7, 2020
; Edits by: James Brown
; Description: find 2 errors
;===========================================
*/

/*
  Expected output:
  FirstName LastName
  Exercise 5.1
  Today's Date
*/

//start program

//header
const header = require("../brown-header");

//function that returns name
function fullName(firstName, lastName) {
  return firstName + lastName;
}

//function for dateWriter for month year and day
function dateWriter(year, month, day) {
  return new Date();
}
console.log(header.display("Laurie", "Mailloux", "Assignment 5.1"));

//new line
console.log("");

//assign variable
var dogs = [
  {
    dogName: "Dewey",
    age: 9
  },
  {
    dogName: "Zoey",
    age: 6
  },
  {
    dogName: "Tebow",
    age: 2
  }
];
//call function
//JB Error: foreach wasn't camel cased. In order to use the forEach loop, it must be camel cased.
dogs.forEach(function(dog) {
  console.log("Name: " + dog.dogName + ", Age: " + dog.age);
});
