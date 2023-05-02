//calculator simple program
/**
 * result = num1 + num2;
 * num1, num2 are operand
 * +  is your operator
 */

//const prompt = require("prompt-sync");
let result;

// take the operator input
const operator = prompt('Enter operator (either +, - , * or /): ');

//take the operand input
const num1 = parseFloat(prompt("Enter first number : "));
const num2 = parseFloat(prompt("Enter second number : "));

switch(operator){
    case '+':
            result = num1+num2;
            console.log(num1 + " + " + num2 +" = "+result );
            break;
    case '-':
            result = num1-num2;
            console.log(num1 + " - " + num2 +" = "+result );
            break;
    case '*':
            result = num1*num2;
            console.log(num1 + " * " + num2 +" = "+result );
            break;
    case '/':
            result = num1/num2;
            console.log(num1 + " / " + num2 +" = "+result );
            break;
    default:
        console.log("Invalid operator");
        break;
}
