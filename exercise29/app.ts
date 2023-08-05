let usernames: string[] = []; // you can change the values to your preferences

// check if the array is empty using the length property 
if (usernames.length === 0) { // print a message that the list is empty 
  console.log("We need to find some users!"); 
} else { // loop through the array using a for-of loop 
  for (let username of usernames) { // check if the username is ‘admin’ 
    if (username === "admin") { // print a special greeting for the admin 
      console.log(`Hello admin, would you like to see a status report?`); 
    } else { // print a generic greeting for other users 
      console.log(`Hello ${username}, thank you for logging in again.`); 
    } 
  } 
}