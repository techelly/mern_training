/**
 * An array is a special variable, which can hold more than one value
 * In JS an array is an object datatype 
 */
const students=["Karthik","Rajesh","Mohit"]; //arrays of strings
const numbers=[4,5,6,8,10,9,7];//arrays of numbers
const mixvalues=["Karthik",5,5.55,new Date()];//Different datatypes data is allowed in JS arrays
console.log(mixvalues);
console.log(numbers);
console.log(students);
console.log(typeof(mixvalues));
console.log(typeof(numbers));
console.log(typeof(students));

const persons=[];
persons[0]="Rahul";
persons[1]="Prabhat";

const fruits= new Array("Mango","Apple","Banana");
let fruit = fruits[0];
console.log(fruit);
console.log("*********************************************")
//Loop to access all items from array fruits
for(let f in fruits){
    if(fruits[f] == "Mango"){
        console.log("Mango fruit is present in an array");
    }
    console.log(fruits[f]);
}

console.log("*********************************************")
console.log(fruits);
console.log("***************Length******************************")
console.log(fruits.length);
console.log("*********************************************")
console.log(fruits[fruits.length -1]);
console.log("***********************Adding an new item in an array**********************")
fruits[3]="Pears";
console.log(fruits);
fruits[1]="Melon";
console.log(fruits);
//fruits.append("Guava");//fruits.append is not a function
/**
 * JS Arrays methods
 *
 */
//toString()
console.log(fruits.toString());

//join() -- it joins all array elements to a string
console.log(fruits.join("*"));
let fr = fruits.join("*");
console.log(fr);
console.log(fruits);

//Popping and Pushing
//Remove elements and add new elements
//pop() method removes the last element from an array
fruits.pop();
console.log(fruits);
console.log("*********************************************");
fruits.pop(1);
console.log(fruits);
console.log("********************push()*************************");
fruits.push("Kiwi");
fruits.push("Chickoo");
console.log(fruits);

console.log("********************shifting elements*************************");
/**
 * Shifting is equivalent to popping, but working on the first element instead of the last.
 */
//shift() method removes the first array element and shifts all other elements to a lower index.
fruits.shift();
console.log(fruits);
//unshift method adds a new element to an array(at the begining) and "unshifts" older elements
fruits.unshift("Papaya");
console.log(fruits);
console.log("*******************concat two arrays**********************");
const cars =["Audi","Benz","Volvo"];
const bikes=["Ducati","BMW","Honda","Suzuki"];
const vehicles= cars.concat(bikes);
console.log(vehicles);

const nums =[1,2,3,4,5];
const nums1 =[6,7,8,9,10];
const nums2 =[11,12,13,14,15];
const numbersArray=nums.concat(nums1,nums2);
console.log(numbersArray);
const n = nums.concat(16);
console.log(n);

console.log("*****************flat*****************************");
/**
 * Falttening an array is the process of reducing the dimensionality of an array.
 * The flat() method creates a new array with sub-array elements concatenated to a specified path
 */
const myArr=[[1,20],[3,4],[5,6]];
const newArr= myArr.flat();
console.log(newArr);
console.log(myArr[0][0]);
console.log(myArr[0][1]);
/**
 * Splicing and Slicing of Arrays
 * The splice() method adds new items to an array
 * The slice() method slices out a piece of an array
 */

console.log(fruits);
/**
 * splice method in below example 
 * first parameter(2) defines the position where new elements should be added(spliced in)
 * second parameter(0) defines how many elements should be removed
 * 
 */
fruits.splice(2,0,"Lemon","Orange");
console.log(fruits);
fruits.splice(2,1,"Guava","Berries");
console.log(fruits);
fruits.splice(0,1);//splice method is used here to remove 1 element from 0 index position 
console.log(fruits);
/**
 * slice() method slices out a piece of an array into a new array
 */
const berry = fruits.slice(2);
console.log(berry);
/**
const orange = fruits.slice(2,2);
console.log(orange);
 */
let indexOfOrange= fruits.indexOf('Orange');
if(indexOfOrange > -1){
    fruits.splice(indexOfOrange,1);
}
console.log(fruits);

const kiwi = fruits.slice(3,4);
console.log(kiwi);
/**
 * The method selects elements from the start argument, and up to 
 * (but not including the end argument)
 */
const ki = fruits.slice(3,5);
console.log(ki);
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
