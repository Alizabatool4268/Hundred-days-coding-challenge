// DAY 17
//QUESTION 49
/*Question50:Function with Rest Parameters: Write a function that takes a rest parameter representing multiple
hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobbies) {
        console.log("".concat(hobbies, " is my hobby"));
    });
}
;
hobbies("painting", "coding", "drawing");
//QUESTION 50
/*Question 50: Multiline Template Literals: Use template literals to create a multiline string that
describes your ideal day. Include at least three different activities.*/
var myDay = "Following are the main highlights of my ideal day:\n1. My main goal is to offer all the prayers on the right time.\n2. I like to code and practice minimum 2 to 4 hours.\n3. In my free time I like to spend some time with my family.\n4. I like to end my day by making a todo list for tomorrow.";
console.log(myDay);
//QUESTION 51
/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of
a rectangle and refactor it into an arrow function. */
function areaOfRect(lenght, width) {
    return lenght * width;
}
console.log(areaOfRect(5, 6));
//refactoring to arrow function
var area = function (lenght, width) { return lenght * width; };
console.log(area(6, 7));
