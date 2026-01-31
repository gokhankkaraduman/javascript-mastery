// ============================================
// DAY 10 EXERCISES - COMPREHENSIVE REVIEW (Days 1-9)
// ============================================

console.log("🚀 DAY 10 - COMPREHENSIVE REVIEW EXERCISES");
console.log("Practice makes perfect! Let's solidify everything we've learned.\n");

// ============================================
// SECTION 1: VARIABLES & DATA TYPES REVIEW
// ============================================

console.log("=== SECTION 1: Variables & Data Types ===\n");

// TODO 1: Declare variables using let, const, and var
let studentName = "Alice";
const birthYear = 2000;
var city = "New York";

console.log("--- TODO 1 ---");
console.log("Name:", studentName);
console.log("Birth Year:", birthYear);
console.log("City:", city);

// TODO 2: Create variables of different data types and check their types
let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log("\n--- TODO 2 ---");
console.log(typeof myString);      // string
console.log(typeof myNumber);      // number
console.log(typeof myBoolean);     // boolean
console.log(typeof myUndefined);   // undefined
console.log(typeof myNull);        // object (historical bug)

// TODO 3: Use template literals to create formatted strings
let firstName = "John";
let lastName = "Doe";
let age = 25;

console.log("\n--- TODO 3 ---");
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

// TODO 4: Convert between data types
let numString = "123";
let strNumber = 456;

console.log("\n--- TODO 4 ---");
console.log("String to Number:", Number(numString));
console.log("Number to String:", String(strNumber));
console.log("Number to Boolean:", Boolean(0), Boolean(1));

// TODO 5: Create an object with different property types
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: {
        city: "Boston",
        country: "USA"
    }
};

console.log("\n--- TODO 5 ---");
console.log("Person object:", person);
console.log("Person name:", person.name);
console.log("Person hobbies:", person.hobbies);

// ============================================
// SECTION 2: OPERATORS & CONDITIONALS REVIEW
// ============================================

console.log("\n\n=== SECTION 2: Operators & Conditionals ===\n");

// TODO 6: Use comparison operators
let num1 = 10;
let num2 = "10";

console.log("--- TODO 6 ---");
console.log("10 == '10':", num1 == num2);    // true
console.log("10 === '10':", num1 === num2);  // false
console.log("10 > 5:", num1 > 5);            // true
console.log("10 <= 10:", num1 <= 10);        // true

// TODO 7: Use logical operators
let isAdult = true;
let hasLicense = true;

console.log("\n--- TODO 7 ---");
console.log("Can drive:", isAdult && hasLicense);        // true
console.log("Can enter:", isAdult || hasLicense);        // true
console.log("Is minor:", !isAdult);                      // false

// TODO 8: Create a grade calculator using if-else
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n--- TODO 8 ---");
console.log("Score 95:", getGrade(95));
console.log("Score 85:", getGrade(85));
console.log("Score 75:", getGrade(75));

// TODO 9: Use switch statement for day of week
function getDayType(day) {
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        case "Saturday":
        case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
}

console.log("\n--- TODO 9 ---");
console.log("Monday:", getDayType("Monday"));
console.log("Saturday:", getDayType("Saturday"));

// TODO 10: Check truthy and falsy values
console.log("\n--- TODO 10 ---");
console.log("Boolean(''):", Boolean(""));           // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(0):", Boolean(0));             // false
console.log("Boolean(1):", Boolean(1));             // true
console.log("Boolean(null):", Boolean(null));       // false
console.log("Boolean([]):", Boolean([]));           // true

// ============================================
// SECTION 3: LOOPS REVIEW
// ============================================

console.log("\n\n=== SECTION 3: Loops ===\n");

// TODO 11: Use for loop to print numbers 1-10
console.log("--- TODO 11 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// TODO 12: Use while loop to calculate sum of 1-10
console.log("\n--- TODO 12 ---");
let sum = 0;
let i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log("Sum of 1-10:", sum);

// TODO 13: Use do-while loop
console.log("\n--- TODO 13 ---");
let count = 1;
do {
    console.log("Count:", count);
    count++;
} while (count <= 5);

// TODO 14: Use break to exit loop
console.log("\n--- TODO 14 ---");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Breaking at", i);
        break;
    }
    console.log(i);
}

// TODO 15: Use continue to skip iteration
console.log("\n--- TODO 15 ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(i);
}

// ============================================
// SECTION 4: FUNCTIONS REVIEW
// ============================================

console.log("\n\n=== SECTION 4: Functions ===\n");

// TODO 16: Create function with parameters and return
function calculateArea(width, height) {
    return width * height;
}

console.log("--- TODO 16 ---");
console.log("Area (10, 5):", calculateArea(10, 5));

// TODO 17: Create arrow function
const multiply = (a, b) => a * b;

console.log("\n--- TODO 17 ---");
console.log("Multiply (5, 3):", multiply(5, 3));

// TODO 18: Function with default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log("\n--- TODO 18 ---");
console.log(greet("Alice"));
console.log(greet());

// TODO 19: Function using rest parameters
const sumAll = (...numbers) => {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};

console.log("\n--- TODO 19 ---");
console.log("Sum(1,2,3,4,5):", sumAll(1, 2, 3, 4, 5));
console.log("Sum(10,20,30):", sumAll(10, 20, 30));

// TODO 20: Callback function
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log("\n--- TODO 20 ---");
console.log("Calculate(10, 5, add):", calculate(10, 5, add));
console.log("Calculate(10, 5, subtract):", calculate(10, 5, subtract));

// ============================================
// SECTION 5: ARRAYS REVIEW
// ============================================

console.log("\n\n=== SECTION 5: Arrays ===\n");

// TODO 21: Create array and access elements
let fruits = ["apple", "banana", "orange", "grape"];

console.log("--- TODO 21 ---");
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Array length:", fruits.length);

// TODO 22: Use array methods - push, pop, unshift, shift
let numbers = [1, 2, 3];

console.log("\n--- TODO 22 ---");
numbers.push(4);
console.log("After push(4):", numbers);

let last = numbers.pop();
console.log("Popped:", last, "Array:", numbers);

numbers.unshift(0);
console.log("After unshift(0):", numbers);

let first = numbers.shift();
console.log("Shifted:", first, "Array:", numbers);

// TODO 23: Use indexOf and includes
let colors = ["red", "green", "blue", "yellow"];

console.log("\n--- TODO 23 ---");
console.log("Index of 'blue':", colors.indexOf("blue"));
console.log("Includes 'green':", colors.includes("green"));
console.log("Includes 'purple':", colors.includes("purple"));

// TODO 24: Use slice and splice
let animals = ["cat", "dog", "elephant", "lion", "tiger"];

console.log("\n--- TODO 24 ---");
console.log("Slice(1, 3):", animals.slice(1, 3));
console.log("Original:", animals);

let removed = animals.splice(2, 1, "bear");
console.log("Spliced:", removed, "Array:", animals);

// TODO 25: Use concat and join
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log("\n--- TODO 25 ---");
console.log("Concat:", arr1.concat(arr2));
console.log("Join with '-':", arr1.join("-"));

// ============================================
// SECTION 6: ARRAY ITERATION REVIEW
// ============================================

console.log("\n\n=== SECTION 6: Array Iteration ===\n");

// TODO 26: Use for...of loop
console.log("--- TODO 26 ---");
let nums = [10, 20, 30, 40, 50];
for (let num of nums) {
    console.log(num);
}

// TODO 27: Use forEach
console.log("\n--- TODO 27 ---");
let items = ["item1", "item2", "item3"];
items.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

// TODO 28: Use forEach to calculate sum
console.log("\n--- TODO 28 ---");
let values = [5, 10, 15, 20];
let total = 0;
values.forEach(val => {
    total += val;
});
console.log("Total:", total);

// TODO 29: Use map to transform array
console.log("\n--- TODO 29 ---");
let numbers29 = [1, 2, 3, 4, 5];
let doubled = numbers29.map(n => n * 2);
console.log("Original:", numbers29);
console.log("Doubled:", doubled);

// TODO 30: Use map with objects
console.log("\n--- TODO 30 ---");
let users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

let names = users.map(user => user.name);
console.log("Names:", names);

// ============================================
// SECTION 7: OBJECTS REVIEW
// ============================================

console.log("\n\n=== SECTION 7: Objects ===\n");

// TODO 31: Create object and access properties
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue"
};

console.log("--- TODO 31 ---");
console.log("Brand:", car.brand);
console.log("Model:", car["model"]);

// TODO 32: Add and modify properties
console.log("\n--- TODO 32 ---");
car.price = 25000;
car.year = 2023;
console.log("Updated car:", car);

// TODO 33: Delete property
console.log("\n--- TODO 33 ---");
delete car.color;
console.log("After delete:", car);

// TODO 34: Use for...in loop
console.log("\n--- TODO 34 ---");
let product = {
    name: "Laptop",
    price: 999,
    brand: "Dell",
    stock: 50
};

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// TODO 35: Use Object.keys, Object.values, Object.entries
console.log("\n--- TODO 35 ---");
console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

// TODO 36: Nested objects
console.log("\n--- TODO 36 ---");
let company = {
    name: "Tech Corp",
    founded: 2010,
    address: {
        street: "123 Main St",
        city: "San Francisco",
        country: "USA"
    }
};

console.log("Company:", company.name);
console.log("City:", company.address.city);

// TODO 37: Array of objects
console.log("\n--- TODO 37 ---");
let students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 90},
    {name: "Charlie", grade: 78}
];

students.forEach(student => {
    console.log(`${student.name}: ${student.grade}`);
});

// TODO 38: Object methods with this
console.log("\n--- TODO 38 ---");
let bankAccount = {
    owner: "John",
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    },
    withdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }
};

console.log("Initial balance:", bankAccount.balance);
bankAccount.deposit(500);
console.log("After deposit:", bankAccount.balance);
bankAccount.withdraw(200);
console.log("After withdraw:", bankAccount.balance);

// TODO 39: Spread operator with objects
console.log("\n--- TODO 39 ---");
let person1 = {name: "Alice", age: 25};
let person2 = {...person1, city: "Boston"};
console.log("Person 1:", person1);
console.log("Person 2:", person2);

// TODO 40: Merge objects
console.log("\n--- TODO 40 ---");
let defaults = {theme: "light", fontSize: 14};
let userSettings = {theme: "dark", language: "en"};
let finalSettings = {...defaults, ...userSettings};
console.log("Final settings:", finalSettings);

// ============================================
// SECTION 8: STRING METHODS REVIEW
// ============================================

console.log("\n\n=== SECTION 8: String Methods ===\n");

// TODO 41: Basic string methods
let text = "  JavaScript is Awesome  ";

console.log("--- TODO 41 ---");
console.log("Original:", `"${text}"`);
console.log("Trim:", `"${text.trim()}"`);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// TODO 42: String search methods
let sentence = "I love JavaScript programming";

console.log("\n--- TODO 42 ---");
console.log("Includes 'Java':", sentence.includes("Java"));
console.log("Index of 'love':", sentence.indexOf("love"));
console.log("Starts with 'I':", sentence.startsWith("I"));
console.log("Ends with 'ing':", sentence.endsWith("ing"));

// TODO 43: String extraction
let word = "JavaScript";

console.log("\n--- TODO 43 ---");
console.log("charAt(0):", word.charAt(0));
console.log("substring(0, 4):", word.substring(0, 4));
console.log("slice(4):", word.slice(4));
console.log("slice(-6):", word.slice(-6));

// TODO 44: String manipulation
let message = "Hello World";

console.log("\n--- TODO 44 ---");
console.log("Replace:", message.replace("World", "JavaScript"));
console.log("Split:", message.split(" "));
console.log("Repeat:", "Ha".repeat(3));

// TODO 45: String with loops
console.log("\n--- TODO 45 ---");
let str = "Hello";
for (let char of str) {
    console.log(char);
}

// ============================================
// SECTION 9: MATH OBJECT REVIEW
// ============================================

console.log("\n\n=== SECTION 9: Math Object ===\n");

// TODO 46: Math rounding methods
console.log("--- TODO 46 ---");
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.round(4.5):", Math.round(4.5));
console.log("Math.round(4.4):", Math.round(4.4));

// TODO 47: Math min/max
console.log("\n--- TODO 47 ---");
console.log("Math.min(5, 2, 9, 1):", Math.min(5, 2, 9, 1));
console.log("Math.max(5, 2, 9, 1):", Math.max(5, 2, 9, 1));

// TODO 48: Math random
console.log("\n--- TODO 48 ---");
console.log("Random 0-1:", Math.random());
console.log("Random 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);

// TODO 49: Other Math methods
console.log("\n--- TODO 49 ---");
console.log("Math.abs(-10):", Math.abs(-10));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));

// TODO 50: Math with arrays
console.log("\n--- TODO 50 ---");
let nums50 = [5, 12, 8, 20, 3];
console.log("Max in array:", Math.max(...nums50));
console.log("Min in array:", Math.min(...nums50));

// ============================================
// SECTION 10: COMBINED CHALLENGES
// ============================================

console.log("\n\n=== SECTION 10: Combined Challenges ===\n");

// TODO 51: Create a shopping cart system
console.log("--- TODO 51: Shopping Cart ---");
let cart = {
    items: [],
    
    addItem(name, price, quantity) {
        this.items.push({name, price, quantity});
    },
    
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    },
    
    getItemCount() {
        let count = 0;
        this.items.forEach(item => {
            count += item.quantity;
        });
        return count;
    }
};

cart.addItem("Laptop", 999, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);

console.log("Cart items:", cart.items);
console.log("Total items:", cart.getItemCount());
console.log("Total price:", cart.getTotal());

// TODO 52: Student grade analyzer
console.log("\n--- TODO 52: Grade Analyzer ---");
let studentScores = [
    {name: "Alice", scores: [85, 90, 92]},
    {name: "Bob", scores: [78, 85, 88]},
    {name: "Charlie", scores: [92, 95, 90]}
];

let studentsWithAvg = studentScores.map(student => {
    let sum = 0;
    student.scores.forEach(score => sum += score);
    let average = sum / student.scores.length;
    
    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else grade = "D";
    
    return {
        name: student.name,
        average: average.toFixed(2),
        grade: grade
    };
});

studentsWithAvg.forEach(student => {
    console.log(`${student.name}: Average ${student.average} - Grade ${student.grade}`);
});

// TODO 53: Data filter and transform
console.log("\n--- TODO 53: Filter & Transform ---");
let products = [
    {name: "Laptop", price: 1200, category: "electronics"},
    {name: "Phone", price: 800, category: "electronics"},
    {name: "Shirt", price: 30, category: "clothing"},
    {name: "Shoes", price: 80, category: "clothing"}
];

// Filter expensive products (>100) and add discount
let expensiveProducts = [];
products.forEach(product => {
    if (product.price > 100) {
        expensiveProducts.push(product);
    }
});

let discounted = expensiveProducts.map(product => ({
    ...product,
    discount: product.price * 0.1,
    finalPrice: product.price * 0.9
}));

console.log("Discounted products:", discounted);

// TODO 54: Text analyzer
console.log("\n--- TODO 54: Text Analyzer ---");
function analyzeText(text) {
    return {
        length: text.length,
        words: text.trim().split(" ").length,
        uppercase: text.toUpperCase(),
        lowercase: text.toLowerCase(),
        reversed: text.split("").reverse().join("")
    };
}

let analysis = analyzeText("Hello JavaScript World");
console.log("Analysis:", analysis);

// TODO 55: Number statistics calculator
console.log("\n--- TODO 55: Statistics Calculator ---");
function calculateStats(...numbers) {
    let sum = 0;
    let max = numbers[0];
    let min = numbers[0];
    
    numbers.forEach(num => {
        sum += num;
        if (num > max) max = num;
        if (num < min) min = num;
    });
    
    return {
        count: numbers.length,
        sum: sum,
        average: sum / numbers.length,
        max: max,
        min: min
    };
}

let stats = calculateStats(10, 25, 15, 30, 5, 20);
console.log("Statistics:", stats);

// TODO 56: Array manipulation challenge
console.log("\n--- TODO 56: Array Manipulation ---");
let originalArray = [1, 2, 2, 3, 4, 4, 5];

// Remove duplicates
let unique = [];
originalArray.forEach(num => {
    if (!unique.includes(num)) {
        unique.push(num);
    }
});

// Double the values
let doubled56 = unique.map(n => n * 2);

// Sum all values
let sum56 = 0;
doubled56.forEach(n => sum56 += n);

console.log("Original:", originalArray);
console.log("Unique:", unique);
console.log("Doubled:", doubled56);
console.log("Sum:", sum56);

// TODO 57: Object transformation
console.log("\n--- TODO 57: Object Transform ---");
let employees = [
    {firstName: "john", lastName: "doe", salary: 50000},
    {firstName: "jane", lastName: "smith", salary: 60000},
    {firstName: "bob", lastName: "johnson", salary: 55000}
];

let transformed = employees.map(emp => {
    let fullName = emp.firstName.charAt(0).toUpperCase() + emp.firstName.slice(1) +
                   " " + emp.lastName.charAt(0).toUpperCase() + emp.lastName.slice(1);
    
    return {
        fullName: fullName,
        salary: emp.salary,
        bonus: emp.salary * 0.1,
        total: emp.salary * 1.1
    };
});

console.log("Transformed employees:", transformed);

// TODO 58: Inventory manager
console.log("\n--- TODO 58: Inventory Manager ---");
let inventory = {
    products: [
        {id: 1, name: "Laptop", stock: 5, price: 999},
        {id: 2, name: "Mouse", stock: 0, price: 25},
        {id: 3, name: "Keyboard", stock: 10, price: 75}
    ],
    
    addStock(id, quantity) {
        this.products.forEach(product => {
            if (product.id === id) {
                product.stock += quantity;
            }
        });
    },
    
    getTotalValue() {
        let total = 0;
        this.products.forEach(product => {
            total += product.stock * product.price;
        });
        return total;
    },
    
    getOutOfStock() {
        let outOfStock = [];
        this.products.forEach(product => {
            if (product.stock === 0) {
                outOfStock.push(product.name);
            }
        });
        return outOfStock;
    }
};

console.log("Total inventory value:", inventory.getTotalValue());
console.log("Out of stock:", inventory.getOutOfStock());
inventory.addStock(2, 20);
console.log("After restocking:", inventory.products);

// TODO 59: Temperature converter with validation
console.log("\n--- TODO 59: Temperature Converter ---");
function convertTemperature(value, from, to) {
    if (from === "C" && to === "F") {
        return (value * 9/5) + 32;
    } else if (from === "F" && to === "C") {
        return (value - 32) * 5/9;
    } else if (from === "C" && to === "K") {
        return value + 273.15;
    } else if (from === "K" && to === "C") {
        return value - 273.15;
    }
    return value;
}

console.log("0°C to F:", convertTemperature(0, "C", "F"));
console.log("32°F to C:", convertTemperature(32, "F", "C"));
console.log("25°C to K:", convertTemperature(25, "C", "K"));

// TODO 60: Todo list manager
console.log("\n--- TODO 60: Todo Manager ---");
let todoManager = {
    todos: [],
    
    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
    },
    
    completeTodo(id) {
        this.todos.forEach(todo => {
            if (todo.id === id) {
                todo.completed = true;
            }
        });
    },
    
    getCompleted() {
        let completed = [];
        this.todos.forEach(todo => {
            if (todo.completed) {
                completed.push(todo);
            }
        });
        return completed;
    },
    
    getPending() {
        let pending = [];
        this.todos.forEach(todo => {
            if (!todo.completed) {
                pending.push(todo);
            }
        });
        return pending;
    }
};

todoManager.addTodo("Learn JavaScript");
todoManager.addTodo("Build a project");
todoManager.addTodo("Practice coding");
console.log("All todos:", todoManager.todos);
console.log("Pending:", todoManager.getPending().length);

// ============================================
// 🎉 END OF DAY 10 REVIEW EXERCISES
// ============================================