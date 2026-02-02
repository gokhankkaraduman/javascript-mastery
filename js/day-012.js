// ============================================
// DAY 12 EXERCISES - find, filter, every, some, forEach, map
// ============================================

console.log("🚀 DAY 12 - ARRAY METHODS MASTERY");
console.log("Master find, filter, every, some, forEach, and map!\n");

// ============================================
// SECTION 1: find() METHOD
// ============================================

console.log("=== SECTION 1: find() Method ===\n");

// TODO 1: Find first number greater than 10
let numbers1 = [5, 8, 12, 15, 3, 20];
let firstGreater = numbers1.find(n => n > 10);

console.log("--- TODO 1 ---");
console.log("First number > 10:", firstGreater);  // 12

// TODO 2: Find first even number
let numbers2 = [1, 3, 5, 8, 9, 10];
let firstEven = numbers2.find(n => n % 2 === 0);

console.log("\n--- TODO 2 ---");
console.log("First even number:", firstEven);  // 8

// TODO 3: Find user by ID
let users3 = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 35}
];

let user = users3.find(u => u.id === 2);

console.log("\n--- TODO 3 ---");
console.log("User with ID 2:", user);

// TODO 4: Find product by name
let products4 = [
    {id: 101, name: "Laptop", price: 999},
    {id: 102, name: "Mouse", price: 25},
    {id: 103, name: "Keyboard", price: 75}
];

let product = products4.find(p => p.name === "Mouse");

console.log("\n--- TODO 4 ---");
console.log("Product 'Mouse':", product);

// TODO 5: Find first student with grade >= 90
let students5 = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 92},
    {name: "Charlie", grade: 78},
    {name: "David", grade: 95}
];

let topStudent = students5.find(s => s.grade >= 90);

console.log("\n--- TODO 5 ---");
console.log("First top student:", topStudent);

// TODO 6: Find first negative number
let numbers6 = [5, 8, -3, 12, -7, 15];
let firstNegative = numbers6.find(n => n < 0);

console.log("\n--- TODO 6 ---");
console.log("First negative:", firstNegative);  // -3

// TODO 7: Find employee by department
let employees7 = [
    {name: "Alice", dept: "IT", salary: 60000},
    {name: "Bob", dept: "HR", salary: 50000},
    {name: "Charlie", dept: "IT", salary: 65000}
];

let hrEmployee = employees7.find(e => e.dept === "HR");

console.log("\n--- TODO 7 ---");
console.log("HR employee:", hrEmployee);

// TODO 8: Find first available item in inventory
let inventory8 = [
    {item: "Laptop", stock: 0},
    {item: "Mouse", stock: 5},
    {item: "Keyboard", stock: 10}
];

let available = inventory8.find(item => item.stock > 0);

console.log("\n--- TODO 8 ---");
console.log("First available item:", available);

// TODO 9: Find string that starts with 'J'
let names9 = ["Alice", "Bob", "John", "Jane", "Charlie"];
let startsWithJ = names9.find(name => name.startsWith("J"));

console.log("\n--- TODO 9 ---");
console.log("First name starting with J:", startsWithJ);

// TODO 10: Find no match (returns undefined)
let numbers10 = [1, 2, 3, 4, 5];
let notFound = numbers10.find(n => n > 100);

console.log("\n--- TODO 10 ---");
console.log("Number > 100:", notFound);  // undefined

// ============================================
// SECTION 2: filter() METHOD
// ============================================

console.log("\n\n=== SECTION 2: filter() Method ===\n");

// TODO 11: Filter all even numbers
let numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = numbers11.filter(n => n % 2 === 0);

console.log("--- TODO 11 ---");
console.log("Even numbers:", evens);

// TODO 12: Filter all odd numbers
let odds = numbers11.filter(n => n % 2 !== 0);

console.log("\n--- TODO 12 ---");
console.log("Odd numbers:", odds);

// TODO 13: Filter numbers greater than 5
let greaterThan5 = numbers11.filter(n => n > 5);

console.log("\n--- TODO 13 ---");
console.log("Numbers > 5:", greaterThan5);

// TODO 14: Filter active users
let users14 = [
    {name: "Alice", active: true},
    {name: "Bob", active: false},
    {name: "Charlie", active: true},
    {name: "David", active: false}
];

let activeUsers = users14.filter(u => u.active);

console.log("\n--- TODO 14 ---");
console.log("Active users:", activeUsers);

// TODO 15: Filter products by price range
let products15 = [
    {name: "Laptop", price: 1200},
    {name: "Mouse", price: 25},
    {name: "Keyboard", price: 75},
    {name: "Monitor", price: 300}
];

let affordable = products15.filter(p => p.price < 100);

console.log("\n--- TODO 15 ---");
console.log("Affordable products:", affordable);

// TODO 16: Filter students who passed (score >= 60)
let students16 = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 55},
    {name: "Charlie", score: 92},
    {name: "David", score: 48}
];

let passed = students16.filter(s => s.score >= 60);

console.log("\n--- TODO 16 ---");
console.log("Passed students:", passed);

// TODO 17: Filter strings with length > 5
let words17 = ["cat", "elephant", "dog", "butterfly", "lion"];
let longWords = words17.filter(word => word.length > 5);

console.log("\n--- TODO 17 ---");
console.log("Long words:", longWords);

// TODO 18: Filter truthy values
let mixed18 = [0, 1, false, 2, "", 3, null, "hello", undefined];
let truthy = mixed18.filter(Boolean);

console.log("\n--- TODO 18 ---");
console.log("Truthy values:", truthy);

// TODO 19: Filter items containing 'app'
let items19 = ["apple", "banana", "apricot", "orange", "pineapple"];
let withApp = items19.filter(item => item.includes("app"));

console.log("\n--- TODO 19 ---");
console.log("Items with 'app':", withApp);

// TODO 20: Filter unique values
let numbers20 = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let unique = numbers20.filter((num, index, arr) => arr.indexOf(num) === index);

console.log("\n--- TODO 20 ---");
console.log("Unique values:", unique);

// ============================================
// SECTION 3: every() METHOD
// ============================================

console.log("\n\n=== SECTION 3: every() Method ===\n");

// TODO 21: Check if all numbers are positive
let numbers21 = [1, 2, 3, 4, 5];
let allPositive = numbers21.every(n => n > 0);

console.log("--- TODO 21 ---");
console.log("All positive:", allPositive);  // true

// TODO 22: Check if all numbers are even
let numbers22 = [2, 4, 6, 8, 10];
let allEven = numbers22.every(n => n % 2 === 0);

console.log("\n--- TODO 22 ---");
console.log("All even:", allEven);  // true

// TODO 23: Check if all users are adults (age >= 18)
let users23 = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

let allAdults = users23.every(u => u.age >= 18);

console.log("\n--- TODO 23 ---");
console.log("All adults:", allAdults);  // true

// TODO 24: Check if all products are in stock
let products24 = [
    {name: "Laptop", stock: 5},
    {name: "Mouse", stock: 10},
    {name: "Keyboard", stock: 0}
];

let allInStock = products24.every(p => p.stock > 0);

console.log("\n--- TODO 24 ---");
console.log("All in stock:", allInStock);  // false

// TODO 25: Check if all students passed (score >= 60)
let students25 = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 75},
    {name: "Charlie", score: 92}
];

let allPassed = students25.every(s => s.score >= 60);

console.log("\n--- TODO 25 ---");
console.log("All passed:", allPassed);  // true

// TODO 26: Check if all strings are uppercase
let strings26 = ["HELLO", "WORLD", "JAVASCRIPT"];
let allUppercase = strings26.every(str => str === str.toUpperCase());

console.log("\n--- TODO 26 ---");
console.log("All uppercase:", allUppercase);  // true

// TODO 27: Check if all numbers are less than 100
let numbers27 = [10, 25, 50, 75, 90];
let allLessThan100 = numbers27.every(n => n < 100);

console.log("\n--- TODO 27 ---");
console.log("All < 100:", allLessThan100);  // true

// TODO 28: Validate form fields
let formFields28 = [
    {name: "username", value: "john", valid: true},
    {name: "email", value: "john@example.com", valid: true},
    {name: "password", value: "123456", valid: true}
];

let formValid = formFields28.every(field => field.valid);

console.log("\n--- TODO 28 ---");
console.log("Form is valid:", formValid);  // true

// TODO 29: Check if all users are verified
let users29 = [
    {name: "Alice", verified: true},
    {name: "Bob", verified: false},
    {name: "Charlie", verified: true}
];

let allVerified = users29.every(u => u.verified);

console.log("\n--- TODO 29 ---");
console.log("All verified:", allVerified);  // false

// TODO 30: Check if array is empty using every
let emptyArray = [];
let isArrayEmpty = emptyArray.every(n => n > 0);

console.log("\n--- TODO 30 ---");
console.log("Empty array every result:", isArrayEmpty);  // true (vacuous truth)

// ============================================
// SECTION 4: some() METHOD
// ============================================

console.log("\n\n=== SECTION 4: some() Method ===\n");

// TODO 31: Check if any number is greater than 10
let numbers31 = [2, 5, 8, 12, 3];
let hasLarge = numbers31.some(n => n > 10);

console.log("--- TODO 31 ---");
console.log("Any number > 10:", hasLarge);  // true

// TODO 32: Check if any number is negative
let numbers32 = [1, 2, 3, -4, 5];
let hasNegative = numbers32.some(n => n < 0);

console.log("\n--- TODO 32 ---");
console.log("Any negative:", hasNegative);  // true

// TODO 33: Check if any user is admin
let users33 = [
    {name: "Alice", isAdmin: false},
    {name: "Bob", isAdmin: true},
    {name: "Charlie", isAdmin: false}
];

let hasAdmin = users33.some(u => u.isAdmin);

console.log("\n--- TODO 33 ---");
console.log("Has admin:", hasAdmin);  // true

// TODO 34: Check if any product is expensive (> 100)
let products34 = [
    {name: "Book", price: 15},
    {name: "Laptop", price: 1200},
    {name: "Pen", price: 2}
];

let hasExpensive = products34.some(p => p.price > 100);

console.log("\n--- TODO 34 ---");
console.log("Has expensive item:", hasExpensive);  // true

// TODO 35: Check if any student failed (score < 60)
let students35 = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 45},
    {name: "Charlie", score: 92}
];

let anyoneFailed = students35.some(s => s.score < 60);

console.log("\n--- TODO 35 ---");
console.log("Anyone failed:", anyoneFailed);  // true

// TODO 36: Check if any string is long (length > 10)
let words36 = ["cat", "dog", "elephant", "butterfly"];
let hasLongWord = words36.some(word => word.length > 10);

console.log("\n--- TODO 36 ---");
console.log("Has long word:", hasLongWord);  // false

// TODO 37: Check if any item is out of stock
let inventory37 = [
    {item: "Laptop", stock: 5},
    {item: "Mouse", stock: 0},
    {item: "Keyboard", stock: 10}
];

let hasOutOfStock = inventory37.some(item => item.stock === 0);

console.log("\n--- TODO 37 ---");
console.log("Has out of stock:", hasOutOfStock);  // true

// TODO 38: Check if user has any permissions
let permissions38 = [
    {resource: "posts", canEdit: false},
    {resource: "comments", canEdit: true},
    {resource: "users", canEdit: false}
];

let canEditSomething = permissions38.some(p => p.canEdit);

console.log("\n--- TODO 38 ---");
console.log("Can edit something:", canEditSomething);  // true

// TODO 39: Check if any number is even
let numbers39 = [1, 3, 5, 8, 9];
let hasEven = numbers39.some(n => n % 2 === 0);

console.log("\n--- TODO 39 ---");
console.log("Has even number:", hasEven);  // true

// TODO 40: Check if array contains specific value
let fruits40 = ["apple", "banana", "orange"];
let hasBanana = fruits40.some(fruit => fruit === "banana");

console.log("\n--- TODO 40 ---");
console.log("Has banana:", hasBanana);  // true

// ============================================
// SECTION 5: forEach() REVIEW
// ============================================

console.log("\n\n=== SECTION 5: forEach() Review ===\n");

// TODO 41: Print all elements
console.log("--- TODO 41 ---");
let numbers41 = [1, 2, 3, 4, 5];
numbers41.forEach(n => console.log(n));

// TODO 42: Print with index
console.log("\n--- TODO 42 ---");
let colors42 = ["red", "green", "blue"];
colors42.forEach((color, index) => {
    console.log(`${index}: ${color}`);
});

// TODO 43: Calculate sum
console.log("\n--- TODO 43 ---");
let numbers43 = [10, 20, 30, 40, 50];
let sum43 = 0;
numbers43.forEach(n => sum43 += n);
console.log("Sum:", sum43);

// TODO 44: Count even numbers
console.log("\n--- TODO 44 ---");
let numbers44 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
numbers44.forEach(n => {
    if (n % 2 === 0) evenCount++;
});
console.log("Even count:", evenCount);

// TODO 45: Populate new array
console.log("\n--- TODO 45 ---");
let numbers45 = [1, 2, 3, 4, 5];
let doubled45 = [];
numbers45.forEach(n => doubled45.push(n * 2));
console.log("Doubled:", doubled45);

// TODO 46: Print object properties
console.log("\n--- TODO 46 ---");
let users46 = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];
users46.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});

// TODO 47: Modify objects in place
console.log("\n--- TODO 47 ---");
let products47 = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 25}
];
products47.forEach(p => p.price *= 1.1); // 10% increase
console.log("Updated prices:", products47);

// TODO 48: Count total characters
console.log("\n--- TODO 48 ---");
let words48 = ["hello", "world", "javascript"];
let totalChars = 0;
words48.forEach(word => totalChars += word.length);
console.log("Total characters:", totalChars);

// TODO 49: Find max value
console.log("\n--- TODO 49 ---");
let numbers49 = [5, 12, 8, 20, 3, 15];
let max49 = numbers49[0];
numbers49.forEach(n => {
    if (n > max49) max49 = n;
});
console.log("Max value:", max49);

// TODO 50: Create frequency map
console.log("\n--- TODO 50 ---");
let items50 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let frequency50 = {};
items50.forEach(item => {
    frequency50[item] = (frequency50[item] || 0) + 1;
});
console.log("Frequency:", frequency50);

// ============================================
// SECTION 6: map() REVIEW
// ============================================

console.log("\n\n=== SECTION 6: map() Review ===\n");

// TODO 51: Double all numbers
let numbers51 = [1, 2, 3, 4, 5];
let doubled51 = numbers51.map(n => n * 2);

console.log("--- TODO 51 ---");
console.log("Doubled:", doubled51);

// TODO 52: Square all numbers
let squared52 = numbers51.map(n => n ** 2);

console.log("\n--- TODO 52 ---");
console.log("Squared:", squared52);

// TODO 53: Convert to uppercase
let words53 = ["hello", "world", "javascript"];
let uppercase53 = words53.map(word => word.toUpperCase());

console.log("\n--- TODO 53 ---");
console.log("Uppercase:", uppercase53);

// TODO 54: Extract property from objects
let users54 = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
let names54 = users54.map(u => u.name);

console.log("\n--- TODO 54 ---");
console.log("Names:", names54);

// TODO 55: Add property to objects
let products55 = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 25}
];
let withTax55 = products55.map(p => ({
    ...p,
    tax: p.price * 0.18,
    total: p.price * 1.18
}));

console.log("\n--- TODO 55 ---");
console.log("With tax:", withTax55);

// TODO 56: Convert Celsius to Fahrenheit
let celsius56 = [0, 10, 20, 30, 40];
let fahrenheit56 = celsius56.map(c => (c * 9/5) + 32);

console.log("\n--- TODO 56 ---");
console.log("Fahrenheit:", fahrenheit56);

// TODO 57: Get string lengths
let words57 = ["cat", "elephant", "dog", "butterfly"];
let lengths57 = words57.map(word => word.length);

console.log("\n--- TODO 57 ---");
console.log("Lengths:", lengths57);

// TODO 58: Create formatted strings
let numbers58 = [1, 2, 3, 4, 5];
let formatted58 = numbers58.map((n, index) => `Item ${index + 1}: ${n}`);

console.log("\n--- TODO 58 ---");
console.log("Formatted:", formatted58);

// TODO 59: Calculate ages from birth years
let birthYears59 = [1990, 1995, 2000, 2005];
let ages59 = birthYears59.map(year => 2024 - year);

console.log("\n--- TODO 59 ---");
console.log("Ages:", ages59);

// TODO 60: Create initials
let fullNames60 = ["John Doe", "Jane Smith", "Bob Johnson"];
let initials60 = fullNames60.map(name => {
    let parts = name.split(" ");
    return parts[0][0] + parts[1][0];
});

console.log("\n--- TODO 60 ---");
console.log("Initials:", initials60);

// ============================================
// SECTION 7: COMBINING METHODS
// ============================================

console.log("\n\n=== SECTION 7: Combining Methods ===\n");

// TODO 61: Filter then map
let numbers61 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenDoubled = numbers61
    .filter(n => n % 2 === 0)
    .map(n => n * 2);

console.log("--- TODO 61 ---");
console.log("Even numbers doubled:", evenDoubled);

// TODO 62: Map then filter
let numbers62 = [1, 2, 3, 4, 5];
let squaredGreaterThan10 = numbers62
    .map(n => n ** 2)
    .filter(n => n > 10);

console.log("\n--- TODO 62 ---");
console.log("Squared > 10:", squaredGreaterThan10);

// TODO 63: Filter active users and get names
let users63 = [
    {name: "Alice", active: true},
    {name: "Bob", active: false},
    {name: "Charlie", active: true}
];

let activeNames = users63
    .filter(u => u.active)
    .map(u => u.name);

console.log("\n--- TODO 63 ---");
console.log("Active user names:", activeNames);

// TODO 64: Get expensive product names
let products64 = [
    {name: "Laptop", price: 1200},
    {name: "Mouse", price: 25},
    {name: "Monitor", price: 300}
];

let expensiveNames = products64
    .filter(p => p.price > 100)
    .map(p => p.name);

console.log("\n--- TODO 64 ---");
console.log("Expensive products:", expensiveNames);

// TODO 65: Check if all filtered items meet condition
let numbers65 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let allEvenGreaterThan5 = numbers65
    .filter(n => n % 2 === 0)
    .every(n => n > 5);

console.log("\n--- TODO 65 ---");
console.log("All even numbers > 5:", allEvenGreaterThan5);

// TODO 66: Check if any filtered item meets condition
let anyOddGreaterThan8 = numbers65
    .filter(n => n % 2 !== 0)
    .some(n => n > 8);

console.log("\n--- TODO 66 ---");
console.log("Any odd number > 8:", anyOddGreaterThan8);

// TODO 67: Complex chain - filter, map, find
let students67 = [
    {name: "Alice", score: 85, subject: "Math"},
    {name: "Bob", score: 92, subject: "Math"},
    {name: "Charlie", score: 78, subject: "Science"},
    {name: "David", score: 95, subject: "Math"}
];

let topMathStudent = students67
    .filter(s => s.subject === "Math")
    .map(s => ({...s, grade: s.score >= 90 ? "A" : "B"}))
    .find(s => s.grade === "A");

console.log("\n--- TODO 67 ---");
console.log("Top Math student:", topMathStudent);

// TODO 68: Filter, map, and calculate sum
let prices68 = [
    {item: "Book", price: 15, category: "education"},
    {item: "Laptop", price: 1200, category: "electronics"},
    {item: "Pen", price: 2, category: "education"},
    {item: "Phone", price: 800, category: "electronics"}
];

let educationTotal = 0;
prices68
    .filter(p => p.category === "education")
    .map(p => p.price)
    .forEach(price => educationTotal += price);

console.log("\n--- TODO 68 ---");
console.log("Education total:", educationTotal);

// TODO 69: Create summary object using multiple methods
let employees69 = [
    {name: "Alice", salary: 50000, dept: "IT"},
    {name: "Bob", salary: 60000, dept: "IT"},
    {name: "Charlie", salary: 55000, dept: "HR"}
];

let itEmployees = employees69.filter(e => e.dept === "IT");
let itCount = itEmployees.length;
let itTotalSalary = 0;
itEmployees.forEach(e => itTotalSalary += e.salary);
let itAvgSalary = itTotalSalary / itCount;

console.log("\n--- TODO 69 ---");
console.log("IT Department Summary:");
console.log("  Count:", itCount);
console.log("  Total Salary:", itTotalSalary);
console.log("  Average Salary:", itAvgSalary);

// TODO 70: Validate and transform data
let userData70 = [
    {name: "Alice", email: "alice@example.com", age: 25},
    {name: "Bob", email: "", age: 30},
    {name: "Charlie", email: "charlie@example.com", age: 17}
];

let validUsers = userData70
    .filter(u => u.email && u.age >= 18)
    .map(u => ({
        name: u.name.toUpperCase(),
        email: u.email.toLowerCase(),
        isAdult: true
    }));

console.log("\n--- TODO 70 ---");
console.log("Valid adult users:", validUsers);

// ============================================
// SECTION 8: REAL-WORLD SCENARIOS
// ============================================

console.log("\n\n=== SECTION 8: Real-World Scenarios ===\n");

// TODO 71: E-commerce cart management
let cart71 = [
    {product: "Laptop", price: 999, quantity: 1},
    {product: "Mouse", price: 25, quantity: 2},
    {product: "Keyboard", price: 75, quantity: 1}
];

// Calculate total
let total71 = 0;
cart71.forEach(item => {
    total71 += item.price * item.quantity;
});

// Get items over $50
let expensiveItems71 = cart71.filter(item => item.price > 50);

// Check if any item is out of budget
let hasPriceyItem = cart71.some(item => item.price > 500);

console.log("--- TODO 71: Shopping Cart ---");
console.log("Total:", total71);
console.log("Expensive items:", expensiveItems71);
console.log("Has pricey item:", hasPriceyItem);

// TODO 72: User authentication system
let users72 = [
    {username: "alice", password: "pass123", role: "admin", active: true},
    {username: "bob", password: "pass456", role: "user", active: true},
    {username: "charlie", password: "pass789", role: "user", active: false}
];

function login72(username, password) {
    let user = users72.find(u => u.username === username && u.password === password);
    
    if (!user) return {success: false, message: "Invalid credentials"};
    if (!user.active) return {success: false, message: "Account inactive"};
    
    return {success: true, user: user, message: "Login successful"};
}

console.log("\n--- TODO 72: Authentication ---");
console.log(login72("alice", "pass123"));
console.log(login72("charlie", "pass789"));

// TODO 73: Inventory management
let inventory73 = [
    {id: 1, name: "Laptop", stock: 5, minStock: 3},
    {id: 2, name: "Mouse", stock: 2, minStock: 5},
    {id: 3, name: "Keyboard", stock: 10, minStock: 5}
];

// Find low stock items
let lowStock = inventory73.filter(item => item.stock < item.minStock);

// Check if all items are in stock
let allAvailable = inventory73.every(item => item.stock > 0);

// Get all product names
let productNames73 = inventory73.map(item => item.name);

console.log("\n--- TODO 73: Inventory ---");
console.log("Low stock items:", lowStock);
console.log("All available:", allAvailable);
console.log("Product names:", productNames73);

// TODO 74: Grade book system
let grades74 = [
    {student: "Alice", scores: [85, 90, 92]},
    {student: "Bob", scores: [78, 85, 88]},
    {student: "Charlie", scores: [92, 95, 90]}
];

let gradeReport = grades74.map(student => {
    let sum = 0;
    student.scores.forEach(score => sum += score);
    let average = sum / student.scores.length;
    
    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else grade = "D";
    
    return {
        student: student.student,
        average: average.toFixed(2),
grade: grade
};
});
console.log("\n--- TODO 74: Grade Report ---");
console.log(gradeReport);
// Check if anyone got an A
let hasTopGrade = gradeReport.some(r => r.grade === "A");
console.log("Anyone got A:", hasTopGrade);
// TODO 75: Product filtering system
let products75 = [
{id: 1, name: "Gaming Laptop", price: 1500, category: "electronics", rating: 4.5},
{id: 2, name: "Office Chair", price: 200, category: "furniture", rating: 4.0},
{id: 3, name: "Wireless Mouse", price: 30, category: "electronics", rating: 4.8},
{id: 4, name: "Desk Lamp", price: 45, category: "furniture", rating: 4.2},
{id: 5, name: "Mechanical Keyboard", price: 120, category: "electronics", rating: 4.7}
];
function filterProducts(category, maxPrice, minRating) {
return products75
.filter(p => p.category === category)
.filter(p => p.price <= maxPrice)
.filter(p => p.rating >= minRating)
.map(p => ({
name: p.name,
price: p.price,
rating: p.rating
}));
}
console.log("\n--- TODO 75: Product Filter ---");
console.log("Electronics under $150, rating >= 4.5:");
console.log(filterProducts("electronics", 150, 4.5));

// ============================================
// 🎉 END OF DAY 12 EXERCISES
// ============================================