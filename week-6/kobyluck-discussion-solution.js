
/*
 	============================================
 	; Title: Kobyluck Discussion 6.1
 	; Author: Jonathan Kobyluck
 	; Date: 16 January 2020
 	; Modified By: James Brown
 	; Description: Objects and Built-in Objects
 	;===========================================
 	*/

 	// Require statement that imports my header file
 	//const header = require('../week-2/kobyluck-header.js');

 	// Calling the console log function to display my header
 	//console.log(header.display('Johnny', 'Kobyluck', 'Discussion 6.1'));

 	// Line break
 	console.log("");


 	// start program

 	/*

 	 Expected output:

 	 Johnny Kobyluck
 	 Discussion 6.1
 	 Date: 1/16/2020

 	 John has Blue eyes and is 24 years old.
 	 Jane has Brown eyes and is 32 years old.
 	 Jacob has Hazel eyes and is 27 years old.

 	*/

 	//object constructor for "Person"
 	function Person(name, eyeColor, age) {
     //JB Error 2: The return statement was using curly braces, instead of parenthesis. To resolve, I updated the return statement to use () instaed of {}.
 	return(
     //JB Error 1: the comma after eyeColor is causing the rest of the string to not execute. In order to resolve, I simply removed the comma.
 	console.log(name + " has " + eyeColor + " eyes and is " + age + " years old."))
 	}

 	// declaring personas
 	var person01 = new Person("John", "Blue", 24);
 	var person02 = new Person("Jane", "Brown", 32);
 	var person03 = new Person("Jacob", "Hazel", 27);

 	// end program
