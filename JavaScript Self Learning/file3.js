/*
 =========================================Notes================================================
    String Indexing
        # string index 0 se start hota he. Agar string me space he to space bhi count hota he.

        Method Of String
            trim(): Use to remove space from begining and end of the string
            toUpperCase()
            toLowerCase()
            slice: Use to trim or cut string. it has two parameter (start index, end index)
    
    typeof Operator
        It use to check type of variable
        syntax: typeof variableName;


*/

"use strict";

let firstName=" Faizan   "

console.log(firstName[3]);          // It is use to specific index value
console.log(firstName.length);      // It is use to print lenght of string 
console.log(firstName.length-1);    // It is use to print last index value of string
console.log(firstName.length-2);    // It is use to print 2nd last index value of string
console.log(firstName.length-3);    // It is use to print 3rd last index value of string

firstName.trim();                   //It is Return new string
// newString=firstName.trim();
// console.log(newString.length);
firstName=firstName.trim();
console.log(firstName.length);

firstName.toUpperCase();                   //It is Return also new string
// newString=firstName.toUpperCase();
// console.log(newString);
firstName=firstName.toUpperCase();
console.log(firstName);

firstName.toLowerCase();                   //It is Return also new string
// newString=firstName.toLowerCase();
// console.log(newString);
firstName=firstName.toLowerCase();
console.log(firstName);

firstName.slice(0,4);                   //It is Return also new string
// newString=firstName.slice(0,4);
// console.log(newString);
firstName=firstName.slice(3);          // Here given only starting index as a parameter
console.log(firstName);

console.log(typeof firstName);        //check type of firstName. It is string type of variable

