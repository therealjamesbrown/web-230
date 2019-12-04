/*
============================================
; Title:  Assignment 2.4 Functions
; Author: James Brown
; Date:   12/4/2019
; Description: Creating several functions that accept parameters, return them,
  and then out put what was defined to the console.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

//variable declaration
var fullName, date, temperature, yearsOld, savingsAccountGoal;

//variable defining
fullName = myName(`James`, `Brown`);
date = dateWriter(2019, `December`, 04);
temperature = formatNumber(66.666, 1);
yearsOld = convertToInt(`27`);
savingsAccountGoal = convertToFloat(`30000.00`);;



//Function Declaration
//function that returns name
function myName(firstName, lastName){
  return `${firstName} ${lastName}`;
}

//function for dateWriter
function dateWriter(year, month, day){
  //return new date passed in
  return `${month} ${day}, ${year}`;

}

function formatNumber(temperature, numberOfFixedPositions){
  var result = temperature.toFixed(numberOfFixedPositions);
  return result;
}

function convertToInt(yearsOld){
  //parse string param and return value as integer
  yearsOldConverted = parseInt(yearsOld);
  return yearsOldConverted;
}

function convertToFloat(savingsAccountGoal){
  //parse string param and return as float
  savingsGoalConverted = parseFloat(savingsAccountGoal);
  return savingsGoalConverted;
}


//output - call header method with assignment values and input variables defined above.
console.log(`\n--Welcome to Assignment 2.4--
${header.display('James', 'Brown', 'Assignment 2.4')}\n
Hello my name is ${fullName}!\n
Today's date is ${date} and the current temperature is ${temperature} degrees.\n
I am ${yearsOld} years old and my savings account goal is ${savingsAccountGoal} dollars.`);


//end program


