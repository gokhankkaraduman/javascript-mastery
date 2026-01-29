// ============================================
// DAY 7 EXERCISES - Objects Mastery
// ============================================

// ============================================
// LEVEL 1: CREATING & ACCESSING OBJECTS
// ============================================

// TODO 1: Create a person object with properties: name, age, city, country
let person = {
    name: "John Doe",
    age: 28,
    city: "New York",
    country: "USA"
};
console.log("--- TODO 1 ---");
console.log(person);

// TODO 2: Access and print each property using dot notation
console.log("\n--- TODO 2 ---");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("Country:", person.country);

// TODO 3: Access and print each property using bracket notation
console.log("\n--- TODO 3 ---");
console.log("Name:", person["name"]);
console.log("Age:", person["age"]);
console.log("City:", person["city"]);
console.log("Country:", person["country"]);

// TODO 4: Create a car object with properties that have spaces in names
let car = {
    "car brand": "Toyota",
    "model name": "Camry",
    "year of manufacture": 2022,
    "is electric": false
};
console.log("\n--- TODO 4 ---");
console.log(car["car brand"]);
console.log(car["model name"]);

// TODO 5: Create a product object and access nested properties
let product = {
    name: "Laptop",
    price: 999,
    specs: {
        cpu: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};
console.log("\n--- TODO 5 ---");
console.log("Product:", product.name);
console.log("CPU:", product.specs.cpu);
console.log("RAM:", product.specs.ram);

// ============================================
// LEVEL 2: ADDING & MODIFYING PROPERTIES
// ============================================

// TODO 6: Add new properties to existing object
let student = {
    name: "Alice",
    age: 20
};
student.grade = "A";
student.major = "Computer Science";
student["student id"] = "CS2024001";
console.log("\n--- TODO 6 ---");
console.log(student);

// TODO 7: Modify existing properties
let book = {
    title: "JavaScript Basics",
    author: "John Smith",
    year: 2020,
    price: 29.99
};
book.price = 24.99;  // Discount
book.year = 2023;    // New edition
book.author = "John Smith Jr.";
console.log("\n--- TODO 7 ---");
console.log(book);

// TODO 8: Add method to object
let calculator = {
    brand: "Casio",
    model: "FX-991",
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("\n--- TODO 8 ---");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));

// TODO 9: Create object with array properties
let classroom = {
    name: "Math 101",
    students: ["Alice", "Bob", "Charlie", "David"],
    grades: [85, 90, 78, 92]
};
console.log("\n--- TODO 9 ---");
console.log("First student:", classroom.students[0]);
console.log("Third grade:", classroom.grades[2]);

// TODO 10: Delete properties from object
let user = {
    username: "john_doe",
    email: "john@example.com",
    password: "secret123",
    age: 25
};
delete user.password;  // Remove sensitive data
delete user.age;
console.log("\n--- TODO 10 ---");
console.log(user);

// ============================================
// LEVEL 3: LOOPING THROUGH OBJECTS
// ============================================

// TODO 11: Use for...in to print all keys
let laptop = {
    brand: "Dell",
    processor: "Intel i5",
    ram: "8GB",
    price: 699
};
console.log("\n--- TODO 11 ---");
for (let key in laptop) {
    console.log(key);
}

// TODO 12: Use for...in to print all values
console.log("\n--- TODO 12 ---");
for (let key in laptop) {
    console.log(laptop[key]);
}

// TODO 13: Use for...in to print key-value pairs in formatted way
console.log("\n--- TODO 13 ---");
for (let key in laptop) {
    console.log(`${key}: ${laptop[key]}`);
}

// TODO 14: Use Object.keys() to get all property names
let restaurant = {
    name: "Pizza Palace",
    cuisine: "Italian",
    rating: 4.5,
    delivery: true
};
console.log("\n--- TODO 14 ---");
let keyss = Object.keys(restaurant);
console.log("Keys:", keyss);

// TODO 15: Use Object.values() to get all property values
console.log("\n--- TODO 15 ---");
let values = Object.values(restaurant);
console.log("Values:", values);

// TODO 16: Use Object.entries() to get key-value pairs
console.log("\n--- TODO 16 ---");
let entries = Object.entries(restaurant);
console.log("Entries:", entries);

// TODO 17: Loop through Object.entries() using for...of
console.log("\n--- TODO 17 ---");
for (let [key, value] of Object.entries(restaurant)) {
    console.log(`${key} => ${value}`);
}

// TODO 18: Count number of properties in object
let phone = {
    brand: "Samsung",
    model: "Galaxy S21",
    color: "Black",
    storage: "128GB",
    price: 799
};
console.log("\n--- TODO 18 ---");
let propertyCount = Object.keys(phone).length;
console.log("Number of properties:", propertyCount);

// TODO 19: Check if object is empty
let emptyObj = {};
let filledObj = {name: "Test"};
console.log("\n--- TODO 19 ---");
console.log("emptyObj is empty:", Object.keys(emptyObj).length === 0);
console.log("filledObj is empty:", Object.keys(filledObj).length === 0);

// TODO 20: Check if property exists in object
let account = {
    username: "alice",
    email: "alice@example.com",
    verified: true
};
console.log("\n--- TODO 20 ---");
console.log("Has username:", "username" in account);
console.log("Has password:", "password" in account);
console.log("Has email:", account.hasOwnProperty("email"));

// ============================================
// LEVEL 4: NESTED OBJECTS
// ============================================

// TODO 21: Create and access deeply nested object
let company = {
    name: "Tech Corp",
    founded: 2010,
    headquarters: {
        country: "USA",
        city: "San Francisco",
        address: {
            street: "123 Tech Street",
            building: "Tower A",
            floor: 15
        }
    },
    employees: 500
};
console.log("\n--- TODO 21 ---");
console.log("Company:", company.name);
console.log("City:", company.headquarters.city);
console.log("Street:", company.headquarters.address.street);
console.log("Floor:", company.headquarters.address.floor);

// TODO 22: Modify nested object properties
company.headquarters.city = "Austin";
company.headquarters.address.floor = 20;
console.log("\n--- TODO 22 ---");
console.log("New city:", company.headquarters.city);
console.log("New floor:", company.headquarters.address.floor);

// TODO 23: Add new nested properties
company.headquarters.phone = "+1-555-0123";
company.headquarters.address.zipCode = "78701";
console.log("\n--- TODO 23 ---");
console.log(company.headquarters);

// TODO 24: Loop through nested object
let school = {
    name: "Tech Academy",
    students: {
        total: 500,
        international: 120,
        local: 380
    },
    courses: {
        programming: 10,
        design: 5,
        business: 8
    }
};
console.log("\n--- TODO 24 ---");
for (let category in school) {
    if (typeof school[category] === "object") {
        console.log(`${category}:`);
        for (let key in school[category]) {
            console.log(`  ${key}: ${school[category][key]}`);
        }
    } else {
        console.log(`${category}: ${school[category]}`);
    }
}

// TODO 25: Create object with methods that access other properties
let bankAccount = {
    owner: "John Doe",
    balance: 1000,
    currency: "USD",
    deposit: function(amount) {
        this.balance += amount;
        return this.balance;
    },
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            return "Insufficient funds";
        }
    },
    getBalance: function() {
        return `${this.balance} ${this.currency}`;
    }
};
console.log("\n--- TODO 25 ---");
console.log("Initial balance:", bankAccount.getBalance());
bankAccount.deposit(500);
console.log("After deposit:", bankAccount.getBalance());
bankAccount.withdraw(300);
console.log("After withdrawal:", bankAccount.getBalance());

// ============================================
// LEVEL 5: ARRAYS OF OBJECTS
// ============================================

// TODO 26: Create array of objects
let students = [
    {name: "Alice", age: 20, grade: 85},
    {name: "Bob", age: 22, grade: 90},
    {name: "Charlie", age: 21, grade: 78},
    {name: "David", age: 20, grade: 92},
    {name: "Eve", age: 23, grade: 88}
];
console.log("\n--- TODO 26 ---");
console.log(students);

// TODO 27: Access specific object in array
console.log("\n--- TODO 27 ---");
console.log("First student:", students[0].name);
console.log("Third student grade:", students[2].grade);
console.log("Last student age:", students[students.length - 1].age);

// TODO 28: Loop through array of objects
console.log("\n--- TODO 28 ---");
for (let student of students) {
    console.log(`${student.name} (Age: ${student.age}) - Grade: ${student.grade}`);
}

// TODO 29: Find student with highest grade
console.log("\n--- TODO 29 ---");
let highestGrade = students[0];
for (let student of students) {
    if (student.grade > highestGrade.grade) {
        highestGrade = student;
    }
}
console.log("Top student:", highestGrade.name, "with grade", highestGrade.grade);

// TODO 30: Calculate average grade
console.log("\n--- TODO 30 ---");
let totalGrade = 0;
for (let student of students) {
    totalGrade += student.grade;
}
let averageGrade = totalGrade / students.length;
console.log("Average grade:", averageGrade.toFixed(2));

// TODO 31: Filter students with grade >= 85
console.log("\n--- TODO 31 ---");
let topStudents = [];
for (let student of students) {
    if (student.grade >= 85) {
        topStudents.push(student);
    }
}
console.log("Students with grade >= 85:");
for (let student of topStudents) {
    console.log(`  ${student.name}: ${student.grade}`);
}

// TODO 32: Add new property to all objects in array
console.log("\n--- TODO 32 ---");
for (let student of students) {
    if (student.grade >= 80) {
        student.status = "Pass";
    } else {
        student.status = "Fail";
    }
}
console.log(students);

// TODO 33: Create array of products and calculate total value
let inventory = [
    {name: "Laptop", price: 999, quantity: 5},
    {name: "Mouse", price: 25, quantity: 50},
    {name: "Keyboard", price: 75, quantity: 30},
    {name: "Monitor", price: 299, quantity: 15}
];
console.log("\n--- TODO 33 ---");
let totalInventoryValue = 0;
for (let item of inventory) {
    totalInventoryValue += item.price * item.quantity;
}
console.log("Total inventory value: $" + totalInventoryValue);

// TODO 34: Find product by name
console.log("\n--- TODO 34 ---");
let searchName = "Keyboard";
let foundProduct = null;
for (let item of inventory) {
    if (item.name === searchName) {
        foundProduct = item;
        break;
    }
}
if (foundProduct) {
    console.log(`Found: ${foundProduct.name} - $${foundProduct.price} (Stock: ${foundProduct.quantity})`);
} else {
    console.log("Product not found");
}

// TODO 35: Update stock quantity
console.log("\n--- TODO 35 ---");
let productToUpdate = "Mouse";
let soldQuantity = 10;
for (let item of inventory) {
    if (item.name === productToUpdate) {
        item.quantity -= soldQuantity;
        console.log(`Sold ${soldQuantity} ${productToUpdate}. New stock: ${item.quantity}`);
        break;
    }
}

// ============================================
// LEVEL 6: OBJECT MANIPULATION
// ============================================

// TODO 36: Copy object using spread operator
let original = {
    name: "John",
    age: 30,
    city: "New York"
};
let copy = {...original};
copy.name = "Jane";  // Modify copy
console.log("\n--- TODO 36 ---");
console.log("Original:", original.name);
console.log("Copy:", copy.name);

// TODO 37: Merge multiple objects
let basicInfo = {name: "Alice", age: 25};
let contactInfo = {email: "alice@example.com", phone: "555-0100"};
let addressInfo = {city: "Boston", country: "USA"};
let completeProfile = {...basicInfo, ...contactInfo, ...addressInfo};
console.log("\n--- TODO 37 ---");
console.log(completeProfile);

// TODO 38: Create object from arrays
let keys = ["name", "age", "city"];
let vals = ["Bob", 28, "Chicago"];
let person2 = {};
for (let i = 0; i < keys.length; i++) {
    person2[keys[i]] = vals[i];
}
console.log("\n--- TODO 38 ---");
console.log(person2);

// TODO 39: Swap object keys and values
let original2 = {
    a: "apple",
    b: "banana",
    c: "cherry"
};
let swapped = {};
for (let key in original2) {
    swapped[original2[key]] = key;
}
console.log("\n--- TODO 39 ---");
console.log("Original:", original2);
console.log("Swapped:", swapped);

// TODO 40: Filter object properties based on condition
let allPrices = {
    apple: 1.5,
    banana: 0.8,
    orange: 2.0,
    grape: 3.5,
    mango: 2.5
};
let expensiveFruits = {};
for (let fruit in allPrices) {
    if (allPrices[fruit] >= 2.0) {
        expensiveFruits[fruit] = allPrices[fruit];
    }
}
console.log("\n--- TODO 40 ---");
console.log("Expensive fruits (>= $2):", expensiveFruits);

// ============================================
// LEVEL 7: REAL-WORLD SCENARIOS
// ============================================

// TODO 41: Create shopping cart system
let cart = {
    items: [],
    addItem: function(name, price, quantity) {
        this.items.push({name, price, quantity});
    },
    getTotalPrice: function() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    },
    getItemCount: function() {
        let count = 0;
        for (let item of this.items) {
            count += item.quantity;
        }
        return count;
    }
};
console.log("\n--- TODO 41 ---");
cart.addItem("Laptop", 999, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);
console.log("Cart items:", cart.items);
console.log("Total items:", cart.getItemCount());
console.log("Total price: $" + cart.getTotalPrice());

// TODO 42: Create user database with search functionality
let userDatabase = {
    users: [
        {id: 1, username: "alice", email: "alice@example.com", role: "admin"},
        {id: 2, username: "bob", email: "bob@example.com", role: "user"},
        {id: 3, username: "charlie", email: "charlie@example.com", role: "user"}
    ],
    findByUsername: function(username) {
        for (let user of this.users) {
            if (user.username === username) {
                return user;
            }
        }
        return null;
    },
    findByRole: function(role) {
        let result = [];
        for (let user of this.users) {
            if (user.role === role) {
                result.push(user);
            }
        }
        return result;
    },
    addUser: function(username, email, role) {
        let newId = this.users.length + 1;
        this.users.push({id: newId, username, email, role});
    }
};
console.log("\n--- TODO 42 ---");
console.log("Find alice:", userDatabase.findByUsername("alice"));
console.log("Find users:", userDatabase.findByRole("user"));
userDatabase.addUser("david", "david@example.com", "user");
console.log("All users:", userDatabase.users);

// TODO 43: Create grade book system
let gradeBook = {
    students: {},
    addStudent: function(name, grades) {
        this.students[name] = grades;
    },
    getAverage: function(name) {
        if (!this.students[name]) return null;
        let total = 0;
        for (let grade of this.students[name]) {
            total += grade;
        }
        return total / this.students[name].length;
    },
    getClassAverage: function() {
        let total = 0;
        let count = 0;
        for (let name in this.students) {
            for (let grade of this.students[name]) {
                total += grade;
                count++;
            }
        }
        return count > 0 ? total / count : 0;
    }
};
console.log("\n--- TODO 43 ---");
gradeBook.addStudent("Alice", [85, 90, 92]);
gradeBook.addStudent("Bob", [78, 85, 88]);
gradeBook.addStudent("Charlie", [92, 95, 90]);
console.log("Alice's average:", gradeBook.getAverage("Alice").toFixed(2));
console.log("Class average:", gradeBook.getClassAverage().toFixed(2));

// TODO 44: Create library system
let library = {
    books: [
        {title: "JavaScript Guide", author: "John Doe", year: 2020, available: true},
        {title: "Python Basics", author: "Jane Smith", year: 2019, available: false},
        {title: "Web Development", author: "Bob Johnson", year: 2021, available: true}
    ],
    searchByTitle: function(title) {
        for (let book of this.books) {
            if (book.title.toLowerCase().includes(title.toLowerCase())) {
                return book;
            }
        }
        return null;
    },
    getAvailableBooks: function() {
        let available = [];
        for (let book of this.books) {
            if (book.available) {
                available.push(book);
            }
        }
        return available;
    },
    borrowBook: function(title) {
        for (let book of this.books) {
            if (book.title === title && book.available) {
                book.available = false;
                return `You borrowed: ${title}`;
            }
        }
        return "Book not available";
    }
};
console.log("\n--- TODO 44 ---");
console.log("Search 'JavaScript':", library.searchByTitle("JavaScript"));
console.log("Available books:", library.getAvailableBooks());
console.log(library.borrowBook("JavaScript Guide"));
console.log("Available books after borrow:", library.getAvailableBooks());

// TODO 45: Create weather data analyzer
let weatherData = {
    cities: {
        "New York": [15, 18, 20, 22, 19, 17, 16],
        "Los Angeles": [22, 25, 27, 26, 24, 23, 25],
        "Chicago": [10, 12, 15, 14, 11, 9, 8]
    },
    getAverage: function(city) {
        if (!this.cities[city]) return null;
        let total = 0;
        for (let temp of this.cities[city]) {
            total += temp;
        }
        return total / this.cities[city].length;
    },
    getHottestCity: function() {
        let hottestCity = null;
        let highestAvg = -Infinity;
        for (let city in this.cities) {
            let avg = this.getAverage(city);
            if (avg > highestAvg) {
                highestAvg = avg;
                hottestCity = city;
            }
        }
        return {city: hottestCity, average: highestAvg};
    },
    getAllAverages: function() {
        let averages = {};
        for (let city in this.cities) {
            averages[city] = this.getAverage(city).toFixed(2);
        }
        return averages;
    }
};
console.log("\n--- TODO 45 ---");
console.log("New York average:", weatherData.getAverage("New York").toFixed(2) + "°C");
console.log("Hottest city:", weatherData.getHottestCity());
console.log("All averages:", weatherData.getAllAverages());

// ============================================
// 🎉 END OF DAY 7 EXERCISES - COMPLETED ✅
// ============================================
