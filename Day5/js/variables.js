/**
 * There 4 ways to declare a JS variable
 * Using var
 * Using let
 * Using const
 * Using nothing
 */
//Variables are containers for storing data valuess
//Using var --- this keyword is used in all JS code from 1995 to 2015
//If you want your code to run in older browsers you must use var
var x = 5;
var y = 6;
var z = x + y;

//Using let and const -- keywords were added in JS in 2015 
let a = 2;
let b = 4;
let c = a * b;

//Undeclared variables
d = 5;
e = 6;
f = e-d;

//const -- if you think values of a variable cannot change then use const
const age = 18;
const price1 = 20;
const price2 = 30;
let total = price1 + price2;