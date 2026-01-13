// ============================================
// DAY 2 EXERCISES - Logic, Math and Functions
// ============================================

// ============================================
// LEVEL 1: BASIC LEVEL - COMPARISON OPERATORS
// ============================================

// Exercise 1: Assign your name to a variable and convert it to uppercase with toUpperCase()
function exercise1() {
    let myName = "John";
    let upperName = myName.toUpperCase();
    console.log("Original:", myName);        // John
    console.log("Uppercase:", upperName);    // JOHN
    return upperName;
}
console.log("--- Exercise 1 ---");
exercise1();

// Exercise 2: Function to check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}
console.log("\n--- Exercise 2 ---");
console.log("Is 4 even?", isEven(4));      // true
console.log("Is 7 even?", isEven(7));      // false
console.log("Is 0 even?", isEven(0));      // true

// Exercise 3: Function to compare two numbers and return which one is bigger
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        return `${num2} is greater than ${num1}`;
    } else {
        return "Both numbers are equal";
    }
}
console.log("\n--- Exercise 3 ---");
console.log(compareNumbers(10, 5));   // 10 is greater than 5
console.log(compareNumbers(3, 8));    // 8 is greater than 3
console.log(compareNumbers(7, 7));    // Both numbers are equal

// Exercise 4: Function to generate random number between 1-10 using Math.random()
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log("\n--- Exercise 4 ---");
console.log("Random number:", getRandomNumber());
console.log("Random number:", getRandomNumber());
console.log("Random number:", getRandomNumber());

// Exercise 5: Function to return the length of a string
function getStringLength(text) {
    return text.length;
}
console.log("\n--- Exercise 5 ---");
console.log("Length of 'Hello':", getStringLength("Hello"));           // 5
console.log("Length of 'JavaScript':", getStringLength("JavaScript")); // 10
console.log("Length of 'Code':", getStringLength("Code"));             // 4

// ============================================
// LEVEL 2: INTERMEDIATE LEVEL - STRING & MATH METHODS
// ============================================

// Exercise 6: Function to check if an email address contains "@"
function isValidEmail(email) {
    return email.includes("@");
}
console.log("\n--- Exercise 6 ---");
console.log("test@gmail.com valid?", isValidEmail("test@gmail.com"));   // true
console.log("testgmail.com valid?", isValidEmail("testgmail.com"));     // false
console.log("user@yahoo.com valid?", isValidEmail("user@yahoo.com"));   // true

// Exercise 7: Function to merge two strings and convert to uppercase
function mergeAndUppercase(str1, str2) {
    let merged = str1 + str2;
    return merged.toUpperCase();
}
console.log("\n--- Exercise 7 ---");
console.log(mergeAndUppercase("hello", "world"));     // HELLOWORLD
console.log(mergeAndUppercase("Java", "Script"));     // JAVASCRIPT
console.log(mergeAndUppercase("Good", "Morning"));    // GOODMORNING

// Exercise 8: Function to get square root and round down
function squareRootFloor(num) {
    let sqrt = Math.sqrt(num);
    return Math.floor(sqrt);
}
console.log("\n--- Exercise 8 ---");
console.log("Square root floor of 10:", squareRootFloor(10));   // 3
console.log("Square root floor of 50:", squareRootFloor(50));   // 7
console.log("Square root floor of 100:", squareRootFloor(100)); // 10

// Exercise 9: Function to find the maximum of three numbers
function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log("\n--- Exercise 9 ---");
console.log("Max of 5, 12, 8:", findMax(5, 12, 8));      // 12
console.log("Max of 100, 50, 75:", findMax(100, 50, 75)); // 100
console.log("Max of 3, 3, 2:", findMax(3, 3, 2));        // 3

// Exercise 10: Function to return first and last character of a string
function getFirstAndLast(text) {
    let first = text.charAt(0);
    let last = text.charAt(text.length - 1);
    return `First: ${first}, Last: ${last}`;
}
console.log("\n--- Exercise 10 ---");
console.log(getFirstAndLast("Hello"));      // First: H, Last: o
console.log(getFirstAndLast("JavaScript")); // First: J, Last: t
console.log(getFirstAndLast("A"));          // First: A, Last: A

// ============================================
// LEVEL 3: ADVANCED LEVEL - ADVANCED FUNCTIONS
// ============================================

// Exercise 11: Function to count words in a sentence
function countWords(sentence) {
    let words = sentence.trim().split(" ");
    return words.length;
}
console.log("\n--- Exercise 11 ---");
console.log("Words in 'Hello World':", countWords("Hello World"));                    // 2
console.log("Words in 'I love JavaScript':", countWords("I love JavaScript"));        // 3
console.log("Words in 'This is a test':", countWords("This is a test"));              // 4

// Exercise 12: Function to generate random number between two numbers (min, max)
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("\n--- Exercise 12 ---");
console.log("Random between 1 and 5:", randomBetween(1, 5));
console.log("Random between 10 and 20:", randomBetween(10, 20));
console.log("Random between 50 and 100:", randomBetween(50, 100));

// Exercise 13: Function to reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}
console.log("\n--- Exercise 13 ---");
console.log("Reverse of 'Hello':", reverseString("Hello"));           // olleH
console.log("Reverse of 'JavaScript':", reverseString("JavaScript")); // tpircSavaJ
console.log("Reverse of '12345':", reverseString("12345"));           // 54321

// Exercise 14: Function to calculate BMI (weight, height parameters)
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return Math.round(bmi * 10) / 10; // Round to 1 decimal place
}
console.log("\n--- Exercise 14 ---");
console.log("BMI (70kg, 1.75m):", calculateBMI(70, 1.75));  // 22.9
console.log("BMI (85kg, 1.80m):", calculateBMI(85, 1.80));  // 26.2
console.log("BMI (60kg, 1.65m):", calculateBMI(60, 1.65));  // 22.0

// Exercise 15: Function to calculate price with VAT (18% VAT)
function calculatePriceWithVAT(price) {
    let vat = price * 0.18;
    let totalPrice = price + vat;
    return Math.round(totalPrice * 100) / 100; // Round to 2 decimal places
}
console.log("\n--- Exercise 15 ---");
console.log("Price 100 with VAT:", calculatePriceWithVAT(100));   // 118
console.log("Price 250 with VAT:", calculatePriceWithVAT(250));   // 295
console.log("Price 49.90 with VAT:", calculatePriceWithVAT(49.90)); // 58.88

// ============================================
// BONUS CHALLENGE: CALCULATOR
// ============================================

function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Error: Cannot divide by zero";
        }
        return num1 / num2;
    } else {
        return "Error: Invalid operator";
    }
}

console.log("\n--- BONUS CHALLENGE: Calculator ---");
console.log("10 + 5 =", calculator(10, "+", 5));    // 15
console.log("10 - 5 =", calculator(10, "-", 5));    // 5
console.log("10 * 5 =", calculator(10, "*", 5));    // 50
console.log("10 / 5 =", calculator(10, "/", 5));    // 2
console.log("10 / 0 =", calculator(10, "/", 0));    // Error: Cannot divide by zero
console.log("10 % 5 =", calculator(10, "%", 5));    // Error: Invalid operator

// ============================================
// EXTRA PRACTICE: COMPARISON OPERATORS
// ============================================

console.log("\n--- EXTRA: Comparison Operators Practice ---");

// Loose vs Strict Equality
console.log("\n1. Loose vs Strict Equality:");
console.log("5 == '5':", 5 == "5");       // true (type coercion)
console.log("5 === '5':", 5 === "5");     // false (strict check)
console.log("0 == false:", 0 == false);   // true
console.log("0 === false:", 0 === false); // false

// Inequality
console.log("\n2. Inequality:");
console.log("10 != '10':", 10 != "10");   // false
console.log("10 !== '10':", 10 !== "10"); // true
console.log("5 != 3:", 5 != 3);           // true

// Relational Operators
console.log("\n3. Relational Operators:");
console.log("10 > 5:", 10 > 5);           // true
console.log("10 < 5:", 10 < 5);           // false
console.log("10 >= 10:", 10 >= 10);       // true
console.log("5 <= 3:", 5 <= 3);           // false

// ============================================
// EXTRA PRACTICE: MATH OBJECT METHODS
// ============================================

console.log("\n--- EXTRA: Math Object Practice ---");

// Rounding Methods
console.log("\n1. Rounding:");
console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));     // 5
console.log("Math.round(4.5):", Math.round(4.5));   // 5
console.log("Math.round(4.4):", Math.round(4.4));   // 4

// Other Math Methods
console.log("\n2. Other Methods:");
console.log("Math.abs(-10):", Math.abs(-10));       // 10
console.log("Math.max(3, 7, 2):", Math.max(3, 7, 2)); // 7
console.log("Math.min(3, 7, 2):", Math.min(3, 7, 2)); // 2
console.log("Math.pow(2, 3):", Math.pow(2, 3));     // 8
console.log("Math.sqrt(16):", Math.sqrt(16));       // 4

// Random Numbers
console.log("\n3. Random Numbers:");
console.log("Random 0-1:", Math.random());
console.log("Random 1-6 (dice):", Math.floor(Math.random() * 6) + 1);
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);

// ============================================
// EXTRA PRACTICE: STRING METHODS
// ============================================

console.log("\n--- EXTRA: String Methods Practice ---");

let sampleText = "  JavaScript is Awesome  ";

console.log("\n1. Basic String Methods:");
console.log("Original:", `"${sampleText}"`);
console.log("Length:", sampleText.length);                    // 25
console.log("Trim:", `"${sampleText.trim()}"`);               // "JavaScript is Awesome"
console.log("toUpperCase:", sampleText.toUpperCase());
console.log("toLowerCase:", sampleText.toLowerCase());

console.log("\n2. Search & Extract:");
console.log("includes('Java'):", sampleText.includes("Java")); // true
console.log("charAt(2):", sampleText.charAt(2));               // J
console.log("substring(2, 12):", sampleText.substring(2, 12)); // JavaScript

// ============================================
// PRACTICE CHALLENGES
// ============================================

console.log("\n--- PRACTICE CHALLENGES ---");

// Challenge 1: Age check
function ageCheck(age) {
    if (age >= 18) {
        return "Adult";
    } else if (age >= 13) {
        return "Teenager";
    } else {
        return "Child";
    }
}
console.log("\nChallenge 1 - Age Check:");
console.log("Age 25:", ageCheck(25));  // Adult
console.log("Age 15:", ageCheck(15));  // Teenager
console.log("Age 10:", ageCheck(10));  // Child

// Challenge 2: Temperature converter (Celsius to Fahrenheit)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("\nChallenge 2 - Temperature Converter:");
console.log("0°C =", celsiusToFahrenheit(0), "°F");    // 32
console.log("25°C =", celsiusToFahrenheit(25), "°F");  // 77
console.log("100°C =", celsiusToFahrenheit(100), "°F"); // 212

// Challenge 3: Calculate discounted price
function calculateDiscount(price, discountPercent) {
    let discount = price * (discountPercent / 100);
    let finalPrice = price - discount;
    return Math.round(finalPrice * 100) / 100;
}
console.log("\nChallenge 3 - Discount Calculator:");
console.log("$100 with 20% discount:", calculateDiscount(100, 20));   // 80
console.log("$250 with 15% discount:", calculateDiscount(250, 15));   // 212.5
console.log("$500 with 50% discount:", calculateDiscount(500, 50));   // 250

// Challenge 4: Check if a number is positive, negative or zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log("\nChallenge 4 - Number Check:");
console.log("Check 10:", checkNumber(10));    // Positive
console.log("Check -5:", checkNumber(-5));    // Negative
console.log("Check 0:", checkNumber(0));      // Zero

// Challenge 5: Grade calculator
function calculateGrade(score) {
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
console.log("\nChallenge 5 - Grade Calculator:");
console.log("Score 95:", calculateGrade(95));  // A
console.log("Score 85:", calculateGrade(85));  // B
console.log("Score 75:", calculateGrade(75));  // C
console.log("Score 65:", calculateGrade(65));  // D
console.log("Score 45:", calculateGrade(45));  // F

// Challenge 6: Area of a circle
function calculateCircleArea(radius) {
    return Math.round(Math.PI * radius * radius * 100) / 100;
}
console.log("\nChallenge 6 - Circle Area:");
console.log("Radius 5:", calculateCircleArea(5));    // 78.54
console.log("Radius 10:", calculateCircleArea(10));  // 314.16
console.log("Radius 7:", calculateCircleArea(7));    // 153.94

// Challenge 7: Check if string is palindrome
function isPalindrome(text) {
    let reversed = text.split("").reverse().join("");
    return text.toLowerCase() === reversed.toLowerCase();
}
console.log("\nChallenge 7 - Palindrome Check:");
console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));  // true
console.log("Is 'hello' palindrome?", isPalindrome("hello"));      // false
console.log("Is 'madam' palindrome?", isPalindrome("madam"));      // true

// Challenge 8: Convert minutes to hours and minutes
function convertMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return `${hours} hours and ${minutes} minutes`;
}
console.log("\nChallenge 8 - Time Converter:");
console.log("150 minutes:", convertMinutes(150));  // 2 hours and 30 minutes
console.log("90 minutes:", convertMinutes(90));    // 1 hours and 30 minutes
console.log("45 minutes:", convertMinutes(45));    // 0 hours and 45 minutes

// Challenge 9: Find the average of three numbers
function calculateAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log("\nChallenge 9 - Average Calculator:");
console.log("Average of 10, 20, 30:", calculateAverage(10, 20, 30));  // 20
console.log("Average of 5, 10, 15:", calculateAverage(5, 10, 15));    // 10
console.log("Average of 100, 80, 90:", calculateAverage(100, 80, 90)); // 90

// Challenge 10: Check if number is in range
function isInRange(num, min, max) {
    return num >= min && num <= max;
}
console.log("\nChallenge 10 - Range Check:");
console.log("Is 5 in range 1-10?", isInRange(5, 1, 10));    // true
console.log("Is 15 in range 1-10?", isInRange(15, 1, 10));  // false
console.log("Is 10 in range 1-10?", isInRange(10, 1, 10));  // true

// ============================================
// 🎉 END OF DAY 2 EXERCISES - COMPLETED ✅
// ============================================
