// ============================================
// DAY 3 EXERCISES - Control Flow & Conditionals
// ============================================

// ============================================
// LEVEL 1: BASIC CONDITIONALS
// ============================================

// TODO 1: Write a function that checks if a person can vote (age >= 18)
function canVote(age) {
    if (age >= 18) {
        return "You can vote";
    } else {
        return "You cannot vote yet";
    }
}

console.log("--- Exercise 1: Voting Eligibility ---");
console.log(canVote(20));  // You can vote
console.log(canVote(16));  // You cannot vote yet
console.log(canVote(18));  // You can vote

// TODO 2: Write a function that checks if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log("\n--- Exercise 2: Number Check ---");
console.log(checkNumber(10));   // Positive
console.log(checkNumber(-5));   // Negative
console.log(checkNumber(0));    // Zero

// TODO 3: Write a function that returns the larger of two numbers
function getLarger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both are equal";
    }
}

console.log("\n--- Exercise 3: Find Larger Number ---");
console.log(getLarger(10, 5));   // 10
console.log(getLarger(3, 8));    // 8
console.log(getLarger(7, 7));    // Both are equal

// TODO 4: Write a function that checks if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("\n--- Exercise 4: Leap Year Check ---");
console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2023));  // false
console.log(isLeapYear(2000));  // true
console.log(isLeapYear(1900));  // false

// TODO 5: Write a function that assigns letter grades based on score
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

console.log("\n--- Exercise 5: Grade Calculator ---");
console.log(getGrade(95));  // A
console.log(getGrade(85));  // B
console.log(getGrade(75));  // C
console.log(getGrade(65));  // D
console.log(getGrade(45));  // F

// ============================================
// LEVEL 2: SWITCH STATEMENTS
// ============================================

// TODO 6: Write a function that returns the day name based on day number (1-7)
function getDayName(dayNumber) {
    let dayName;
    
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    
    return dayName;
}

console.log("\n--- Exercise 6: Day Name ---");
console.log(getDayName(1));  // Monday
console.log(getDayName(5));  // Friday
console.log(getDayName(7));  // Sunday
console.log(getDayName(9));  // Invalid day number

// TODO 7: Write a function that returns the month name based on month number (1-12)
function getMonthName(monthNumber) {
    let monthName;
    
    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number";
    }
    
    return monthName;
}

console.log("\n--- Exercise 7: Month Name ---");
console.log(getMonthName(1));   // January
console.log(getMonthName(6));   // June
console.log(getMonthName(12));  // December
console.log(getMonthName(13));  // Invalid month number

// TODO 8: Write a function that returns season based on month number
function getSeason(month) {
    let season;
    
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Fall";
            break;
        default:
            season = "Invalid month";
    }
    
    return season;
}

console.log("\n--- Exercise 8: Season Check ---");
console.log(getSeason(1));   // Winter
console.log(getSeason(5));   // Spring
console.log(getSeason(8));   // Summer
console.log(getSeason(10));  // Fall

// TODO 9: Write a function that performs basic calculator operations using switch
function calculator(num1, operator, num2) {
    let result;
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            result = "Invalid operator";
    }
    
    return result;
}

console.log("\n--- Exercise 9: Calculator with Switch ---");
console.log("10 + 5 =", calculator(10, "+", 5));   // 15
console.log("10 - 5 =", calculator(10, "-", 5));   // 5
console.log("10 * 5 =", calculator(10, "*", 5));   // 50
console.log("10 / 5 =", calculator(10, "/", 5));   // 2
console.log("10 % 3 =", calculator(10, "%", 3));   // 1
console.log("10 / 0 =", calculator(10, "/", 0));   // Cannot divide by zero

// TODO 10: Write a function that categorizes traffic lights
function trafficLight(color) {
    let action;
    
    switch (color.toLowerCase()) {
        case "red":
            action = "STOP";
            break;
        case "yellow":
            action = "SLOW DOWN";
            break;
        case "green":
            action = "GO";
            break;
        default:
            action = "Invalid color";
    }
    
    return action;
}

console.log("\n--- Exercise 10: Traffic Light ---");
console.log(trafficLight("red"));     // STOP
console.log(trafficLight("yellow"));  // SLOW DOWN
console.log(trafficLight("green"));   // GO
console.log(trafficLight("Red"));     // STOP (case-insensitive)

// ============================================
// LEVEL 3: TRUTHY & FALSY VALUES
// ============================================

// TODO 11: Write a function that checks if a value is truthy or falsy using Boolean()
function checkTruthiness(value) {
    if (Boolean(value)) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log("\n--- Exercise 11: Truthy/Falsy Check ---");
console.log(checkTruthiness(true));       // Truthy
console.log(checkTruthiness(false));      // Falsy
console.log(checkTruthiness(0));          // Falsy
console.log(checkTruthiness(1));          // Truthy
console.log(checkTruthiness(""));         // Falsy
console.log(checkTruthiness("hello"));    // Truthy
console.log(checkTruthiness(null));       // Falsy
console.log(checkTruthiness(undefined));  // Falsy
console.log(checkTruthiness([]));         // Truthy
console.log(checkTruthiness({}));         // Truthy

// TODO 12: Write a function that validates user input (checks if input exists)
function validateInput(input) {
    if (input) {
        return "Valid input: " + input;
    } else {
        return "No input provided";
    }
}

console.log("\n--- Exercise 12: Input Validation ---");
console.log(validateInput("John"));    // Valid input: John
console.log(validateInput(""));        // No input provided
console.log(validateInput(null));      // No input provided
console.log(validateInput(undefined)); // No input provided

// TODO 13: Write a function that sets default values using truthy/falsy
function greetUser(username) {
    let name = username || "Guest";
    return "Hello, " + name + "!";
}

console.log("\n--- Exercise 13: Default Values ---");
console.log(greetUser("Alice"));    // Hello, Alice!
console.log(greetUser(""));         // Hello, Guest!
console.log(greetUser(null));       // Hello, Guest!
console.log(greetUser(undefined));  // Hello, Guest!

// TODO 14: Write a function that counts truthy values in an array
function countTruthyValues(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            count++;
        }
    }
    
    return count;
}

console.log("\n--- Exercise 14: Count Truthy Values ---");
console.log(countTruthyValues([1, 0, true, false, "hello", ""]));  // 3
console.log(countTruthyValues([null, undefined, 0, "", false]));   // 0
console.log(countTruthyValues([1, 2, 3, 4, 5]));                   // 5

// TODO 15: Write a function that filters falsy values from an array
function removeFalsyValues(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log("\n--- Exercise 15: Remove Falsy Values ---");
console.log(removeFalsyValues([1, 0, true, false, "hello", ""]));  
// [1, true, "hello"]
console.log(removeFalsyValues([null, 5, undefined, "test", 0]));   
// [5, "test"]

// ============================================
// LEVEL 4: LOGICAL OPERATORS (&&, ||, !)
// ============================================

// TODO 16: Write a function that checks if a person can drive (age >= 18 AND has license)
function canDrive(age, hasLicense) {
    if (age >= 18 && hasLicense) {
        return "Can drive";
    } else {
        return "Cannot drive";
    }
}

console.log("\n--- Exercise 16: Can Drive Check ---");
console.log(canDrive(20, true));   // Can drive
console.log(canDrive(20, false));  // Cannot drive
console.log(canDrive(16, true));   // Cannot drive
console.log(canDrive(16, false));  // Cannot drive

// TODO 17: Write a function that checks if it's a rest day (weekend OR holiday)
function isRestDay(isWeekend, isHoliday) {
    if (isWeekend || isHoliday) {
        return "It's a rest day!";
    } else {
        return "It's a work day";
    }
}

console.log("\n--- Exercise 17: Rest Day Check ---");
console.log(isRestDay(true, false));   // It's a rest day!
console.log(isRestDay(false, true));   // It's a rest day!
console.log(isRestDay(true, true));    // It's a rest day!
console.log(isRestDay(false, false));  // It's a work day

// TODO 18: Write a function that grants access (age >= 18 AND has ticket) OR is VIP
function grantAccess(age, hasTicket, isVIP) {
    if ((age >= 18 && hasTicket) || isVIP) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

console.log("\n--- Exercise 18: Access Control ---");
console.log(grantAccess(20, true, false));   // Access granted
console.log(grantAccess(20, false, false));  // Access denied
console.log(grantAccess(16, true, false));   // Access denied
console.log(grantAccess(16, false, true));   // Access granted (VIP)

// TODO 19: Write a function using NOT operator to check if user is NOT logged in
function checkLoginStatus(isLoggedIn) {
    if (!isLoggedIn) {
        return "Please log in";
    } else {
        return "Welcome back!";
    }
}

console.log("\n--- Exercise 19: Login Status ---");
console.log(checkLoginStatus(true));   // Welcome back!
console.log(checkLoginStatus(false));  // Please log in

// TODO 20: Write a function to check eligibility for student discount
// (age < 25 AND is student) OR (age >= 60)
function getStudentDiscount(age, isStudent) {
    if ((age < 25 && isStudent) || age >= 60) {
        return "Eligible for discount";
    } else {
        return "Not eligible for discount";
    }
}

console.log("\n--- Exercise 20: Student Discount ---");
console.log(getStudentDiscount(20, true));   // Eligible for discount
console.log(getStudentDiscount(20, false));  // Not eligible for discount
console.log(getStudentDiscount(30, true));   // Not eligible for discount
console.log(getStudentDiscount(65, false));  // Eligible for discount (senior)

// ============================================
// LEVEL 5: COMBINED CHALLENGES
// ============================================

// TODO 21: Write a function that categorizes BMI
function categorizeBMI(weight, height) {
    let bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log("\n--- Exercise 21: BMI Category ---");
console.log(categorizeBMI(50, 1.75));   // Underweight
console.log(categorizeBMI(70, 1.75));   // Normal weight
console.log(categorizeBMI(85, 1.75));   // Overweight
console.log(categorizeBMI(100, 1.75));  // Obese

// TODO 22: Write a function that checks password strength
function checkPasswordStrength(password) {
    let length = password.length;
    let hasNumber = /\d/.test(password);
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    
    if (length >= 8 && hasNumber && hasUpperCase && hasLowerCase) {
        return "Strong password";
    } else if (length >= 6 && (hasNumber || hasUpperCase)) {
        return "Medium password";
    } else {
        return "Weak password";
    }
}

console.log("\n--- Exercise 22: Password Strength ---");
console.log(checkPasswordStrength("Pass123"));     // Medium password
console.log(checkPasswordStrength("Password123")); // Strong password
console.log(checkPasswordStrength("pass"));        // Weak password

// TODO 23: Write a function that determines shipping cost based on weight and distance
function calculateShipping(weight, distance) {
    let cost;
    
    if (weight <= 1 && distance <= 100) {
        cost = 5;
    } else if (weight <= 1 && distance > 100) {
        cost = 10;
    } else if (weight > 1 && distance <= 100) {
        cost = 15;
    } else {
        cost = 20;
    }
    
    return cost;
}

console.log("\n--- Exercise 23: Shipping Cost ---");
console.log("$" + calculateShipping(0.5, 50));    // $5
console.log("$" + calculateShipping(0.5, 150));   // $10
console.log("$" + calculateShipping(2, 50));      // $15
console.log("$" + calculateShipping(2, 150));     // $20

// TODO 24: Write a function that checks if a triangle is valid and what type
function checkTriangle(side1, side2, side3) {
    // Check if valid triangle
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Not a valid triangle";
    }
    
    // Check triangle type
    if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

console.log("\n--- Exercise 24: Triangle Check ---");
console.log(checkTriangle(5, 5, 5));    // Equilateral triangle
console.log(checkTriangle(5, 5, 3));    // Isosceles triangle
console.log(checkTriangle(3, 4, 5));    // Scalene triangle
console.log(checkTriangle(1, 2, 10));   // Not a valid triangle

// TODO 25: Write a function for ticket pricing based on age and day
function getTicketPrice(age, isWeekend) {
    let price;
    
    if (age < 12) {
        price = isWeekend ? 15 : 10;
    } else if (age >= 12 && age < 65) {
        price = isWeekend ? 25 : 20;
    } else {
        price = isWeekend ? 20 : 15;
    }
    
    return price;
}

console.log("\n--- Exercise 25: Ticket Pricing ---");
console.log("Child (weekday): $" + getTicketPrice(10, false));   // $10
console.log("Child (weekend): $" + getTicketPrice(10, true));    // $15
console.log("Adult (weekday): $" + getTicketPrice(30, false));   // $20
console.log("Adult (weekend): $" + getTicketPrice(30, true));    // $25
console.log("Senior (weekday): $" + getTicketPrice(70, false));  // $15
console.log("Senior (weekend): $" + getTicketPrice(70, true));   // $20

// ============================================
// 🎉 END OF DAY 3 EXERCISES - COMPLETED ✅
// ============================================
const ad = "go"

const toUpper = ad.toUpperCase()