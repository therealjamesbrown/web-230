/*
============================================
; Title:  Exercise 7.2
; Author: James Brown
; Date:   1/20/2020
; Description: 7.2 requirements.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 7.2'));

//variable declaration
var employees;

//object constructor
function Employee(id, firstName, lastName, title){
  this.id = id,
  this.firstName = firstName,
  this.lastName = lastName,
  this.title = title
}

//creating employees object
employees = [
  new Employee('1', 'James', 'Brown', 'Code Janitor'),
  new Employee('2', 'Fred', 'Empkey', 'Developer'),
  new Employee('3', 'Carl', 'Duda', 'CEO'),
  new Employee('4', 'Richard', 'Krasso', 'Marketing'),
  new Employee('5', 'Theo', 'Williams', 'Business Manager')
]

//output
console.log('\n')
employees.forEach(function(employee){
  console.log(`${employee.id} ${employee.firstName} ${employee.lastName} ${employee.title}`);
});


