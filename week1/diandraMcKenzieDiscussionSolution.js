/* 
Title: Discussion 1.1 - Values and Variables; 
Author: Diandra McKenzie; 
Date: 29 November 2019; 
Modified By: James Brown; 
Description: This is a simple JavaScript program; 
with the use of JavaScript values, and variables; 
in an application. This program will not execute;
and has at least two errors.;
*/

//start program

/* Expected Output:
       25baby
*/

        //variables
        var a = 15; 
        var b = 10;

/*JB first error found. baby is not a boolean, therefore it needs to be 
surrounded by quotes or back tics. 
*/
        var x = `baby`;
        
        //output
/*JB second error found. The variable A on line 29 is not defined. 
Need to either define A or put it to lowercase as a was defined on line 19.
I simply changed it to lowercase.
*/
        document.write(a+b,x);

//end program