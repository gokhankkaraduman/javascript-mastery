// ============================================
// DAY 5 EXERCISES - Arrays & Data Collections
// ============================================

// ============================================
// LEVEL 1: BASIC ARRAY OPERATIONS
// ============================================

// TODO 1: Create an array of 5 favorite movies and print it
console.log("--- Exercise 1: Favorite Movies ---");
let movies = ["Inception", "Interstellar", "The Dark Knight", "The Matrix", "Memento"];
console.log("My Movies:", movies);

// TODO 2: Access the first, middle, and last movie from the array
console.log("\n--- Exercise 2: Accessing Elements ---");
console.log("First:", movies[0]);
console.log("Middle:", movies[2]);
console.log("Last:", movies[movies.length - 1]);

// TODO 3: Replace the second movie with "Spider-Man"
console.log("\n--- Exercise 3: Updating Array ---");
movies[1] = "Spider-Man";
console.log("Updated List:", movies);

// TODO 4: Check the length of your movies array
console.log("\n--- Exercise 4: Array Length ---");
console.log("I have", movies.length, "movies in my list.");

// ============================================
// LEVEL 2: ADDING & REMOVING (PUSH, POP, SHIFT, UNSHIFT)
// ============================================

// TODO 5: Create an empty shopping list and add 3 items using push()
console.log("\n--- Exercise 5: Push Items ---");
let shoppingList = [];
shoppingList.push("Milk", "Eggs", "Bread");
console.log("Current List:", shoppingList);

// TODO 6: Add an item to the beginning using unshift()
console.log("\n--- Exercise 6: Unshift Item ---");
shoppingList.unshift("Coffee");
console.log("After unshift:", shoppingList);

// TODO 7: Remove the last item using pop() and the first item using shift()
console.log("\n--- Exercise 7: Pop & Shift ---");
let removedLast = shoppingList.pop();
let removedFirst = shoppingList.shift();
console.log("Removed last:", removedLast);
console.log("Removed first:", removedFirst);
console.log("Final List:", shoppingList);

// ============================================
// LEVEL 3: SEARCHING & SLICING
// ============================================

// TODO 8: Find the index of "Eggs" in your shopping list
console.log("\n--- Exercise 8: Index Of ---");
let eggIndex = shoppingList.indexOf("Eggs");
console.log("Index of Eggs:", eggIndex);

// TODO 9: Check if "Sugar" is in the list using includes()
console.log("\n--- Exercise 9: Includes Check ---");
console.log("Is Sugar in list?", shoppingList.includes("Sugar"));

// TODO 10: Extract the first two elements of an array using slice()
console.log("\n--- Exercise 10: Slicing ---");
let numbers = [10, 20, 30, 40, 50];
let firstTwo = numbers.slice(0, 2);
console.log("Original:", numbers);
console.log("Sliced (first two):", firstTwo);

// ============================================
// LEVEL 4: MODIFIYING WITH SPLICE
// ============================================

// TODO 11: Use splice to remove the middle element from [1, 2, 3, 4, 5]
console.log("\n--- Exercise 11: Splice Remove ---");
let myNums = [1, 2, 3, 4, 5];
myNums.splice(2, 1); // Removes 1 element at index 2 (the number 3)
console.log("After splice removal:", myNums);

// TODO 12: Use splice to insert "Red" and "Green" at index 1
console.log("\n--- Exercise 12: Splice Insert ---");
let colors = ["Blue", "Yellow"];
colors.splice(1, 0, "Red", "Green");
console.log("After splice insertion:", colors);

// ============================================
// LEVEL 5: COMBINING & TRANSFORMING
// ============================================

// TODO 13: Combine two arrays using concat()
console.log("\n--- Exercise 13: Concat Arrays ---");
let alpha = ["a", "b"];
let numeric = [1, 2];
let combined = alpha.concat(numeric);
console.log("Combined:", combined);

// TODO 14: Convert an array of words into a single sentence string
console.log("\n--- Exercise 14: Join ---");
let words = ["JavaScript", "is", "really", "fun"];
let sentence = words.join(" ");
console.log("Joined String:", sentence);

// TODO 15: Reverse an array and then sort it
console.log("\n--- Exercise 15: Reverse & Sort ---");
let letters = ["b", "d", "a", "c"];
letters.reverse();
console.log("Reversed:", letters);
letters.sort();
console.log("Sorted:", letters);

// ============================================
// LEVEL 6: ARRAY ITERATION (LOOPS)
// ============================================

// TODO 16: Loop through an array and print each item with its index
console.log("\n--- Exercise 16: For Loop Iteration ---");
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// TODO 17: Use for...of to calculate the sum of [10, 20, 30, 40]
console.log("\n--- Exercise 17: For...of Sum ---");
let prices = [10, 20, 30, 40];
let total = 0;
for (let price of prices) {
    total += price;
}
console.log("Total Price:", total);

// TODO 18: Use forEach to print each name in uppercase
console.log("\n--- Exercise 18: forEach Uppercase ---");
let names = ["ali", "veli", "ayşe"];
names.forEach(function(name) {
    console.log(name.toUpperCase());
});

// ============================================
// LEVEL 7: ADVANCED ARRAY PATTERNS
// ============================================

// TODO 19: Find the maximum number in an array
console.log("\n--- Exercise 19: Find Max ---");
let scores = [45, 82, 91, 33, 54];
let max = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}
console.log("Max Score:", max);

// TODO 20: Filter even numbers into a new array
console.log("\n--- Exercise 20: Filter Evens ---");
let mixedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evens = [];
for (let n of mixedNums) {
    if (n % 2 === 0) {
        evens.push(n);
    }
}
console.log("Even Numbers:", evens);

// TODO 21: Create a 2D Array (Matrix) and access the center element
console.log("\n--- Exercise 21: 2D Array ---");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Center Element (5):", matrix[1][1]);

// TODO 22: Reverse a string by converting it to an array first
console.log("\n--- Exercise 22: String Reversal via Array ---");
let myStr = "OpenAI";
let reversedStr = myStr.split("").reverse().join("");
console.log(`Original: ${myStr}, Reversed: ${reversedStr}`);

// ============================================
// 🎉 END OF DAY 5 EXERCISES - COMPLETED ✅
// ============================================

