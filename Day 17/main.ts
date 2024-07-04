// DAY 17

//QUESTION 49
/*Question50:Function with Rest Parameters: Write a function that takes a rest parameter representing multiple 
hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/

function hobbies(...hobbies:string[]){
    hobbies.forEach((hobbies)=>{
        console.log( `${hobbies} is my hobby`)
    })
};
hobbies("painting","coding","drawing");

//QUESTION 50
/*Question 50: Multiline Template Literals: Use template literals to create a multiline string that 
describes your ideal day. Include at least three different activities.*/

let myDay:string = `Following are the main highlights of my ideal day:
1. My main goal is to offer all the prayers on the right time.
2. I like to code and practice minimum 2 to 4 hours.
3. In my free time I like to spend some time with my family.
4. I like to end my day by making a todo list for tomorrow.`;
console.log(myDay);

//QUESTION 51
/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of
a rectangle and refactor it into an arrow function. */
function areaOfRect(lenght:number,width:number):number{
    return lenght*width
}
console.log(areaOfRect(5,6));
//refactoring to arrow function
let area = (lenght:number,width:number):number => lenght*width;
console.log(area(6,7));

//Day 17 is completed