// ============================================
// DAY 13 EXERCISES - COMPLETE ARRAY METHODS MASTERY
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

const pushArr = [1,2,3];
function pushElement (array, value){
    array.push(value);
}
pushElement(pushArr, 4);
pushElement(pushArr, 5);
console.log(pushArr);

// TODO 2: Use pop() to remove last element
// Create array [1, 2, 3, 4, 5] and pop twice
// Expected: [1, 2, 3] and return values 5, 4

const popArr = [1,2,3,4,5]

const popArrayFunc = (array) => {
    return array.pop()
}
const firstPop = popArrayFunc(popArr);
const secondPop = popArrayFunc(popArr);
console.log(popArr)
console.log(firstPop);
console.log(secondPop);



// TODO 3: Use unshift() to add elements to beginning
// Create array [3, 4, 5] and unshift 1, 2
// Expected: [1, 2, 3, 4, 5]

const unshiftArr = [3,4,5];

const unshiftFunc = function (array, ...values) {
    return array.unshift(...values);
}

unshiftFunc(unshiftArr,1, 2);
console.log(unshiftArr);

// TODO 4: Use shift() to remove first element
// Create array [1, 2, 3, 4, 5] and shift twice
// Expected: [3, 4, 5] and return values 1, 2

const shiftArr = [1, 2, 3, 4, 5];

const shiftFunc = function (array){
    return array.shift();
};

const firstShift = shiftFunc(shiftArr);
const secondShift = shiftFunc(shiftArr);

console.log(firstShift);
console.log(secondShift);
console.log(shiftArr);

// TODO 5: Combine push, pop, shift, unshift
// Start with [5], unshift 4, push 6, shift, pop
// Track the array after each operation

const combineArr = [5];

const combineFunc = function (array, unshiftValue, pushValue) {
    console.log("func started here");
    array.unshift(unshiftValue);
    console.log("Unshifted array:", [...array]);
    array.push(pushValue);
    console.log("pushed Array:", [...array]);
    array.shift();
    console.log("shifted Array:", [...array]);
    array.pop();
    console.log("popped array:", [...array]);
};
combineFunc(combineArr, 4, 6);

// ============================================
// SECTION 2: SLICE & SPLICE
// ============================================

console.log("\n=== SECTION 2: Slice & Splice ===\n");

// TODO 6: Use slice() to extract portion of array
// Array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// Extract elements from index 2 to 5 (not including 5)
// Expected: [2, 3, 4]

const beforeSliceArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const useSliceFunc = function (array, indexOne, indexTwo){
    return array.slice(indexOne, indexTwo);
};

const afterSlice = useSliceFunc(beforeSliceArray, 2, 5);
console.log(beforeSliceArray);
console.log(afterSlice);

// TODO 7: Use slice() with negative indices
// Array: [0, 1, 2, 3, 4, 5]
// Extract last 3 elements
// Expected: [3, 4, 5]

const secondSliceArray = [0, 1, 2, 3, 4, 5];

const extractLastThree = (array, numElements) => array.slice(-numElements);

const lastThree = extractLastThree(secondSliceArray, 3);
console.log(secondSliceArray);
console.log(lastThree);

// TODO 8: Use slice() to copy entire array
// Array: [1, 2, 3, 4, 5]
// Create a copy and modify copy to verify original unchanged
const originalArray = [1, 2, 3, 4, 5];
const copyArray = originalArray.slice();
copyArray.push(6);
console.log("Original Array:", originalArray);
console.log("Copied and Modified Array:", copyArray);

// TODO 9: Use splice() to remove elements
// Array: [1, 2, 3, 4, 5, 6, 7]
// Remove 3 elements starting from index 2
// Expected: [1, 2, 6, 7], removed: [3, 4, 5]

const spliceArray = [1, 2, 3, 4, 5, 6, 7];

const removedElements = spliceArray.splice(2, 3);

console.log("Modified Array:", spliceArray);
console.log("Removed Elements:", removedElements);

// TODO 10: Use splice() to add elements
// Array: [1, 2, 5, 6]
// Add 3, 4 at index 2
// Expected: [1, 2, 3, 4, 5, 6]

const addSpliceArray = [1, 2, 5, 6];
const values = [2, 0, 2, 3]
const spliceArrayFunc = (array, args) => array.splice(...args)
spliceArrayFunc(addSpliceArray, values);
console.log(addSpliceArray);

// TODO 11: Use splice() to replace elements
// Array: [1, 2, 3, 4, 5]
// Replace 2 elements at index 1 with 'a', 'b', 'c'
// Expected: [1, 'a', 'b', 'c', 4, 5]

const replaceArray = [1, 2, 3, 4, 5];
const replaceValues = [1, 2, "a", "b", "c"];
const replaceArrayFunc = (array, args) => array.splice(...args)
replaceArrayFunc(replaceArray, replaceValues);
console.log(replaceArray);

// ============================================
// SECTION 3: CONCAT & JOIN
// ============================================

console.log("\n=== SECTION 3: Concat & Join ===\n");

// TODO 12: Use concat() to merge two arrays
// Array1: [1, 2, 3]
// Array2: [4, 5, 6]
// Expected: [1, 2, 3, 4, 5, 6]

const conArray = [1, 2, 3];
const conArray2 =[4, 5, 6];

const concatArrayFunc = (arr1, arr2) => arr1.concat(arr2);
const newConcatedArray = concatArrayFunc(conArray, conArray2);
console.log(newConcatedArray);

const alternativeConcatedArray = [...conArray, ...conArray2];
console.log(alternativeConcatedArray);

// TODO 13: Use concat() to merge multiple arrays
// Merge [1, 2], [3, 4], [5, 6], [7, 8]
// Expected: [1, 2, 3, 4, 5, 6, 7, 8]

const mergeArray = (...rest) => {
    const merged= [].concat(...rest);
    return merged;
};

const MergedArray = mergeArray([1, 2], [3, 4], [5, 6], [7, 8]);

console.log(MergedArray);

// TODO 14: Use join() to create string
// Array: ['Hello', 'World', 'JavaScript']
// Join with space
// Expected: "Hello World JavaScript"

const helloWorldArray = ['Hello', 'World', 'JavaScript'];

const newStringArray = helloWorldArray.join(" ");
console.log(newStringArray);

// TODO 15: Use join() with different separators
// Array: [2024, 12, 25]
// Join with '-' and with '/'
// Expected: "2024-12-25" and "2024/12/25"

const dateParts = [2024, 12, 25];

const formatDate = (dateArray, separator) => dateArray.join(separator);

const hyphenatedDate = formatDate(dateParts, "-");
const slantedDate = formatDate(dateParts, "/");

console.log(hyphenatedDate);
console.log(slantedDate);

// TODO 16: Use join() to create CSV
// Array: ['Alice', '25', 'Developer']
// Join with comma
// Expected: "Alice,25,Developer"

const userData = ['Alice', '25', 'Developer'];

const formatUserData = (data, separator) => data.join(separator);

const commaUserData = formatUserData(userData, ",");

const spaceUserData = formatUserData(userData, " ")

console.log(commaUserData);
console.log(spaceUserData);

// ============================================
// SECTION 4: INDEXOF & INCLUDES
// ============================================

console.log("\n=== SECTION 4: IndexOf & Includes ===\n");

// TODO 17: Use indexOf() to find element
// Array: [10, 20, 30, 40, 50]
// Find index of 30 and 60
// Expected: 2 and -1

const indexArray = [10, 20, 30, 40, 50];
const findElement = function (array, number) {
    return array.indexOf(number);
};

const result = findElement(indexArray, 30);
const result2 = findElement(indexArray, 60);

console.log(result);
console.log(result2);

// TODO 18: Use lastIndexOf() to find last occurrence
// Array: [1, 2, 3, 2, 1]
// Find last index of 2 and 1
// Expected: 3 and 4

const lastIndexArray = [1, 2, 3, 2, 1];

const lastIndexFinder = function (array,number) {
    return array.lastIndexOf(number);
}

const lastIndexResult = lastIndexFinder(lastIndexArray, 2);
const lastIndexResult2 = lastIndexFinder(lastIndexArray, 1);

console.log(lastIndexResult);
console.log(lastIndexResult2);


// TODO 19: Use includes() to check existence
// Array: ['apple', 'banana', 'orange']
// Check if includes 'banana' and 'grape'
// Expected: true and false

const fruit = ['apple', 'banana', 'orange'];

const checkElement = (array, value) => array.includes(value);

const fruitResult = checkElement(fruit, 'banana');
const fruitResult2 = checkElement(fruit, 'grape');

console.log(fruitResult);
console.log(fruitResult2);

// TODO 20: Use indexOf() with fromIndex
// Array: [1, 2, 3, 4, 5, 3, 2, 1]
// Find index of 3 starting from index 4
// Expected: 5

const numbers = [1, 2, 3, 4, 5, 3, 2, 1];

const findIndexFromIndex = (array, number, starter) => array.indexOf(number, starter);

const fromIndex = findIndexFromIndex(numbers, 3, 4);

console.log(fromIndex);




// ============================================
// SECTION 5: REVERSE & SORT
// ============================================

console.log("\n=== SECTION 5: Reverse & Sort ===\n");

// TODO 21: Use reverse() to reverse array
// Array: [1, 2, 3, 4, 5]
// Reverse it
// Expected: [5, 4, 3, 2, 1]
const beforeReverse = [1, 2, 3, 4, 5];

const afterReverse = beforeReverse.reverse();
console.log(afterReverse);
console.log(beforeReverse);

const reverseArrays = (array) => array.reverse();
const afterReverseWithFunc = reverseArrays(beforeReverse);
console.log(afterReverseWithFunc);

// TODO 22: Use sort() to sort strings
// Array: ['banana', 'apple', 'cherry', 'date']
// Sort alphabetically
// Expected: ['apple', 'banana', 'cherry', 'date']

const randomWords = ['banana', 'apple', 'cherry', 'date'];

const sortRandomWords = (array) => array.sort();
[].sort
const sortedResult = sortRandomWords(randomWords);
console.log(sortedResult);

const reverseSortRandomWords = (array) => {
  return [...array].sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
};

const reversedResult = reverseSortRandomWords(randomWords);
console.log(reversedResult);

const reverseWithLocaleCompare = (array) => array.sort((a, b) => b.localeCompare(a));
const reversedResultWithLocaleCompare = reverseWithLocaleCompare(randomWords);
console.log(reversedResultWithLocaleCompare);

const sortWithLocaleCompare = (array) => array.sort((a, b) => a.localeCompare(b));

const sortedWithLocaleCompare = sortWithLocaleCompare(randomWords);

console.log(sortedWithLocaleCompare);

// TODO 23: Use sort() with compare function for numbers
// Array: [10, 5, 40, 25, 1000, 1]
// Sort in ascending order
// Expected: [1, 5, 10, 25, 40, 1000]

const randomNumbers = [10, 5, 40, 25, 1000, 1];

const sortedNumbers = (array) => array.sort((a, b) => a - b);

console.log(sortedNumbers(randomNumbers));

// TODO 24: Use sort() to sort in descending order
// Array: [3, 1, 4, 1, 5, 9, 2, 6]
// Sort in descending order
// Expected: [9, 6, 5, 4, 3, 2, 1, 1]

const forSort = [3, 1, 4, 1, 5, 9, 2, 6];

const sortBigNumber = (array) => array.sort((a, b) => b - a);

console.log(sortBigNumber(forSort));
console.log(forSort);


// TODO 25: Use toSorted() (non-mutating sort)
// Array: [3, 1, 4, 1, 5]
// Create sorted copy without modifying original
// Expected: original [3, 1, 4, 1, 5], sorted [1, 1, 3, 4, 5]

const originalNumbers = [3, 1, 4, 1, 5];

const sortByPureFunc = (array) => array.toSorted((a, b) => a - b);
const sortedByPure = sortByPureFunc(originalNumbers);
console.log(sortedByPure);
console.log(originalNumbers);

// TODO 26: Use toReversed() (non-mutating reverse)
// Array: [1, 2, 3, 4, 5]
// Create reversed copy without modifying original
// Expected: original [1, 2, 3, 4, 5], reversed [5, 4, 3, 2, 1]

const originalNumbersForReverse = [1, 2, 3, 4, 5];

const reverseWithPureFunc = (array) => array.toReversed();

const reversedByPure = reverseWithPureFunc(originalNumbersForReverse);
console.log(reversedByPure);
console.log(originalNumbersForReverse);

// ============================================
// SECTION 6: FIND & FINDINDEX
// ============================================

console.log("\n=== SECTION 6: Find & FindIndex ===\n");

// TODO 27: Use find() to find first match
// Array: [5, 12, 8, 130, 44]
// Find first number > 10
// Expected: 12


const forFindNumber = [5, 12, 8, 130, 44];

const findNumber = (array, numElement) => array.find((element, index, array) => element > numElement);

console.log(findNumber(forFindNumber, 10));
console.log(findNumber(forFindNumber, 30));
console.log(findNumber(forFindNumber, 45));

// TODO 28: Use find() with objects
// Array: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}]
// Find user with id 2
// Expected: {id: 2, name: 'Bob'}

const users = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, {id: 3, name: 'Charlie'}];

const findUserById = (array, id) => array.find((element, index, array) => element.id === id);

console.log(findUserById(users, 2));

console.log(findUserById(users, 3));
console.log(findUserById(users, 1));
console.log(findUserById(users, 4));

// TODO 29: Use findIndex() to find index of match
// Array: [5, 12, 8, 130, 44]
// Find index of first number > 10
// Expected: 1
[].findIndex

const numberForFindIndex = [5, 12, 8, 130, 44];

const findIndex = (array, numElement) => array.findIndex((element, index, array ) => element > numElement);


console.log(findIndex(numberForFindIndex, 10));
console.log(findIndex(numberForFindIndex, 15));
console.log(findIndex(numberForFindIndex, 45));
console.log(findIndex(numberForFindIndex, 1000));


// TODO 30: Use findLast() to find last match
// Array: [5, 12, 8, 130, 44]
// Find last number > 10
// Expected: 44

const numbersForLast = [5, 12, 8, 130, 44];

const findLastNumber = (array, numElement) => array.findLast((element, index, array) => element > numElement);

console.log(findLastNumber(numbersForLast, 10));
console.log(findLastNumber(numbersForLast, 8));
console.log(findLastNumber(numbersForLast, 100));

// TODO 31: Use findLastIndex() to find last index
// Array: [5, 12, 8, 130, 44]
// Find last index of number > 10
// Expected: 4

const numbersForLastIndex = [150, 5, 12, 8, 130, 44];

const findLastIndex = (array, numElement) => array.findLastIndex(element => element > numElement);

console.log(findLastIndex(numbersForLastIndex, 10));

console.log(findLastIndex(numbersForLastIndex, 100));
console.log(findLastIndex(numbersForLastIndex, 40));
console.log(findLastIndex(numbersForLastIndex, 4));

// ============================================
// SECTION 7: FILTER
// ============================================

console.log("\n=== SECTION 7: Filter ===\n");

// TODO 32: Use filter() to get even numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter even numbers
// Expected: [2, 4, 6, 8, 10]

const filterNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEvens = (array) => array.filter(num => num % 2 === 0);
console.log(getEvens(filterNums));

// TODO 33: Use filter() to get odd numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Filter odd numbers
// Expected: [1, 3, 5, 7, 9]

const getOdds = (array) => array.filter(num => num % 2 !== 0);
console.log(getOdds(filterNums));

// TODO 34: Use filter() with objects
// Array: [{name: 'Alice', age: 25}, {name: 'Bob', age: 17}, {name: 'Charlie', age: 30}]
// Filter users age >= 18
// Expected: [{name: 'Alice', age: 25}, {name: 'Charlie', age: 30}]

const filterUsers = [{name: 'Alice', age: 25}, {name: 'Bob', age: 17}, {name: 'Charlie', age: 30}];
const getAdults = (array) => array.filter(user => user.age >= 18);
console.log(getAdults(filterUsers));

// TODO 35: Use filter() to remove falsy values
// Array: [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]
// Filter truthy values
// Expected: [1, 2, 3, 'hello']

const mixedData = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN];
const removeFalsy = (array) => array.filter(Boolean);
console.log(removeFalsy(mixedData));

// TODO 36: Use filter() to get unique values
// Array: [1, 2, 2, 3, 4, 4, 5]
// Get unique values
// Expected: [1, 2, 3, 4, 5]

const duplicates = [1, 2, 2, 3, 4, 4, 5];
const getUnique = (array) => array.filter((val, index, self) => self.indexOf(val) === index);
console.log(getUnique(duplicates));

// ============================================
// SECTION 8: MAP
// ============================================

console.log("\n=== SECTION 8: Map ===\n");

// TODO 37: Use map() to double all numbers
// Array: [1, 2, 3, 4, 5]
// Double each number
// Expected: [2, 4, 6, 8, 10]

const mapBase = [1, 2, 3, 4, 5];
const doubleNums = (array) => array.map(n => n * 2);
console.log(doubleNums(mapBase));

// TODO 38: Use map() to square all numbers
// Array: [1, 2, 3, 4, 5]
// Square each number
// Expected: [1, 4, 9, 16, 25]

const squareNums = (array) => array.map(n => n ** 2);
console.log(squareNums(mapBase));

// TODO 39: Use map() to extract property
// Array: [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
// Extract names
// Expected: ['Alice', 'Bob']

const usersMap = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const extractNames = (array) => array.map(user => user.name);
console.log(extractNames(usersMap));

// TODO 40: Use map() to transform objects
// Array: [{price: 100}, {price: 200}, {price: 300}]
// Add 20% tax to each
// Expected: [{price: 100, withTax: 120}, ...]

const prices = [{price: 100}, {price: 200}, {price: 300}];
const applyTax = (array) => array.map(item => ({ ...item, withTax: item.price * 1.2 }));
console.log(applyTax(prices));

// TODO 41: Use map() with index
// Array: ['a', 'b', 'c']
// Create numbered list
// Expected: ['1. a', '2. b', '3. c']

const chars = ['a', 'b', 'c'];
const numberList = (array) => array.map((char, i) => `${i + 1}. ${char}`);
console.log(numberList(chars));

// ============================================
// SECTION 9: FOREACH
// ============================================

console.log("\n=== SECTION 9: ForEach ===\n");

// TODO 42: Use forEach() to print all elements
// Array: [1, 2, 3, 4, 5]
// Print each element

const printArr = [1, 2, 3, 4, 5];
const printElements = (array) => array.forEach(el => console.log(el));
printElements(printArr);

// TODO 43: Use forEach() to calculate sum
// Array: [10, 20, 30, 40, 50]
// Calculate sum
// Expected: 150

const sumBase = [10, 20, 30, 40, 50];
const calcSum = (array) => {
    let sum = 0;
    array.forEach(n => sum += n);
    return sum;
};
console.log(calcSum(sumBase));

// TODO 44: Use forEach() with objects
// Array: [{name: 'Alice', score: 85}, {name: 'Bob', score: 92}]
// Print: "Alice: 85", "Bob: 92"

const scoreArr = [{name: 'Alice', score: 85}, {name: 'Bob', score: 92}];
const printScores = (array) => array.forEach(u => console.log(`${u.name}: ${u.score}`));
printScores(scoreArr);

// TODO 45: Use forEach() to modify external array
// Array: [1, 2, 3, 4, 5]
// Create new array with doubled values using forEach

const baseForDouble = [1, 2, 3, 4, 5];
const manualDouble = (array) => {
    const result = [];
    array.forEach(n => result.push(n * 2));
    return result;
};
console.log(manualDouble(baseForDouble));

// TODO 46: Use forEach() with index
// Array: ['red', 'green', 'blue']
// Print: "0: red", "1: green", "2: blue"

const colors = ['red', 'green', 'blue'];
const printColors = (array) => array.forEach((c, i) => console.log(`${i}: ${c}`));
printColors(colors);

// ============================================
// SECTION 10: REDUCE
// ============================================

console.log("\n=== SECTION 10: Reduce ===\n");

// TODO 47: Use reduce() to sum array
// Array: [1, 2, 3, 4, 5]
// Calculate sum
// Expected: 15

const reduceSumBase = [1, 2, 3, 4, 5];
const sumWithReduce = (array) => array.reduce((acc, curr) => acc + curr, 0);
console.log(sumWithReduce(reduceSumBase));

// TODO 48: Use reduce() to find maximum
// Array: [5, 12, 8, 130, 44]
// Find max value
// Expected: 130

const findMaxBase = [5, 12, 8, 130, 44];
const findMax = (array) => array.reduce((max, curr) => curr > max ? curr : max, array[0]);
console.log(findMax(findMaxBase));

// TODO 49: Use reduce() to find minimum
// Array: [5, 12, 8, 130, 44]
// Find min value
// Expected: 5

const findMin = (array) => array.reduce((min, curr) => curr < min ? curr : min, array[0]);
console.log(findMin(findMaxBase));

// TODO 50: Use reduce() to count occurrences
// Array: ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
// Count each fruit
// Expected: {apple: 3, banana: 2, orange: 1}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countFruits = (array) => array.reduce((acc, f) => {
    acc[f] = (acc[f] || 0) + 1;
    return acc;
}, {});
console.log(countFruits(fruits));

// TODO 51: Use reduce() to flatten array
// Array: [[1, 2], [3, 4], [5, 6]]
// Flatten to single array
// Expected: [1, 2, 3, 4, 5, 6]

const nested = [[1, 2], [3, 4], [5, 6]];
const flattenManual = (array) => array.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattenManual(nested));

// TODO 52: Use reduce() to group by property
// Array: [{name: 'Alice', dept: 'IT'}, {name: 'Bob', dept: 'HR'}, {name: 'Charlie', dept: 'IT'}]
// Group by department
// Expected: {IT: [{...}, {...}], HR: [{...}]}

const staff = [{name: 'Alice', dept: 'IT'}, {name: 'Bob', dept: 'HR'}, {name: 'Charlie', dept: 'IT'}];
const groupByDept = (array) => array.reduce((acc, person) => {
    const key = person.dept;
    if (!acc[key]) acc[key] = [];
    acc[key].push(person);
    return acc;
}, {});
console.log(groupByDept(staff));

// TODO 53: Use reduce() to calculate average
// Array: [85, 90, 78, 92, 88]
// Calculate average
// Expected: 86.6

const grades = [85, 90, 78, 92, 88];
const calcAvg = (array) => array.reduce((acc, curr) => acc + curr, 0) / array.length;
console.log(calcAvg(grades));

// TODO 54: Use reduce() to create object from array
// Array: ['name', 'age', 'city']
// Create object with properties as keys and null as values
// Expected: {name: null, age: null, city: null}

const keys = ['name', 'age', 'city'];
const createObject = (array) => array.reduce((acc, key) => ({ ...acc, [key]: null }), {});
console.log(createObject(keys));

// TODO 55: Use reduceRight() to reverse string
// Array: ['H', 'e', 'l', 'l', 'o']
// Reverse using reduceRight
// Expected: "olleH"

const helloArr = ['H', 'e', 'l', 'l', 'o'];
const reverseWithReduceRight = (array) => array.reduceRight((acc, char) => acc + char, "");
console.log(reverseWithReduceRight(helloArr));

// ============================================
// SECTION 11: EVERY & SOME
// ============================================

console.log("\n=== SECTION 11: Every & Some ===\n");

// TODO 56: Use every() to check if all positive
// Array: [1, 2, 3, 4, 5]
// Check if all positive
// Expected: true

const posArr = [1, 2, 3, 4, 5];
const allPositive = (array) => array.every(n => n > 0);
console.log(allPositive(posArr));

// TODO 57: Use every() to check if all even
// Array: [2, 4, 6, 8, 10]
// Check if all even
// Expected: true

const evensOnly = [2, 4, 6, 8, 10];
const allEven = (array) => array.every(n => n % 2 === 0);
console.log(allEven(evensOnly));

// TODO 58: Use every() with objects
// Array: [{age: 25}, {age: 30}, {age: 35}]
// Check if all age >= 18
// Expected: true

const ageObjs = [{age: 25}, {age: 30}, {age: 35}];
const allAdults = (array) => array.every(u => u.age >= 18);
console.log(allAdults(ageObjs));

// TODO 59: Use some() to check if any negative
// Array: [1, 2, -3, 4, 5]
// Check if any negative
// Expected: true

const withNeg = [1, 2, -3, 4, 5];
const hasNegative = (array) => array.some(n => n < 0);
console.log(hasNegative(withNeg));

// TODO 60: Use some() to check if any even
// Array: [1, 3, 5, 8, 9]
// Check if any even
// Expected: true

const withEven = [1, 3, 5, 8, 9];
const hasEven = (array) => array.some(n => n % 2 === 0);
console.log(hasEven(withEven));

// TODO 61: Use some() with objects
// Array: [{active: false}, {active: false}, {active: true}]
// Check if any active
// Expected: true

const activeStatus = [{active: false}, {active: false}, {active: true}];
const isAnyActive = (array) => array.some(u => u.active);
console.log(isAnyActive(activeStatus));

// ============================================
// SECTION 12: FLAT & FLATMAP
// ============================================

console.log("\n=== SECTION 12: Flat & FlatMap ===\n");

// TODO 62: Use flat() to flatten nested array (1 level)
// Array: [1, [2, 3], 4, [5, 6]]
// Flatten
// Expected: [1, 2, 3, 4, 5, 6]

const flatBase = [1, [2, 3], 4, [5, 6]];
const flattenOne = (array) => array.flat();
console.log(flattenOne(flatBase));

// TODO 63: Use flat() with depth parameter
// Array: [1, [2, [3, [4, 5]]]]
// Flatten with depth 2
// Expected: [1, 2, 3, [4, 5]]

const deepNest = [1, [2, [3, [4, 5]]]];
const flattenTwo = (array) => array.flat(2);
console.log(flattenTwo(deepNest));

// TODO 64: Use flat(Infinity) to completely flatten
// Array: [1, [2, [3, [4, [5]]]]]
// Completely flatten
// Expected: [1, 2, 3, 4, 5]

const completelyFlatten = (array) => array.flat(Infinity);
console.log(completelyFlatten([1, [2, [3, [4, [5]]]]]));

// TODO 65: Use flatMap() to map and flatten
// Array: [1, 2, 3]
// Map each to [x, x*2] and flatten
// Expected: [1, 2, 2, 4, 3, 6]

const fmBase = [1, 2, 3];
const mapAndFlatten = (array) => array.flatMap(x => [x, x * 2]);
console.log(mapAndFlatten(fmBase));

// TODO 66: Use flatMap() with strings
// Array: ['Hello', 'World']
// Split each into characters and flatten
// Expected: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

const strArr = ['Hello', 'World'];
const splitChars = (array) => array.flatMap(s => s.split(''));
console.log(splitChars(strArr));

// ============================================
// SECTION 13: FILL & COPYWITHIN
// ============================================

console.log("\n=== SECTION 13: Fill & CopyWithin ===\n");

// TODO 67: Use fill() to fill array with value
// Array: [1, 2, 3, 4, 5]
// Fill with 0
// Expected: [0, 0, 0, 0, 0]

const fillBase = [1, 2, 3, 4, 5];
const fillWithZeros = (array) => [...array].fill(0);
console.log(fillWithZeros(fillBase));

// TODO 68: Use fill() with start and end
// Array: [1, 2, 3, 4, 5]
// Fill with 0 from index 1 to 3
// Expected: [1, 0, 0, 4, 5]

const partialFill = (array) => [...array].fill(0, 1, 3);
console.log(partialFill(fillBase));

// TODO 69: Use Array(5).fill(0) to create initialized array
// Create array of 5 zeros
// Expected: [0, 0, 0, 0, 0]

const createZeros = (n) => Array(n).fill(0);
console.log(createZeros(5));

// TODO 70: Use copyWithin() to copy elements
// Array: [1, 2, 3, 4, 5]
// Copy elements from index 0 to index 3
// Expected: [1, 2, 3, 1, 2]

const copyBase = [1, 2, 3, 4, 5];
const copyInternal = (array) => [...array].copyWithin(3, 0);
console.log(copyInternal(copyBase));

// TODO 71: Use copyWithin() with all parameters
// Array: [1, 2, 3, 4, 5]
// Copy from index 3 to end, paste at index 0
// Expected: [4, 5, 3, 4, 5]

const complexCopy = (array) => [...array].copyWithin(0, 3);
console.log(complexCopy(copyBase));

// ============================================
// SECTION 14: FROM & OF
// ============================================

console.log("\n=== SECTION 14: Array.from & Array.of ===\n");

// TODO 72: Use Array.from() to create array from string
// String: 'hello'
// Create array
// Expected: ['h', 'e', 'l', 'l', 'o']

const fromStr = (str) => Array.from(str);
console.log(fromStr('hello'));

// TODO 73: Use Array.from() with map function
// Create array of numbers 1-5 and square them
// Expected: [1, 4, 9, 16, 25]

const squaredFromRange = (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2);
console.log(squaredFromRange(5));

// TODO 74: Use Array.from() to create range
// Create array [1, 2, 3, 4, 5]
// Hint: Array.from({length: 5}, (_, i) => i + 1)

const createRange = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(createRange(5));

// TODO 75: Use Array.of() to create array
// Create array with elements 1, 2, 3
// Expected: [1, 2, 3]

const createWithOf = (...items) => Array.of(...items);
console.log(createWithOf(1, 2, 3));

// TODO 76: Compare Array.of() vs Array constructor
// Array(3) vs Array.of(3)
// What's the difference?

// Array(3) -> creates [empty x 3] (length 3, no values)
// Array.of(3) -> creates [3] (length 1, value 3)

// ============================================
// SECTION 15: AT METHOD
// ============================================

console.log("\n=== SECTION 15: at() Method ===\n");

// TODO 77: Use at() to get element at positive index
// Array: [10, 20, 30, 40, 50]
// Get element at index 2
// Expected: 30

const atBase = [10, 20, 30, 40, 50];
const getAt = (array, i) => array.at(i);
console.log(getAt(atBase, 2));

// TODO 78: Use at() with negative index
// Array: [10, 20, 30, 40, 50]
// Get last element using at(-1)
// Expected: 50

console.log(getAt(atBase, -1));

// TODO 79: Use at() to get second to last element
// Array: [10, 20, 30, 40, 50]
// Get second to last
// Expected: 40

console.log(getAt(atBase, -2));

// ============================================
// SECTION 16: WITH METHOD
// ============================================

console.log("\n=== SECTION 16: with() Method ===\n");

// TODO 80: Use with() to replace element (non-mutating)
// Array: [1, 2, 3, 4, 5]
// Replace element at index 2 with 99
// Expected: original [1, 2, 3, 4, 5], new [1, 2, 99, 4, 5]

const withBase = [1, 2, 3, 4, 5];
const replaceWith = (array, i, val) => array.with(i, val);
console.log("Original:", withBase);
console.log("New:", replaceWith(withBase, 2, 99));

// TODO 81: Use with() with negative index
// Array: [1, 2, 3, 4, 5]
// Replace last element with 99
// Expected: [1, 2, 3, 4, 99]

console.log(replaceWith(withBase, -1, 99));

// ============================================
// SECTION 17: TOSPLICED
// ============================================

console.log("\n=== SECTION 17: toSpliced() Method ===\n");

// TODO 82: Use toSpliced() to remove elements (non-mutating)
// Array: [1, 2, 3, 4, 5]
// Remove 2 elements from index 1
// Expected: original [1, 2, 3, 4, 5], new [1, 4, 5]

const tsBase = [1, 2, 3, 4, 5];
const pureSpliceRemove = (array, start, count) => array.toSpliced(start, count);
console.log(pureSpliceRemove(tsBase, 1, 2));

// TODO 83: Use toSpliced() to add elements
// Array: [1, 2, 5, 6]
// Add 3, 4 at index 2
// Expected: [1, 2, 3, 4, 5, 6]

const tsAddBase = [1, 2, 5, 6];
const pureSpliceAdd = (array, start, ...items) => array.toSpliced(start, 0, ...items);
console.log(pureSpliceAdd(tsAddBase, 2, 3, 4));

// TODO 84: Use toSpliced() to replace elements
// Array: [1, 2, 3, 4, 5]
// Replace 2 elements at index 1 with 'a', 'b'
// Expected: [1, 'a', 'b', 4, 5]

const pureSpliceReplace = (array, start, count, ...items) => array.toSpliced(start, count, ...items);
console.log(pureSpliceReplace(tsBase, 1, 2, 'a', 'b'));

// ============================================
// SECTION 18: ISARRAY
// ============================================

console.log("\n=== SECTION 18: Array.isArray() ===\n");

// TODO 85: Use Array.isArray() to check if value is array
// Check: [1, 2, 3], 'hello', {a: 1}, null
// Expected: true, false, false, false

const checkIsArray = (val) => Array.isArray(val);
console.log(checkIsArray([1, 2, 3]), checkIsArray('hello'), checkIsArray({a: 1}), checkIsArray(null));

// TODO 86: Use Array.isArray() in function
// Create function that only processes arrays
// Throw error if not array

const processOnlyArray = (data) => {
    if (!Array.isArray(data)) throw new Error("Input must be an array!");
    return "Processing...";
};

// ============================================
// SECTION 19: ENTRIES, KEYS, VALUES
// ============================================

console.log("\n=== SECTION 19: Entries, Keys, Values ===\n");

// TODO 87: Use keys() to get array indices
// Array: ['a', 'b', 'c']
// Get all keys
// Expected: [0, 1, 2]

const metaBase = ['a', 'b', 'c'];
const getKeys = (array) => [...array.keys()];
console.log(getKeys(metaBase));

// TODO 88: Use values() to get array values
// Array: ['a', 'b', 'c']
// Get all values
// Expected: ['a', 'b', 'c']

const getValues = (array) => [...array.values()];
console.log(getValues(metaBase));

// TODO 89: Use entries() to get [index, value] pairs
// Array: ['a', 'b', 'c']
// Get entries and convert to object
// Expected: [[0, 'a'], [1, 'b'], [2, 'c']]

const getEntries = (array) => [...array.entries()];
console.log(getEntries(metaBase));

// TODO 90: Loop through entries
// Array: ['red', 'green', 'blue']
// Use for...of with entries to print index: value

const entryColors = ['red', 'green', 'blue'];
for (const [index, value] of entryColors.entries()) {
    console.log(`${index}: ${value}`);
}

// ============================================
// SECTION 20: COMBINING MULTIPLE METHODS
// ============================================

console.log("\n=== SECTION 20: Method Chaining ===\n");

// TODO 91: Chain filter, map, reduce
// Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Get even numbers, square them, sum the result
// Expected: 220

const chainBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const complexMath = (array) => array
    .filter(n => n % 2 === 0)
    .map(n => n ** 2)
    .reduce((a, b) => a + b, 0);
console.log(complexMath(chainBase));

// TODO 92: Chain map, filter, sort
// Array: [5, 2, 8, 1, 9]
// Square all, filter > 10, sort descending
// Expected: [81, 64, 25]

const chainMapArray = [5, 2, 8, 1, 9];

const getSquaredNumbersDesc = (array) => {
    return array
    .map(el => el ** 2)
    .filter(el => el > 10)
    .toSorted((a, b) => b - a);
};

console.log(getSquaredNumbersDesc(chainMapArray));

// TODO 93: Complex object transformation
// Array: [{name: 'Alice', age: 25, active: true}, {name: 'Bob', age: 17, active: false}]
// Filter active, map to uppercase names, sort alphabetically
// Expected: ['ALICE']
const usersDatas = [{name: 'Alice', age: 25, active: true}, {name: 'Bob', age: 17, active: false}];

const complexTransformation = (array) => {
    return array
    .filter(el => el.active === true)
    .map(el => el.name.toUpperCase())
};

console.log(complexTransformation(usersDatas));

// TODO 94: Data aggregation
// Array: [{product: 'A', price: 100, qty: 2}, {product: 'B', price: 50, qty: 3}]
// Calculate total revenue using map and reduce

const products = [
  { product: 'A', price: 100, qty: 2 },
  { product: 'B', price: 50, qty: 3 }
];

const dataAggregation = (array) => {
  return array
    .map(el => el.price * el.qty)
    .reduce((acc, curr) => acc + curr, 0);
};

console.log(dataAggregation(products)); 



// TODO 95: Find and transform
// Array: [{id: 1, scores: [85, 90]}, {id: 2, scores: [78, 88]}]
// Find student with id 2, calculate average score

const students = [{id: 1, scores: [85, 90]}, {id: 2, scores: [78, 88]}];

const calculateAvarageScore = (array, id) => {
    const student = array.find(el => el.id === id);
    const score = student.scores
    .reduce((acc, el)=> acc + el, 0 )

    return score / student.scores.length;
}
console.log(calculateAvarageScore(students, 2));
console.log(calculateAvarageScore(students, 1));

// ============================================
// SECTION 21: ADVANCED CHALLENGES
// ============================================

console.log("\n=== SECTION 21: Advanced Challenges ===\n");

// TODO 96: Create custom reduce function
// Implement your own reduce without using Array.reduce
const custom = [5, 10, 20, 40, 50];
const customReduce = (array) => {
    let acc = 0;
    array.forEach((el, index, array) =>{
        acc = acc + el;
    });
    return acc;
};

console.log(customReduce(custom));

// TODO 97: Implement array rotation
// Array: [1, 2, 3, 4, 5]
// Rotate right by 2
// Expected: [4, 5, 1, 2, 3]

const rotationArray = [1, 2, 3, 4, 5];

const rotateRight = (array, k) => {
    const len = array.length;
    const step = k % len; 

    const lastPart = array.slice(len - step);
    const firstPart = array.slice(0, len - step);
    console.log(step);
    return lastPart.concat(firstPart);
};

console.log(rotateRight(rotationArray, 2)); 
console.log(rotateRight(rotationArray, 3)); 
console.log(rotateRight(rotationArray, 4)); 
console.log(rotateRight(rotationArray, 5)); 
console.log(rotateRight(rotationArray, 6)); 
console.log(rotationArray);

// TODO 98: Implement array chunk
// Array: [1, 2, 3, 4, 5, 6, 7, 8]
// Chunk into arrays of size 3
// Expected: [[1, 2, 3], [4, 5, 6], [7, 8]]

const chunkArray = (array, size) => {
    const res = [];
    for (let i = 0; i < array.length; i += size) {
        res.push(array.slice(i, i + size));
    }
    return res;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));

// TODO 99: Implement array difference
// Array1: [1, 2, 3, 4, 5]
// Array2: [3, 4, 5, 6, 7]
// Find elements in Array1 not in Array2
// Expected: [1, 2]

const diffArr1 = [1, 2, 3, 4, 5];
const diffArr2 = [3, 4, 5, 6, 7];
const getDifference = (a1, a2) => a1.filter(x => !a2.includes(x));
console.log(getDifference(diffArr1, diffArr2));

// TODO 100: Implement deep flatten
// Array: [1, [2, [3, [4, [5]]]]]
// Create function to flatten any depth without using flat

const manualDeepFlatten = (array) => {
    return array.reduce((acc, curr) => 
        Array.isArray(curr) ? acc.concat(manualDeepFlatten(curr)) : acc.concat(curr), []);
};
console.log(manualDeepFlatten([1, [2, [3, [4, [5]]]]]));

// ============================================
// 🎉 END OF DAY 13 EXERCISES
// ============================================