/**
 * JS Data types
 * A variable can hold numbers like 5 , 5.50 and text values like "Karthik"
 * text values are called text strings
 * JS can handly many types of data , but of now just focus on numbers and strings
 */

const pi =3.14;
let firstName = "Karthik";
let lastName = 'Srinivasmurthy';
console.log("**************************");
console.log(pi);
console.log(firstName);
//JS is a case Sensitive
//console.log(lastname);//Uncaught ReferenceError: lastname is not defined
console.log(lastName); 
/**
 * JS 8 Datatypes
 * 1. String
 * 2. Number
 * 3. Bigint
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 * 8. Object
 * 
 * The Object Datatype
 *  1. An object
 *  2. An array
 *  3. A date
 * 
 */

//Numbers
let length = 16;
let weight = 7.5;

//Strings
let color = "Yellow";
let lastname = "Srinivasmurthy";

//Boolean
let x = true;
let y = false;

//Object
const person ={firstName: "Karthik" , lastName:"Srinivasmurthy"};

//Array object:
const cars =["Volvo","BMW","Audi", "Toyota"];

//Date object
const date = new Date("2023-04-22");

/**
 * Note:---
 * Different programming languages have many number types
 * Whole numbers (integers):
 * byte (8 bit) , shot (16 bit), int (32 -bit) long (64 bit)
 * 
 * Real numbers (floating -point)
 * float( 32 -bit) , double (64 bit)
 * 
 * In Javascript numbers are always one type : double (64 bit floating point)
 * BigInt is a new datatype introduced in ES2020 that can be used to store
 * integer values that are too big to be represented by a normal JS Number 
 */

let bigNumber = BigInt("123456789012345678901234567890");
//typeof operator
console.log(typeof(bigNumber));
console.log(typeof(lastName));
console.log(typeof(cars));
console.log(typeof(date));
console.log(typeof(person));
console.log(typeof(color));
console.log(typeof(length));



