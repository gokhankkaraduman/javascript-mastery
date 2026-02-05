// ============================================
// DAY 14 EXERCISES - OOP BASICS (Constructor Functions & Classes)
// ============================================

console.log("🚀 DAY 14 - OOP BASICS EXERCISES");
console.log("Master Constructor Functions and Classes!\n");

// ============================================
// SECTION 1: CONSTRUCTOR FUNCTIONS (OLD WAY)
// ============================================

console.log("=== SECTION 1: Constructor Functions ===\n");

// TODO 1: Create a constructor function for a Person
// Properties: name, age
// Method: greet() - prints "Hello, I'm [name]"
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
        console.log("Hello, I'm " + this.name);
    };
}

console.log("--- TODO 1 ---");
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);
person1.greet();  // "Hello, I'm Alice"
person2.greet();  // "Hello, I'm Bob"

// TODO 2: Create a constructor function for a Car
// Properties: brand, model, year
// Method: getInfo() - returns "year brand model"
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.getInfo = function() {
        return this.year + " " + this.brand + " " + this.model;
    };
}

console.log("\n--- TODO 2 ---");
let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Honda", "Civic", 2021);
console.log(car1.getInfo());  // "2022 Toyota Camry"
console.log(car2.getInfo());  // "2021 Honda Civic"

// TODO 3: Create a constructor function for a Book
// Properties: title, author, pages
// Method: getDescription() - returns "title by author (pages pages)"
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.getDescription = function() {
        return this.title + " by " + this.author + " (" + this.pages + " pages)";
    };
}

console.log("\n--- TODO 3 ---");
let book1 = new Book("JavaScript Guide", "John Doe", 300);
console.log(book1.getDescription());

// TODO 4: Create a constructor function for a Counter
// Property: count (starts at 0)
// Methods: increment(), decrement(), getValue()
function Counter() {
    this.count = 0;
    
    this.increment = function() {
        this.count++;
    };
    
    this.decrement = function() {
        this.count--;
    };
    
    this.getValue = function() {
        return this.count;
    };
}

console.log("\n--- TODO 4 ---");
let counter1 = new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
console.log("Counter value:", counter1.getValue());  // 3
counter1.decrement();
console.log("After decrement:", counter1.getValue());  // 2

// TODO 5: Create a constructor function for a Product
// Properties: name, price
// Methods: applyDiscount(percent), getPrice()
function Product(name, price) {
    this.name = name;
    this.price = price;
    
    this.applyDiscount = function(percent) {
        this.price = this.price * (1 - percent / 100);
    };
    
    this.getPrice = function() {
        return "$" + this.price.toFixed(2);
    };
}

console.log("\n--- TODO 5 ---");
let product1 = new Product("Laptop", 1000);
console.log("Original price:", product1.getPrice());
product1.applyDiscount(10);
console.log("After 10% discount:", product1.getPrice());

// ============================================
// SECTION 2: CLASSES (MODERN WAY)
// ============================================

console.log("\n\n=== SECTION 2: Classes (Modern Way) ===\n");

// TODO 6: Convert Person constructor to a class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log("Hello, I'm " + this.name);
    }
    
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

console.log("--- TODO 6 ---");
let person3 = new PersonClass("Charlie", 28);
person3.greet();
console.log(person3.getInfo());

// TODO 7: Create a class for a Dog
// Properties: name, breed
// Methods: bark(), getInfo()
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    
    bark() {
        console.log(this.name + " says Woof!");
    }
    
    getInfo() {
        return `${this.name} is a ${this.breed}`;
    }
}

console.log("\n--- TODO 7 ---");
let dog1 = new Dog("Max", "Labrador");
let dog2 = new Dog("Buddy", "Golden Retriever");
dog1.bark();
console.log(dog2.getInfo());

// TODO 8: Create a class for a BankAccount
// Properties: owner, balance
// Methods: deposit(amount), withdraw(amount), getBalance()
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew: $${amount}`);
    }
    
    getBalance() {
        return `${this.owner}'s balance: $${this.balance}`;
    }
}

console.log("\n--- TODO 8 ---");
let account1 = new BankAccount("Alice", 1000);
console.log(account1.getBalance());
account1.deposit(500);
account1.withdraw(200);
console.log(account1.getBalance());
account1.withdraw(2000);  // Should show insufficient funds

// TODO 9: Create a class for a Student
// Properties: name, grade, scores (array)
// Methods: addScore(score), getAverage()
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.scores = [];
    }
    
    addScore(score) {
        this.scores.push(score);
        console.log(`Added score ${score} for ${this.name}`);
    }
    
    getAverage() {
        if (this.scores.length === 0) return 0;
        let sum = 0;
        for (let score of this.scores) {
            sum += score;
        }
        return sum / this.scores.length;
    }
}

console.log("\n--- TODO 9 ---");
let student1 = new Student("Alice", "10th");
student1.addScore(85);
student1.addScore(90);
student1.addScore(92);
console.log(`${student1.name}'s average:`, student1.getAverage());

// TODO 10: Create a class for a Rectangle
// Properties: width, height
// Methods: getArea(), getPerimeter()
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

console.log("\n--- TODO 10 ---");
let rect1 = new Rectangle(10, 5);
console.log("Area:", rect1.getArea());
console.log("Perimeter:", rect1.getPerimeter());

// ============================================
// SECTION 3: PRACTICAL APPLICATIONS
// ============================================

console.log("\n\n=== SECTION 3: Practical Applications ===\n");

// TODO 11: Create a Todo class
// Properties: text, completed, createdAt
// Methods: complete(), uncomplete(), getStatus()
class Todo {
    constructor(text) {
        this.text = text;
        this.completed = false;
        this.createdAt = new Date();
    }
    
    complete() {
        this.completed = true;
        console.log(`Completed: ${this.text}`);
    }
    
    uncomplete() {
        this.completed = false;
        console.log(`Uncompleted: ${this.text}`);
    }
    
    getStatus() {
        return this.completed ? "✓ Done" : "○ Pending";
    }
}

console.log("--- TODO 11 ---");
let todo1 = new Todo("Learn JavaScript");
let todo2 = new Todo("Build a project");
console.log(todo1.text + ":", todo1.getStatus());
todo1.complete();
console.log(todo1.text + ":", todo1.getStatus());

// TODO 12: Create a ShoppingCart class
// Property: items (array)
// Methods: addItem(name, price, quantity), getTotal(), showCart()
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
        console.log(`Added ${quantity} ${name}(s) to cart`);
    }
    
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        console.log(`Removed ${name} from cart`);
    }
    
    getTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    }
    
    showCart() {
        console.log("Cart items:");
        for (let item of this.items) {
            console.log(`  ${item.name}: $${item.price} x ${item.quantity}`);
        }
        console.log(`Total: $${this.getTotal()}`);
    }
}

console.log("\n--- TODO 12 ---");
let cart = new ShoppingCart();
cart.addItem("Laptop", 999, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);
cart.showCart();

// TODO 13: Create a User class
// Properties: username, email, isActive
// Methods: activate(), deactivate(), updateEmail(newEmail)
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isActive = true;
    }
    
    activate() {
        this.isActive = true;
        console.log(`${this.username} activated`);
    }
    
    deactivate() {
        this.isActive = false;
        console.log(`${this.username} deactivated`);
    }
    
    updateEmail(newEmail) {
        this.email = newEmail;
        console.log(`Email updated to ${newEmail}`);
    }
    
    getInfo() {
        return `${this.username} (${this.email}) - ${this.isActive ? 'Active' : 'Inactive'}`;
    }
}

console.log("\n--- TODO 13 ---");
let user1 = new User("alice", "alice@example.com");
console.log(user1.getInfo());
user1.deactivate();
console.log(user1.getInfo());
user1.updateEmail("alice.new@example.com");

// TODO 14: Create a Timer class
// Properties: seconds
// Methods: start(), stop(), reset(), getTime()
class Timer {
    constructor() {
        this.seconds = 0;
        this.isRunning = false;
    }
    
    start() {
        this.isRunning = true;
        console.log("Timer started");
    }
    
    stop() {
        this.isRunning = false;
        console.log("Timer stopped at", this.seconds, "seconds");
    }
    
    tick() {
        if (this.isRunning) {
            this.seconds++;
        }
    }
    
    reset() {
        this.seconds = 0;
        this.isRunning = false;
        console.log("Timer reset");
    }
    
    getTime() {
        return this.seconds + " seconds";
    }
}

console.log("\n--- TODO 14 ---");
let timer = new Timer();
timer.start();
timer.tick();
timer.tick();
timer.tick();
console.log("Time:", timer.getTime());
timer.stop();
timer.reset();

// TODO 15: Create a Library class
// Property: books (array)
// Methods: addBook(book), removeBook(title), findBook(title), getAllBooks()
class Library {
    constructor() {
        this.books = [];
    }
    
    addBook(title, author) {
        this.books.push({title, author});
        console.log(`Added: ${title} by ${author}`);
    }
    
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
        console.log(`Removed: ${title}`);
    }
    
    findBook(title) {
        let book = this.books.find(book => book.title === title);
        return book || "Book not found";
    }
    
    getAllBooks() {
        return this.books;
    }
}

console.log("\n--- TODO 15 ---");
let library = new Library();
library.addBook("JavaScript Guide", "John Doe");
library.addBook("Python Basics", "Jane Smith");
console.log("All books:", library.getAllBooks());
console.log("Find:", library.findBook("JavaScript Guide"));

// ============================================
// SECTION 4: DEFAULT VALUES
// ============================================

console.log("\n\n=== SECTION 4: Default Values ===\n");

// TODO 16: Create a class with default values
// Class: Settings
// Properties: theme (default "light"), language (default "en"), fontSize (default 14)
class Settings {
    constructor(theme = "light", language = "en", fontSize = 14) {
        this.theme = theme;
        this.language = language;
        this.fontSize = fontSize;
    }
    
    getSettings() {
        return {
            theme: this.theme,
            language: this.language,
            fontSize: this.fontSize
        };
    }
    
    updateTheme(theme) {
        this.theme = theme;
    }
}

console.log("--- TODO 16 ---");
let settings1 = new Settings();
console.log("Default settings:", settings1.getSettings());

let settings2 = new Settings("dark", "es", 16);
console.log("Custom settings:", settings2.getSettings());

let settings3 = new Settings("dark");
console.log("Partial custom:", settings3.getSettings());

// TODO 17: Create a class for a Post with default values
// Properties: title, content, author, likes (default 0), comments (default [])
class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.likes = 0;
        this.comments = [];
    }
    
    like() {
        this.likes++;
    }
    
    addComment(comment) {
        this.comments.push(comment);
    }
    
    getInfo() {
        return `"${this.title}" by ${this.author} - ${this.likes} likes, ${this.comments.length} comments`;
    }
}

console.log("\n--- TODO 17 ---");
let post1 = new Post("My First Post", "Hello World!", "Alice");
console.log(post1.getInfo());
post1.like();
post1.like();
post1.addComment("Great post!");
console.log(post1.getInfo());

// TODO 18: Create a Player class with default values
// Properties: name, health (default 100), score (default 0)
class Player {
    constructor(name, health = 100, score = 0) {
        this.name = name;
        this.health = health;
        this.score = score;
    }
    
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) this.health = 0;
        console.log(`${this.name} took ${damage} damage. Health: ${this.health}`);
    }
    
    heal(amount) {
        this.health += amount;
        if (this.health > 100) this.health = 100;
        console.log(`${this.name} healed ${amount}. Health: ${this.health}`);
    }
    
    addScore(points) {
        this.score += points;
        console.log(`${this.name} earned ${points} points. Score: ${this.score}`);
    }
}

console.log("\n--- TODO 18 ---");
let player1 = new Player("Hero");
player1.takeDamage(30);
player1.heal(20);
player1.addScore(100);

// ============================================
// SECTION 5: MULTIPLE INSTANCES
// ============================================

console.log("\n\n=== SECTION 5: Multiple Instances ===\n");

// TODO 19: Create multiple instances of a Task class
// Create at least 3 tasks with different properties
class Task {
    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        this.completed = false;
    }
    
    complete() {
        this.completed = true;
    }
    
    getInfo() {
        let status = this.completed ? "✓" : "○";
        return `${status} [${this.priority}] ${this.title}`;
    }
}

console.log("--- TODO 19 ---");
let task1 = new Task("Learn OOP", "High");
let task2 = new Task("Practice exercises", "Medium");
let task3 = new Task("Build project", "High");

console.log(task1.getInfo());
console.log(task2.getInfo());
console.log(task3.getInfo());

task1.complete();
console.log(task1.getInfo());

// TODO 20: Create multiple instances of an Employee class
// Create array of employees and loop through them
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    
    promote(newPosition, raise) {
        this.position = newPosition;
        this.salary += raise;
        console.log(`${this.name} promoted to ${newPosition}`);
    }
    
    getInfo() {
        return `${this.name} - ${this.position} ($${this.salary})`;
    }
}

console.log("\n--- TODO 20 ---");
let employees = [
    new Employee("Alice", "Developer", 60000),
    new Employee("Bob", "Designer", 55000),
    new Employee("Charlie", "Manager", 70000)
];

console.log("All employees:");
for (let emp of employees) {
    console.log("  " + emp.getInfo());
}

employees[0].promote("Senior Developer", 10000);

// ============================================
// SECTION 6: INSTANCEOF
// ============================================

console.log("\n\n=== SECTION 6: instanceof ===\n");

// TODO 21: Use instanceof to check object types
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Vehicle {
    constructor(type) {
        this.type = type;
    }
}

console.log("--- TODO 21 ---");
let myAnimal = new Animal("Lion");
let myVehicle = new Vehicle("Car");

console.log("myAnimal instanceof Animal:", myAnimal instanceof Animal);
console.log("myAnimal instanceof Vehicle:", myAnimal instanceof Vehicle);
console.log("myVehicle instanceof Vehicle:", myVehicle instanceof Vehicle);
console.log("myVehicle instanceof Animal:", myVehicle instanceof Animal);

// TODO 22: Create a function that only processes specific class instances
function processUser(obj) {
    if (obj instanceof User) {
        console.log("Processing user:", obj.getInfo());
    } else {
        console.log("Error: Not a User instance");
    }
}

console.log("\n--- TODO 22 ---");
let validUser = new User("bob", "bob@example.com");
let invalidUser = {username: "fake", email: "fake@example.com"};

processUser(validUser);
processUser(invalidUser);

// ============================================
// SECTION 7: COMPLEX EXAMPLES
// ============================================

console.log("\n\n=== SECTION 7: Complex Examples ===\n");

// TODO 23: Create a Quiz class
// Properties: questions (array), currentQuestion, score
// Methods: addQuestion(), nextQuestion(), checkAnswer(), getScore()
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
    }
    
    addQuestion(question, answer) {
        this.questions.push({question, answer});
    }
    
    getCurrentQuestion() {
        if (this.currentQuestion < this.questions.length) {
            return this.questions[this.currentQuestion].question;
        }
        return "Quiz completed!";
    }
    
    checkAnswer(answer) {
        let correct = this.questions[this.currentQuestion].answer;
        if (answer === correct) {
            this.score++;
            console.log("Correct!");
        } else {
            console.log(`Wrong! Correct answer: ${correct}`);
        }
        this.currentQuestion++;
    }
    
    getScore() {
        return `Score: ${this.score}/${this.questions.length}`;
    }
}

console.log("--- TODO 23 ---");
let quiz = new Quiz();
quiz.addQuestion("What is 2 + 2?", 4);
quiz.addQuestion("What is the capital of France?", "Paris");
quiz.addQuestion("What is 10 / 2?", 5);

console.log(quiz.getCurrentQuestion());
quiz.checkAnswer(4);
console.log(quiz.getCurrentQuestion());
quiz.checkAnswer("London");
console.log(quiz.getScore());

// TODO 24: Create an Inventory class
// Manage products with add, remove, update quantity, find product
class Inventory {
    constructor() {
        this.products = [];
    }
    
    addProduct(name, quantity, price) {
        this.products.push({name, quantity, price});
        console.log(`Added: ${name} (${quantity} units at $${price})`);
    }
    
    removeProduct(name) {
        this.products = this.products.filter(p => p.name !== name);
        console.log(`Removed: ${name}`);
    }
    
    updateQuantity(name, quantity) {
        let product = this.products.find(p => p.name === name);
        if (product) {
            product.quantity = quantity;
            console.log(`Updated ${name} quantity to ${quantity}`);
        }
    }
    
    getTotalValue() {
        let total = 0;
        for (let product of this.products) {
            total += product.quantity * product.price;
        }
        return total;
    }
    
    showInventory() {
        console.log("Inventory:");
        for (let product of this.products) {
            console.log(`  ${product.name}: ${product.quantity} @ $${product.price}`);
        }
        console.log(`Total value: $${this.getTotalValue()}`);
    }
}

console.log("\n--- TODO 24 ---");
let inventory = new Inventory();
inventory.addProduct("Laptop", 5, 999);
inventory.addProduct("Mouse", 50, 25);
inventory.addProduct("Keyboard", 30, 75);
inventory.showInventory();
inventory.updateQuantity("Mouse", 45);
inventory.showInventory();

// TODO 25: Create a Game class with player, score, lives
class Game {
    constructor(playerName) {
        this.playerName = playerName;
        this.score = 0;
        this.lives = 3;
        this.level = 1;
    }
    
    earnPoints(points) {
        this.score += points;
        console.log(`+${points} points! Total: ${this.score}`);
    }
    
    loseLife() {
        this.lives--;
        console.log(`Lost a life! Lives remaining: ${this.lives}`);
        if (this.lives === 0) {
            console.log("Game Over!");
        }
    }
    
    levelUp() {
        this.level++;
        console.log(`Level Up! Now at level ${this.level}`);
    }
    
    getStatus() {
        return `${this.playerName} - Level ${this.level} | Score: ${this.score} | Lives: ${this.lives}`;
    }
}

console.log("\n--- TODO 25 ---");
let game = new Game("Player1");
console.log(game.getStatus());
game.earnPoints(100);
game.earnPoints(50);
game.levelUp();
game.loseLife();
console.log(game.getStatus());

// ============================================
// 🎉 END OF DAY 14 OOP EXERCISES
// ============================================