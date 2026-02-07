// ==================================================
// DAY 16 – JAVASCRIPT CORE & OOP PRACTICE (1–100)
// Level: Beginner ➜ Solid Intermediate
// Goal: Learn by SEEING OUTPUT (console.log)
// Rules:
// - Every TODO has a solution
// - Arrays stay ARRAYS, objects stay OBJECTS
// - Every solution is demonstrated with console.log
// ==================================================

console.log("🚀 DAY 16 – JS PRACTICE STARTED\n");

// ==================================================
// SECTION 1 – ARRAYS (1–25)
// ==================================================

// TODO 1: Sum all numbers in an array
function sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log("TODO 1:", sumArray([1, 2, 3, 4])); // 10

// TODO 2: Return only even numbers from array
function getEvenNumbers(numbers) {
  return numbers.filter(n => n % 2 === 0);
}
console.log("TODO 2:", getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

// TODO 3: Multiply all numbers by 2
function multiplyByTwo(numbers) {
  return numbers.map(n => n * 2);
}
console.log("TODO 3:", multiplyByTwo([1, 2, 3])); // [2,4,6]

// TODO 4: Find the largest number
function findMax(numbers) {
  return Math.max(...numbers);
}
console.log("TODO 4:", findMax([10, 5, 20, 3])); // 20

// TODO 5: Remove duplicate values
function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}
console.log("TODO 5:", removeDuplicates([1, 1, 2, 3, 3])); // [1,2,3]

// TODO 6: Reverse an array WITHOUT mutating original
function reverseArray(arr) {
  return [...arr].reverse();
}
const original = [1, 2, 3];
console.log("TODO 6:", reverseArray(original), original);

// TODO 7: Check if array includes a value
function includesValue(arr, value) {
  return arr.includes(value);
}
console.log("TODO 7:", includesValue([1, 2, 3], 2)); // true

// TODO 8: Count elements in array
function countElements(arr) {
  return arr.length;
}
console.log("TODO 8:", countElements([1, 2, 3, 4])); // 4

// TODO 9: Get first and last element
function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}
console.log("TODO 9:", getFirstAndLast([10, 20, 30]));

// TODO 10: Check if all numbers are positive
function allPositive(arr) {
  return arr.every(n => n > 0);
}
console.log("TODO 10:", allPositive([1, 2, 3])); // true

// ==================================================
// SECTION 2 – STRINGS (26–50)
// ==================================================

// TODO 26: Convert string to lowercase
function toLowerCase(str) {
  return str.toLowerCase();
}
console.log("TODO 26:", toLowerCase("HELLO"));

// TODO 27: Count characters in string
function countChars(str) {
  return str.length;
}
console.log("TODO 27:", countChars("JavaScript"));

// TODO 28: Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("TODO 28:", reverseString("abc")); // cba

// TODO 29: Check if string includes word
function includesWord(sentence, word) {
  return sentence.includes(word);
}
console.log("TODO 29:", includesWord("I love JS", "JS"));

// TODO 30: Trim spaces
function trimString(str) {
  return str.trim();
}
console.log("TODO 30:", trimString("   hi   "));

// ==================================================
// SECTION 3 – OBJECTS (51–75)
// ==================================================

// TODO 51: Get object keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("TODO 51:", getObjectKeys({ a: 1, b: 2 }));

// TODO 52: Get object values
function getObjectValues(obj) {
  return Object.values(obj);
}
console.log("TODO 52:", getObjectValues({ a: 1, b: 2 }));

// TODO 53: Check if property exists
function hasProperty(obj, prop) {
  return prop in obj;
}
console.log("TODO 53:", hasProperty({ a: 1 }, "a"));

// TODO 54: Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log("TODO 54:", mergeObjects({ a: 1 }, { b: 2 }));

// ==================================================
// SECTION 4 – FUNCTIONS & LOGIC (76–100)
// ==================================================

// TODO 76: Check if number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log("TODO 76:", isEven(4)); // true

// TODO 77: Find factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("TODO 77:", factorial(5)); // 120

// TODO 78: Find max of two numbers
function maxOfTwo(a, b) {
  return a > b ? a : b;
}
console.log("TODO 78:", maxOfTwo(10, 20));

// TODO 79: Repeat string n times
function repeatString(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}
console.log("TODO 79:", repeatString("hi", 3));

// TODO 80: Sum numbers from 1 to n
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("TODO 80:", sumToN(5)); // 15

console.log("\n✅ DAY 16 – FIRST 100 TODOS COMPLETED (PART 1)");

// ============================================
// TODO 81–100: ARRAYS + FUNCTIONS (VISIBLE OUTPUT)
// ============================================

console.log("\n=== TODO 81–100 ===");

// TODO 81: Create a function that returns the first and last element of an array
function firstAndLast(arr) {
    return [arr[0], arr[arr.length - 1]];
}
console.log("TODO 81:", firstAndLast([10, 20, 30, 40]));

// TODO 82: Sum only even numbers in an array
function sumEvens(arr) {
    let sum = 0;
    for (let n of arr) {
        if (n % 2 === 0) sum += n;
    }
    return sum;
}
console.log("TODO 82:", sumEvens([1, 2, 3, 4, 6]));

// TODO 83: Count how many strings are longer than 3 characters
function countLongStrings(arr) {
    let count = 0;
    for (let str of arr) {
        if (str.length > 3) count++;
    }
    return count;
}
console.log("TODO 83:", countLongStrings(["hi", "hello", "hey", "world"]));

// TODO 84: Convert all numbers to their squares
function squareNumbers(arr) {
    let result = [];
    for (let n of arr) {
        result.push(n * n);
    }
    return result;
}
console.log("TODO 84:", squareNumbers([2, 3, 4]));

// TODO 85: Find the smallest number in an array
function findMin(arr) {
    let min = arr[0];
    for (let n of arr) {
        if (n < min) min = n;
    }
    return min;
}
console.log("TODO 85:", findMin([8, 3, 10, 1]));

// TODO 86: Reverse an array manually (no reverse())
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log("TODO 86:", reverseArray([1, 2, 3, 4]));

// TODO 87: Remove falsy values from array
function removeFalsy(arr) {
    let result = [];
    for (let item of arr) {
        if (item) result.push(item);
    }
    return result;
}
console.log("TODO 87:", removeFalsy([0, 1, false, 2, "", 3]));

// TODO 88: Check if array includes a value (manual)
function includesValue(arr, value) {
    for (let item of arr) {
        if (item === value) return true;
    }
    return false;
}
console.log("TODO 88:", includesValue([1, 2, 3], 2));

// TODO 89: Create array of lengths of strings
function stringLengths(arr) {
    let result = [];
    for (let str of arr) {
        result.push(str.length);
    }
    return result;
}
console.log("TODO 89:", stringLengths(["JS", "Array", "Logic"]));

// TODO 90: Merge two arrays manually
function mergeArrays(a, b) {
    let result = [];
    for (let item of a) result.push(item);
    for (let item of b) result.push(item);
    return result;
}
console.log("TODO 90:", mergeArrays([1, 2], [3, 4]));

// TODO 91: Count occurrences of a number
function countOccurrences(arr, value) {
    let count = 0;
    for (let item of arr) {
        if (item === value) count++;
    }
    return count;
}
console.log("TODO 91:", countOccurrences([1, 2, 2, 3, 2], 2));

// TODO 92: Find index of first matching value
function findIndex(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}
console.log("TODO 92:", findIndex(["a", "b", "c"], "b"));

// TODO 93: Create a function that doubles numbers greater than 5
function doubleGreaterThanFive(arr) {
    let result = [];
    for (let n of arr) {
        result.push(n > 5 ? n * 2 : n);
    }
    return result;
}
console.log("TODO 93:", doubleGreaterThanFive([3, 6, 8]));

// TODO 94: Check if all numbers are positive
function allPositive(arr) {
    for (let n of arr) {
        if (n <= 0) return false;
    }
    return true;
}
console.log("TODO 94:", allPositive([1, 3, 5]));

// TODO 95: Get unique values from array
function uniqueValues(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) result.push(item);
    }
    return result;
}
console.log("TODO 95:", uniqueValues([1, 2, 2, 3, 3]));

// TODO 96: Create chunked arrays of size 2
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log("TODO 96:", chunkArray([1, 2, 3, 4, 5], 2));

// TODO 97: Flatten one level nested array
function flattenOnce(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            for (let sub of item) result.push(sub);
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log("TODO 97:", flattenOnce([1, [2, 3], 4]));

// TODO 98: Rotate array left by one
function rotateLeft(arr) {
    let first = arr[0];
    let result = [];
    for (let i = 1; i < arr.length; i++) result.push(arr[i]);
    result.push(first);
    return result;
}
console.log("TODO 98:", rotateLeft([1, 2, 3, 4]));

// TODO 99: Compare two arrays for equality
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log("TODO 99:", arraysEqual([1, 2], [1, 2]));

// TODO 100: Pipeline multiple array transformations
function processNumbers(arr) {
    let result = [];
    for (let n of arr) {
        if (n % 2 === 0) result.push(n * 10);
    }
    return result;
}
console.log("TODO 100:", processNumbers([1, 2, 3, 4, 5]));


// ============================================
// TODO 101–140: OBJECTS, FUNCTIONS & OOP FOUNDATIONS
// ============================================

console.log("\n=== TODO 101–140 ===");

// TODO 101: Create an object and read properties
function createUser(name, age) {
    return { name, age };
}
const user101 = createUser("Alice", 25);
console.log("TODO 101:", user101.name, user101.age);

// TODO 102: Add property dynamically
user101.city = "Berlin";
console.log("TODO 102:", user101);

// TODO 103: Delete property from object
function removeProperty(obj, prop) {
    delete obj[prop];
    return obj;
}
console.log("TODO 103:", removeProperty({ a: 1, b: 2 }, "b"));

// TODO 104: Loop over object keys
function logObjectKeys(obj) {
    for (let key in obj) {
        console.log(key);
    }
}
console.log("TODO 104:");
logObjectKeys({ x: 10, y: 20 });

// TODO 105: Loop over object values
function logObjectValues(obj) {
    for (let key in obj) {
        console.log(obj[key]);
    }
}
console.log("TODO 105:");
logObjectValues({ x: 1, y: 2 });

// TODO 106: Convert object to array of keys
function objectKeysToArray(obj) {
    let result = [];
    for (let key in obj) result.push(key);
    return result;
}
console.log("TODO 106:", objectKeysToArray({ a: 1, b: 2 }));

// TODO 107: Convert object to array of values
function objectValuesToArray(obj) {
    let result = [];
    for (let key in obj) result.push(obj[key]);
    return result;
}
console.log("TODO 107:", objectValuesToArray({ a: 1, b: 2 }));

// TODO 108: Count properties in object
function countProps(obj) {
    let count = 0;
    for (let _ in obj) count++;
    return count;
}
console.log("TODO 108:", countProps({ a: 1, b: 2, c: 3 }));

// TODO 109: Merge two objects manually
function mergeObjects(a, b) {
    let result = {};
    for (let key in a) result[key] = a[key];
    for (let key in b) result[key] = b[key];
    return result;
}
console.log("TODO 109:", mergeObjects({ a: 1 }, { b: 2 }));

// TODO 110: Clone object manually
function cloneObject(obj) {
    let result = {};
    for (let key in obj) result[key] = obj[key];
    return result;
}
console.log("TODO 110:", cloneObject({ x: 5, y: 6 }));

// TODO 111: Function returning function (closure)
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double111 = multiplier(2);
console.log("TODO 111:", double111(5));

// TODO 112: Counter using closure
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter112 = createCounter();
console.log("TODO 112:", counter112(), counter112());

// TODO 113: Function with default parameters
function greet113(name = "Guest") {
    return "Hello " + name;
}
console.log("TODO 113:", greet113(), greet113("John"));

// TODO 114: Rest parameters
function sumAll(...nums) {
    let sum = 0;
    for (let n of nums) sum += n;
    return sum;
}
console.log("TODO 114:", sumAll(1, 2, 3, 4));

// TODO 115: Destructure object in function
function printUser({ name, age }) {
    console.log(name, age);
}
console.log("TODO 115:");
printUser({ name: "Eva", age: 30 });

// TODO 116: Destructure array
function firstTwo([a, b]) {
    return a + b;
}
console.log("TODO 116:", firstTwo([5, 10]));

// TODO 117: Object method using this
const user117 = {
    name: "Mark",
    greet() {
        return "Hi " + this.name;
    }
};
console.log("TODO 117:", user117.greet());

// TODO 118: Lose this context
const greet118 = user117.greet;
console.log("TODO 118:", greet118());

// TODO 119: Fix this with bind
const bound118 = user117.greet.bind(user117);
console.log("TODO 119:", bound118());

// TODO 120: Factory function creating objects
function createCar(brand, speed) {
    return {
        brand,
        speed,
        accelerate() {
            this.speed += 10;
            return this.speed;
        }
    };
}
const car120 = createCar("BMW", 50);
console.log("TODO 120:", car120.accelerate());

// TODO 121: Constructor function
function Person121(name, age) {
    this.name = name;
    this.age = age;
}
const p121 = new Person121("Leo", 40);
console.log("TODO 121:", p121.name, p121.age);

// TODO 122: Add method to constructor prototype
Person121.prototype.sayHi = function () {
    return "Hi " + this.name;
};
console.log("TODO 122:", p121.sayHi());

// TODO 123: Check instance with instanceof
console.log("TODO 123:", p121 instanceof Person121);

// TODO 124: Multiple instances share prototype
const p124 = new Person121("Anna", 22);
console.log("TODO 124:", p124.sayHi());

// TODO 125: ES6 class equivalent
class Person125 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        return this.name + " is " + this.age;
    }
}
const p125 = new Person125("Tom", 33);
console.log("TODO 125:", p125.info());

// TODO 126: Class method call
console.log("TODO 126:", typeof p125.info);

// TODO 127: Modify property via method
class Counter127 {
    constructor() {
        this.value = 0;
    }
    inc() {
        this.value++;
        return this.value;
    }
}
const c127 = new Counter127();
console.log("TODO 127:", c127.inc(), c127.inc());

// TODO 128: Prevent negative values
class Counter128 {
    constructor() {
        this.value = 0;
    }
    dec() {
        if (this.value > 0) this.value--;
        return this.value;
    }
}
const c128 = new Counter128();
console.log("TODO 128:", c128.dec());

// TODO 129: Simple encapsulation via method
class Bank129 {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) this.balance -= amount;
        return this.balance;
    }
}
const b129 = new Bank129(100);
console.log("TODO 129:", b129.withdraw(30));

// TODO 130: Getter-like method
class User130 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const u130 = new User130("Sarah");
console.log("TODO 130:", u130.getName());

// TODO 131: Class with array property
class List131 {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
}
const l131 = new List131();
l131.add(1);
l131.add(2);
console.log("TODO 131:", l131.items);

// TODO 132: Remove item from class array
List131.prototype.remove = function (item) {
    this.items = this.items.filter(i => i !== item);
};
l131.remove(1);
console.log("TODO 132:", l131.items);

// TODO 133: Class using another class
class Engine133 {
    start() {
        return "Engine started";
    }
}
class Car133 {
    constructor() {
        this.engine = new Engine133();
    }
}
const car133 = new Car133();
console.log("TODO 133:", car133.engine.start());

// TODO 134: Simple inheritance
class Animal134 {
    speak() {
        return "Sound";
    }
}
class Dog134 extends Animal134 {
    speak() {
        return "Woof";
    }
}
console.log("TODO 134:", new Dog134().speak());

// TODO 135: Call parent method
class Cat135 extends Animal134 {
    speak() {
        return super.speak() + " Meow";
    }
}
console.log("TODO 135:", new Cat135().speak());

// TODO 136: Store instances in array
const animals136 = [new Dog134(), new Cat135()];
console.log("TODO 136:", animals136.map(a => a.speak()));

// TODO 137: Polymorphism check
function makeSpeak(animal) {
    return animal.speak();
}
console.log("TODO 137:", makeSpeak(new Dog134()));

// TODO 138: instanceof with inheritance
console.log("TODO 138:", new Dog134() instanceof Animal134);

// TODO 139: Override property
class User139 {
    constructor(role) {
        this.role = role;
    }
}
class Admin139 extends User139 {
    constructor() {
        super("admin");
    }
}
console.log("TODO 139:", new Admin139().role);

// TODO 140: Final OOP checkpoint
console.log("TODO 140: Reached basic OOP concepts successfully");

// TODO 141: 
// Create a constructor function User
// Properties: name, age
// Create two users and log them

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Alice", 25);
const user2 = new User("Bob", 30);

console.log(user1);
console.log(user2);

// TODO 142:
// Add a method greet to User using prototype
// Method should return: "Hello, my name is X"

User.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

console.log(user1.greet());
console.log(user2.greet());

// TODO 143:
// Add method isAdult to User prototype
// Return true if age >= 18

User.prototype.isAdult = function () {
  return this.age >= 18;
};

console.log(user1.isAdult());
console.log(user2.isAdult());

// TODO 144:
// Create constructor Product
// Properties: name, price
// Add method applyDiscount(percent)

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
  this.price -= this.price * (percent / 100);
  return this.price;
};

const phone = new Product("Phone", 1000);
console.log(phone.applyDiscount(10));
console.log(phone);

// TODO 145:
// Verify prototype sharing
// Check if two products share same applyDiscount reference

const laptop = new Product("Laptop", 2000);
console.log(phone.applyDiscount === laptop.applyDiscount);

// ============================================
// SECTION 23: THIS & CONTEXT
// ============================================

// TODO 146:
// Create object with method using this
// Call method normally

const counter = {
  count: 0,
  increase() {
    this.count++;
    return this.count;
  }
};

console.log(counter.increase());
console.log(counter.increase());

// TODO 147:
// Extract method and call it without binding
// Observe the result

const looseIncrease = counter.increase;
console.log(looseIncrease()); // undefined or error in strict mode

// TODO 148:
// Fix context using bind

const boundIncrease = counter.increase.bind(counter);
console.log(boundIncrease());
console.log(boundIncrease());

// TODO 149:
// Use call to borrow method

const anotherCounter = { count: 10 };
console.log(counter.increase.call(anotherCounter));
console.log(anotherCounter);

// ============================================
// SECTION 24: FACTORY FUNCTIONS
// ============================================

// TODO 150:
// Create factory function createUser
// Properties: username, loggedIn
// Method: login()

function createUser(username) {
  return {
    username,
    loggedIn: false,
    login() {
      this.loggedIn = true;
      return `${this.username} logged in`;
    }
  };
}

const fUser1 = createUser("dev1");
const fUser2 = createUser("dev2");

console.log(fUser1.login());
console.log(fUser2.login());
console.log(fUser1);
console.log(fUser2);

// ============================================
// SECTION 25: COMPARISON FACTORY vs CONSTRUCTOR
// ============================================

// TODO 151:
// Create 2 users with factory and check method equality

console.log(fUser1.login === fUser2.login); // false

// TODO 152:
// Create 2 users with constructor and check method equality

const u3 = new User("Charlie", 22);
const u4 = new User("Dave", 28);

console.log(u3.greet === u4.greet); // true

// ============================================
// SECTION 26: ES6 CLASSES
// ============================================

// TODO 153:
// Rewrite User using class syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

const p1 = new Person("Emma", 19);
const p2 = new Person("Tom", 16);

console.log(p1.greet());
console.log(p1.isAdult());
console.log(p2.isAdult());

// TODO 154:
// Add method birthday()
// Increase age by 1

Person.prototype.birthday = function () {
  this.age++;
  return this.age;
};

console.log(p1.birthday());
console.log(p1);

// TODO 155:
// Create class BankAccount
// Properties: owner, balance
// Method: deposit(amount)

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

const acc = new BankAccount("Gokhan", 1000);
console.log(acc.deposit(500));
console.log(acc);

// TODO 156:
// Add withdraw(amount) with balance check

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return "Insufficient funds";
  }
  this.balance -= amount;
  return this.balance;
};

console.log(acc.withdraw(300));
console.log(acc.withdraw(2000));

// ============================================
// SECTION 27: STATE INSIDE CLASS
// ============================================

// TODO 157:
// Create class TodoList
// Property: todos (array)
// Method: addTodo(task)

class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    this.todos.push(task);
    return this.todos;
  }
}

const list = new TodoList();
console.log(list.addTodo("Learn JS"));
console.log(list.addTodo("Learn OOP"));

// TODO 158:
// Add removeTodo(task)

TodoList.prototype.removeTodo = function (task) {
  this.todos = this.todos.filter(t => t !== task);
  return this.todos;
};

console.log(list.removeTodo("Learn JS"));
console.log(list);

// TODO 159:
// Add listTodos()

TodoList.prototype.listTodos = function () {
  return this.todos;
};

console.log(list.listTodos());

// ============================================
// SECTION 28: BASIC ENCAPSULATION
// ============================================

// TODO 160:
// Create class Counter with private field #count
// Methods: increment(), getCount()

class Counter {
  #count = 0;

  increment() {
    this.#count++;
    return this.#count;
  }

  getCount() {
    return this.#count;
  }
}

const c = new Counter();
console.log(c.increment());
console.log(c.increment());
console.log(c.getCount());

// ============================================
//  END OF DAY 16 EXERCISES
// ============================================