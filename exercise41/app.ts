// Start with your work from Exercise 40 // Make a array of magician’s names 
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Dynamo", "Penn and Teller"];

// Pass the array to a function // called show_magicians(), which prints the name of each magician in the array 
function show_magicians(magicians: string[]) { // Use a for loop to iterate over the array 
  for (let magician of magicians) { // Print the name of each magician 
    console.log(magician); 
  } 
}

// Write a function called make_great() that modifies the array of magicians by adding // the phrase the Great to each magician’s name 
function make_great(magicians: string[]) { // Create a new array to store the modified names 
  let great_magicians: string[] = []; // Use a for loop to iterate over the array 
  for (let magician of magicians) { // Add the phrase the Great to each magician’s name and push it to the new array 
    great_magicians.push(magician + " the Great"); } // Return the new array 
    return great_magicians; }

// Call the function make_great() with a copy of the array of magicians’ names // Use the spread operator (…) to create a copy of the array 
let great_magicians = make_great([...magicians]);

// Because the original array will be unchanged, return the new array and store it in a separate array // Call show_magicians() with each array to show that you have one array of the original // names and one array with the Great added to each magician’s name 
show_magicians(magicians); 
show_magicians(great_magicians);