"use strict";
// Start with a copy of your program from Exercise 39 // Make a array of magician’s names 
let magicians = ["David Copperfield", "Harry Houdini", "Dynamo", "Penn and Teller"];
// Pass the array to a function // called show_magicians(), which prints the name of each magician in the array 
function show_magicians(magicians) {
    for (let magician of magicians) { // Print the name of each magician 
        console.log(magician);
    }
}
// Write a function called make_great() that modifies the array of magicians by adding // the phrase the Great to each magician’s name 
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) { // Add the phrase the Great to each magician’s name 
        magicians[i] = magicians[i] + " the Great";
    }
}
// Call make_great() with the array of magicians 
make_great(magicians);
// Call show_magicians() to // see that the list has actually been modified 
show_magicians(magicians);
