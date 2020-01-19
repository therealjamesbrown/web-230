/*
============================================
; Title:  Exercise 6.4
; Author: James Brown
; Date:   1/19/2020
; Description: Code per instruction from 6.4. Working with nested objects.
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 6.4'));

// Welcome message
console.log('\n--Welcome to Exercise 6.4 --');

//variable declaration
var ticket, todaysDate;

//get today's date for the dateCreate property and use it in the output
todaysDate = new Date().toLocaleDateString('en-US');

//variable/object defining
ticket = {
  ticketId: `34535355`,
  name: `BU Web Dev Support Req`,
  dateCreated: todaysDate,
  priority: `1`,
  person: {
    personId: `434434`,
    firstName: `James`,
    lastName: `Brown`,
    jobTitle: `Code Janitor`
  }
}

//output
console.log(`Ticket ${ticket.ticketId}, was created on ${ticket.dateCreated} and assigned to employee ${ticket.person.firstName} ${ticket.person.lastName} (${ticket.person.jobTitle}).`);

//end program
