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
const job = "teacher";
const birthYear = 1991;
const year = 2037;
// Two ways for the template literals
// First way: concatenation using the + operator
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
// Second way: template literals using backticks `` and ${}
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
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
