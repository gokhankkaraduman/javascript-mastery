// ============================================
// DAY 8 EXERCISES - Object Methods, Spread, Rest & This
// ============================================

// ============================================
// LEVEL 1: BASIC OBJECT METHODS
// ============================================

// TODO 1: Create an object with methods that perform basic operations
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }
};

console.log("--- TODO 1 ---");
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("20 / 5 =", calculator.divide(20, 5));

// TODO 2: Create object with method that accesses its own properties
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    
    getFullName() {
        return this.firstName + " " + this.lastName;
    },
    
    getInfo() {
        return `${this.firstName} ${this.lastName}, ${this.age} years old`;
    }
};

console.log("\n--- TODO 2 ---");
console.log(person.getFullName());
console.log(person.getInfo());

// TODO 3: Create object with method that modifies its own properties
let counter = {
    count: 0,
    
    increment() {
        this.count++;
        return this.count;
    },
    
    decrement() {
        this.count--;
        return this.count;
    },
    
    reset() {
        this.count = 0;
        return this.count;
    },
    
    getValue() {
        return this.count;
    }
};

console.log("\n--- TODO 3 ---");
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Current value:", counter.getValue());
console.log("Decrement:", counter.decrement());
console.log("Reset:", counter.reset());

// TODO 4: Create a rectangle object with area and perimeter methods
let rectangle = {
    width: 10,
    height: 5,
    
    getArea() {
        return this.width * this.height;
    },
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    },
    
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
};

console.log("\n--- TODO 4 ---");
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());
rectangle.scale(2);
console.log("After scaling - Area:", rectangle.getArea());

// TODO 5: Create a temperature converter object
let temperature = {
    celsius: 0,
    
    setCelsius(value) {
        this.celsius = value;
    },
    
    toFahrenheit() {
        return (this.celsius * 9/5) + 32;
    },
    
    toKelvin() {
        return this.celsius + 273.15;
    },
    
    fromFahrenheit(f) {
        this.celsius = (f - 32) * 5/9;
        return this.celsius;
    }
};

console.log("\n--- TODO 5 ---");
temperature.setCelsius(25);
console.log("25°C to Fahrenheit:", temperature.toFahrenheit() + "°F");
console.log("25°C to Kelvin:", temperature.toKelvin() + "K");
temperature.fromFahrenheit(98.6);
console.log("98.6°F to Celsius:", temperature.celsius + "°C");

// ============================================
// LEVEL 2: THIS KEYWORD PRACTICE
// ============================================

// TODO 6: Create a bank account with deposit and withdraw methods
let bankAccount = {
    owner: "Alice Johnson",
    balance: 1000,
    currency: "USD",
    
    deposit(amount) {
        this.balance += amount;
        return `Deposited ${amount} ${this.currency}. New balance: ${this.balance}`;
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        }
        this.balance -= amount;
        return `Withdrew ${amount} ${this.currency}. New balance: ${this.balance}`;
    },
    
    getBalance() {
        return `${this.owner}'s balance: ${this.balance} ${this.currency}`;
    },
    
    transfer(amount, targetAccount) {
        if (amount > this.balance) {
            return "Insufficient funds for transfer";
        }
        this.balance -= amount;
        targetAccount.balance += amount;
        return `Transferred ${amount} to ${targetAccount.owner}`;
    }
};

console.log("\n--- TODO 6 ---");
console.log(bankAccount.getBalance());
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(200));

// TODO 7: Create a user profile with update methods
let userProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 25,
    verified: false,
    
    updateEmail(newEmail) {
        this.email = newEmail;
        return `Email updated to: ${this.email}`;
    },
    
    haveBirthday() {
        this.age++;
        return `Happy birthday! You are now ${this.age}`;
    },
    
    verify() {
        this.verified = true;
        return `${this.username} is now verified`;
    },
    
    getProfile() {
        return `Username: ${this.username}, Email: ${this.email}, Age: ${this.age}, Verified: ${this.verified}`;
    }
};

console.log("\n--- TODO 7 ---");
console.log(userProfile.getProfile());
console.log(userProfile.updateEmail("john.doe@example.com"));
console.log(userProfile.haveBirthday());
console.log(userProfile.verify());

// TODO 8: Create a shopping cart object
let shoppingCart = {
    items: [],
    
    addItem(name, price, quantity) {
        this.items.push({name, price, quantity});
        return `Added ${quantity} ${name}(s) to cart`;
    },
    
    removeItem(name) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                this.items.splice(i, 1);
                return `Removed ${name} from cart`;
            }
        }
        return `${name} not found in cart`;
    },
    
    getTotalPrice() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    },
    
    getItemCount() {
        let count = 0;
        for (let item of this.items) {
            count += item.quantity;
        }
        return count;
    },
    
    clearCart() {
        this.items = [];
        return "Cart cleared";
    }
};

console.log("\n--- TODO 8 ---");
console.log(shoppingCart.addItem("Laptop", 999, 1));
console.log(shoppingCart.addItem("Mouse", 25, 2));
console.log(shoppingCart.addItem("Keyboard", 75, 1));
console.log("Total items:", shoppingCart.getItemCount());
console.log("Total price: $" + shoppingCart.getTotalPrice());
console.log(shoppingCart.removeItem("Mouse"));
console.log("Total after removal: $" + shoppingCart.getTotalPrice());

// TODO 9: Create a car object with methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    mileage: 15000,
    fuelLevel: 50,
    
    drive(distance) {
        let fuelNeeded = distance / 10; // 10 km per liter
        if (fuelNeeded > this.fuelLevel) {
            return "Not enough fuel";
        }
        this.mileage += distance;
        this.fuelLevel -= fuelNeeded;
        return `Drove ${distance}km. Mileage: ${this.mileage}, Fuel: ${this.fuelLevel.toFixed(1)}L`;
    },
    
    refuel(liters) {
        this.fuelLevel += liters;
        return `Refueled ${liters}L. Current fuel: ${this.fuelLevel}L`;
    },
    
    getInfo() {
        return `${this.year} ${this.brand} ${this.model} - ${this.mileage}km, Fuel: ${this.fuelLevel}L`;
    }
};

console.log("\n--- TODO 9 ---");
console.log(car.getInfo());
console.log(car.drive(100));
console.log(car.refuel(20));
console.log(car.getInfo());

// TODO 10: Create a todo list manager
let todoManager = {
    todos: [],
    
    addTodo(text) {
        this.todos.push({
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        });
        return `Added: ${text}`;
    },
    
    completeTodo(id) {
        for (let todo of this.todos) {
            if (todo.id === id) {
                todo.completed = true;
                return `Completed: ${todo.text}`;
            }
        }
        return "Todo not found";
    },
    
    getActiveTodos() {
        let active = [];
        for (let todo of this.todos) {
            if (!todo.completed) {
                active.push(todo);
            }
        }
        return active;
    },
    
    getCompletedTodos() {
        let completed = [];
        for (let todo of this.todos) {
            if (todo.completed) {
                completed.push(todo);
            }
        }
        return completed;
    },
    
    getAllTodos() {
        return this.todos;
    }
};

console.log("\n--- TODO 10 ---");
todoManager.addTodo("Learn JavaScript");
todoManager.addTodo("Build a project");
todoManager.addTodo("Practice coding");
console.log("All todos:", todoManager.getAllTodos().length);
console.log("Active todos:", todoManager.getActiveTodos().length);

// ============================================
// LEVEL 3: SPREAD OPERATOR WITH ARRAYS
// ============================================

// TODO 11: Copy an array using spread
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
copiedArray.push(6);

console.log("\n--- TODO 11 ---");
console.log("Original:", originalArray);
console.log("Copy:", copiedArray);

// TODO 12: Combine multiple arrays
let fruits = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let grains = ["rice", "wheat"];
let allFood = [...fruits, ...vegetables, ...grains];

console.log("\n--- TODO 12 ---");
console.log("Combined:", allFood);

// TODO 13: Add elements while spreading
let numbers1 = [1, 2, 3];
let numbers2 = [0, ...numbers1, 4, 5];

console.log("\n--- TODO 13 ---");
console.log("Result:", numbers2);

// TODO 14: Use spread with Math functions
let scores = [85, 92, 78, 95, 88];
let maxScore = Math.max(...scores);
let minScore = Math.min(...scores);

console.log("\n--- TODO 14 ---");
console.log("Scores:", scores);
console.log("Max score:", maxScore);
console.log("Min score:", minScore);

// TODO 15: Merge and remove duplicates
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let merged = [...array1, ...array2];
let unique = [...new Set(merged)];

console.log("\n--- TODO 15 ---");
console.log("Merged:", merged);
console.log("Unique:", unique);

// ============================================
// LEVEL 4: SPREAD OPERATOR WITH OBJECTS
// ============================================

// TODO 16: Copy an object using spread
let originalPerson = {
    name: "John",
    age: 30,
    city: "New York"
};
let copiedPerson = {...originalPerson};
copiedPerson.name = "Jane";

console.log("\n--- TODO 16 ---");
console.log("Original:", originalPerson.name);
console.log("Copy:", copiedPerson.name);

// TODO 17: Merge multiple objects
let basicInfo = {name: "Alice", age: 25};
let contactInfo = {email: "alice@example.com", phone: "555-0100"};
let addressInfo = {city: "Boston", country: "USA"};
let completeProfile = {...basicInfo, ...contactInfo, ...addressInfo};

console.log("\n--- TODO 17 ---");
console.log(completeProfile);

// TODO 18: Override properties using spread
let defaults = {
    theme: "light",
    language: "en",
    notifications: true,
    fontSize: 14
};

let userSettings = {
    theme: "dark",
    fontSize: 16
};

let finalSettings = {...defaults, ...userSettings};

console.log("\n--- TODO 18 ---");
console.log("Final settings:", finalSettings);

// TODO 19: Add new properties to object using spread
let product = {
    name: "Laptop",
    price: 999
};

let productWithDiscount = {
    ...product,
    discount: 10,
    finalPrice: product.price * 0.9
};

console.log("\n--- TODO 19 ---");
console.log(productWithDiscount);

// TODO 20: Update nested object properties
let user = {
    name: "Bob",
    age: 28,
    preferences: {
        theme: "light",
        notifications: true
    }
};

let updatedUser = {
    ...user,
    preferences: {
        ...user.preferences,
        theme: "dark"
    }
};

console.log("\n--- TODO 20 ---");
console.log("Original theme:", user.preferences.theme);
console.log("Updated theme:", updatedUser.preferences.theme);

// ============================================
// LEVEL 5: REST PARAMETERS
// ============================================

// TODO 21: Create function that sums unlimited numbers
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("\n--- TODO 21 ---");
console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
console.log("sum(10, 20, 30, 40, 50):", sum(10, 20, 30, 40, 50));

// TODO 22: Create function that multiplies all arguments
function multiply(...numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }
    return result;
}

console.log("\n--- TODO 22 ---");
console.log("multiply(2, 3):", multiply(2, 3));
console.log("multiply(2, 3, 4):", multiply(2, 3, 4));
console.log("multiply(1, 2, 3, 4, 5):", multiply(1, 2, 3, 4, 5));

// TODO 23: Create function with rest parameter and other parameters
function greet(greeting, ...names) {
    let result = [];
    for (let name of names) {
        result.push(`${greeting}, ${name}!`);
    }
    return result;
}

console.log("\n--- TODO 23 ---");
console.log(greet("Hello", "Alice", "Bob", "Charlie"));

// TODO 24: Create function that finds average of all arguments
function average(...numbers) {
    if (numbers.length === 0) return 0;
    
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total / numbers.length;
}

console.log("\n--- TODO 24 ---");
console.log("average(10, 20, 30):", average(10, 20, 30));
console.log("average(5, 10, 15, 20):", average(5, 10, 15, 20));

// TODO 25: Create function that filters only numbers from arguments
function numbersOnly(...items) {
    let result = [];
    for (let item of items) {
        if (typeof item === "number") {
            result.push(item);
        }
    }
    return result;
}

console.log("\n--- TODO 25 ---");
console.log(numbersOnly(1, "a", 2, "b", 3, true, 4));
console.log(numbersOnly("hello", 10, false, 20, null, 30));

// TODO 26: Create function that finds max value
function findMax(...numbers) {
    if (numbers.length === 0) return undefined;
    
    let max = numbers[0];
    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

console.log("\n--- TODO 26 ---");
console.log("findMax(5, 12, 8, 20, 3):", findMax(5, 12, 8, 20, 3));
console.log("findMax(100, 50, 75, 200, 150):", findMax(100, 50, 75, 200, 150));

// TODO 27: Create function that concatenates all string arguments
function concatStrings(...strings) {
    let result = "";
    for (let str of strings) {
        result += str;
    }
    return result;
}

console.log("\n--- TODO 27 ---");
console.log(concatStrings("Hello", " ", "World", "!"));
console.log(concatStrings("Java", "Script", " ", "is", " ", "awesome"));

// TODO 28: Create function that multiplies first arg with all remaining args
function multiplyBy(multiplier, ...numbers) {
    let result = [];
    for (let num of numbers) {
        result.push(num * multiplier);
    }
    return result;
}

console.log("\n--- TODO 28 ---");
console.log("multiplyBy(2, 1, 2, 3, 4, 5):", multiplyBy(2, 1, 2, 3, 4, 5));
console.log("multiplyBy(10, 1, 2, 3):", multiplyBy(10, 1, 2, 3));

// TODO 29: Create function that counts specific value in arguments
function countValue(searchValue, ...values) {
    let count = 0;
    for (let value of values) {
        if (value === searchValue) {
            count++;
        }
    }
    return count;
}

console.log("\n--- TODO 29 ---");
console.log("countValue(3, 1, 2, 3, 3, 4, 3, 5):", countValue(3, 1, 2, 3, 3, 4, 3, 5));
console.log("countValue('a', 'a', 'b', 'a', 'c', 'a'):", countValue('a', 'a', 'b', 'a', 'c', 'a'));

// TODO 30: Create function that returns even numbers from arguments
function getEvenNumbers(...numbers) {
    let result = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}

console.log("\n--- TODO 30 ---");
console.log("getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8):", getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8));

// ============================================
// LEVEL 6: REST IN DESTRUCTURING
// ============================================

// TODO 31: Use rest in object destructuring to separate properties
let fullUser = {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    age: 30,
    city: "New York",
    country: "USA"
};

let {username, email, ...otherDetails} = fullUser;

console.log("\n--- TODO 31 ---");
console.log("Username:", username);
console.log("Email:", email);
console.log("Other details:", otherDetails);

// TODO 32: Use rest to remove specific properties
let productData = {
    id: 101,
    name: "Laptop",
    price: 999,
    internalCode: "XYZ123",
    supplierInfo: "Confidential"
};

let {internalCode, supplierInfo, ...publicProductData} = productData;

console.log("\n--- TODO 32 ---");
console.log("Public data:", publicProductData);

// TODO 33: Use rest in array destructuring
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [first, second, ...remaining] = numbers;

console.log("\n--- TODO 33 ---");
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);

// TODO 34: Extract first element and rest from array
let colors = ["red", "green", "blue", "yellow", "purple"];
let [primary, ...secondary] = colors;

console.log("\n--- TODO 34 ---");
console.log("Primary color:", primary);
console.log("Secondary colors:", secondary);

// TODO 35: Combine destructuring with function
function processUser({name, age, ...rest}) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Additional info:", rest);
}

console.log("\n--- TODO 35 ---");
processUser({
    name: "Alice",
    age: 25,
    city: "Boston",
    occupation: "Developer",
    hobby: "Coding"
});

// ============================================
// LEVEL 7: COMBINING SPREAD AND REST
// ============================================

// TODO 36: Function that merges objects
function mergeObjects(...objects) {
    let result = {};
    for (let obj of objects) {
        result = {...result, ...obj};
    }
    return result;
}

console.log("\n--- TODO 36 ---");
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};
console.log(mergeObjects(obj1, obj2, obj3));

// TODO 37: Function that merges arrays and removes duplicates
function mergeUnique(...arrays) {
    let combined = [];
    for (let arr of arrays) {
        combined = [...combined, ...arr];
    }
    return [...new Set(combined)];
}

console.log("\n--- TODO 37 ---");
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];
console.log(mergeUnique(arr1, arr2, arr3));

// TODO 38: Create a function that accepts config object and overrides
function createConfig(defaults, ...overrides) {
    let config = {...defaults};
    for (let override of overrides) {
        config = {...config, ...override};
    }
    return config;
}

console.log("\n--- TODO 38 ---");
let defaultConfig = {theme: "light", lang: "en", fontSize: 14};
let override1 = {theme: "dark"};
let override2 = {fontSize: 16};
console.log(createConfig(defaultConfig, override1, override2));

// TODO 39: Function that extracts and processes remaining values
function extractAndSum(first, second, ...rest) {
    let sum = 0;
    for (let num of rest) {
        sum += num;
    }
    return {
        first: first,
        second: second,
        restSum: sum,
        allValues: [first, second, ...rest]
    };
}

console.log("\n--- TODO 39 ---");
console.log(extractAndSum(10, 20, 5, 5, 5, 5));

// TODO 40: Create array manipulator object
let arrayTools = {
    merge(...arrays) {
        let result = [];
        for (let arr of arrays) {
            result = [...result, ...arr];
        }
        return result;
    },
    
    unique(...arrays) {
        return [...new Set(this.merge(...arrays))];
    },
    
    flatten(arr) {
        let result = [];
        for (let item of arr) {
            if (Array.isArray(item)) {
                result = [...result, ...item];
            } else {
                result.push(item);
            }
        }
        return result;
    }
};

console.log("\n--- TODO 40 ---");
console.log(arrayTools.merge([1, 2], [3, 4], [5, 6]));
console.log(arrayTools.unique([1, 2], [2, 3], [3, 4]));
console.log(arrayTools.flatten([1, [2, 3], 4, [5, 6]]));

// ============================================
// LEVEL 8: ADVANCED REAL-WORLD SCENARIOS
// ============================================

// TODO 41: Create a data manager with spread and rest
let dataManager = {
    data: [],
    
    add(...items) {
        this.data = [...this.data, ...items];
        return `Added ${items.length} item(s)`;
    },
    
    remove(index) {
        let removed = this.data[index];
        this.data = [
            ...this.data.slice(0, index),
            ...this.data.slice(index + 1)
        ];
        return removed;
    },
    
    update(index, newValue) {
        this.data = [
            ...this.data.slice(0, index),
            newValue,
            ...this.data.slice(index + 1)
        ];
        return `Updated index ${index}`;
    },
    
    getData() {
        return [...this.data];
    },
    
    clear() {
        this.data = [];
        return "Data cleared";
    }
};

console.log("\n--- TODO 41 ---");
dataManager.add(10, 20, 30, 40, 50);
console.log("Data:", dataManager.getData());
dataManager.remove(2);
console.log("After remove:", dataManager.getData());
dataManager.update(1, 99);
console.log("After update:", dataManager.getData());

// TODO 42: Create a student grade manager
let gradeManager = {
    students: {},
    
    addStudent(name, ...grades) {
        this.students[name] = [...grades];
        return `Added ${name} with ${grades.length} grades`;
    },
    
    addGrade(name, ...newGrades) {
        if (!this.students[name]) {
            return "Student not found";
        }
        this.students[name] = [...this.students[name], ...newGrades];
        return `Added ${newGrades.length} grade(s) to ${name}`;
    },
    
    getAverage(name) {
        if (!this.students[name]) return null;
        let grades = this.students[name];
        let sum = 0;
        for (let grade of grades) {
            sum += grade;
        }
        return sum / grades.length;
    },
    
    getStudentInfo(name) {
        return {
            name: name,
            grades: [...this.students[name]],
            average: this.getAverage(name)
        };
    }
};

console.log("\n--- TODO 42 ---");
gradeManager.addStudent("Alice", 85, 90, 92);
gradeManager.addStudent("Bob", 78, 85, 88);
gradeManager.addGrade("Alice", 95, 88);
console.log(gradeManager.getStudentInfo("Alice"));

// TODO 43: Create a product inventory system
let inventory = {
    products: [],
    
    addProducts(...newProducts) {
        this.products = [...this.products, ...newProducts];
        return `Added ${newProducts.length} product(s)`;
    },
    
    updateProduct(id, updates) {
        this.products = this.products.map(product => {
            if (product.id === id) {
                return {...product, ...updates};
            }
            return product;
        });
        return "Product updated";
    },
    
    getProduct(id) {
        for (let product of this.products) {
            if (product.id === id) {
                return {...product};
            }
        }
        return null;
    },
    
    removeProduct(id) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.products = [
                ...this.products.slice(0, index),
                ...this.products.slice(index + 1)
            ];
            return "Product removed";
        }
        return "Product not found";
    },
    
    getTotalValue() {
        let total = 0;
        for (let product of this.products) {
            total += product.price * product.quantity;
        }
        return total;
    }
};

console.log("\n--- TODO 43 ---");
inventory.addProducts(
    {id: 1, name: "Laptop", price: 999, quantity: 5},
    {id: 2, name: "Mouse", price: 25, quantity: 50},
    {id: 3, name: "Keyboard", price: 75, quantity: 30}
);
console.log("Total inventory value: $" + inventory.getTotalValue());
inventory.updateProduct(2, {quantity: 45});
console.log(inventory.getProduct(2));

// TODO 44: Create a task scheduler (Tamamlanışı)
let taskScheduler = {
    tasks: [],
    
    addTask(title, ...tags) {
        let newTask = {
            id: Date.now() + Math.random(), // Çakışma olmaması için random ekledik
            title: title,
            tags: [...tags],
            completed: false,
            createdAt: new Date().toLocaleString()
        };
        this.tasks.push(newTask);
        return `Task added: ${title}`;
    },
    
    completeTask(id) {
        for (let task of this.tasks) {
            if (task.id === id) {
                task.completed = true;
                return `Task completed: ${task.title}`;
            }
        }
        return "Task not found";
    },
    
    getTasksByTag(tag) {
        // Tag içerenleri filtrele
        let filtered = [];
        for (let task of this.tasks) {
            if (task.tags.includes(tag)) {
                filtered.push(task);
            }
        }
        return filtered;
    }
};

console.log("\n--- TODO 44 ---");
taskScheduler.addTask("Learn React", "coding", "frontend");
taskScheduler.addTask("Go Gym", "health", "daily");
console.log("Tasks with 'coding' tag:", taskScheduler.getTasksByTag("coding"));

// TODO 45: Create a notification system using spread for options
let notifier = {
    defaults: {
        type: "info",
        duration: 3000,
        closable: true
    },
    
    send(message, overrides) {
        // Default değerleri kullanıcıdan gelen (overrides) ile birleştiriyoruz
        let settings = { ...this.defaults, ...overrides };
        return `Sending [${settings.type.toUpperCase()}] "${message}" (Duration: ${settings.duration}ms)`;
    }
};

console.log("\n--- TODO 45 ---");
console.log(notifier.send("Welcome back!")); 
console.log(notifier.send("Low Battery!", { type: "warning", duration: 5000 }));

// TODO 46: Create a social media post object with interaction methods
let socialPost = {
    id: "p123",
    author: "coder_girl",
    content: "JS objects are powerful!",
    likes: [],
    
    like(username) {
        if (!this.likes.includes(username)) {
            this.likes = [...this.likes, username];
            return `${username} liked the post.`;
        }
        return "Already liked";
    },
    
    getStats() {
        return `Post by ${this.author}: ${this.likes.length} likes. Liked by: ${this.likes.join(", ")}`;
    }
};

console.log("\n--- TODO 46 ---");
console.log(socialPost.like("user1"));
console.log(socialPost.like("user2"));
console.log(socialPost.getStats());

// TODO 47: Function that updates a user and tracks changes (rest/spread)
function updateUserInfo(currentUser, updates) {
    return {
        ...currentUser,
        ...updates,
        lastUpdated: new Date().toLocaleTimeString(),
        changeLog: "User data modified"
    };
}

console.log("\n--- TODO 47 ---");
let user01 = { id: 1, name: "Mert", role: "guest" };
let updated01 = updateUserInfo(user01, { role: "admin", email: "mert@js.com" });
console.log(updated01);

// TODO 48: Create a math toolkit with rest and this
let mathToolkit = {
    pi: 3.14159,
    
    sumAll(...nums) {
        return nums.reduce((acc, curr) => acc + curr, 0);
    },
    
    circleArea(radius) {
        return this.pi * (radius ** 2);
    }
};

console.log("\n--- TODO 48 ---");
console.log("Sum:", mathToolkit.sumAll(10, 5, 15, 20));
console.log("Circle Area (r=5):", mathToolkit.circleArea(5));

// TODO 49: Create a logger that prefixes messages using rest
let logger = {
    prefix: "[APP_LOG]",
    
    logInfo(category, ...messages) {
        let combinedMessage = messages.join(" | ");
        console.log(`${this.prefix} [${category}] ${combinedMessage}`);
    }
};

console.log("\n--- TODO 49 ---");
logger.logInfo("AUTH", "User login attempt", "User: admin", "Status: Success");

// TODO 50: Advanced: Create a simple "State Manager" using spread
let stateManager = {
    state: {
        user: null,
        theme: "light",
        isLoggedIn: false
    },
    
    setState(newState) {
        // Mevcut state'i koruyup sadece gelen kısımları günceller (Immutability ilkesi)
        this.state = { ...this.state, ...newState };
        return this.state;
    },
    
    getState() {
        return this.state;
    }
};

console.log("\n--- TODO 50 ---");
console.log("Initial State:", stateManager.getState());
stateManager.setState({ user: "Alice", isLoggedIn: true });
stateManager.setState({ theme: "dark" });
console.log("Final State:", stateManager.getState());


// ============================================
// 🎉 END OF DAY 8 EXERCISES - COMPLETED ✅
// ============================================
