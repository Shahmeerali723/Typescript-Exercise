let current_users: string[] = ["john", "alice", "bob", "charlie", "david"]; // you can change the values to your preferences

// declare a list of new usernames and assign it to a variable 
let new_users: string[] = ["eric", "frank", "alice", "grace", "JOHN"]; // you can change the values to your preferences

// loop through the new_users list using a for-of loop 
for (let new_user of new_users) { // convert the new username to lowercase using the toLowerCase() method 
let lower_new_user: string = new_user.toLowerCase(); // check if the lowercase new username is in the current_users list using the includes() method 
if (current_users.includes(lower_new_user)) { // print a message that the person will need to enter a new username 
  console.log(`The username ${new_user}, has already been used. Please enter a new username.`); 
} else { // print a message that the username is available 
  console.log(`The username ${new_user}, is available.`); 
 } 
}