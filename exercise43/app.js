"use strict";
// Write a function that stores information about a car in a Object 
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer: manufacturer, model: model };
    // Use a for loop to iterate over the options array 
    for (let option of options) { // Use array destructuring to get the key and value of each option 
        let [key, value] = option; // Add the key and value to the car Object 
        car[key] = value;
    }
    // Return the car Object 
    return car;
}
// Call the function with the required information and two other name-value pairs, such as a // color or an optional feature 
let my_car = make_car("Tesla", "Model 3", ["color", "red"], ["autopilot", true]);
// Print the Object that’s returned to make sure all the information was // stored correctly 
console.log(my_car);
