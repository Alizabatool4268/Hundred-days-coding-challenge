"use strict";
// QUESTION 46
Object.defineProperty(exports, "__esModule", { value: true });
/*Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make,
 model, year, and a method describe() that logs a sentence about the laptop.*/
let laptop = {
    make: "HP",
    model: "spectre x 360 14",
    year: 2024,
    describe: function () {
        console.log(`This laptop is of ${laptop.make}. Model is ${laptop.model} and was made in the year ${laptop.year}`);
    },
};
laptop.describe();
// OUESTION 47
/*Question 47 :Advanced Array Destructuring: Given an array of objects representing different laptops,
each with properties make, model, and year, use array destructuring to assign the first and second
laptops to variables. Then, log these variables.*/
let laptops = [
    { make: "HP", model: "spectre x 360 14", year: 2024 },
    { make: "Acer", model: "chromebook spin 714", year: 2022 },
    { make: "Apple", model: "Macbook pro", year: 2020 },
];
let laptop1 = laptops.slice(0, 1);
console.log(laptop1);
let laptop2 = laptops.slice(1, 2);
console.log(laptop2);
// QUESTION 48
/*Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of
two different sets of laptops. Use the spread operator to combine these arrays into a single array
 sorted in ascending order, then log the result.*/
let priceSet1 = [12000, 150000, 13000];
let priceSet2 = [16000, 88000, 19000];
let totalPrice = [...priceSet1, ...priceSet2].sort((a, b) => a - b);
console.log(totalPrice);
