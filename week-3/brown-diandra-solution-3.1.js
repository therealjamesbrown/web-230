/*
============================================
; Title:  Exercise 3.1 - Discussion Solution for Diandra McKenzie
; Author: Diandra McKenzie
; Date:   12/12/2019
; Modifications by: James Brown
; Description: Control statement with two errors
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('../brown-header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('James', 'Brown', 'Exercise 3.1 - Discussion Solution for Janet Blohn'));

// Welcome message
console.log('\n--Welcome to Exercise 3.1 - Discussion Solution for Janet Blohn--\n');


/*
 	 Expected output:

 	 Diandra McKenzie
 	 Exercise 2.3
 	 Today's Date

 	 Your child can register for Pre-k!
 	 Your child must be born in 2016 to register for Pre-k!
 	 Your child can register for Kindergarten!
 	 Please call the school.
 	*/


 	//Start Program

  //variable
 	var x=2016


 	//if..else Statements
 	 /**JB Error 1 - ==== is not a valid comparison. In order to solve this error, I had to change ==== to === on line 44.*/
 	if(x === 2016) {
 	console.log("Your child can register for Pre-k!")
 	}
 	else if(x > 2016) {
 	console.log("Your child must be born in 2016 to register for Pre-k!")
 	}
 	else if(x == 2015){
 	console.log("Your child can register for Kindergarten!")
   }
  /**JB Error 2: The else statement should always come last in an if/else statement. An error is occurring because
   there is another else if after the else clause on line 56. To resolve, I simply added and if keyword after else on line 55.
   */
 	else if (x === 2016){
 	console.log("Please call the school.")
 	}
 	else {
 	console.log("Call the board of Ed.")
 	}
  //End Program
