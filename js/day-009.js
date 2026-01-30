// ============================================
// DAY 9 EXERCISES - Callbacks, Arrow Functions, forEach & map
// ============================================

// ============================================
// LEVEL 1: CALLBACK FUNCTIONS - BASICS
// ============================================

// TODO 1: Create a function that accepts two numbers and a callback function
// The callback should perform an operation on the two numbers
// Test with add, subtract, multiply, divide operations
// Example: calculate(10, 5, add) should return 15
const calculate = (a, b, callback) => callback(a, b);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// TODO 2: Create a function called "processNumber" that takes a number and a callback
// The callback should transform the number (double, square, etc.)
// Test with different callbacks
const processNumber = (num, callback) => callback(num);
const double = n => n * 2;
const square = n => n * n;

// TODO 3: Create a function "repeatAction" that takes a number and a callback
// It should call the callback function that many times
// Example: repeatAction(3, sayHello) should call sayHello 3 times
const repeatAction = (n, callback) => {
  for(let i = 0; i < n; i++) callback();
};

// TODO 4: Create a function "applyToArray" that takes an array and a callback
// Apply the callback to each element and return new array
// Example: applyToArray([1,2,3], double) should return [2,4,6]
const applyToArray = (arr, callback) => {
  const result = [];
  for(let item of arr) result.push(callback(item));
  return result;
};

// TODO 5: Create a function "checkCondition" that takes a value and a callback
// The callback should return true/false
// Return "Condition met" or "Condition not met" based on callback result
const checkCondition = (val, callback) => callback(val) ? "Condition met" : "Condition not met";

// ============================================
// LEVEL 2: ARROW FUNCTIONS - BASICS
// ============================================

// TODO 6: Convert this function to arrow function:
// function add(a, b) { return a + b; }
const arrowAdd = (a, b) => a + b;

// TODO 7: Create an arrow function that takes a name and returns "Hello, [name]!"
const greet = name => `Hello, ${name}!`;

// TODO 8: Create an arrow function that takes a number and returns its square
// Use implicit return (no braces, no return keyword)
const arrowSquare = n => n * n;

// TODO 9: Create an arrow function that takes no parameters and returns a random number between 1-100
const getRandom = () => Math.floor(Math.random() * 100) + 1;

// TODO 10: Create an arrow function that takes a string and returns its length
const getStrLength = str => str.length;

// ============================================
// LEVEL 3: ARROW FUNCTIONS WITH CALLBACKS
// ============================================

// TODO 11: Rewrite TODO 1 using arrow functions for all operations
const calcArrow = (a, b, op) => op(a, b);
// Kullanım: calcArrow(10, 5, (x, y) => x + y);

// TODO 12: Create a function "filterNumbers" that takes an array and a condition (callback)
// Return only numbers that meet the condition
// Test with arrow functions: n => n > 10, n => n % 2 === 0
const filterNumbers = (arr, condition) => {
  const res = [];
  for(let n of arr) if(condition(n)) res.push(n);
  return res;
};

// TODO 13: Create a function "transformStrings" that takes an array of strings and a transformer callback
// Test with: s => s.toUpperCase(), s => s.length, s => s + "!"
const transformStrings = (arr, transformer) => arr.map(transformer);

// TODO 14: Use arrow functions to create a calculator object with methods
// add, subtract, multiply, divide - all should be arrow functions
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

// TODO 15: Create a function that takes an array and returns sum of all elements
// Use an arrow function to process each element
const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(n => sum += n);
  return sum;
};

// ============================================
// LEVEL 4: REST PARAMETERS
// ============================================

// TODO 16: Create a function using rest parameters that returns the sum of all arguments
// Example: sum(1, 2, 3, 4, 5) should return 15
const sumAll = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// TODO 17: Create a function using rest parameters that returns the average of all numbers
// Example: average(10, 20, 30) should return 20
const average = (...nums) => nums.reduce((a, b) => a + b, 0) / nums.length;

// TODO 18: Create a function that takes a greeting and unlimited names using rest
// Return array of greetings for each name
// Example: greetAll("Hello", "Alice", "Bob") returns ["Hello, Alice", "Hello, Bob"]
const greetAll = (greeting, ...names) => names.map(name => `${greeting}, ${name}`);

// TODO 19: Create a function that finds the maximum number from unlimited arguments
// Example: findMax(5, 12, 8, 20, 3) should return 20
const findMax = (...nums) => Math.max(...nums);

// TODO 20: Create a function that takes an operation (first param) and unlimited numbers (rest)
// Return result of applying operation to all numbers
// Example: calculate("multiply", 2, 3, 4) should return 24
const calculateAdvanced = (op, ...nums) => {
  if (op === "multiply") return nums.reduce((a, b) => a * b, 1);
  if (op === "add") return nums.reduce((a, b) => a + b, 0);
};

// ============================================
// LEVEL 5: forEach() METHOD
// ============================================

// TODO 21: Use forEach to print all elements in array: [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].forEach(el => console.log(el));

// TODO 22: Use forEach to print each element with its index
// Array: ["apple", "banana", "orange"]
// Output: "0: apple", "1: banana", "2: orange"
["apple", "banana", "orange"].forEach((fruit, i) => console.log(`${i}: ${fruit}`));

// TODO 23: Use forEach to calculate sum of array: [10, 20, 30, 40, 50]
// Store result in a variable
let totalSum = 0;
[10, 20, 30, 40, 50].forEach(n => totalSum += n);

// TODO 24: Use forEach to count how many even numbers in array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenCount = 0;
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(n => { if(n % 2 === 0) evenCount++; });

// TODO 25: Use forEach to create a new array with doubled values
// Original: [1, 2, 3, 4, 5]
// Result: [2, 4, 6, 8, 10]
const doubled = [];
[1, 2, 3, 4, 5].forEach(n => doubled.push(n * 2));

// TODO 26: Given array of objects: [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Use forEach to print: "Alice is 25 years old"
[{name: "Alice", age: 25}, {name: "Bob", age: 30}].forEach(p => console.log(`${p.name} is ${p.age} years old`));

// TODO 27: Use forEach to find the longest string in array
// Array: ["cat", "elephant", "dog", "butterfly"]
let longest = "";
["cat", "elephant", "dog", "butterfly"].forEach(s => { if(s.length > longest.length) longest = s; });

// TODO 28: Use forEach to count total characters in all strings
// Array: ["hello", "world", "javascript"]
let totalChars = 0;
["hello", "world", "javascript"].forEach(s => totalChars += s.length);

// TODO 29: Use forEach to print only positive numbers
// Array: [-5, 3, -2, 8, -1, 6]
[-5, 3, -2, 8, -1, 6].forEach(n => { if(n > 0) console.log(n); });

// TODO 30: Use forEach to create an object counting occurrences
// Array: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Result: {apple: 3, banana: 2, orange: 1}
const counts = {};
["apple", "banana", "apple", "orange", "banana", "apple"].forEach(f => counts[f] = (counts[f] || 0) + 1);

// ============================================
// LEVEL 6: map() METHOD - BASICS
// ============================================

// TODO 31: Use map to double all numbers in array: [1, 2, 3, 4, 5]
const mapDoubled = [1, 2, 3, 4, 5].map(n => n * 2);

// TODO 32: Use map to square all numbers in array: [2, 4, 6, 8]
const mapSquared = [2, 4, 6, 8].map(n => n * n);

// TODO 33: Use map to convert array of numbers to strings
// [1, 2, 3] should become ["1", "2", "3"]
const strings = [1, 2, 3].map(n => String(n));

// TODO 34: Use map to add "!" to end of each string
// ["hello", "world"] should become ["hello!", "world!"]
const excited = ["hello", "world"].map(s => s + "!");

// TODO 35: Use map to convert Celsius to Fahrenheit
// Celsius: [0, 10, 20, 30]
// Formula: (C * 9/5) + 32
const fahrenheit = [0, 10, 20, 30].map(c => (c * 9/5) + 32);

// TODO 36: Use map to get length of each string
// ["cat", "elephant", "dog"] should return [3, 8, 3]
const lengths = ["cat", "elephant", "dog"].map(s => s.length);

// TODO 37: Use map to create array of objects from array of names
// ["Alice", "Bob"] should become [{name: "Alice"}, {name: "Bob"}]
const objNames = ["Alice", "Bob"].map(name => ({name}));

// TODO 38: Use map to extract only names from array of objects
// [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Should return ["Alice", "Bob"]
const justNames = [{name: "Alice", age: 25}, {name: "Bob", age: 30}].map(p => p.name);

// TODO 39: Use map to add 10 to all prices
// [19.99, 29.99, 39.99] should become [29.99, 39.99, 49.99]
const cheapPrices = [19.99, 29.99, 39.99].map(p => p + 10);

// TODO 40: Use map with index to create numbered list
// ["apple", "banana", "orange"]
// Should return ["1. apple", "2. banana", "3. orange"]
const list = ["apple", "banana", "orange"].map((f, i) => `${i + 1}. ${f}`);

// ============================================
// LEVEL 7: map() METHOD - ADVANCED
// ============================================

// TODO 41: Use map to calculate discounted prices (20% off)
// [100, 200, 300] should return [80, 160, 240]
const discounted = [100, 200, 300].map(p => p * 0.8);

// TODO 42: Use map to create full names from first and last names
// [{first: "John", last: "Doe"}, {first: "Jane", last: "Smith"}]
// Should return ["John Doe", "Jane Smith"]
const fullNames = [{first: "John", last: "Doe"}, {first: "Jane", last: "Smith"}].map(p => `${p.first} ${p.last}`);

// TODO 43: Use map to convert array of numbers to "even" or "odd"
// [1, 2, 3, 4, 5] should return ["odd", "even", "odd", "even", "odd"]
const parities = [1, 2, 3, 4, 5].map(n => n % 2 === 0 ? "even" : "odd");

// TODO 44: Use map to add "passed" or "failed" property to student objects
// Pass mark is 60
// [{name: "Alice", score: 75}, {name: "Bob", score: 55}]
const results = [{name: "Alice", score: 75}, {name: "Bob", score: 55}].map(s => ({...s, status: s.score >= 60 ? "passed" : "failed"}));

// TODO 45: Use map to calculate age from birth year
// Current year: 2024
// [2000, 1995, 2010] should return [24, 29, 14]
const ages = [2000, 1995, 2010].map(y => 2024 - y);

// TODO 46: Use map to format prices with currency symbol
// [10, 20, 30] should return ["$10.00", "$20.00", "$30.00"]
const formattedPrices = [10, 20, 30].map(p => `$${p}.00`);

// TODO 47: Use map to convert strings to uppercase
// ["hello", "world"] should return ["HELLO", "WORLD"]
const caps = ["hello", "world"].map(s => s.toUpperCase());

// TODO 48: Use map to create initials from full names
// ["John Doe", "Jane Smith"] should return ["JD", "JS"]
const initials = ["John Doe", "Jane Smith"].map(n => n.split(" ").map(w => w[0]).join(""));

// TODO 49: Use map to calculate BMI from weight and height objects
// [{weight: 70, height: 1.75}, {weight: 80, height: 1.80}]
// BMI = weight / (height * height)
const bmis = [{weight: 70, height: 1.75}, {weight: 80, height: 1.80}].map(o => o.weight / (o.height ** 2));

// TODO 50: Use map to transform product objects
// Add 18% tax and calculate final price
// [{name: "Laptop", price: 1000}, {name: "Mouse", price: 25}]
const taxed = [{name: "Laptop", price: 1000}, {name: "Mouse", price: 25}].map(p => ({...p, finalPrice: p.price * 1.18}));

// ============================================
// LEVEL 8: COMBINING CONCEPTS
// ============================================

// TODO 51: Create a function that uses callback, arrow function, and rest
// It should take an operation and unlimited numbers
// Apply the operation to all numbers and return result
const multiOp = (op, ...nums) => nums.reduce(op);

// TODO 52: Use map to double numbers, then use forEach to print them
// Array: [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].map(n => n * 2).forEach(n => console.log(n));

// TODO 53: Create function with rest parameters that uses map internally
// Takes unlimited strings and returns array of their lengths
const getLengths = (...strings) => strings.map(s => s.length);

// TODO 54: Chain two map operations:
// First: double the numbers [1, 2, 3, 4, 5]
// Second: add 10 to each result
const chained = [1, 2, 3, 4, 5].map(n => n * 2).map(n => n + 10);

// TODO 55: Use map to create objects, then forEach to print them
// Start with: ["Alice", "Bob", "Charlie"]
// Create: [{name: "Alice", id: 1}, ...]
["Alice", "Bob", "Charlie"].map((name, i) => ({name, id: i + 1})).forEach(obj => console.log(obj));

// TODO 56: Create a calculator function that takes operator and uses rest for numbers
// Use map internally to apply operation
// Example: calc("double", 1, 2, 3, 4) returns [2, 4, 6, 8]
const mapCalc = (op, ...nums) => {
  const ops = { double: n => n * 2, square: n => n * n };
  return nums.map(ops[op]);
};

// TODO 57: Create array of student objects
// Use map to calculate grade (A, B, C, D, F)
// Use forEach to print: "Alice: A"
const students = [{name: "Alice", score: 95}, {name: "Bob", score: 40}];
students.map(s => ({...s, grade: s.score > 50 ? "A" : "F"})).forEach(s => console.log(`${s.name}: ${s.grade}`));

// TODO 58: Use callback function with arrow function
// Create filter function that takes array and condition
// Returns filtered array
const customFilter = (arr, cond) => arr.filter(item => cond(item));

// TODO 59: Create a function using rest that:
// Takes unlimited numbers
// Uses map to square them
// Uses forEach to print them
// Returns sum of all squared numbers
const squareLogSum = (...nums) => {
  const squares = nums.map(n => n * n);
  squares.forEach(s => console.log(s));
  return squares.reduce((a, b) => a + b, 0);
};

// TODO 60: Create a data processor:
// Takes array of objects and transformation function
// Uses map to transform each object
// Uses forEach to log transformation count
const dataProcessor = (arr, fn) => {
  const data = arr.map(fn);
  data.forEach((_, i) => console.log(`Processed item ${i + 1}`));
};

// ============================================
// LEVEL 9: REAL-WORLD SCENARIOS
// ============================================

// TODO 61: Create shopping cart total calculator
// Array of products: [{name: "item", price: 10, quantity: 2}, ...]
// Use map to calculate subtotal for each item
// Use forEach to sum total
let cartTotal = 0;
const cart = [{price: 10, quantity: 2}, {price: 5, quantity: 4}];
cart.map(i => i.price * i.quantity).forEach(sub => cartTotal += sub);

// TODO 62: Create grade analyzer
// Array of scores: [85, 92, 78, 95, 88, 76, 90]
// Use map to convert to letter grades
// Use forEach to count each grade
const gradeCounts = {};
[85, 92, 78].map(s => s > 90 ? "A" : "B").forEach(g => gradeCounts[g] = (gradeCounts[g] || 0) + 1);

// TODO 63: Create temperature converter
// Takes array of Celsius temperatures
// Use map to convert to Fahrenheit
// Use forEach to print both values
const temps = [0, 20, 30];
temps.map(c => ({c, f: (c * 9/5) + 32})).forEach(o => console.log(`${o.c}C = ${o.f}F`));

// TODO 64: Create user name formatter
// Array: [{firstName: "john", lastName: "doe"}, ...]
// Use map to create formatted full names (capitalize first letter)
const formattedUsers = [{firstName: "john", lastName: "doe"}].map(u => 
  u.firstName[0].toUpperCase() + u.firstName.slice(1) + " " + u.lastName[0].toUpperCase() + u.lastName.slice(1)
);

// TODO 65: Create discount calculator
// Products with original prices
// Use map to apply different discount rates
// Return array with original, discount, and final price
const applyDiscounts = (products) => products.map(p => ({
  ...p, 
  discount: p.price * 0.1, 
  final: p.price * 0.9
}));

// TODO 66: Create text statistics calculator
// Array of sentences
// Use map to get word count for each sentence
// Use forEach to calculate total words
let totalWords = 0;
["Hello world", "JS is cool"].map(s => s.split(" ").length).forEach(c => totalWords += c);

// TODO 67: Create student performance analyzer
// Array of students with multiple test scores
// Use map to calculate average for each student
// Use forEach to find class average
let classSum = 0;
const stData = [{scores: [80, 90]}, {scores: [70, 70]}];
const averages = stData.map(s => s.scores.reduce((a, b) => a + b) / s.scores.length);
averages.forEach(a => classSum += a);
const classAvg = classSum / averages.length;

// TODO 68: Create inventory manager
// Array of products with stock levels
// Use map to add "In Stock" or "Out of Stock" status
// Use forEach to count products in each category
const inv = [{name: "A", stock: 5}, {name: "B", stock: 0}].map(p => ({...p, status: p.stock > 0 ? "In Stock" : "Out of Stock"}));

// TODO 69: Create email formatter
// Array of user objects: {firstName, lastName, domain}
// Use map to create email addresses: firstname.lastname@domain.com
const emails = [{firstName: "john", lastName: "doe", domain: "gmail.com"}].map(u => `${u.firstName}.${u.lastName}@${u.domain}`);

// TODO 70: Create time converter
// Array of minutes: [60, 90, 120, 150]
// Use map to convert to "X hours Y minutes" format
const times = [60, 90].map(m => `${Math.floor(m / 60)} hours ${m % 60} minutes`);

// ============================================
// LEVEL 10: CHALLENGE PROBLEMS
// ============================================

// TODO 71: Create a function pipeline system
// Takes initial value and unlimited transformation functions
// Apply each transformation in order using callbacks
const pipeline = (val, ...fns) => fns.reduce((acc, fn) => fn(acc), val);

// TODO 72: Create array statistics calculator using rest, map, and forEach
// Calculate: sum, average, min, max, count
// From unlimited number arguments
const stats = (...nums) => ({
  sum: nums.reduce((a, b) => a + b, 0),
  average: nums.reduce((a, b) => a + b, 0) / nums.length,
  min: Math.min(...nums),
  max: Math.max(...nums),
  count: nums.length
});

// TODO 73: Create a data transformer with nested callbacks
// Takes array and multiple transformation steps
// Each step is a callback function
const multiTransform = (arr, ...steps) => steps.reduce((currentArr, step) => currentArr.map(step), arr);

// TODO 74: Create batch processor
// Takes array of items and batch size
// Process items in batches using callbacks
const batchProcess = (arr, size, callback) => {
  for(let i = 0; i < arr.length; i += size) callback(arr.slice(i, i + size));
};

// TODO 75: Create multi-level discount calculator
// Different discount tiers based on quantity
// Use map to calculate final prices
// Use callbacks for different discount strategies
const tieredDiscount = (products, strategy) => products.map(p => strategy(p));

// ============================================
// 🎉 END OF DAY 9 EXERCISES
// ============================================

