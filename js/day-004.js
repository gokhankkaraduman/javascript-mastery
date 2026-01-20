// ============================================
// DAY 4 EXERCISES - Loops & String Methods
// ============================================

// ============================================
// LEVEL 1: BASIC FOR LOOPS
// ============================================

// TODO 1: Print numbers from 1 to 10
console.log("--- Exercise 1: Print 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// TODO 2: Print numbers from 10 to 1 (countdown)
console.log("\n--- Exercise 2: Countdown 10 to 1 ---");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// TODO 3: Print only even numbers from 0 to 20
console.log("\n--- Exercise 3: Even Numbers 0 to 20 ---");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// TODO 4: Print only odd numbers from 1 to 19
console.log("\n--- Exercise 4: Odd Numbers 1 to 19 ---");
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

// TODO 5: Calculate sum of numbers from 1 to 100
console.log("\n--- Exercise 5: Sum of 1 to 100 ---");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum); // 5050

// ============================================
// LEVEL 2: WHILE & DO-WHILE LOOPS
// ============================================

// TODO 6: Print numbers 1 to 5 using while loop
console.log("\n--- Exercise 6: While Loop 1 to 5 ---");
let count = 1;
while (count <= 5) {
    console.log(count);
    count++;
}

// TODO 7: Print numbers 5 to 1 using while loop
console.log("\n--- Exercise 7: While Loop Countdown ---");
let num = 5;
while (num >= 1) {
    console.log(num);
    num--;
}

// TODO 8: Use do-while to print numbers 1 to 3
console.log("\n--- Exercise 8: Do-While Loop ---");
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 3);

// TODO 9: Find first number divisible by 7 between 1-50
console.log("\n--- Exercise 9: First Number Divisible by 7 ---");
let number = 1;
while (number <= 50) {
    if (number % 7 === 0) {
        console.log("First number divisible by 7:", number);
        break;
    }
    number++;
}

// TODO 10: Count from 1 to 10, but skip 5 using while
console.log("\n--- Exercise 10: Skip Number 5 ---");
let counter = 1;
while (counter <= 10) {
    if (counter === 5) {
        counter++;
        continue;
    }
    console.log(counter);
    counter++;
}

// ============================================
// LEVEL 3: BREAK & CONTINUE
// ============================================

// TODO 11: Print numbers 1-10, stop at 7 using break
console.log("\n--- Exercise 11: Stop at 7 ---");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// TODO 12: Print 1-10, skip multiples of 3 using continue
console.log("\n--- Exercise 12: Skip Multiples of 3 ---");
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// TODO 13: Find first number greater than 100 that's divisible by 13
console.log("\n--- Exercise 13: First Number > 100 Divisible by 13 ---");
for (let i = 101; i <= 200; i++) {
    if (i % 13 === 0) {
        console.log("Found:", i);
        break;
    }
}

// TODO 14: Print even numbers 2-20, skip 10
console.log("\n--- Exercise 14: Even Numbers, Skip 10 ---");
for (let i = 2; i <= 20; i += 2) {
    if (i === 10) {
        continue;
    }
    console.log(i);
}

// TODO 15: Search for a number in array, stop when found
console.log("\n--- Exercise 15: Search in Array ---");
let numbers = [3, 7, 12, 5, 19, 8, 15];
let target = 19;
let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        foundIndex = i;
        console.log("Found", target, "at index", i);
        break;
    }
}

// ============================================
// LEVEL 4: STRING METHODS - BASIC
// ============================================

// TODO 16: Convert string to uppercase and lowercase
console.log("\n--- Exercise 16: Case Conversion ---");
let greeting = "Hello World";
console.log("Original:", greeting);
console.log("Uppercase:", greeting.toUpperCase());
console.log("Lowercase:", greeting.toLowerCase());

// TODO 17: Get length of a string
console.log("\n--- Exercise 17: String Length ---");
let message = "JavaScript is awesome!";
console.log("Message:", message);
console.log("Length:", message.length);

// TODO 18: Get character at specific index
console.log("\n--- Exercise 18: Character at Index ---");
let word = "Programming";
console.log("Word:", word);
console.log("Character at index 0:", word.charAt(0));
console.log("Character at index 5:", word.charAt(5));
console.log("Character at index 10:", word.charAt(10));

// TODO 19: Check if string includes a substring
console.log("\n--- Exercise 19: String Includes ---");
let sentence = "I love JavaScript programming";
console.log("Sentence:", sentence);
console.log("Includes 'JavaScript':", sentence.includes("JavaScript"));
console.log("Includes 'Python':", sentence.includes("Python"));
console.log("Includes 'love':", sentence.includes("love"));

// TODO 20: Find index of substring
console.log("\n--- Exercise 20: Index Of ---");
let text = "Hello World, Welcome to the World";
console.log("Text:", text);
console.log("indexOf 'World':", text.indexOf("World"));
console.log("indexOf 'Welcome':", text.indexOf("Welcome"));
console.log("indexOf 'Python':", text.indexOf("Python")); // -1 (not found)
console.log("lastIndexOf 'World':", text.lastIndexOf("World"));

// ============================================
// LEVEL 5: STRING METHODS - EXTRACTING
// ============================================

// TODO 21: Extract substring using substring()
console.log("\n--- Exercise 21: Substring ---");
let fullText = "JavaScript Programming";
console.log("Original:", fullText);
console.log("substring(0, 10):", fullText.substring(0, 10));
console.log("substring(11):", fullText.substring(11));
console.log("substring(4, 10):", fullText.substring(4, 10));

// TODO 22: Extract using slice()
console.log("\n--- Exercise 22: Slice ---");
let phrase = "Hello World";
console.log("Original:", phrase);
console.log("slice(0, 5):", phrase.slice(0, 5));
console.log("slice(6):", phrase.slice(6));
console.log("slice(-5):", phrase.slice(-5));
console.log("slice(-5, -1):", phrase.slice(-5, -1));

// TODO 23: Split string into array
console.log("\n--- Exercise 23: Split ---");
let csv = "apple,banana,orange,grape";
console.log("Original:", csv);
console.log("Split by ',':", csv.split(","));

let sentence2 = "I love JavaScript";
console.log("Sentence:", sentence2);
console.log("Split by space:", sentence2.split(" "));
console.log("Split into chars:", sentence2.split(""));

// TODO 24: Check start and end of string
console.log("\n--- Exercise 24: StartsWith & EndsWith ---");
let filename = "document.pdf";
console.log("Filename:", filename);
console.log("Starts with 'doc':", filename.startsWith("doc"));
console.log("Ends with '.pdf':", filename.endsWith(".pdf"));
console.log("Ends with '.txt':", filename.endsWith(".txt"));

// TODO 25: Trim whitespace
console.log("\n--- Exercise 25: Trim ---");
let messy = "   Hello World   ";
console.log("Original:", `"${messy}"`);
console.log("Trimmed:", `"${messy.trim()}"`);
console.log("TrimStart:", `"${messy.trimStart()}"`);
console.log("TrimEnd:", `"${messy.trimEnd()}"`);

// ============================================
// LEVEL 6: STRING METHODS - MODIFYING
// ============================================

// TODO 26: Replace substring
console.log("\n--- Exercise 26: Replace ---");
let original = "I love Python programming";
console.log("Original:", original);
console.log("Replace 'Python' with 'JavaScript':", original.replace("Python", "JavaScript"));

let cats = "cat cat cat";
console.log("Original:", cats);
console.log("Replace first 'cat':", cats.replace("cat", "dog"));
console.log("Replace all 'cat':", cats.replaceAll("cat", "dog"));

// TODO 27: Repeat string
console.log("\n--- Exercise 27: Repeat ---");
let laugh = "Ha";
console.log("Original:", laugh);
console.log("Repeat 3 times:", laugh.repeat(3));
console.log("Repeat 5 times:", laugh.repeat(5));

// TODO 28: Pad string
console.log("\n--- Exercise 28: Pad ---");
let code = "5";
console.log("Original:", code);
console.log("padStart(3, '0'):", code.padStart(3, "0"));
console.log("padEnd(3, '0'):", code.padEnd(3, "0"));

let id = "42";
console.log("ID:", id);
console.log("Padded ID:", id.padStart(5, "0")); // "00042"

// TODO 29: Concatenate strings
console.log("\n--- Exercise 29: Concat ---");
let firstName = "John";
let lastName = "Doe";
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("concat():", firstName.concat(" ", lastName));
console.log("Using +:", firstName + " " + lastName);

// TODO 30: Convert string to array of characters
console.log("\n--- Exercise 30: String to Array ---");
let name = "Alice";
console.log("Name:", name);
console.log("split(''):", name.split(""));
console.log("Array.from():", Array.from(name));

// ============================================
// LEVEL 7: COMBINING LOOPS & STRINGS
// ============================================

// TODO 31: Count vowels in a string
console.log("\n--- Exercise 31: Count Vowels ---");
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

console.log("Vowels in 'Hello World':", countVowels("Hello World"));
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));
console.log("Vowels in 'Programming':", countVowels("Programming"));

// TODO 32: Reverse a string using loop
console.log("\n--- Exercise 32: Reverse String ---");
function reverseString(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

console.log("Reverse 'Hello':", reverseString("Hello"));
console.log("Reverse 'JavaScript':", reverseString("JavaScript"));
console.log("Reverse 'Programming':", reverseString("Programming"));

// TODO 33: Check if string is palindrome
console.log("\n--- Exercise 33: Palindrome Check ---");
function isPalindrome(str) {
    str = str.toLowerCase();
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return str === reversed;
}

console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));
console.log("Is 'madam' palindrome?", isPalindrome("madam"));
console.log("Is 'A man a plan a canal Panama' palindrome?", 
    isPalindrome("amanaplanacanalpanama"));

// TODO 34: Count occurrences of a character
console.log("\n--- Exercise 34: Count Character ---");
function countChar(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

console.log("Count 'l' in 'Hello World':", countChar("Hello World", "l"));
console.log("Count 'a' in 'JavaScript':", countChar("JavaScript", "a"));
console.log("Count 'o' in 'Programming':", countChar("Programming", "o"));

// TODO 35: Find longest word in sentence
console.log("\n--- Exercise 35: Longest Word ---");
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    
    return longest;
}

console.log("Longest in 'I love JavaScript':", 
    findLongestWord("I love JavaScript"));
console.log("Longest in 'The quick brown fox':", 
    findLongestWord("The quick brown fox"));
console.log("Longest in 'Programming is fun':", 
    findLongestWord("Programming is fun"));

// ============================================
// LEVEL 8: ADVANCED CHALLENGES
// ============================================

// TODO 36: Remove all spaces from string
console.log("\n--- Exercise 36: Remove Spaces ---");
function removeSpaces(str) {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    
    return result;
}

console.log("Remove spaces 'Hello World':", removeSpaces("Hello World"));
console.log("Remove spaces 'I love JavaScript':", removeSpaces("I love JavaScript"));

// Alternative using replaceAll
console.log("Using replaceAll:", "Hello World".replaceAll(" ", ""));

// TODO 37: Capitalize first letter of each word
console.log("\n--- Exercise 37: Capitalize Words ---");
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalized);
    }
    
    return result.join(" ");
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("i love javascript"));
console.log(capitalizeWords("this is awesome"));

// TODO 38: Count words in a sentence
console.log("\n--- Exercise 38: Count Words ---");
function countWords(sentence) {
    let words = sentence.trim().split(" ");
    return words.length;
}

console.log("Words in 'Hello World':", countWords("Hello World"));
console.log("Words in 'I love JavaScript programming':", 
    countWords("I love JavaScript programming"));

// TODO 39: Replace multiple spaces with single space
console.log("\n--- Exercise 39: Clean Spaces ---");
function cleanSpaces(str) {
    let result = "";
    let prevWasSpace = false;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (!prevWasSpace) {
                result += str[i];
                prevWasSpace = true;
            }
        } else {
            result += str[i];
            prevWasSpace = false;
        }
    }
    
    return result.trim();
}

console.log(cleanSpaces("Hello    World"));
console.log(cleanSpaces("I    love     JavaScript"));

// TODO 40: Extract initials from full name
console.log("\n--- Exercise 40: Get Initials ---");
function getInitials(fullName) {
    let words = fullName.split(" ");
    let initials = "";
    
    for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0).toUpperCase();
    }
    
    return initials;
}

console.log("Initials of 'John Doe':", getInitials("John Doe"));
console.log("Initials of 'John Michael Smith':", getInitials("John Michael Smith"));
console.log("Initials of 'Alice Bob Charlie':", getInitials("Alice Bob Charlie"));

// TODO 41: Create acronym from sentence
console.log("\n--- Exercise 41: Create Acronym ---");
function createAcronym(sentence) {
    let words = sentence.split(" ");
    let acronym = "";
    
    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0).toUpperCase();
    }
    
    return acronym;
}

console.log("Acronym of 'As Soon As Possible':", 
    createAcronym("As Soon As Possible"));
console.log("Acronym of 'Laughing Out Loud':", 
    createAcronym("Laughing Out Loud"));
console.log("Acronym of 'For Your Information':", 
    createAcronym("For Your Information"));

// TODO 42: Remove vowels from string
console.log("\n--- Exercise 42: Remove Vowels ---");
function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    
    return result;
}

console.log("Remove vowels 'Hello World':", removeVowels("Hello World"));
console.log("Remove vowels 'JavaScript':", removeVowels("JavaScript"));

// TODO 43: Check if two strings are anagrams
console.log("\n--- Exercise 43: Anagram Check ---");
function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    str1 = str1.replaceAll(" ", "").toLowerCase();
    str2 = str2.replaceAll(" ", "").toLowerCase();
    
    // Check if lengths are different
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Sort both strings and compare
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    
    return sorted1 === sorted2;
}

console.log("'listen' and 'silent':", areAnagrams("listen", "silent"));
console.log("'hello' and 'world':", areAnagrams("hello", "world"));
console.log("'The Eyes' and 'They See':", areAnagrams("The Eyes", "They See"));

// TODO 44: Count each character in string
console.log("\n--- Exercise 44: Character Frequency ---");
function countCharacters(str) {
    str = str.toLowerCase().replaceAll(" ", "");
    let frequency = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    
    return frequency;
}

console.log("Character frequency in 'hello':", countCharacters("hello"));
console.log("Character frequency in 'javascript':", countCharacters("javascript"));

// TODO 45: Generate multiplication table
console.log("\n--- Exercise 45: Multiplication Table ---");
function multiplicationTable(num, limit) {
    let table = "";
    
    for (let i = 1; i <= limit; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    
    return table;
}

console.log("Multiplication table of 5:");
console.log(multiplicationTable(5, 10));

// ============================================
// 🎉 END OF DAY 4 EXERCISES - COMPLETED ✅
// ============================================