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

//let person="Narendra Modi" , carName="Mercedes Benz" , price=15555555;
let person="Narendra Modi" , 
carName="Mercedes Benz" , 
price=15555555;

console.log(person);
console.log(carName);
console.log(price);

let dog="labrador";
let dogName;
console.log(dog);
//let dog="Doberman";
//console.log(dog);
console.log(dogName);
/** 
 * + * - / %
 * 
*/
let number1 = 11;
let number2 = 2;
let result;
console.log("Addition");
result= number1+number2;
console.log(result);

console.log("Sub");
result= number1-number2;
console.log(result);

console.log("Mul");
result= number1*number2;
console.log(result);

console.log("Div");
result= number1/number2;
console.log(result);

console.log("Mod Div");
result= number1%number2;
console.log(result);


/**
 * Assignment operators
 */
let num1 = 11;
let num2 = 2;

num1 += num2;// num1 = num1+num2 => num1=11+2=13
console.log("Addition += ---"+num1);

num1 -= num2;// num1 = num1-num2 => num1=13-2=11
console.log("Sub -= ---"+num1);


num1 *= num2;// num1 = num1*num2 => num1=11*2=22
console.log("Mul *= ---"+num1);

num1 /= num2;// num1 = num1/num2 => num1=22/2=11
console.log("Div /= ---"+num1);

num1 %= num2;// num1 = num1%num2 => num1=11%2=1
console.log("Mod Divs += ---"+num1);


