console.log ("Hello World");

// ============================================
// DAY 1 EXERCISES - JavaScript Fundamentals
// ============================================

// ============================================
// 1. console.log() Exercises
console.log("Day 1 Exercises");
// ============================================

// Exercise 1.1: Basic Output
// TODO: Print your name, age, and city
const name ="Gokhan";
const age = 29;
const city = "Ankara";
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// Exercise 1.2: Template Strings
// TODO: Create variables for name, age, city
// TODO: Use template string to print: "Hello! My name is [name], I'm [age] years old and I live in [city]."
console.log(`Hello! My name is ${name}, I am ${age} years old and I live in ${city}.`);

// Exercise 1.3: Math in console.log()
// TODO: Print results of: 10+5, 20-8, 6*7
console.log("10 + 5 =", 10 + 5);
console.log("20 - 8 =", 20 - 8);
console.log("6 * 7 =", 6 * 7);

// ============================================
// 2. const vs let Exercises
// ============================================

// Exercise 2.1: Decide const or let
// TODO: Create variable for PI (should it be const or let?)
// TODO: Create variable for userAge (should it be const or let?)
// TODO: Create variable for MAX_LOGIN_ATTEMPTS = 3 (should it be const or let?)

const PI = 3.14159;  // PI should be const because it doesn't change
let userAge = 21;  // userAge should be let because it can change
const MAX_LOGIN_ATTEMPTS = 3;  // MAX_LOGIN_ATTEMPTS should be const because it doesn't change


// Exercise 2.2: Fix the Errors
// TODO: Uncomment and fix the code below
// const userName = "John";
// userName = "Jane";  // This will cause an error - why?

const userName ="John";
// userName = "Jane";  // Fixed by changing to let if reassignment is needed
let userName2 = "John";
userName2 = "Jane";  // This works because userName2 is declared with let



// ============================================
// 3. Primitive Data Types Exercises
// ============================================

// Exercise 3.1: Identify Types
// TODO: Use typeof to check types and console.log the results
// typeof "Hello"
// typeof 42
// typeof true
// typeof undefined
// typeof null  (this one is tricky!)

console.log(typeof "Hello");      // string
console.log(typeof 42);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (this is a known quirk in JavaScript)

// Exercise 3.2: Create One of Each Type
// TODO: Create a string variable
// TODO: Create a number variable
// TODO: Create a boolean variable
// TODO: Create an undefined variable (just declare it, don't assign)
// TODO: Create a null variable

const myString = "JS";
const myNumber = 2026;
const myBoolean = false;
let myUndefined;
const myNull = null;


// Exercise 3.3: Check for Undefined
// TODO: Declare a variable without assigning a value
// TODO: Write an if statement to check if it's undefined
// TODO: If undefined, print "Variable is undefined"
let someVar;
if (typeof someVar === "undefined") {
    console.log("Variable is undefined");
}


// ============================================
// 4. Naming Conventions Exercises
// ============================================

// Exercise 4.1: Fix These Variable Names
// TODO: Fix these to use proper camelCase
// let First_Name = "John";
// let user_age = 25;
// let ISACTIVE = true;

let firstName = "John";
let userAge2 = 25;
let isActive = true;

// Exercise 4.2: Name These Variables (use camelCase)
// TODO: Create a variable for user's email address
// TODO: Create a variable for whether a form is valid (boolean)
// TODO: Create a variable for maximum number of retries

let userEmail = "john@example.com";
let isFormValid = true;
let maxRetries = 3;

// Exercise 4.3: Create Constants (use UPPER_SNAKE_CASE)
// TODO: Create a constant for API key = "abc123"
// TODO: Create a constant for max users = 100
// TODO: Create a constant for database URL = "mongodb://localhost"
const API_KEY = "abc123";
const MAX_USERS = 100;
const DATABASE_URL = "mongodb://localhost"; 


// ============================================
// 5. typeof Exercises
// ============================================

// Exercise 5.1: Check All Types
// TODO: Create these variables and check their types
// let a = "JavaScript";
// let b = 2026;
// let c = true;
// let d;
// let e = null;
// Print typeof for each

let a = "JavaScript";
let b = 2026;
let c = true;
let d;
let e = null;

console.log(typeof a); // string
console.log(typeof b);
console.log(typeof c); // boolean
console.log(typeof d); // undefined
console.log(typeof e); // object (quirk)

// Exercise 5.2: Type Checker Before Math
// TODO: Create variable userInput = "25" (string)
// TODO: Check if it's a number using typeof
// TODO: If not, convert it to number
// TODO: Multiply by 2 and print result

let userInput = "25";
if (typeof userInput !== "number") {
    userInput = Number(userInput);
}
console.log(userInput * 2);

// Exercise 5.3: Debug This Code
// TODO: Uncomment and fix the bug
// let age = "25";
// let nextYear = age + 1;
// console.log(nextYear);  // Expected: 26, but you'll get "251" - why?

let age2 = "25";
let nextYear = Number(age2) + 1;

console.log(nextYear);  // Fixed: now it will print 26

// ============================================
// 6. Type Conversion Exercises
// ============================================

// Exercise 6.1: String to Number (3 methods)
// TODO: Convert "100" to number using Number()
// TODO: Convert "3.14" to number using parseFloat()
// TODO: Convert "42" to number using unary plus (+)

const strNum1 = "100";
const num1 = Number(strNum1);
const strNum2 = "3.14";
const num2 = parseFloat(strNum2);
const strNum3 = "42";
const num3 = +strNum3;


// Exercise 6.2: Number to String
// TODO: Convert 2026 to string using String()
// TODO: Convert 3.14 to string using .toString()

const year = 2026;
const yearStr = String(year);
const pi = 3.14;
const piStr = pi.toString();


// Exercise 6.3: Predict the Output
// TODO: Before running, write what you think these will output
// console.log("5" + 3);      // Prediction: ?
// console.log("5" - 3);      // Prediction: ?
// console.log("10" * "2");   // Prediction: ?
// console.log("20" / "4");   // Prediction: ?
// Then uncomment and run to check!

console.log("5" + 3);      // Prediction: "53"
console.log("5" - 3);   // Prediction: 2
console.log("10" * "2");   // Prediction: 20
console.log("20" / "4");   // Prediction: 5

// Exercise 6.4: Truthy or Falsy?
// TODO: Use Boolean() to check these values
// Boolean(0)
// Boolean("")
// Boolean("hello")
// Boolean(1)
// Boolean(null)
// Boolean(undefined)

console.log(Boolean(0));           // false
console.log(Boolean(""));        // false       
console.log(Boolean("hello"));   // true
console.log(Boolean(1));         // true
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false


// ============================================
// 7. Mathematical Operators Exercises
// ============================================

// Exercise 7.1: Basic Calculator
// TODO: Create two variables: a = 20, b = 5
// TODO: Calculate and print:
//       - Sum (a + b)
//       - Difference (a - b)
//       - Product (a * b)
//       - Quotient (a / b)
//       - Remainder (a % b)

let ab = 20;
let bb = 5;
console.log("Sum:", ab + bb);
console.log("Difference:", ab - bb);
console.log("Product:", ab * bb);
console.log("Quotient:", ab / bb);
console.log("Remainder:", ab % bb);

// Exercise 7.2: Even or Odd Checker
// TODO: Create variable number = 17
// TODO: Use modulus (%) to check if even or odd
// TODO: Print "Even" or "Odd"

let number = 17;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Exercise 7.3: Temperature Converter
// TODO: Create variable celsius = 25
// TODO: Convert to Fahrenheit using formula: (celsius * 9/5) + 32
// TODO: Print: "25°C is equal to 77°F"

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// Exercise 7.4: Circle Calculations
// TODO: Create const PI = 3.14159
// TODO: Create variable radius = 5
// TODO: Calculate circumference = 2 * PI * radius
// TODO: Calculate area = PI * radius * radius
// TODO: Print both results

const PI2 = 3.14159;
let radius = 5;
let circumference = 2 * PI2 * radius;
let area = PI2 * radius * radius;
console.log("Circumference:", circumference);
console.log("Area:", area);

// Exercise 7.5: Divisibility Checker
// TODO: Check if 100 is divisible by 3 (remainder should be 0)
// TODO: Check if 45 is divisible by 5
// TODO: Find remainder when 17 is divided by 4

let numA = 100;
let numB = 45;
let numC = 17;
console.log("100 divisible by 3:", numA % 3 === 0);
console.log("45 divisible by 5:", numB % 5 === 0);
console.log("Remainder of 17 divided by 4:", numC % 4);