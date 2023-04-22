//program to print text
//variable a cannot be used here
var a ="Karthik";// Global Scope
function greet(){
    //variable a can be used here inside the function
    //var a = "hello"; // Local Scope
    //a = "hello"; // within function scope we are changing the value of varibale a 
    console.log("-----"+a +"---")
}
console.log(a);
var a ="S ";
greet();//hello


/**
 * let is block-scoped
 * The variable declared with let can only be accessed inside a block of code
 * 
 * let doesn't allow to redeclare variables
 */

function greetings(){
    let msg="hello";
    //variable msg2 cannot be used here
    if(msg == "hello"){
        let msg2 = "world";
        console.log(msg+ ' ' +msg2);       
    }
    //let msg="How are you ?";// error 
      //variable msg2 cannot be used here
    //console.log(msg+ ' ' +msg2);   //error    
}

greetings();

/**
 * Javascript Hoisting:-
 * Hositing is JS's default behaviour of moving declaration to the top
 * 
 * In JS a variable can be declared after it has been used
 * 
 */

//var variables are hoisted to the top of the scope of the program
z=5;// Intialized or use it 
console.log(z);// used
var z; // declare it //undefined or 5 (not an error);

//let doesn't allow hoisting
console.log(m);
let m; // m is not defined error