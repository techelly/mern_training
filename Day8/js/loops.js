/**
 * for
 * for in  -- loops through the properties of an object
 * for of  -- loops through the values of an iterable object
 * while
 * do while
 */

function forLoop(){
    let count =0;
    for(let i =0; i<10;i++){
        console.log("Value of i ---"+i);
        if(count === 5){ //i===5
            //break; // jumps out of a loop
            //console.log(count);
            continue; //jumps over one iteration in a loop
        }
        //console.log( "value of i is ---"+i+" --- count value is ---"+count);
        count++;
    }
    console.log("Value of ---"+count);
}

forLoop();