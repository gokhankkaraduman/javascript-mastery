// ============================================
// DAY 6 EXERCISES - Advanced Arrays, Scope, Arguments & Hoisting
// ============================================

// ============================================
// LEVEL 1: FOR...OF LOOP BASICS
// ============================================

// TODO 1: Use for...of to print all elements in the array
let fruits = ["apple", "banana", "orange", "grape"];
const fruitList = function () {
  for (let fruit of fruits) {
    console.log(fruit);
  }
};
fruitList();

// TODO 2: Use for...of to print all numbers multiplied by 2
let numbers = [5, 10, 15, 20, 25];
const multiplyByTwo = function () {
  for (let number of numbers) {
    console.log(number * 2);
  }
};
multiplyByTwo();

// TODO 3: Use for...of to count how many vowels are in the array
let letters = ["a", "b", "e", "f", "i", "o", "u", "x"];
function countVowels(arr) {
    let count = 0;
    for (let letter of arr) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(letters));

// TODO 4: Use for...of to create a new array with all strings in uppercase
let words = ["hello", "world", "javascript"];
function toNewUpperCase (arr){
    let upperWords =[]
    for(let word of words){
        const newUpperWord = word.toUpperCase();
        upperWords.push(newUpperWord);
    }
    return upperWords;
}
console.log(toNewUpperCase(words))

// TODO 5: Use for...of to find if "banana" exists in the array
let basket = ["apple", "orange", "banana", "grape"];
const findBananaInBasket = (arr) => {
  for (let item of arr) {
    if (item === "banana") {
      return true;
    }
  }
  return false;
};
console.log(findBananaInBasket(basket));

// ============================================
// LEVEL 2: TRADITIONAL FOR LOOP WITH INDEX
// ============================================

// TODO 6: Print each element with its index
let colors = ["red", "green", "blue", "yellow"];
const colorsWithIndex = (arr) => {
    let message = [];
    for(let i =0; i < arr.length; i++){
        let colorWithIndex = `${i}: ${colors[i]}`
        message.push(colorWithIndex);
    }
    return message;
}
console.log(colorsWithIndex(colors));

// TODO 7: Find the index of the maximum number in the array
let nums = [23, 45, 12, 67, 957, 34, 89, 15, 500];
const findIndexOfMaximumNumber = (arr) => {
    let max = arr[0];
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.log(findIndexOfMaximumNumber(nums));

// TODO 8: Create a new array with elements at even indices only
let items = ["a", "b", "c", "d", "e", "f"];
const evenIndexOnly = function (arr) {
    let evenItems = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            evenItems.push(arr[i])
        }
    }
    return evenItems;
}
console.log(evenIndexOnly(items));

// TODO 9: Reverse an array manually using a for loop
let original = [1, 2, 3, 4, 5];
const reverseOrginal = function (arr) {
    let reverse = [];
    for(let i = 0; i < arr.length; i++){
        reverse.unshift(arr[i])
    }
    return reverse;
}
console.log(reverseOrginal(original));

// TODO 10: Find the first index where the value is greater than 50
let values = [12, 34, 23, 67, 89, 45];
const findGreaterThanFifty = function (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 50){
            return i;
        }
    }
    return -1 ;
}
console.log(findGreaterThanFifty(values));

// ============================================
// LEVEL 3: SCOPE - GLOBAL VS LOCAL
// ============================================

// TODO 11: Create a global variable and access it inside a function
const globalVar = "global variable"
const globalVarFunction = () => {
    console.log(globalVar);
}
globalVarFunction();

// TODO 12: Create a local variable inside a function and try to access it outside
const localVar = () => {
    const localVarInsideFunc = "local variable";
}
// console.log(localVarInsideFunc); // Bu satır hata verir (doğru yaklaşım)

// TODO 13: Create nested functions where inner function accesses outer function's variable
function outer() {
    let outerMsg = "I am from outer";
    function inner() {
        console.log(outerMsg);
    }
    inner();
}
outer();

// TODO 14: Demonstrate block scope with let inside an if statement
if (true) {
    let blockScoped = "I am trapped in this block";
    console.log(blockScoped);
}
// console.log(blockScoped); // ReferenceError: blockScoped is not defined

// TODO 15: Show the difference between var and let in a loop
for (var i = 0; i < 3; i++) {} 
console.log("var i:", i); // 3 (sızıntı yapar)

for (let j = 0; j < 3; j++) {}
// console.log(j); // Hata: j is not defined (blok kapsamı)

// ============================================
// LEVEL 4: BASIC ARGUMENTS OBJECT
// ============================================

// TODO 16: Create a function that prints all arguments passed to it
const printAllArguments = function () {
    const arr = Array.from(arguments);
    for(let item of arr) {
        console.log(item);
    }
}
printAllArguments(1, 2, 3, 4, 5);

// TODO 17: Create a function that returns the number of arguments passed
function countArguments () {
    return arguments.length;
}
console.log(countArguments("a", "b", "c"));

// TODO 18: Create a function that returns the first and last argument
const firstAndLast = function () {
    const args = Array.from(arguments)
    return [args[0], args[args.length - 1]];
}
console.log(firstAndLast(10, 20, 30, 40, 50));

// TODO 19: Create a function that checks if any argument is negative
function hasNegative () {
    for(let arg of arguments){
        if(arg < 0) return true;
    }
    return false;
}
console.log(hasNegative(5, -3, 10, 15));

// TODO 20: Create a function that returns all arguments as a real array
const argumentsToArray = (...args) => {
    return args;
}
console.log(argumentsToArray("x", "y", "z"));

// ============================================
// LEVEL 5: ARGUMENTS - SUM & CALCULATIONS
// ============================================

// TODO 21: Create a function that sums all arguments
function sum() {
    let total = 0;
    for (let n of arguments) total += n;
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// TODO 22: Create a function that multiplies all arguments
function multiply() {
    let res = 1;
    for (let n of arguments) res *= n;
    return res;
}
console.log(multiply(2, 3, 4));

// TODO 23: Create a function that finds the average of all arguments
function average() {
    return sum(...arguments) / arguments.length;
}
console.log(average(10, 20, 30, 40));

// TODO 24: Create a function that returns the sum of all even arguments
function sumEven() {
    let total = 0;
    for (let n of arguments) {
        if (n % 2 === 0) total += n;
    }
    return total;
}
console.log(sumEven(1, 2, 3, 4, 5, 6));

// TODO 25: Create a function that counts how many arguments are greater than 10
function countGreaterThan10() {
    let count = 0;
    for (let n of arguments) if (n > 10) count++;
    return count;
}
console.log(countGreaterThan10(5, 15, 8, 20, 12));

// ============================================
// LEVEL 6: ARGUMENTS - FINDING & SEARCHING
// ============================================

// TODO 26: Create a function that finds the maximum value in arguments
function findMax() {
    return Math.max(...arguments);
}
console.log(findMax(5, 12, 8, 20, 3));

// TODO 27: Create a function that finds the minimum value in arguments
function findMin() {
    return Math.min(...arguments);
}
console.log(findMin(5, 12, 8, 20, 3));

// TODO 28: Create a function that checks if a specific value exists in arguments
function contains(searchValue, ...values) {
    return values.includes(searchValue);
}
console.log(contains(3, 1, 2, 3, 4, 5));

// TODO 29: Create a function that finds the index of a value in arguments
function findIndex(searchValue, ...values) {
    return values.indexOf(searchValue);
}
console.log(findIndex(3, 1, 2, 3, 4, 5));

// TODO 30: Create a function that returns all unique values from arguments
function getUnique() {
    return [...new Set(arguments)];
}
console.log(getUnique(1, 2, 2, 3, 3, 3, 4));

// ============================================
// LEVEL 7: ARGUMENTS - ARRAY OPERATIONS
// ============================================

// TODO 31: Create a function that concatenates all string arguments
function concatStrings() {
    return Array.from(arguments).join("");
}
console.log(concatStrings("Hello", " ", "World", "!"));

// TODO 32: Create a function that returns only number arguments
function numbersOnly() {
    return Array.from(arguments).filter(v => typeof v === 'number');
}
console.log(numbersOnly(1, "a", 2, "b", 3));

// TODO 33: Create a function that returns only string arguments
function stringsOnly() {
    return Array.from(arguments).filter(v => typeof v === 'string');
}
console.log(stringsOnly(1, "a", 2, "b", 3));

// TODO 34: Create a function that reverses all arguments
function reverseArguments() {
    return Array.from(arguments).reverse();
}
console.log(reverseArguments(1, 2, 3, 4, 5));

// TODO 35: Create a function that sorts all number arguments in ascending order
function sortNumbers() {
    return Array.from(arguments).sort((a, b) => a - b);
}
console.log(sortNumbers(5, 2, 8, 1, 9));

// ============================================
// LEVEL 8: HOISTING UNDERSTANDING
// ============================================

// TODO 36: Predict the output
console.log("--- TODO 36 ---");
// Tahmin: undefined, 10
var x = 10;
console.log(x);

// TODO 37: Predict the output
console.log("--- TODO 37 ---");
// Tahmin: ReferenceError (let hoist edilmez/TDZ)
// let y = 20; console.log(y);

// TODO 38: Predict the output
console.log("--- TODO 38 ---");
greet(); // "Hello!" basar (function declaration hoist edilir)
function greet() { console.log("Hello!"); }

// TODO 39: Predict the output
console.log("--- TODO 39 ---");
// sayHi(); // TypeError (sayHi is not a function - var sayHi kısmı hoist edilir ama değeri undefined'dır)
var sayHi = function() { console.log("Hi!"); };

// TODO 40: Fix this hoisting issue
let myName = "John"; 
console.log(myName);

// ============================================
// LEVEL 9: SCOPE CHALLENGES
// ============================================

// TODO 41: Create a counter function using closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// TODO 42: Create a function that demonstrates variable shadowing
let shadowVar = "Global";
function demoShadow() {
    let shadowVar = "Local";
    console.log(shadowVar); // "Local"
}
demoShadow();

// TODO 43: Write a function that shows block scope with if statement
function testBlock() {
    if(true) {
        let secret = "I am hidden";
    }
    // console.log(secret); // Error
}

// TODO 44: Demonstrate the difference between function scope and block scope
function scopeDiff() {
    if(true) {
        var funcScope = "Var is function scope";
        let blockScope = "Let is block scope";
    }
    console.log(funcScope); // Çalışır
    // console.log(blockScope); // Hata
}

// TODO 45: Create a function that uses scope chain (3 levels)
function level1() {
    let a = 1;
    function level2() {
        let b = 2;
        function level3() {
            console.log(a + b); // 3
        }
        level3();
    }
    level2();
}
level1();

// ============================================
// LEVEL 10: COMBINED CHALLENGES
// ============================================

// TODO 46: Create a function that takes unlimited arguments and returns only positive numbers
function getPositive(...args) {
    return args.filter(n => n > 0);
}
console.log(getPositive(-5, 10, -3, 20, 0, 15));

// TODO 47: Create a function that finds the second largest number in arguments
function secondLargest(...args) {
    let sorted = args.sort((a, b) => b - a);
    return sorted[1];
}
console.log(secondLargest(5, 12, 8, 20, 3));

// TODO 48: Create a function that removes duplicates and returns sorted array
function uniqueAndSort(...args) {
    return [...new Set(args)].sort((a, b) => a - b);
}
console.log(uniqueAndSort(5, 2, 8, 2, 5, 1, 8));

// TODO 49: Create a function using arguments that calculates factorial
function factorials(...args) {
    const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
    return args.map(fact);
}
console.log(factorials(3, 4, 5));

// TODO 50: Create a function that groups arguments into arrays of specified size
function chunk(size, ...values) {
    let result = [];
    for(let i = 0; i < values.length; i += size) {
        result.push(values.slice(i, i + size));
    }
    return result;
}
console.log(chunk(2, 1, 2, 3, 4, 5));

// ============================================
// 🎉 END OF DAY 6 EXERCISES
// ============================================