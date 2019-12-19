/*
============================================
; Title:  Exercise 4.1 - Discussion Solution for Jeff Shepperd
; Author: Jeff Shepherd
; Date:   12/19/2019
; Modifications by: James Brown
; Description: Find the errors. The expected
; output is the total tuition due in the
; following format: "Total tuition due is $26000.00"
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 4.1 - Discussion Solution for Jeff Shepperd'));

// Welcome message
console.log('\n--Welcome to Exercise 4.1 - Discussion Solution for Jeff Shepperd--\n');

"use strict";

/**
 * Params: string and number
 * Response: a student object
 * Description: Student object constructor
 */
function Student(name, tuition) {
  this.name = name;
  this.tuition = tuition;
}

/**
 * Params: two numbers
 * Response: sum of two numbers
 * Description: adds two numbers
 */
function sum(firstNumber) {
let sum = 0;
sum += firstNumber;
  return sum;
}

/**
 * Params: arrays of student names and tuition due
 * Response: an array of student objects
 * Description: adds students to an array and returns it
 */
function initializeStudents(studentNames, tuitionDue) {
  let studentObjArray = [];
  for (let i = 0; i < studentNames.length; i++) {
    studentObjArray.push(new Student(studentNames[i], tuitionDue[i]));
  }
  return studentObjArray;
}

/**
 * Params: an array of student objects
 * Response: total tuition due for this group of students
 * Description: calculates total tuition for all students
 */
function getTotalDue(studentObjArray) {
  let totalDue = 0.0;
  for (let student of studentObjArray) {
    /*JB second error calling sum function expects two numbers/arguments. There's three numbers were looping through in the array,
    so this function doesn't make sense. Right now only one number is getting passed.
    we also aren't storing the result from calling sum into the totalDue variable, so we need to add total += sum(student.tuition)*/
    //totalDue += student.tuition;
    totalDue += sum(student.tuition);
  }
  return totalDue;
}

let studentNames = ["Dark Helmet", "Lone Star", "Princess Vespa"];
let tuitionDue = [9000.00, 12000.00, 5000.00];

//jb 1st issue, arguments are passed in backwards, according to function studentNames needs to go as the first arguments and tuitionDue as the second.
let studentObjArray = initializeStudents(studentNames, tuitionDue);

let grandTotal = getTotalDue(studentObjArray);

for (let student of studentObjArray) {
//commenting line 81 out as output is supposed to only be a single line
//console.log("Name: " + student.name + " Amount due: $" + student.tuition.toFixed(2));
}
console.log("Total tuition due is $" + grandTotal.toFixed(2));
