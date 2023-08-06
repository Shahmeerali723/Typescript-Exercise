"use strict";
// Write a function called make_album() that builds a Object // describing a music album 
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title };
    // Add an optional parameter to make_album() that allows you to store the // number of tracks on an album. If the calling line includes a value for the number // of tracks, add that value to the album’s Object 
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Use the function to make three dictionaries representing different // albums 
let album1 = make_album("Taylor Swift", "Red");
let album2 = make_album("Ed Sheeran", "Divide", 16);
let album3 = make_album("Adele", "25");
// Print each return value to show that Objects are storing the // album information correctly 
console.log(album1);
console.log(album2);
console.log(album3);
