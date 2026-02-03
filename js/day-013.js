// ============================================
// DAY 14 EXERCISES - COMPLETE ARRAY METHODS MASTERY
// ============================================

console.log("🚀 DAY 13 - ALL ARRAY METHODS");
console.log("Master every single array method in JavaScript!\n");

// ============================================
// SECTION 1: BASIC ARRAY METHODS (Adding/Removing)
// ============================================

console.log("=== SECTION 1: Basic Array Methods ===\n");

// TODO 1: Use push() to add elements to end of array
// Create array [1, 2, 3] and push 4, 5
// Expected: [1, 2, 3, 4, 5]

// TODO 2: Use pop() to remove last element
// Create array [1, 2, 3, 4, 5] and pop twice
// Expected: [1, 2, 3] and return values 5, 4

// TODO 3: Use unshift() to add elements to beginning
// Create array [3, 4, 5] and unshift 1, 2
// Expected: [1, 2, 3, 4, 5]

// TODO 4: Use shift() to remove first element
// Create array [1, 2, 3, 4, 5] and shift twice
// Expected: [3, 4, 5] and return values 1, 2

// TODO 5: Combine push, pop, shift, unshift
// Start with [5], unshift 4, push 6, shift, pop
// Track the array after each operation

// ============================================
// SECTION 2: SLICE & SPLICE
// ============================================

console.log("\n=== SECTION 2: Slice & Splice ===\n");

// TODO 6: Use slice() to extract portion of array
// Array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Extract elements from index 2 to 5 (not including 5)
// Expected: [2, 3, 4]

// TODO 7: Use slice() with negative indices
// Array: [0, 1, 2, 3, 4, 5]
// Extract last 3 elements
// Expected: [3, 4, 5]

// TODO 8: Use slice() to copy entire array
// Array: [1, 2, 3, 4, 5]
// Create a copy and modify copy to verify original unchanged

// TODO 9: Use splice() to remove elements
// Array: [1, 2, 3, 4, 5, 6, 7]
// Remove 3 elements starting from index 2
// Expected: [1, 2, 6, 7], removed: [3, 4, 5]

// TODO 10: Use splice() to add elements
// Array: [1, 2, 5, 6]
// Add 3, 4 at index 2
// Expected: [1, 2, 3, 4, 5, 6]

// TODO 11: Use splice() to replace elements
// Array: [1, 2, 3, 4, 5]
// Replace 2 elements at index 1 with 'a', 'b', 'c'
// Expected: [1, 'a', 'b', 'c', 4, 5]

// ============================================
// SECTION 3: CONCAT & JOIN
// ============================================

console.log("\n=== SECTION 3: Concat & Join ===\n");

// TODO 12: Use concat() to merge two arrays
// Array1: [1, 2, 3]
// Array2: [4, 5, 6]
// Expected: [1, 2, 3, 4, 5, 6]

// TODO 13: Use concat() to merge multiple arrays
// Merge [1, 2], [3, 4], [5, 6], [7, 8]
// Expected: [1, 2, 3, 4, 5, 6, 7, 8]

// TODO 14: Use join() to create string
// Array: ['Hello', 'World', 'JavaScript']
// Join with space
// Expected: "Hello World JavaScript"

// TODO 15: Use join() with different separators
// Array: [2024, 12, 25]
// Join with '-' and with '/'
// Expected: "2024-12-25" and "2024/12/25"

// TODO 16: Use join() to create CSV
// Array: ['Alice', '25', 'Developer']
// Join with comma
// Expected: "Alice,25,Developer"

// ============================================
// SECTION 4: INDEXOF & INCLUDES
// ============================================

console.log("\n=== SECTION 4: IndexOf & Includes ===\n");

// TODO 17: Use indexOf() to find element
// Array: [10, 20, 30, 40, 50]
// Find index of 30 and 60
// Expected: 2 and -1

// TODO 18: Use lastIndexOf() to find last occurrence
// Array: [1, 2, 3, 2, 1]
// Find last index of 2 and 1
// Expected: 3 and 4

// TODO 19: Use includes() to check existence
// Array: ['apple', 'banana', 'orange']
// Check if includes 'banana' and 'grape'
// Expected: true and false

// TODO 20: Use indexOf() with fromIndex
// Array: [1, 2, 3, 4, 5, 3, 2, 1]
// Find index of 3 starting from index 4
// Expected: 5

// ============================================
// SECTION 5: REVERSE & SORT
// ============================================

console.log("\n=== SECTION 5: Reverse & Sort ===\n");

// TODO 21: Use reverse() to reverse array
// Array: [1, 2, 3, 4, 5]
// Reverse it
// Expected: [5, 4, 3, 2, 1]

// TODO 22: Use sort() to sort strings
// Array: ['banana', 'apple', 'cherry', 'date']
// Sort alphabetically
// Expected: ['apple', 'banana', 'cherry', 'date']

// TODO 23: Use sort() with compare function for numbers
// Array: [10, 5, 40, 25, 1000, 1]
// Sort in ascending order
// Expected: [1, 5, 10, 25, 40, 1000]

// TODO 24: Use sort() to sort in descending order
// Array: [3, 1, 4, 1, 5, 9, 2, 6]
// Sort in descending order
// Expected: [9, 6, 5, 4, 3, 2, 1, 1]

// TODO 25: Use toSorted() (non-mutating sort)
// Array: [3, 1, 4, 1, 5]
// Create sorted copy without modifying original
// Expected: original [3, 1, 4, 1, 5], sorted [1, 1, 3, 4, 5]

// TODO 26: Use toReversed() (non-mutating reverse)
// Array: [1, 2, 3, 4, 5]
// Create reversed copy without modifying original
// Expected: original [1, 2, 3, 4, 5], reversed [5, 4, 3, 2, 1]

// ============================================
// SECTION 6: FIND & FINDINDEX
// ============================================

console.log("\n=== SECTION 6: Find & FindIndex ===\n");

// TODO 27: Use find() to find first match
// Array: [5, 12, 8, 130, 44]
// Find first number > 10
// Expected: 12

// TODO 28: Use find() with objects
// Array: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]
// Find user with id 2
// Expected: {id: 2, name: 'Bob'}

// TODO 29: Use findIndex() to find index of match
// Array: [5, 12, 8, 130, 44]
// Find index of first number > 10
// Expected: 1

// TODO 30: Use findLast() to find last match
// Array: [5, 12, 8, 130, 44]
// Find last number > 10
// Expected: 44

// TODO 31: Use findLastIndex() to find last index
// Array: [5, 12, 8, 130, 44]
// Find last index of number > 10
// Expected: 4

// ============================================
// SECTION 7: FILTER
// ============================================

console.log("\n=== SECTION 7: Filter ===\n");

// TODO 32: Use filter() to get even numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter even numbers
// Expected: [2, 4, 6, 8, 10]

// TODO 33: Use filter() to get odd numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter odd numbers
// Expected: [1, 3, 5, 7, 9]

// TODO 34: Use filter() with objects
// Array: [{name: 'Alice', age: 25}, {name: 'Bob', age: 17}, {name: 'Charlie', age: 30}]
// Filter users age >= 18
// Expected: [{name: 'Alice', age: 25}, {name: 'Charlie', age: 30}]

// TODO 35: Use filter() to remove falsy values
// Array: [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]
// Filter truthy values
// Expected: [1, 2, 3, 'hello']

// TODO 36: Use filter() to get unique values
// Array: [1, 2, 2, 3, 4, 4, 5]
// Get unique values
// Expected: [1, 2, 3, 4, 5]

// ============================================
// SECTION 8: MAP
// ============================================

console.log("\n=== SECTION 8: Map ===\n");

// TODO 37: Use map() to double all numbers
// Array: [1, 2, 3, 4, 5]
// Double each number
// Expected: [2, 4, 6, 8, 10]

// TODO 38: Use map() to square all numbers
// Array: [1, 2, 3, 4, 5]
// Square each number
// Expected: [1, 4, 9, 16, 25]

// TODO 39: Use map() to extract property
// Array: [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
// Extract names
// Expected: ['Alice', 'Bob']

// TODO 40: Use map() to transform objects
// Array: [{price: 100}, {price: 200}, {price: 300}]
// Add 20% tax to each
// Expected: [{price: 100, withTax: 120}, ...]

// TODO 41: Use map() with index
// Array: ['a', 'b', 'c']
// Create numbered list
// Expected: ['1. a', '2. b', '3. c']

// ============================================
// SECTION 9: FOREACH
// ============================================

console.log("\n=== SECTION 9: ForEach ===\n");

// TODO 42: Use forEach() to print all elements
// Array: [1, 2, 3, 4, 5]
// Print each element

// TODO 43: Use forEach() to calculate sum
// Array: [10, 20, 30, 40, 50]
// Calculate sum
// Expected: 150

// TODO 44: Use forEach() with objects
// Array: [{name: 'Alice', score: 85}, {name: 'Bob', score: 92}]
// Print: "Alice: 85", "Bob: 92"

// TODO 45: Use forEach() to modify external array
// Array: [1, 2, 3, 4, 5]
// Create new array with doubled values using forEach

// TODO 46: Use forEach() with index
// Array: ['red', 'green', 'blue']
// Print: "0: red", "1: green", "2: blue"

// ============================================
// SECTION 10: REDUCE
// ============================================

console.log("\n=== SECTION 10: Reduce ===\n");

// TODO 47: Use reduce() to sum array
// Array: [1, 2, 3, 4, 5]
// Calculate sum
// Expected: 15

// TODO 48: Use reduce() to find maximum
// Array: [5, 12, 8, 130, 44]
// Find max value
// Expected: 130

// TODO 49: Use reduce() to find minimum
// Array: [5, 12, 8, 130, 44]
// Find min value
// Expected: 5

// TODO 50: Use reduce() to count occurrences
// Array: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Count each fruit
// Expected: {apple: 3, banana: 2, orange: 1}

// TODO 51: Use reduce() to flatten array
// Array: [[1, 2], [3, 4], [5, 6]]
// Flatten to single array
// Expected: [1, 2, 3, 4, 5, 6]

// TODO 52: Use reduce() to group by property
// Array: [{name: 'Alice', dept: 'IT'}, {name: 'Bob', dept: 'HR'}, {name: 'Charlie', dept: 'IT'}]
// Group by department
// Expected: {IT: [{...}, {...}], HR: [{...}]}

// TODO 53: Use reduce() to calculate average
// Array: [85, 90, 78, 92, 88]
// Calculate average
// Expected: 86.6

// TODO 54: Use reduce() to create object from array
// Array: ['name', 'age', 'city']
// Create object with properties as keys and null as values
// Expected: {name: null, age: null, city: null}

// TODO 55: Use reduceRight() to reverse string
// Array: ['H', 'e', 'l', 'l', 'o']
// Reverse using reduceRight
// Expected: "olleH"

// ============================================
// SECTION 11: EVERY & SOME
// ============================================

console.log("\n=== SECTION 11: Every & Some ===\n");

// TODO 56: Use every() to check if all positive
// Array: [1, 2, 3, 4, 5]
// Check if all positive
// Expected: true

// TODO 57: Use every() to check if all even
// Array: [2, 4, 6, 8, 10]
// Check if all even
// Expected: true

// TODO 58: Use every() with objects
// Array: [{age: 25}, {age: 30}, {age: 35}]
// Check if all age >= 18
// Expected: true

// TODO 59: Use some() to check if any negative
// Array: [1, 2, -3, 4, 5]
// Check if any negative
// Expected: true

// TODO 60: Use some() to check if any even
// Array: [1, 3, 5, 8, 9]
// Check if any even
// Expected: true

// TODO 61: Use some() with objects
// Array: [{active: false}, {active: false}, {active: true}]
// Check if any active
// Expected: true

// ============================================
// SECTION 12: FLAT & FLATMAP
// ============================================

console.log("\n=== SECTION 12: Flat & FlatMap ===\n");

// TODO 62: Use flat() to flatten nested array (1 level)
// Array: [1, [2, 3], 4, [5, 6]]
// Flatten
// Expected: [1, 2, 3, 4, 5, 6]

// TODO 63: Use flat() with depth parameter
// Array: [1, [2, [3, [4, 5]]]]
// Flatten with depth 2
// Expected: [1, 2, 3, [4, 5]]

// TODO 64: Use flat(Infinity) to completely flatten
// Array: [1, [2, [3, [4, [5]]]]]
// Completely flatten
// Expected: [1, 2, 3, 4, 5]

// TODO 65: Use flatMap() to map and flatten
// Array: [1, 2, 3]
// Map each to [x, x*2] and flatten
// Expected: [1, 2, 2, 4, 3, 6]

// TODO 66: Use flatMap() with strings
// Array: ['Hello', 'World']
// Split each into characters and flatten
// Expected: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

// ============================================
// SECTION 13: FILL & COPYWITHIN
// ============================================

console.log("\n=== SECTION 13: Fill & CopyWithin ===\n");

// TODO 67: Use fill() to fill array with value
// Array: [1, 2, 3, 4, 5]
// Fill with 0
// Expected: [0, 0, 0, 0, 0]

// TODO 68: Use fill() with start and end
// Array: [1, 2, 3, 4, 5]
// Fill with 0 from index 1 to 3
// Expected: [1, 0, 0, 4, 5]

// TODO 69: Use Array(5).fill(0) to create initialized array
// Create array of 5 zeros
// Expected: [0, 0, 0, 0, 0]

// TODO 70: Use copyWithin() to copy elements
// Array: [1, 2, 3, 4, 5]
// Copy elements from index 0 to index 3
// Expected: [1, 2, 3, 1, 2]

// TODO 71: Use copyWithin() with all parameters
// Array: [1, 2, 3, 4, 5]
// Copy from index 3 to end, paste at index 0
// Expected: [4, 5, 3, 4, 5]

// ============================================
// SECTION 14: FROM & OF
// ============================================

console.log("\n=== SECTION 14: Array.from & Array.of ===\n");

// TODO 72: Use Array.from() to create array from string
// String: 'hello'
// Create array
// Expected: ['h', 'e', 'l', 'l', 'o']

// TODO 73: Use Array.from() with map function
// Create array of numbers 1-5 and square them
// Expected: [1, 4, 9, 16, 25]

// TODO 74: Use Array.from() to create range
// Create array [1, 2, 3, 4, 5]
// Hint: Array.from({length: 5}, (_, i) => i + 1)

// TODO 75: Use Array.of() to create array
// Create array with elements 1, 2, 3
// Expected: [1, 2, 3]

// TODO 76: Compare Array.of() vs Array constructor
// Array(3) vs Array.of(3)
// What's the difference?

// ============================================
// SECTION 15: AT METHOD
// ============================================

console.log("\n=== SECTION 15: at() Method ===\n");

// TODO 77: Use at() to get element at positive index
// Array: [10, 20, 30, 40, 50]
// Get element at index 2
// Expected: 30

// TODO 78: Use at() with negative index
// Array: [10, 20, 30, 40, 50]
// Get last element using at(-1)
// Expected: 50

// TODO 79: Use at() to get second to last element
// Array: [10, 20, 30, 40, 50]
// Get second to last
// Expected: 40

// ============================================
// SECTION 16: WITH METHOD
// ============================================

console.log("\n=== SECTION 16: with() Method ===\n");

// TODO 80: Use with() to replace element (non-mutating)
// Array: [1, 2, 3, 4, 5]
// Replace element at index 2 with 99
// Expected: original [1, 2, 3, 4, 5], new [1, 2, 99, 4, 5]

// TODO 81: Use with() with negative index
// Array: [1, 2, 3, 4, 5]
// Replace last element with 99
// Expected: [1, 2, 3, 4, 99]

// ============================================
// SECTION 17: TOSPLICED
// ============================================

console.log("\n=== SECTION 17: toSpliced() Method ===\n");

// TODO 82: Use toSpliced() to remove elements (non-mutating)
// Array: [1, 2, 3, 4, 5]
// Remove 2 elements from index 1
// Expected: original [1, 2, 3, 4, 5], new [1, 4, 5]

// TODO 83: Use toSpliced() to add elements
// Array: [1, 2, 5, 6]
// Add 3, 4 at index 2
// Expected: [1, 2, 3, 4, 5, 6]

// TODO 84: Use toSpliced() to replace elements
// Array: [1, 2, 3, 4, 5]
// Replace 2 elements at index 1 with 'a', 'b'
// Expected: [1, 'a', 'b', 4, 5]

// ============================================
// SECTION 18: ISARRAY
// ============================================

console.log("\n=== SECTION 18: Array.isArray() ===\n");

// TODO 85: Use Array.isArray() to check if value is array
// Check: [1, 2, 3], 'hello', {a: 1}, null
// Expected: true, false, false, false

// TODO 86: Use Array.isArray() in function
// Create function that only processes arrays
// Throw error if not array

// ============================================
// SECTION 19: ENTRIES, KEYS, VALUES
// ============================================

console.log("\n=== SECTION 19: Entries, Keys, Values ===\n");

// TODO 87: Use keys() to get array indices
// Array: ['a', 'b', 'c']
// Get all keys
// Expected: [0, 1, 2]

// TODO 88: Use values() to get array values
// Array: ['a', 'b', 'c']
// Get all values
// Expected: ['a', 'b', 'c']

// TODO 89: Use entries() to get [index, value] pairs
// Array: ['a', 'b', 'c']
// Get entries and convert to object
// Expected: [[0, 'a'], [1, 'b'], [2, 'c']]

// TODO 90: Loop through entries
// Array: ['red', 'green', 'blue']
// Use for...of with entries to print index: value

// ============================================
// SECTION 20: COMBINING MULTIPLE METHODS
// ============================================

console.log("\n=== SECTION 20: Method Chaining ===\n");

// TODO 91: Chain filter, map, reduce
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Get even numbers, square them, sum the result
// Expected: 220

// TODO 92: Chain map, filter, sort
// Array: [5, 2, 8, 1, 9]
// Square all, filter > 10, sort descending
// Expected: [81, 64, 25]

// TODO 93: Complex object transformation
// Array: [{name: 'Alice', age: 25, active: true}, {name: 'Bob', age: 17, active: false}]
// Filter active, map to uppercase names, sort alphabetically
// Expected: ['ALICE']

// TODO 94: Data aggregation
// Array: [{product: 'A', price: 100, qty: 2}, {product: 'B', price: 50, qty: 3}]
// Calculate total revenue using map and reduce

// TODO 95: Find and transform
// Array: [{id: 1, scores: [85, 90]}, {id: 2, scores: [78, 88]}]
// Find student with id 2, calculate average score

// ============================================
// SECTION 21: ADVANCED CHALLENGES
// ============================================

console.log("\n=== SECTION 21: Advanced Challenges ===\n");

// TODO 96: Create custom reduce function
// Implement your own reduce without using Array.reduce

// TODO 97: Implement array rotation
// Array: [1, 2, 3, 4, 5]
// Rotate right by 2
// Expected: [4, 5, 1, 2, 3]

// TODO 98: Implement array chunk
// Array: [1, 2, 3, 4, 5, 6, 7, 8]
// Chunk into arrays of size 3
// Expected: [[1, 2, 3], [4, 5, 6], [7, 8]]

// TODO 99: Implement array difference
// Array1: [1, 2, 3, 4, 5]
// Array2: [3, 4, 5, 6, 7]
// Find elements in Array1 not in Array2
// Expected: [1, 2]

// TODO 100: Implement deep flatten
// Array: [1, [2, [3, [4, [5]]]]]
// Create function to flatten any depth without using flat

// ============================================
// 🎉 END OF DAY 13 EXERCISES
// ============================================
