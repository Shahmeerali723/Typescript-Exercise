let guest : string[] = [
    "Sir Zia Khan",
    "Daniyal Bahi",
    "Adil Bahi",
]

let message : string = "You are cordially invited to my dinner party on Friday night.\n\nThe guests are:\n"

for (let i = 0 ; i < guest.length ; i++) {
    message += guest[i] + "\n";
}

console.log(message);

console.log("Unfortunately, Adil  Bahi can't make it to the dinner.");

guest[2] = "Ameen Bahi";

let message1 : string = "You are cordially invited to my dinner party on Friday night.\n\nThe guests are:\n"

for (let i = 0 ; i < guest.length ; i++) {
    message1 += guest[i] + "\n";
}

console.log(message1);



