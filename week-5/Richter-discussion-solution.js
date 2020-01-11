/*
============================================
; Title:  Discussion 5.1
; Author: Emily Richter
; Date:   9 January 2020
; Description: Map object that displays how
; to say hello in the keyed language.
; There are two errors in this program.
;===========================================
*/

// Required import statement for header
const header = require('../brown-header.js');
// Output header
console.log(header.display("Emily", "Richter", "Discussion 5.1"));

// Declare the map object
//JB - ERROR 1: Map was declared as Map[], but this is not the correct syntax. To resolve, I switched the [] to ().
var sayHello = new Map();

// Define keys and values of object
sayHello.set('French', 'Bonjour');
sayHello.set('English', 'Hello');
sayHello.set('German', 'Hallo');
sayHello.set('Spanish', 'Hola');
//JB - ERROR 2: Missing comma after 'Russian'. Added comma to resolve the issue.
sayHello.set('Russian', 'Zdravstvuyte');
sayHello.delete('English');

// Output
for (var [key, value] of sayHello) {
  console.log('"' + value + '" is how you say hello in ' + key + '.');
};

// End program
