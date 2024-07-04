// Day 18

//QUESTION 52

/*Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. 
Include its brand, model, and other key features like how much storage it has, the size of its screen,
 and how long its battery lasts.
 */
type Details ={
 brand:string,
 model:string,
 year:number,
 specs:{
  batteryLife:string,
  storage:string,
  screenSize:string,
  camera:string,}
}
 let smartPhone:Details={
brand:"Apple",
model:"iphone 15",
year:2023,
specs:{
    batteryLife:"18 hours",
    storage:"512GB",
    screenSize:"6.1 to 6.7 inch",
    camera:"48Mp"}
 };
console.log(smartPhone);

//QUESTION 53

/*Question 53:Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what
 a computer programmer knows, like coding languages,tools, and software frameworks. Find a way to get 
 three specific skills from this list and show them.*/

 let developer={
languages:["typeScript","Rust","python"],
frameWorks:["react","angular","Vue"],
Tools:["git","Yarn","Docker"]
 }
 // specifying skills
let languages = developer.languages;
console.log(languages);
let frameWorks = developer.frameWorks;
console.log(frameWorks);
let Tools = developer.Tools;
console.log(Tools);
 // calling specific skill from each
 console.log(`${languages[0]} ${frameWorks[1]} ${Tools[2]}`);

 // QUESTION 54
 /*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name
  of each section based on what you need at that moment, like adjusting labels based on user choices.
 */
  function object (key:string,value:string){
    let FlexibleObject ={};
    FlexibleObject[key]= value;
    return FlexibleObject
  }
let objectEntries = object("color","Black");
console.log(objectEntries)

// Day 18 is completed