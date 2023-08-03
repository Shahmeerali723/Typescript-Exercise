let guest : string[] = [
    "Sir Zia Khan",
    "Daniyal Bahi",
    "Adil Bahi",
]

for (let i = 0 ; i < guest.length ; i++) {
    console.log("Dear " + guest[i] + ",\nYou are cordially invited to my dinner party on Friday night.\nI hope you can make it and enjoy some delicious food and great conversation.\nPlease RSVP by tomorrow.\nSincerely,\nYour friend");
}


console.log("Unfortunately, Adil  Bahi can't make it to the dinner.");

guest[2] = "Ameen Bahi";

for (let i = 0 ; i < guest.length ; i++) {
    console.log("Dear " + guest[i] + ",\nI hope you are still looking forward to my dinner party on Friday night.\nI have some news: Adil Bahi can't make it, but I have invited Ameen Bahi instead.\nShe is a friend of ypu and me, and I think you will get along well with her.\nShe is very interested in your work as a Programmer.\nPlease let me know if you have any questions or concerns.\nSee you soon!");
}


console.log("Good news: I found a bigger table for the dinner party!");

guest.unshift("Miss Hira");
guest.splice(2 , 0 , "Imran Bahi");
guest.push("Waris");

for (let i = 0 ; i < guest.length ; i++) {
    console.log("Dear " + guest[i] + ",\nI'm delighted to invite you to my dinner party on Friday night.\nI found a bigger table and I thought you would be a great addition to the guest list.\nYou are an amazing founder/teacher/leader/programmer/soloprenure and I'm sure everyone will enjoy your performance/work/art/lessons.\nPlease let me know if you can make it.\nSee you soon!");
}





