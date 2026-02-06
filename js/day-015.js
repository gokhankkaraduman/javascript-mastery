// ============================================
// DAY 15 EXERCISES - Advanced OOP (this, call/bind/apply, Classes, Inheritance)
// ============================================

console.log("🚀 DAY 15 - ADVANCED OOP EXERCISES");
console.log("Master 'this', call/bind/apply, Private/Public, Static, Inheritance!\n");

// ============================================
// SECTION 1: UNDERSTANDING 'this' KEYWORD
// ============================================

console.log("=== SECTION 1: Understanding 'this' ===\n");

// TODO 1: Demonstrate 'this' in object method
let person1 = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, I'm " + this.name);
        console.log("I'm " + this.age + " years old");
    }
};

console.log("--- TODO 1 ---");
person1.greet();

// TODO 2: Show how 'this' context is lost when method is assigned
let user1 = {
    name: "Bob",
    showName: function() {
        console.log(this.name);
    }
};

console.log("\n--- TODO 2 ---");
user1.showName();  // Works - "Bob"

let show = user1.showName;
show();  // Lost context - undefined

// TODO 3: Demonstrate 'this' in constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.getInfo = function() {
        console.log(this.brand + " " + this.model);
    };
}

console.log("\n--- TODO 3 ---");
let car1 = new Car("Toyota", "Camry");
car1.getInfo();

// TODO 4: Show difference between regular and arrow functions
let obj1 = {
    name: "Regular",
    regularFunc: function() {
        console.log("Regular function:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow function:", this.name);  // undefined
    }
};

console.log("\n--- TODO 4 ---");
obj1.regularFunc();  // Works
obj1.arrowFunc();    // Doesn't work as expected

// TODO 5: Demonstrate 'this' in nested functions
let obj2 = {
    name: "Object",
    
    method1: function() {
        console.log("Outer:", this.name);
        
        function inner() {
            console.log("Inner regular:", this.name);  // undefined
        }
        inner();
    },
    
    method2: function() {
        console.log("Outer:", this.name);
        
        let inner = () => {
            console.log("Inner arrow:", this.name);  // Works!
        };
        inner();
    }
};

console.log("\n--- TODO 5 ---");
obj2.method1();
obj2.method2();

// ============================================
// SECTION 2: STRICT MODE
// ============================================

console.log("\n\n=== SECTION 2: Strict Mode ===\n");

// TODO 6: Demonstrate 'this' without strict mode
function normalFunction() {
    console.log("Without strict mode, this is:", typeof this);
}

console.log("--- TODO 6 ---");
normalFunction();

// TODO 7: Demonstrate 'this' with strict mode
function strictFunction() {
    "use strict";
    console.log("With strict mode, this is:", this);
}

console.log("\n--- TODO 7 ---");
strictFunction();

// TODO 8: Show that object methods still work in strict mode
"use strict";
let person2 = {
    name: "Charlie",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

console.log("\n--- TODO 8 ---");
person2.greet();  // Still works!

// ============================================
// SECTION 3: call() METHOD
// ============================================

console.log("\n\n=== SECTION 3: call() Method ===\n");

// TODO 9: Use call() to invoke function with specific 'this'
function greet(greeting) {
    console.log(greeting + ", I'm " + this.name);
}

let person3 = {name: "Alice"};
let person4 = {name: "Bob"};

console.log("--- TODO 9 ---");
greet.call(person3, "Hello");
greet.call(person4, "Hi");

// TODO 10: Use call() with multiple arguments
function introduce(age, city) {
    console.log(`I'm ${this.name}, ${age} years old from ${city}`);
}

let user2 = {name: "Charlie"};

console.log("\n--- TODO 10 ---");
introduce.call(user2, 30, "New York");

// TODO 11: Borrow method from another object using call()
let calculator1 = {
    value: 10,
    add: function(num) {
        this.value += num;
        return this.value;
    }
};

let calculator2 = {value: 20};

console.log("\n--- TODO 11 ---");
console.log("Result:", calculator1.add.call(calculator2, 5));
console.log("calculator2.value:", calculator2.value);

// ============================================
// SECTION 4: apply() METHOD
// ============================================

console.log("\n\n=== SECTION 4: apply() Method ===\n");

// TODO 12: Use apply() with array of arguments
function introduce2(age, city) {
    console.log(`I'm ${this.name}, ${age} years old from ${city}`);
}

let user3 = {name: "David"};

console.log("--- TODO 12 ---");
introduce2.apply(user3, [25, "London"]);

// TODO 13: Find max number using apply()
let numbers = [5, 12, 8, 130, 44];

console.log("\n--- TODO 13 ---");
console.log("Max number:", Math.max.apply(null, numbers));

// TODO 14: Compare call() and apply()
function greet2(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

let person5 = {name: "Eve"};

console.log("\n--- TODO 14 ---");
greet2.call(person5, "Hello", "!");
greet2.apply(person5, ["Hello", "!"]);

// ============================================
// SECTION 5: bind() METHOD
// ============================================

console.log("\n\n=== SECTION 5: bind() Method ===\n");

// TODO 15: Use bind() to preserve 'this' context
let person6 = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

console.log("--- TODO 15 ---");
let greetFunction = person6.greet;
greetFunction();  // Lost context

let boundGreet = person6.greet.bind(person6);
boundGreet();  // Context preserved!

// TODO 16: Use bind() with partial application
function multiply(a, b) {
    return a * b;
}

console.log("\n--- TODO 16 ---");
let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

console.log("double(5):", double(5));
console.log("triple(5):", triple(5));

// TODO 17: Use bind() for event handlers (simulated)
let button = {
    text: "Click Me",
    handleClick: function() {
        console.log("Button '" + this.text + "' was clicked");
    }
};

console.log("\n--- TODO 17 ---");
// Simulating setTimeout callback
setTimeout(button.handleClick.bind(button), 100);

// TODO 18: Compare call, apply, bind
let person7 = {name: "Frank"};

function greet3(greeting) {
    return greeting + ", " + this.name;
}

console.log("\n--- TODO 18 ---");
console.log("call:", greet3.call(person7, "Hello"));
console.log("apply:", greet3.apply(person7, ["Hi"]));

let boundGreet2 = greet3.bind(person7, "Hey");
console.log("bind:", boundGreet2());

// ============================================
// SECTION 6: CLASSES - CONSTRUCTOR
// ============================================

console.log("\n\n=== SECTION 6: Classes - Constructor ===\n");

// TODO 19: Create basic class with constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
    
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

console.log("--- TODO 19 ---");
let person8 = new Person("George", 28);
person8.greet();
console.log(person8.getInfo());

// TODO 20: Constructor with validation
class BankAccount {
    constructor(owner, balance) {
        if (balance < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
}

console.log("\n--- TODO 20 ---");
let account1 = new BankAccount("Helen", 1000);
account1.deposit(500);

// TODO 21: Multiple instances from same class
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    
    study() {
        console.log(this.name + " is studying");
    }
}

console.log("\n--- TODO 21 ---");
let student1 = new Student("Alice", "A");
let student2 = new Student("Bob", "B");
let student3 = new Student("Charlie", "A");

student1.study();
student2.study();

// ============================================
// SECTION 7: PRIVATE PROPERTIES (#)
// ============================================

console.log("\n\n=== SECTION 7: Private Properties ===\n");

// TODO 22: Create class with private property
class BankAccount2 {
    #balance;  // Private property
    
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

console.log("--- TODO 22 ---");
let account2 = new BankAccount2("Ivan", 1000);
console.log("Owner:", account2.owner);
console.log("Balance:", account2.getBalance());
// console.log(account2.#balance);  // ERROR! Cannot access private

// TODO 23: Private property with validation
class User2 {
    #password;
    
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    
    checkPassword(pass) {
        return this.#password === pass;
    }
    
    changePassword(oldPass, newPass) {
        if (this.#password === oldPass) {
            this.#password = newPass;
            return "Password changed successfully";
        }
        return "Wrong password";
    }
}

console.log("\n--- TODO 23 ---");
let user4 = new User2("john", "secret123");
console.log("Check password:", user4.checkPassword("secret123"));
console.log(user4.changePassword("secret123", "newpass"));

// TODO 24: Private method
class Calculator {
    #lastResult = 0;
    
    #log(operation, result) {
        console.log(`[LOG] ${operation} = ${result}`);
    }
    
    add(a, b) {
        this.#lastResult = a + b;
        this.#log(`${a} + ${b}`, this.#lastResult);
        return this.#lastResult;
    }
    
    getLastResult() {
        return this.#lastResult;
    }
}

console.log("\n--- TODO 24 ---");
let calc = new Calculator();
calc.add(5, 3);
console.log("Last result:", calc.getLastResult());

// TODO 25: Mix of public and private
class Counter {
    #count = 0;  // Private
    name;        // Public
    
    constructor(name) {
        this.name = name;
    }
    
    increment() {
        this.#count++;
    }
    
    decrement() {
        this.#count--;
    }
    
    getCount() {
        return this.#count;
    }
}

console.log("\n--- TODO 25 ---");
let counter = new Counter("MyCounter");
counter.increment();
counter.increment();
console.log("Count:", counter.getCount());
console.log("Name:", counter.name);

// ============================================
// SECTION 8: STATIC METHODS AND PROPERTIES
// ============================================

console.log("\n\n=== SECTION 8: Static Methods ===\n");

// TODO 26: Create class with static methods
class MathHelper {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static square(n) {
        return n * n;
    }
}

console.log("--- TODO 26 ---");
console.log("5 + 3 =", MathHelper.add(5, 3));
console.log("4 * 5 =", MathHelper.multiply(4, 5));
console.log("7^2 =", MathHelper.square(7));

// TODO 27: Static property - counter
class User3 {
    static userCount = 0;
    
    constructor(name) {
        this.name = name;
        User3.userCount++;
    }
    
    static getUserCount() {
        return User3.userCount;
    }
}

console.log("\n--- TODO 27 ---");
let user5 = new User3("Alice");
let user6 = new User3("Bob");
let user7 = new User3("Charlie");

console.log("Total users:", User3.getUserCount());
console.log("Direct access:", User3.userCount);

// TODO 28: Static utility methods
class Validator {
    static isEmail(email) {
        return email.includes("@");
    }
    
    static isStrongPassword(password) {
        return password.length >= 8;
    }
    
    static isValidAge(age) {
        return age >= 0 && age <= 150;
    }
}

console.log("\n--- TODO 28 ---");
console.log("Valid email?", Validator.isEmail("test@example.com"));
console.log("Strong password?", Validator.isStrongPassword("abc"));
console.log("Valid age?", Validator.isValidAge(25));

// TODO 29: Static factory method
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    static createDiscounted(name, originalPrice, discount) {
        let discountedPrice = originalPrice * (1 - discount / 100);
        return new Product(name, discountedPrice);
    }
}

console.log("\n--- TODO 29 ---");
let product1 = new Product("Laptop", 1000);
let product2 = Product.createDiscounted("Mouse", 50, 20);

console.log("Laptop:", product1.price);
console.log("Mouse (20% off):", product2.price);

// TODO 30: Cannot call static on instance
class Helper {
    static help() {
        console.log("Static help method");
    }
    
    instanceMethod() {
        console.log("Instance method");
    }
}

console.log("\n--- TODO 30 ---");
Helper.help();  // Works

let helper = new Helper();
helper.instanceMethod();  // Works
// helper.help();  // ERROR! Cannot call static on instance

// ============================================
// SECTION 9: INHERITANCE - BASIC
// ============================================

console.log("\n\n=== SECTION 9: Inheritance - Basic ===\n");

// TODO 31: Basic inheritance with extends
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(this.name + " is eating");
    }
    
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

class Dog extends Animal {
    bark() {
        console.log(this.name + " says Woof!");
    }
}

console.log("--- TODO 31 ---");
let dog1 = new Dog("Max");
dog1.eat();    // Inherited
dog1.sleep();  // Inherited
dog1.bark();   // Own method

// TODO 32: Using super() in constructor
class Animal2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Dog2 extends Animal2 {
    constructor(name, age, breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    getFullInfo() {
        return `${this.getInfo()} and is a ${this.breed}`;
    }
}

console.log("\n--- TODO 32 ---");
let dog2 = new Dog2("Buddy", 3, "Labrador");
console.log(dog2.getInfo());
console.log(dog2.getFullInfo());

// TODO 33: Method overriding
class Animal3 {
    constructor(name) {
        this.name = name;
    }
    
    makeSound() {
        console.log(this.name + " makes a sound");
    }
}

class Dog3 extends Animal3 {
    makeSound() {
        console.log(this.name + " barks!");
    }
}

class Cat extends Animal3 {
    makeSound() {
        console.log(this.name + " meows!");
    }
}

console.log("\n--- TODO 33 ---");
let dog3 = new Dog3("Rex");
let cat1 = new Cat("Whiskers");

dog3.makeSound();
cat1.makeSound();

// TODO 34: Calling parent method with super
class Person2 {
    constructor(name) {
        this.name = name;
    }
    
    introduce() {
        return `I'm ${this.name}`;
    }
}

class Student2 extends Person2 {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    
    introduce() {
        return super.introduce() + ` and I'm in grade ${this.grade}`;
    }
}

console.log("\n--- TODO 34 ---");
let student4 = new Student2("Jane", 10);
console.log(student4.introduce());

// TODO 35: Multi-level inheritance
class Vehicle {
    constructor(type) {
        this.type = type;
    }
    
    move() {
        console.log(this.type + " is moving");
    }
}

class Car2 extends Vehicle {
    constructor(brand) {
        super("Car");
        this.brand = brand;
    }
    
    honk() {
        console.log(this.brand + " goes beep!");
    }
}

class ElectricCar extends Car2 {
    constructor(brand, battery) {
        super(brand);
        this.battery = battery;
    }
    
    charge() {
        console.log("Charging " + this.brand + " battery");
    }
}

console.log("\n--- TODO 35 ---");
let tesla = new ElectricCar("Tesla", "100kWh");
tesla.move();    // From Vehicle
tesla.honk();    // From Car
tesla.charge();  // Own method

// ============================================
// SECTION 10: PRACTICAL INHERITANCE EXAMPLES
// ============================================

console.log("\n\n=== SECTION 10: Practical Inheritance ===\n");

// TODO 36: User system with inheritance
class User4 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
    }
    
    getInfo() {
        return `${this.username} (${this.email})`;
    }
}

class Admin extends User4 {
    constructor(username, email, permissions) {
        super(username, email);
        this.permissions = permissions;
        this.isAdmin = true;
    }
    
    addPermission(permission) {
        this.permissions.push(permission);
    }
    
    getInfo() {
        return super.getInfo() + " [ADMIN]";
    }
}

class Moderator extends User4 {
    constructor(username, email, department) {
        super(username, email);
        this.department = department;
        this.isModerator = true;
    }
    
    getInfo() {
        return super.getInfo() + ` [MOD: ${this.department}]`;
    }
}

console.log("--- TODO 36 ---");
let admin = new Admin("alice", "alice@example.com", ["delete", "ban"]);
let mod = new Moderator("bob", "bob@example.com", "Support");

console.log(admin.getInfo());
console.log(mod.getInfo());

// TODO 37: Shape hierarchy
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    getColor() {
        return this.color;
    }
}

class Rectangle2 extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log("\n--- TODO 37 ---");
let rect = new Rectangle2("red", 10, 5);
let circle = new Circle("blue", 7);

console.log("Rectangle:", rect.getColor(), "Area:", rect.getArea());
console.log("Circle:", circle.getColor(), "Area:", circle.getArea().toFixed(2));

// TODO 38: Employee system
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    
    getAnnualSalary() {
        return super.getAnnualSalary() + this.bonus;
    }
}

class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }
    
    code() {
        console.log(`${this.name} is coding in ${this.language}`);
    }
}

console.log("\n--- TODO 38 ---");
let manager = new Manager("Karen", 5000, 10000);
let dev = new Developer("Liam", 4000, "JavaScript");

console.log(`${manager.name} annual:`, manager.getAnnualSalary());
console.log(`${dev.name} annual:`, dev.getAnnualSalary());
dev.code();

// TODO 39: Account system with private properties and inheritance
class Account {
    #accountNumber;
    
    constructor(owner, accountNumber) {
        this.owner = owner;
        this.#accountNumber = accountNumber;
    }
    
    getAccountNumber() {
        return "****" + this.#accountNumber.slice(-4);
    }
}

class SavingsAccount extends Account {
    #balance = 0;
    
    constructor(owner, accountNumber, interestRate) {
        super(owner, accountNumber);
        this.interestRate = interestRate;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    calculateInterest() {
        return this.#balance * (this.interestRate / 100);
    }
}

console.log("\n--- TODO 39 ---");
let savings = new SavingsAccount("Mia", "1234567890", 2.5);
savings.deposit(1000);
console.log("Account:", savings.getAccountNumber());
console.log("Balance:", savings.getBalance());
console.log("Interest:", savings.calculateInterest());

// TODO 40: Complex example - Game characters
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
    }
    
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
        console.log(`${this.name} took ${damage} damage. Health: ${this.health}/${this.maxHealth}`);
    }
    
    heal(amount) {
        this.health += amount;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
        console.log(`${this.name} healed ${amount}. Health: ${this.health}/${this.maxHealth}`);
    }
}

class Warrior extends Character {
    constructor(name, health, armor) {
        super(name, health);
        this.armor = armor;
    }
    
    takeDamage(damage) {
        let reducedDamage = damage - this.armor;
        if (reducedDamage < 0) reducedDamage = 0;
        super.takeDamage(reducedDamage);
    }
    
    attack() {
        console.log(`${this.name} swings sword!`);
        return 20;
    }
}

class Mage extends Character {
    #mana;
    
    constructor(name, health, mana) {
        super(name, health);
        this.#mana = mana;
    }
    
    castSpell() {
        if (this.#mana >= 10) {
            this.#mana -= 10;
            console.log(`${this.name} casts fireball! Mana: ${this.#mana}`);
            return 30;
        } else {
            console.log(`${this.name} doesn't have enough mana!`);
            return 0;
        }
    }
    
    getMana() {
        return this.#mana;
    }
}

console.log("\n--- TODO 40 ---");
let warrior = new Warrior("Thor", 100, 5);
let mage = new Mage("Merlin", 80, 50);

warrior.takeDamage(15);  // Reduced by armor
mage.castSpell();
mage.castSpell();
console.log("Mage mana:", mage.getMana());

// ============================================
// 🎉 END OF DAY 15 EXERCISES
// ============================================
