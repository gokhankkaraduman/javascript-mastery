// ============================================
// DAY 11 EXERCISES - ADVANCED PRACTICE & MASTERY
// ============================================

console.log("🚀 DAY 11 - ADVANCED PRACTICE EXERCISES");
console.log("Let's take your skills to the next level!\n");

// ============================================
// SECTION 1: ADVANCED ARRAY OPERATIONS
// ============================================

console.log("=== SECTION 1: Advanced Array Operations ===\n");

// TODO 1: Flatten a nested array (2D to 1D)
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flattened = [];

console.log("--- TODO 1 ---");
for (let subArray of nestedArray) {
    for (let item of subArray) {
        flattened.push(item);
    }
}
console.log("Original:", nestedArray);
console.log("Flattened:", flattened);

// TODO 2: Remove duplicates from array
let duplicates = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let unique = [];

console.log("\n--- TODO 2 ---");
for (let num of duplicates) {
    if (!unique.includes(num)) {
        unique.push(num);
    }
}
console.log("With duplicates:", duplicates);
console.log("Unique:", unique);

// TODO 3: Find intersection of two arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let intersection = [];

console.log("\n--- TODO 3 ---");
for (let item of arr1) {
    if (arr2.includes(item)) {
        intersection.push(item);
    }
}
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Intersection:", intersection);

// TODO 4: Find difference between two arrays (items in arr1 but not in arr2)
let difference = [];

console.log("\n--- TODO 4 ---");
for (let item of arr1) {
    if (!arr2.includes(item)) {
        difference.push(item);
    }
}
console.log("Difference (arr1 - arr2):", difference);

// TODO 5: Group array elements by property
let people = [
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 30, city: "London"},
    {name: "Charlie", age: 25, city: "New York"},
    {name: "David", age: 30, city: "Paris"}
];

console.log("\n--- TODO 5 ---");
let groupedByAge = {};
people.forEach(person => {
    if (!groupedByAge[person.age]) {
        groupedByAge[person.age] = [];
    }
    groupedByAge[person.age].push(person);
});
console.log("Grouped by age:", groupedByAge);

// TODO 6: Chunk array into smaller arrays of specific size
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

console.log("\n--- TODO 6 ---");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Chunk by 3:", chunkArray(numbers, 3));
console.log("Chunk by 4:", chunkArray(numbers, 4));

// TODO 7: Rotate array to the right by n positions
function rotateArray(array, n) {
    let rotated = [...array];
    for (let i = 0; i < n; i++) {
        let last = rotated.pop();
        rotated.unshift(last);
    }
    return rotated;
}

console.log("\n--- TODO 7 ---");
let original = [1, 2, 3, 4, 5];
console.log("Original:", original);
console.log("Rotate by 2:", rotateArray(original, 2));
console.log("Rotate by 3:", rotateArray(original, 3));

// TODO 8: Find second largest number in array
function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

console.log("\n--- TODO 8 ---");
let nums = [5, 12, 8, 20, 3, 15];
console.log("Array:", nums);
console.log("Second largest:", findSecondLargest(nums));

// TODO 9: Merge and sort two arrays
function mergeAndSort(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    return merged.sort((a, b) => a - b);
}

console.log("\n--- TODO 9 ---");
let list1 = [5, 2, 8];
let list2 = [3, 9, 1];
console.log("Merged and sorted:", mergeAndSort(list1, list2));

// TODO 10: Count occurrences of each element
function countOccurrences(arr) {
    let counts = {};
    arr.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });
    return counts;
}

console.log("\n--- TODO 10 ---");
let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log("Occurrences:", countOccurrences(items));

// ============================================
// SECTION 2: ADVANCED OBJECT MANIPULATION
// ============================================

console.log("\n\n=== SECTION 2: Advanced Object Manipulation ===\n");

// TODO 11: Deep clone an object
function deepClone(obj) {
    let cloned = {};
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            cloned[key] = deepClone(obj[key]);
        } else if (Array.isArray(obj[key])) {
            cloned[key] = [...obj[key]];
        } else {
            cloned[key] = obj[key];
        }
    }
    return cloned;
}

console.log("--- TODO 11 ---");
let original11 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};
let cloned11 = deepClone(original11);
cloned11.address.city = "Boston";
console.log("Original city:", original11.address.city);
console.log("Cloned city:", cloned11.address.city);

// TODO 12: Invert object (swap keys and values)
function invertObject(obj) {
    let inverted = {};
    for (let key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}

console.log("\n--- TODO 12 ---");
let colors = {red: "#FF0000", green: "#00FF00", blue: "#0000FF"};
console.log("Original:", colors);
console.log("Inverted:", invertObject(colors));

// TODO 13: Filter object properties based on condition
function filterObject(obj, condition) {
    let filtered = {};
    for (let key in obj) {
        if (condition(obj[key], key)) {
            filtered[key] = obj[key];
        }
    }
    return filtered;
}

console.log("\n--- TODO 13 ---");
let products = {laptop: 1200, mouse: 25, keyboard: 75, monitor: 300};
let expensive = filterObject(products, (value) => value > 100);
console.log("Expensive products:", expensive);

// TODO 14: Map object values
function mapObjectValues(obj, transformer) {
    let mapped = {};
    for (let key in obj) {
        mapped[key] = transformer(obj[key]);
    }
    return mapped;
}

console.log("\n--- TODO 14 ---");
let prices = {apple: 1.5, banana: 0.8, orange: 2.0};
let discounted = mapObjectValues(prices, price => price * 0.9);
console.log("Original prices:", prices);
console.log("Discounted:", discounted);

// TODO 15: Merge multiple objects deeply
function mergeDeep(...objects) {
    let result = {};
    for (let obj of objects) {
        for (let key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}

console.log("\n--- TODO 15 ---");
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};
console.log("Merged:", mergeDeep(obj1, obj2, obj3));

// TODO 16: Pick specific properties from object
function pick(obj, keys) {
    let picked = {};
    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
}

console.log("\n--- TODO 16 ---");
let user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    password: "secret",
    age: 25
};
console.log("Picked properties:", pick(user, ["name", "email", "age"]));

// TODO 17: Omit specific properties from object
function omit(obj, keys) {
    let result = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

console.log("\n--- TODO 17 ---");
console.log("Omitted properties:", omit(user, ["password", "id"]));

// TODO 18: Check if two objects are equal (shallow)
function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

console.log("\n--- TODO 18 ---");
let person1 = {name: "John", age: 30};
let person2 = {name: "John", age: 30};
let person3 = {name: "Jane", age: 25};
console.log("person1 === person2:", isEqual(person1, person2));
console.log("person1 === person3:", isEqual(person1, person3));

// TODO 19: Get nested property safely
function getNestedProperty(obj, path) {
    let keys = path.split(".");
    let current = obj;
    
    for (let key of keys) {
        if (current && current.hasOwnProperty(key)) {
            current = current[key];
        } else {
            return undefined;
        }
    }
    return current;
}

console.log("\n--- TODO 19 ---");
let data = {
    user: {
        profile: {
            name: "Alice",
            settings: {
                theme: "dark"
            }
        }
    }
};
console.log("Theme:", getNestedProperty(data, "user.profile.settings.theme"));
console.log("Non-existent:", getNestedProperty(data, "user.profile.age"));

// TODO 20: Count properties in nested object
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            count += countProperties(obj[key]);
        }
    }
    return count;
}

console.log("\n--- TODO 20 ---");
console.log("Total properties:", countProperties(data));

// ============================================
// SECTION 3: ADVANCED STRING OPERATIONS
// ============================================

console.log("\n\n=== SECTION 3: Advanced String Operations ===\n");

// TODO 21: Check if string is palindrome
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

console.log("--- TODO 21 ---");
console.log("'racecar' is palindrome:", isPalindrome("racecar"));
console.log("'hello' is palindrome:", isPalindrome("hello"));
console.log("'A man a plan a canal Panama' is palindrome:", isPalindrome("A man a plan a canal Panama"));

// TODO 22: Count vowels in string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("\n--- TODO 22 ---");
console.log("Vowels in 'Hello World':", countVowels("Hello World"));
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

// TODO 23: Reverse words in sentence
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

console.log("\n--- TODO 23 ---");
console.log("Reversed:", reverseWords("Hello World JavaScript"));

// TODO 24: Capitalize first letter of each word
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

console.log("\n--- TODO 24 ---");
console.log("Capitalized:", capitalizeWords("hello world javascript"));

// TODO 25: Remove all spaces from string
function removeSpaces(str) {
    return str.split(" ").join("");
}

console.log("\n--- TODO 25 ---");
console.log("Without spaces:", removeSpaces("Hello World JavaScript"));

// TODO 26: Count word frequency in text
function wordFrequency(text) {
    let words = text.toLowerCase().split(" ");
    let frequency = {};
    
    words.forEach(word => {
        frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return frequency;
}

console.log("\n--- TODO 26 ---");
console.log("Word frequency:", wordFrequency("hello world hello javascript world"));

// TODO 27: Find longest word in sentence
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log("\n--- TODO 27 ---");
console.log("Longest word:", findLongestWord("The quick brown fox jumps"));

// TODO 28: Truncate string to specific length
function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
}

console.log("\n--- TODO 28 ---");
console.log("Truncated:", truncate("This is a very long sentence", 15));

// TODO 29: Check if strings are anagrams
function areAnagrams(str1, str2) {
    let clean1 = str1.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    let clean2 = str2.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    return clean1 === clean2;
}

console.log("\n--- TODO 29 ---");
console.log("'listen' and 'silent':", areAnagrams("listen", "silent"));
console.log("'hello' and 'world':", areAnagrams("hello", "world"));

// TODO 30: Extract numbers from string
function extractNumbers(str) {
    let numbers = [];
    let currentNum = "";
    
    for (let char of str) {
        if (char >= "0" && char <= "9") {
            currentNum += char;
        } else if (currentNum) {
            numbers.push(Number(currentNum));
            currentNum = "";
        }
    }
    if (currentNum) numbers.push(Number(currentNum));
    
    return numbers;
}

console.log("\n--- TODO 30 ---");
console.log("Numbers:", extractNumbers("I have 3 apples and 5 oranges, total 8 fruits"));

// ============================================
// SECTION 4: ADVANCED FUNCTION PATTERNS
// ============================================

console.log("\n\n=== SECTION 4: Advanced Function Patterns ===\n");

// TODO 31: Memoization (caching function results)
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (cache[key]) {
            console.log("From cache:", key);
            return cache[key];
        }
        let result = fn(...args);
        cache[key] = result;
        return result;
    };
}

console.log("--- TODO 31 ---");
const expensiveCalculation = memoize((n) => {
    console.log("Calculating...");
    return n * n;
});

console.log(expensiveCalculation(5));
console.log(expensiveCalculation(5)); // From cache
console.log(expensiveCalculation(10));

// TODO 32: Currying function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

console.log("\n--- TODO 32 ---");
const add3 = (a, b, c) => a + b + c;
const curriedAdd = curry(add3);
console.log("Curried:", curriedAdd(1)(2)(3));
console.log("Partial:", curriedAdd(1, 2)(3));

// TODO 33: Compose functions
function compose(...fns) {
    return function(value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

console.log("\n--- TODO 33 ---");
const double = x => x * 2;
const addTen = x => x + 10;
const square = x => x * x;

const composed = compose(square, addTen, double);
console.log("Compose (2 -> 4 -> 14 -> 196):", composed(2));

// TODO 34: Debounce function
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

console.log("\n--- TODO 34 ---");
const log = (msg) => console.log(msg);
const debouncedLog = debounce(log, 1000);
console.log("Debounce setup (check after 1s)");

// TODO 35: Retry function with max attempts
function retry(fn, maxAttempts) {
    return function(...args) {
        let attempts = 0;
        while (attempts < maxAttempts) {
            try {
                return fn(...args);
            } catch (error) {
                attempts++;
                if (attempts >= maxAttempts) {
                    throw error;
                }
            }
        }
    };
}

console.log("\n--- TODO 35 ---");
console.log("Retry function created");

// TODO 36: Pipe functions (opposite of compose)
function pipe(...fns) {
    return function(value) {
        return fns.reduce((acc, fn) => fn(acc), value);
    };
}

console.log("\n--- TODO 36 ---");
const piped = pipe(double, addTen, square);
console.log("Pipe (2 -> 4 -> 14 -> 196):", piped(2));

// TODO 37: Partial application
function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

console.log("\n--- TODO 37 ---");
const multiply = (a, b, c) => a * b * c;
const multiplyBy2 = partial(multiply, 2);
console.log("Partial (2 * 3 * 4):", multiplyBy2(3, 4));

// TODO 38: Once function (execute only once)
function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

console.log("\n--- TODO 38 ---");
const initialize = once(() => {
    console.log("Initializing...");
    return "Initialized";
});

console.log(initialize());
console.log(initialize()); // Won't log "Initializing..." again

// TODO 39: Chain function calls
const calculator = {
    value: 0,
    
    add(n) {
        this.value += n;
        return this;
    },
    
    subtract(n) {
        this.value -= n;
        return this;
    },
    
    multiply(n) {
        this.value *= n;
        return this;
    },
    
    getResult() {
        return this.value;
    }
};

console.log("\n--- TODO 39 ---");
let result = calculator.add(10).multiply(2).subtract(5).getResult();
console.log("Chained result:", result);

// TODO 40: Function factory
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

console.log("\n--- TODO 40 ---");
const double40 = createMultiplier(2);
const triple = createMultiplier(3);
console.log("Double 5:", double40(5));
console.log("Triple 5:", triple(5));

// ============================================
// SECTION 5: DATA TRANSFORMATION CHALLENGES
// ============================================

console.log("\n\n=== SECTION 5: Data Transformation Challenges ===\n");

// TODO 41: Transform flat array to tree structure
function arrayToTree(arr, idKey = 'id', parentKey = 'parentId') {
    let tree = [];
    let lookup = {};
    
    arr.forEach(item => {
        lookup[item[idKey]] = {...item, children: []};
    });
    
    arr.forEach(item => {
        if (item[parentKey]) {
            lookup[item[parentKey]].children.push(lookup[item[idKey]]);
        } else {
            tree.push(lookup[item[idKey]]);
        }
    });
    
    return tree;
}

console.log("--- TODO 41 ---");
let flatData = [
    {id: 1, name: "Root", parentId: null},
    {id: 2, name: "Child 1", parentId: 1},
    {id: 3, name: "Child 2", parentId: 1},
    {id: 4, name: "Grandchild", parentId: 2}
];
console.log("Tree:", JSON.stringify(arrayToTree(flatData), null, 2));

// TODO 42: Normalize nested data
function normalizeData(data) {
    let normalized = {
        byId: {},
        allIds: []
    };
    
    data.forEach(item => {
        normalized.byId[item.id] = item;
        normalized.allIds.push(item.id);
    });
    
    return normalized;
}

console.log("\n--- TODO 42 ---");
let users42 = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
];
console.log("Normalized:", normalizeData(users42));

// TODO 43: Denormalize data
function denormalizeData(normalized) {
    return normalized.allIds.map(id => normalized.byId[id]);
}

console.log("\n--- TODO 43 ---");
let normalized43 = normalizeData(users42);
console.log("Denormalized:", denormalizeData(normalized43));

// TODO 44: Group by multiple properties
function groupByMultiple(arr, keys) {
    return arr.reduce((acc, item) => {
        let key = keys.map(k => item[k]).join("-");
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

console.log("\n--- TODO 44 ---");
let employees = [
    {name: "Alice", dept: "IT", level: "Senior"},
    {name: "Bob", dept: "IT", level: "Junior"},
    {name: "Charlie", dept: "HR", level: "Senior"}
];
console.log("Grouped:", groupByMultiple(employees, ["dept", "level"]));

// TODO 45: Pivot table transformation
function pivotTable(data, rowKey, colKey, valueKey) {
    let pivot = {};
    
    data.forEach(item => {
        if (!pivot[item[rowKey]]) {
            pivot[item[rowKey]] = {};
        }
        pivot[item[rowKey]][item[colKey]] = item[valueKey];
    });
    
    return pivot;
}

console.log("\n--- TODO 45 ---");
let sales = [
    {product: "Laptop", month: "Jan", sales: 100},
    {product: "Laptop", month: "Feb", sales: 150},
    {product: "Mouse", month: "Jan", sales: 200},
    {product: "Mouse", month: "Feb", sales: 180}
];
console.log("Pivot:", pivotTable(sales, "product", "month", "sales"));

// TODO 46: Transpose matrix (2D array)
function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];
    
    for (let j = 0; j < cols; j++) {
        transposed[j] = [];
        for (let i = 0; i < rows; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }
    
    return transposed;
}

console.log("\n--- TODO 46 ---");
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("Original:", matrix);
console.log("Transposed:", transpose(matrix));

// TODO 47: CSV to JSON
function csvToJson(csv) {
    let lines = csv.trim().split("\n");
    let headers = lines[0].split(",");
    let result = [];
    
    for (let i = 1; i < lines.length; i++) {
        let obj = {};
        let values = lines[i].split(",");
        
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index].trim();
        });
        
        result.push(obj);
    }
    
    return result;
}

console.log("\n--- TODO 47 ---");
let csv = `name,age,city
Alice,25,New York
Bob,30,London
Charlie,35,Paris`;
console.log("CSV to JSON:", csvToJson(csv));

// TODO 48: JSON to CSV
function jsonToCsv(json) {
    if (json.length === 0) return "";
    
    let headers = Object.keys(json[0]);
    let csv = headers.join(",") + "\n";
    
    json.forEach(obj => {
        let row = headers.map(header => obj[header]).join(",");
        csv += row + "\n";
    });
    
    return csv.trim();
}

console.log("\n--- TODO 48 ---");
let jsonData = [
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 30, city: "London"}
];
console.log("JSON to CSV:\n" + jsonToCsv(jsonData));

// TODO 49: Flatten object with nested properties
function flattenObject(obj, prefix = "") {
    let flattened = {};
    
    for (let key in obj) {
        let newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(flattened, flattenObject(obj[key], newKey));
        } else {
            flattened[newKey] = obj[key];
        }
    }
    
    return flattened;
}

console.log("\n--- TODO 49 ---");
let nested = {
    user: {
        name: "Alice",
        profile: {
            age: 25,
            city: "New York"
        }
    }
};
console.log("Flattened:", flattenObject(nested));

// TODO 50: Unflatten object
function unflattenObject(obj) {
    let result = {};
    
    for (let key in obj) {
        let keys = key.split(".");
        let current = result;
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = obj[key];
    }
    
    return result;
}

console.log("\n--- TODO 50 ---");
let flattened50 = {"user.name": "Alice", "user.profile.age": 25, "user.profile.city": "New York"};
console.log("Unflattened:", unflattenObject(flattened50));

// ============================================
// SECTION 6: ALGORITHM CHALLENGES
// ============================================

console.log("\n\n=== SECTION 6: Algorithm Challenges ===\n");

// TODO 51: Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) return n;
    
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib[n];
}

console.log("--- TODO 51 ---");
console.log("Fibonacci(10):", fibonacci(10));
console.log("Fibonacci(15):", fibonacci(15));

// TODO 52: Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("\n--- TODO 52 ---");
console.log("Factorial(5):", factorial(5));
console.log("Factorial(7):", factorial(7));
// TODO 53: Prime number checker
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) return false;
}
return true;
}
console.log("\n--- TODO 53 ---");
console.log("Is 17 prime?", isPrime(17));
console.log("Is 20 prime?", isPrime(20));
// TODO 54: Find all prime numbers up to n
function findPrimes(n) {
let primes = [];
for (let i = 2; i <= n; i++) {
if (isPrime(i)) {
primes.push(i);
}
}
return primes;
}
console.log("\n--- TODO 54 ---");
console.log("Primes up to 20:", findPrimes(20));
// TODO 55: Binary search
function binarySearch(arr, target) {
let left = 0;
let right = arr.length - 1;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
}

return -1;
}
console.log("\n--- TODO 55 ---");
let sorted = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log("Search 7:", binarySearch(sorted, 7));
console.log("Search 10:", binarySearch(sorted, 10));
// TODO 56: Bubble sort
function bubbleSort(arr) {
let sorted = [...arr];
let n = sorted.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (sorted[j] > sorted[j + 1]) {
            [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
        }
    }
}

return sorted;
}
console.log("\n--- TODO 56 ---");
let unsorted = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble sorted:", bubbleSort(unsorted));
// TODO 57: Find missing number in sequence
function findMissing(arr) {
let n = arr.length + 1;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;
arr.forEach(num => actualSum += num);

return expectedSum - actualSum;
}
console.log("\n--- TODO 57 ---");
console.log("Missing number:", findMissing([1, 2, 4, 5, 6])); // 3
// TODO 58: Two sum problem
function twoSum(arr, target) {
for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === target) {
return [i, j];
}
}
}
return null;
}
console.log("\n--- TODO 58 ---");
console.log("Two sum indices:", twoSum([2, 7, 11, 15], 9));
// TODO 59: Longest common prefix
function longestCommonPrefix(strs) {
if (strs.length === 0) return "";
let prefix = strs[0];

for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        if (prefix === "") return "";
    }
}

return prefix;
}
console.log("\n--- TODO 59 ---");
console.log("Common prefix:", longestCommonPrefix(["flower", "flow", "flight"]));
// TODO 60: Valid parentheses
function isValidParentheses(s) {
let stack = [];
let pairs = {
'(': ')',
'[': ']',
'{': '}'
};
for (let char of s) {
    if (pairs[char]) {
        stack.push(char);
    } else {
        let last = stack.pop();
        if (pairs[last] !== char) return false;
    }
}

return stack.length === 0;
}
console.log("\n--- TODO 60 ---");
console.log("Valid: '()':", isValidParentheses("()"));
console.log("Valid: '()[]{}':", isValidParentheses("()[]{}"));
console.log("Valid: '(]':", isValidParentheses("(]"));


// ============================================
// 🎉 END OF DAY 11 EXERCISES
// ============================================