//Javascript Statements
/**
 * A program is a list of instructions to be executed by a computer.
 * In any programming language , these instructions are called statements.
 * A JS programming is a list of programming statements
 * For example:---
 * var is a reserved keyword used to declare variable in a JS program 
 * and x is here name of the variable or identifier
 * and 5 is the value assigned to variable x 
 * 
 * JS Statements are composed of :
 * Values, Operators, Expressions, Keywords and Comments.
 * 
 */
var x = 5; // older way to declare variables before ES6 (Ecmascript 6 or advance JS)
let y = 10;
let a,b,c; //Statement 1 -- declaring 3 variables a,b,c
a = 2; //Statement 2 -- intializing the variable with some value which is 2 in this example
b = 3; //Statement 3 -- Assign the values 3 to b
c = a + b; //Statement 4 -- Assign the sum of a and b to c

let d,e,f;
d= 1;e=5;f=d+e;

let name="Karthik";
let name= "Karthik"; // JS ignores multiple spaces

/**
 * Keywords
 * 
 * var   Declaers a variable
 * let   Declares a block variable
 * const Declares a block constant
 * if    Marks a block of statements to be executed on a condition
 * switch Marks a block of statements to be executed in different cases
 * for   Marks a block of statements to be executed in a loop
 * function Declares a function
 * return Exits a function
 * try Implements error handling to a block of statements
 */




/**
 * JS Values : Fixed Values and Variable Values
 * Fixed Values are called Literals
 * Variable Values are called Variables
 * 
 */
//JS Literals
//1. Numbers
10.50
10001
//2. Strings are text, written with double or single quotes
"Karthik"
"Karthik S"

//Declare a varibales
let x;
x=6;

//Operators (+ - * / %) to compute values  and = assingment operators
//Expression  a+b or a*6
"Karthik"+"   "+"S"  --- Karthik   S


//JS is case sensitive
x=2; X=3;
x=5;

/**
 * JS Identifiers/Names
 * Identifiers are used to name variables and keywords , and functions
 * The rules for legal names are the same in most of the programming languages
 * A JS name must begin with :
 * -A letter (A-Z or a-z)
 * -A dollar sign($)
 * -Or an undersocre(_)
 * Subsequent charactes may be letters , digits,underscores, or dollar signs
 * For example: a, A, person, employee, person1, employee2
 * or 
 * _num1, Number2, $num2,$result
 * 
 * Note:- Numbers are not allowed as the first character in names --- 1a,1person --- Not allowed
 * This way JS  can easily distinguish identifiers from numbers
 */

/**
 * JS ia case sensitive
 * The variables firstName and firstname, are two different variables
 * FirstName
 * JS does not interpret LET or Let as the keyword let
 */

