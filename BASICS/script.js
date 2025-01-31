// strict mode is a special mode that allows us to write secure JS code, first line of code, comments are allowed. Allowed to avoid bugs beacuse: it creates visible errors in certain situations where Java fails silently

"use strict";
const myName = "NICO";
console.log(myName);
console.log(typeof myName);

//const defines a constan variable, which means that the value of the variable cannot be changed.
//var defines a variable that can be changed.
var job = "teacher";
job = "designer";

// let defines a variable that can be changed, but only within the block of code where it is defined.
let myAge = 30;
myAge = 31;

//------------------------------------------------------------------------------------------------------------------------------------
// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);
// at the following path there is the oprator precedence table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
//------------------------------------------------------------------------------------------------------------------------------------
// Strings and Template Literals
const firstName = "Jonas";
const myJob = "teacher";
const birthYear = 1991;
const year = 2037;
// Two ways for the template literals
// First way: concatenation using the + operator
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
// Second way: template literals using backticks `` and ${}
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${myJob}!`;
console.log(jonasNew);
// Multiple lines: using the \n\ character
console.log(
  "String with \n\
    multiple \n\
    lines"
);

// ------------------------------------------------------------------------------------------------------------------------------------
// If / else statements
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// ------------------------------------------------------------------------------------------------------------------------------------
// Type conversion and coercion
// Type conversion (when I want to convert from one type to another) and type coercion that is when Java changes the type automatically without our indication
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // What I obtain is: 1991 "1991"
console.log(Number(inputYear) + 18); // 2009
// Type coercion
console.log("I am " + 23 + " years old");
// JS autoamtically change the type of 23 to string.

//The minus triggers the conversion to number type, while the plus triggers the string concatenation
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // 23103
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // true

// In JavaScript, there are several functions and methods used for type conversion:
// String(): Converts a value to a string. For example, String(123) returns "123".
// Number(): Converts a value to a number. For example, Number("123") returns 123.
// Boolean(): Converts a value to a boolean. For example, Boolean(1) returns true.
// toString(): Converts an object to a string. For example, 123.toString() returns "123".
// Unary + Operator: Converts a value to a number. For example, +"123" returns 123.
// parseInt(): Parses a string and returns an integer. For example, parseInt("123") returns 123.
// parseFloat(): Parses a string and returns a floating-point number. For example, parseFloat("123.45") returns 123.45.

// ------------------------------------------------------------------------------------------------------------------------------------
// Truthy and Falsy values
// Falsy values: 0, '', undefined, null, NaN
// Truthy values: all values that are not falsy values, like any strings, numbers, true, empty arrays, empty objects

// ------------------------------------------------------------------------------------------------------------------------------------
// Equality operators: == vs === (strict equality operator)
// === works as boolean operator, returning true or false result

// == performs type coercion, so a string is converted into number to make a comparison and obtain a boolean result.

// === does not perform type coercion

// ------------------------------------------------------------------------------------------------------------------------------------
////////////////////////////////////
// The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// ------------------------------------------------------------------------------------------------------------------------------------
//The Conditional Operator (Ternary operator)
//Ternary beacuse it has 3 parts: the condition, the if part and the else part

const myAge1 = 23;
myAge1 >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

// ------------------------------------------------------------------------------------------------------------------------------------

//Functions
//The are piece of code that can be reused later in the code
//Functions can be called with the function name followed by the parentheses.

function logger() {
  console.log("Logger function created succesfully!");
}
logger();
// We can pass parameters to the function and store the result in a variable that can be used later in the code
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// We can also use the function to return a value that can bes saved later in a variable and used in the code
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(calcAge2(1997));

// Three ways to declare a function
// Function declaration: we declare the function with the function keyword and to use it we can call it before the declaration usinng the function name followed by the parentheses
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// Function expression: we declare the function using a variable and an anonymous function the output of the function is stored in the variable
const calcAge3 = function (birthYear) {
  return 2037 - birthYear;
};
// Arrow function: we declare the function using the arrow function syntax
const calcAge4 = (birthYear) => 2037 - birthYear;

// ------------------------------------------------------------------------------------------------------------------------------------
// Arrays
// they are a collection of values that can be stored in a single variable
// they are 0-based indexed
// they can store different types of values
// they can store other arrays
// they can store functions
// they can store objects

// Array declaration
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
// to recall an element of the array we use the index of the element between square brackets
console.log(friends[0]);
// to change an element of the array we use the index of the element between square brackets
friends[2] = "Jay";
console.log(friends);
// to add an element to the array we use the push method
friends.push("John");
console.log(friends);
// to add an element to the array we use the unshift method that adds the element at the beginning of the array
friends.unshift("Ric");
console.log(friends);
// .pop() --> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
const popped = friends.pop();
console.log(popped);
console.log(friends);
// .shift() --> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
friends.shift();
console.log(friends);
// .indexOf() --> Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
// .includes() --> Determines whether an array includes a certain value among its entries, returning true or false as appropriate. It uses the strict equality operator (===) for comparisons.
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
