/**
 * JS strings are for storing and manipulating text.
 * A JS string is zero or more characters written inside quotes
 */
/**
 * Hello How are you ?
 * 0123456789101112131415161718
 * index start with zero and ends length-1
 */
let text = "Hello How are you ?";
let greetings = 'I am good';
console.log(typeof(text));
console.log(typeof(greetings));

// To find the length of a string , use built-in length property
let lengthOfText= text.length;
console.log(lengthOfText);
//Escape characters-- JS will misunderstand below string so we should use escape characterss

let sentence= "We are the so-called \"Vikings\" from the north";
console.log(sentence);

let words = 'For new line characters you * should use \\n . So it is good It\'s nice';
console.log(words);

/**
 * Six other escape sequences valid in JS are :
 * \b    Backspace
 * \f    Form Feed
 * \n    New Line
 * \r    Carriage Return
 * \t Horizontal Tabulator
 * \v Vertical Tabulator
 * 
 * These characters above were originally designed to control typewriters, teletypes and fax machines.
 * They do not make any sense in HTML
 */
console.log("***************************");
let wordss = 'For new line characters \
you * should use \n . So it is good It\'s nice \
\\r Hope everything is fine.';
console.log(wordss);
console.log("***************************");
let texts ="Hello \
Karthik";
console.log(texts);

/**
 * JS Strings as Object
 * new String()
 */

let name = new String("Karthik");
let n= "Karthik";
console.log(typeof(name));
console.log(typeof(n));
//=== is the strict equality comparison operator
console.log(name === n); //false here name and n are not equal
//== is the abstract equality comparison operator or loosley equality comparator
console.log(name == n);
/***
 * It is know as loose equality operator because it checks abstract equality i.e.
 * it tends to convert the data types of operands in order to carry the comparison
 * when two operands aren't of the same data type.
 * 
 * != checks whether two values are not equal
 * == checks whether two values are not equal
 * x == y
 * x != y
 *  
 * */  
console.log("******************************");
let a = 10;
let b = '10';
console.log(typeof(b));
console.log(a == b); // output is true
console.log("******************************");
let c ='abc';
console.log(typeof(c));
console.log(b == c);// output is false
/**
 * === compares operand and returns true if both operands are of the same data type and have some value
 * otherwise, it returns false
 */
console.log(b === c);
console.log(b === a);
let d ='def';
console.log(typeof(c));
console.log(typeof(d));
console.log(c === d);
console.log("******************************");
/**
 * let a = 10;
    let b = '10';
    Strict equality :---
   #1  If the operands that we are comparing are of different data type, then it returns false
   #2 If any one of the two operands that we are comparing is NaN, then it will return false
   #3 if the operands that we are comparing are null or undefined , then it will retun true.
   #4  If the operands that we are comparing are objects, then it will return true if both refer to the same object, else it will return false.
 */
let e = 10;
console.log(a === b); // output is false
console.log(a === e); // true
console.log(b === e); // false
console.log("************Strict equality #1 When both operands are of different data type******************");
let n1 = 34;
let n2 = '34';
console.log(n1 === n2); // false
console.log(n1 !== n2); //true


console.log("************Strict equality #2 When either of the operands is NaN ******************");
let n3 = NaN;
let n4 = 34;
console.log(n3 === n4); // false
console.log(n3 !== n4); //true


console.log("************Strict equality #3 When either of the operands is null or undefined ******************");
let n5 = null;
let n6 = undefined;
let n7 = undefined;
let n8 = null;
console.log(n5 === n8); // true
console.log(n5 !== n8); //false
console.log(n5 === n6); // false
console.log(n6 === n7); // true

console.log("************Strict equality #4 When both operands are object ******************");
let car1 = {
    name : "Audi"
};

let car2 = {
    name : "Audi"
};

console.log(car1 === car1); //true -- its refering to the same instance or objects

console.log(car1 === car2); //false -- its refering to the different instance
//!== strict inequality 
// != inequality loosely 
console.log(car1.name);