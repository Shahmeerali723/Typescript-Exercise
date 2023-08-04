let guest : string[] = [
    "Sir Zia Khan",
    "Daniyal Bahi",
    "Adil Bahi",
]

function countGuest(guest:string[]) : number {
    return guest.length;
}
let numberOfGuest : number = countGuest(guest);

console.log(`"Dear, ${numberOfGuest}  have for you a dinner tonight with me"`);


// let guest : string[] = [ //here is a another way to solve that example
//     "Sir Zia Khan",
//     "Daniyal Bahi",
//     "Adil Bahi",
// ]

// function countGuest(guest:string[]) : number {
//     return guest.length;
// }
// let numberOfGuest : number = countGuest(guest);

// console.log(`"Dear, ${guest.length}  have for you a dinner tonight with me"`);


