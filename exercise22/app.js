"use strict";
// Tests for equality and inequality with strings
// Define two variables to store two strings
let name1 = "Alice";
let name2 = "Bob";
// Test 1: Check if name1 is equal to name2 using the == operator
console.log("Is name1 == name2? I predict false.");
console.log(name1 == name2);
// Output: Is name1 == name2? I predict false.
// Output: false
// Test 2: Check if name1 is not equal to name2 using the != operator
console.log("Is name1 != name2? I predict true.");
console.log(name1 != name2);
// Output: Is name1 != name2? I predict true.
// Output: true
// Tests using the lower case function
// Define a variable to store a string with mixed case
let greeting = "Hello World";
// Test 3: Check if greeting is equal to "hello world" using the == operator and the lower case function
console.log("Is greeting == 'hello world'? I predict false.");
console.log(greeting == "hello world");
// Output: Is greeting == 'hello world'? I predict false.
// Output: false
// Test 4: Check if greeting is equal to "hello world" using the == operator and the lower case function on both sides
console.log("Is greeting.toLowerCase() == 'hello world'.toLowerCase()? I predict true.");
console.log(greeting.toLowerCase() == "hello world".toLowerCase());
// Output: Is greeting.toLowerCase() == 'hello world'.toLowerCase()? I predict true.
// Output: true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Define two variables to store two numbers
let num1 = 10;
let num2 = 20;
// Test 5: Check if num1 is equal to num2 using the === operator
console.log("Is num1 === num2? I predict false.");
console.log(num1 === num2);
// Output: Is num1 === num2? I predict false.
// Output: false
// Test 6: Check if num1 is not equal to num2 using the !== operator
console.log("Is num1 !== num2? I predict true.");
console.log(num1 !== num2);
// Output: Is num1 !== num2? I predict true.
// Output: true
// Test 7: Check if num1 is greater than num2 using the > operator
console.log("Is num1 > num2? I predict false.");
console.log(num1 > num2);
// Output: Is num1 > num2? I predict false.
// Output: false
// Test 8: Check if num1 is less than num2 using the < operator
console.log("Is num1 < num2? I predict true.");
console.log(num1 < num2);
// Output: Is num1 < num2? I predict true.
// Output: true
// Test 9: Check if num1 is greater than or equal to num2 using the >= operator
console.log("Is num1 >= num2? I predict false.");
console.log(num1 >= num2);
// Output: Is num1 >= num2? I predict false.
// Output: false
// Test 10: Check if num1 is less than or equal to num2 using the <= operator
console.log("Is num1 <= num2? I predict true.");
console.log(num1 <= num2);
// Output: Is num1 <= num2? I predict true.
// Output: true
