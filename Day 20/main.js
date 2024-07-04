//QUESTION 58
/* Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/
import inquirer from "inquirer";
const averageScore = await inquirer.prompt([
    { message: "Enter your marks in english", type: "number", name: "marksInEng" },
    { message: "Enter your marks in Maths", type: "number", name: "marksInMaths" },
    { message: "Enter your marks in Physics", type: "number", name: "marksInPhy" },
    { message: "Enter your marks in Chemistry", type: "number", name: "marksInChem" },
    { message: "Enter your marks in Urdu", type: "number", name: "marksInUrdu" },
    { message: "Enter your marks in Biology or computer", type: "number", name: "marksInBioOrComp" },
    { message: "Enter your marks in Islamiyat", type: "number", name: "marksInIsl" },
]);
console.log(averageScore);
let addMarks = averageScore.marksInEng + averageScore.marksInMaths + averageScore.marksInPhy + averageScore.marksInChem + averageScore.marksInUrdu + averageScore.marksInBioOrComp + averageScore.marksInIsl;
console.log(` total marks ${addMarks}`);
let average = addMarks / 7;
console.log(`your average is ${average}%`);
//QUESTION 59
/* Add a Special Number: Make a program that creates custom adders. These adders can add a specific
number to any other number you give them later.*/
function number(num) {
    return num;
}
function magicbox(digit) {
    return console.log(number(5) + digit);
}
magicbox(7);
//QUESTION 60
/*Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can
tell you the user's name and age.
*/
let userProfile = (function () {
    let name = "Aliza";
    let age = 16;
    return {
        Info: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        },
    };
})();
userProfile.Info();
