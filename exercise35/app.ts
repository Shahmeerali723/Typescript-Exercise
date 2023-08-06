function make_shirt(size: string = "large", message: string = "I love TypeScript") { // The function should print // a sentence summarizing the size of the shirt and the message printed on it 
  console.log("You ordered a " + size + " shirt with the message: " + message); }

  // Make a large shirt and a // medium shirt with the default message make_shirt(); 
  make_shirt("medium");
  
  // Make a shirt of any size with a different // message 
  make_shirt("small", "Typescript is awesome!");