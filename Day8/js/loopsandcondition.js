/**
 * JS if else and elseif
 * switch case 
 */

function checkVoterAge(age){

    if(age>=18){
        console.log("eligible for Covid Vacinnation");
    }else if(12< age<=18 ){
        console.log("Vaccination will be provided next month");
    }else{
        console.log("Not eligible for vaccination");
    }
}
checkVoterAge(25);
checkVoterAge(10);
checkVoterAge(18);
console.log("*****************Switch case statement****************");
/**
 * 
 * switch(expression){
 *  case x:
 *      //code 
 *      break;
 * case y:
 *      //code 
 *      break;
 * default:
 *      //code
 * }
 * 
 * 
 * Above expression will be evaluated once
 * Value of expression is compared with the values of each case i.e. x, y 
 * If there is a match, the associated block of code is executed.
 * If there is no match, the default block of code is executed.
 */


let a =1;
switch(a){ 
    case "1"://switch statement checks the value strictly.
            a = 1;
            break;
    case 1:
            a = 'one';
            break; //The break statement terminates the block and control flow of the program jumps to outside the switch block
    case 2:
            a = 'two';
            break;
    case 3:
            a = 'three';
            break;
    default:
            a="not found";
            break;
            
}
console.log('The value is '+a);