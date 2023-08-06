"use strict";
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log("You ordered a " + size + " shirt with the message: " + message);
}
// Make a large shirt and a // medium shirt with the default message make_shirt(); 
make_shirt("medium");
// Make a shirt of any size with a different // message 
make_shirt("small", "Typescript is awesome!");
