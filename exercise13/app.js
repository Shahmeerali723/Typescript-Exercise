"use strict";
let guest = [
    "Sir Zia Khan",
    "Daniyal Bahi",
    "Adil Bahi",
];
guest.splice(2, 1);
let newGuest = "Ameen Bahi";
guest.push(newGuest);
let message = "You are cordially invited to my dinner party on Friday night.\n\nThe guests are:\n";
for (let i = 0; i < guest.length; i++) {
    message += guest[i] + "\n";
}
console.log(message);
