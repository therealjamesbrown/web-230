/* 
Title: Assignment 1.5 - Types, Values, and Variables; 
Author: James Brown; 
Date: 29 November 2019; 
Description: Completed code per instructions in 
blackboard.;
*/


//start program

//Variables 
//Employee Record 1:
var employeeOneFirstName = `James`;
var employeeOneLastName = `Brown`;
var employeeOneAddress = `3344 Madeup St`;
var employeeOnePayRate = 43.26;
var employeeOnePayRateFormatted= employeeOnePayRate.toFixed(1);
var employeeOneHireDate = new Date(2010, 0, 1);
var employeeOneHireDateFormatted = employeeOneHireDate.toLocaleDateString();


//Employee Record 2:
var employeeTwoFirstName = `Shyan`;
var employeeTwoLastName = `Allen`;
var employeeTwoAddress = `2334 Real st`;
var employeeTwoPayRate = 20.23;
var employeeTwoPayRateFormatted= employeeTwoPayRate.toFixed(1);
var employeeTwoHireDate = new Date(2014, 3, 4);
var employeeTwoHireDateFormatted = employeeTwoHireDate.toLocaleDateString();

//Employee Record 3:
var employeeThreeFirstName = `Fred`;
var employeeThreeLastName = `Empkey`;
var employeeThreeAddress = `123 Fake Street`;
var employeeThreePayRate = 14.44;
var employeeThreePayRateFormatted= employeeThreePayRate.toFixed(1);
var employeeThreeHireDate = new Date(2016, 4, 2);
var employeeThreeHireDateFormatted = employeeThreeHireDate.toLocaleDateString();


//Output


//employee 1
console.log(`
            First Name: ${employeeOneFirstName}
            Last Name: ${employeeOneLastName}
            Address: ${employeeOneAddress}
            Pay Rate: ${employeeOnePayRateFormatted}
            Hire Date: ${employeeOneHireDateFormatted}`
            );

//employee 2
console.log(`
            First Name: ${employeeTwoFirstName}
            Last Name: ${employeeTwoLastName}
            Address: ${employeeTwoAddress}
            Pay Rate: ${employeeTwoPayRateFormatted}
            Hire Date: ${employeeTwoHireDateFormatted}
            `);

//employee 3
console.log(`
            First Name: ${employeeThreeFirstName}
            Last Name: ${employeeThreeLastName}
            Address: ${employeeThreeAddress}
            Pay Rate: ${employeeThreePayRateFormatted}
            Hire Date: ${employeeThreeHireDateFormatted}
             `);


//end program
