/**
 * JS String  Methods
 * String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim() // removes whitespace from both sides of string
String trimStart() // ES2019 --removes whitespace only from the start of string
String trimEnd() // ES2019 --removes whitespace only from the end of string
String padStart()
String padEnd()
String charAt()  // returns the character at a specified index(position) in a string
String charCodeAt() // returns the unicode of the character at a specified index in a string 
String split()
search() 
 * 
 */

/**
 * Hello How are you ?
 * 0123456789101112131415161718
 * index start with zero and ends length-1
 */
let text = "Hello How are you ?";
// To find the length of a string , use built-in length property
let lengthOfText= text.length;
console.log("Length of Text is ----"+lengthOfText);

/**
 * Extracting String Parts
 * There are 3 methods for extracting a part of a String:
 * slice(start,end);
 * substring(start,end);
 * substr(start,length);
 */

let part = text.slice(0,5);
console.log(part);
let part1 = text.slice(6,9);
console.log(part1);
let part2 = text.slice(6);
console.log(part2);
// If a parameter is negative, the position is counted from the end of the string
let part3 = text.slice(-6);
console.log(part3);
//This example slices out a portion of a string from position -12 to -6
let part4 = text.slice(-12,-6);
console.log(part4);


/**
 * substring() is similar to slice
 * Apple,Banana,Kiwi,Mango
 * 01234567891011-----------
 */
let fruits = "Apple,Banana,Kiwi,Mango";
console.log(fruits.length);
let partofstring = fruits.substring(6,12);
console.log(partofstring);

let partofstring1 = fruits.substring(6);
console.log(partofstring1);
console.log("****************************")
let partofstring2 = fruits.substr(-5);
console.log(partofstring2);