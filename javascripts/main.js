/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: givenName equals undefined.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: givenName equals "Tim"


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: givenName is set to "JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: "Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 50 - 10

math = high - "5";
// Q: What is `math` set to?
// A: 50 - "5"


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var timAge = today - born;
var sentence = " Tim is ";
sentence += timAge;
sentence += " years old"

console.log(sentence);

// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
var yourName = "Ernesto"
var instructorName = "Jason"


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

// Answers Below:

console.log(yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName);
