"use strict";
// declare an array of usernames and assign it to a variable 
let usernames = ["admin", "alex", "sensei", "bob", "aric"]; // you can change the values to your preferences
// loop through the array using a for-of loop 
for (let username of usernames) { // check if the username is ‘admin’ 
    if (username === "admin") { // print a special greeting for the admin 
        console.log("Hello admin, would you like to see a status report?");
    }
    else { // print a generic greeting for other users 
        console.log("Hello ${username}, thank you for logging in again.");
    }
}
