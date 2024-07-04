// Day 19 
//QUESTION 55
/*Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list
where each number is twice its original value.
*/

let number:number[] =[1,2,3,4,6];
// double number array
let doublenum:number[] =[]
number.forEach((number)=>{
    doublenum.push(number*2)
});
console.log(doublenum);

//QUESTION 56
/*Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that 
has only the words.
 */
//Mixed array
let array = ["hania",1,9,true,false,"faiza","aliza"];
// string Array
let onlyString = array.filter((str)=>typeof str === "string");
console.log(onlyString)

//QUESTION 57
/*Question 57: Find the Average Grade: Given a list of grades, calculate the average grade. */

let list = [40,70,86,90,45,67,44,67,89];
let averageGrade = list.reduce((total,list)=>total+ list )/ list.length;
console.log(averageGrade)

// Day 19 is completed