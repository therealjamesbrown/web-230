/*
============================================
; Title: Assignment 1.4
; Author: Sarah Kovar
; Date: 29 November 2019
; Modified By: James Brown; 
; Description: This program contains two errors.
; It demonstrates the use of JavaScript
; values and variables.
;===========================================
*/ 

/*
Expected output similar to:  "Today, Thu Nov 28 2019 19:14:56 GMT-0600 (Central Standard Time) is Thanksgiving."
*/

/* Variables */

/**JB first error found. DateTime object does not exist in JS. 
 * In order to use the Date object, we need to use Date, not DateTime after
 * the new keyword on line 23. 
*/
var currentTime = new Date();
var holiday = 'Thanksgiving';

/* Output */

/*JB second error found. CurrentDate is not defined above, therefore
a not defined error is getting thrown. To fix, I updated the variable
to currentTime, as defined above. 
*/
console.log("Today, " + currentTime + " is " + holiday + ".");

/* End */