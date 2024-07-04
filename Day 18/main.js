// Day 18
var smartPhone = {
    brand: "Apple",
    model: "iphone 15",
    year: 2023,
    specs: {
        batteryLife: "18 hours",
        storage: "512GB",
        screenSize: "6.1 to 6.7 inch",
        camera: "48Mp"
    }
};
console.log(smartPhone);
//QUESTION 53
/*Question 53:Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what
 a computer programmer knows, like coding languages,tools, and software frameworks. Find a way to get
 three specific skills from this list and show them.*/
var developer = {
    languages: ["typeScript", "Rust", "python"],
    frameWorks: ["react", "angular", "Vue"],
    Tools: ["git", "Yarn", "Docker"]
};
// specifying skills
var languages = developer.languages;
console.log(languages);
var frameWorks = developer.frameWorks;
console.log(frameWorks);
var Tools = developer.Tools;
console.log(Tools);
// calling specific skill from each
console.log("".concat(languages[0], " ").concat(frameWorks[1], " ").concat(Tools[2]));
// QUESTION 54
/*Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name
 of each section based on what you need at that moment, like adjusting labels based on user choices.
*/
function object(key, value) {
    var FlexibleObject = {};
    FlexibleObject[key] = value;
    return FlexibleObject;
}
var objectEntries = object("color", "Black");
console.log(objectEntries);
