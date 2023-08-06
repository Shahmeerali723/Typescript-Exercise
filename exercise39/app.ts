// Make a array of magician’s names 
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Dynamo", "Penn and Teller"];

// Pass the array to a function // called show_magicians(), which prints the name of each magician in the array 
function show_magicians(magicians: string[]) { // Use a for loop to iterate over the array 
    for (let magician of magicians) { // Print the name of each magician 
        console.log(magician); 
    } 
}

// Call the function with the array of magicians 
show_magicians(magicians);