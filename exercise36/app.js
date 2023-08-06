"use strict";
// Write a function called describe_city() that accepts the name of // a city and its country 
function describe_city(city, country = "Pakistan") {
    console.log(city + " is in " + country + ".");
}
// Call your function for three different cities, at least one of which is not in the // default country 
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Paris", "France");
