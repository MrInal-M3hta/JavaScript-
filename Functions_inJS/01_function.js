// ============================================
// 1. BASIC FUNCTION DECLARATION
// ============================================
function greet(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Luffy")); // Hello, Luffy!

// ============================================
// 2. FUNCTION EXPRESSION
// ============================================
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// ============================================
// 3. ARROW FUNCTION
// ============================================
const multiply = (a, b) => {return a * b};
console.log(multiply(4, 5)); // 20

// ============================================
// 4. DEFAULT PARAMETERS
// ============================================
function greetWithDefault(name = "Guest") {
    return `Welcome, ${name}!`;
};

// ============================================
// 5. REST PARAMETERS
// ============================================
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
    /*
     How reduce() works:
    •It loops through the array
    •Keeps adding values to a running total
    */
};
console.log(sum(1, 2, 3, 4)); // 10

// const sum = (...numbers) => {
//     let total = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }

//     return total;
// };
// console.log(sum(1, 2, 3, 4)); // 10;   Alternative implementation using a for loop; Both work the same way.

// ============================================
// 6. HIGHER-ORDER FUNCTION
// ============================================
const createMultiplier = (factor) => {
    return (number) => number * factor;
};
const double = createMultiplier(2);
console.log(double(5)); // 10

// function createMultiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = createMultiplier(2);
/* 
    const double = function(number) {
    return number * 2;
    };
*/
// console.log(double(5)); // 10. Alternative implementation without arrow functions; Both work the same way.

// ============================================
// 7. CLOSURE
// ============================================
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
};
const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2

// ============================================
// 8. CALLBACK FUNCTION
// ============================================
const fetchData = (callback) => {
    setTimeout(() => callback("Data loaded"), 1000);
};
fetchData((data) => console.log(data));

// ============================================
// 9. ASYNC/AWAIT
// ============================================
const asyncFunc = async () => {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
};

// ============================================
// 10. DECORATOR PATTERN
// ============================================
const logDecorator = (fn) => {
    return (...args) => {
        console.log(`Calling ${fn.name} with:`, args);
        return fn(...args);
    };
};
const subtract = (a, b) => a - b;
const loggedSubtract = logDecorator(subtract);
loggedSubtract(10, 3); // Logs: Calling subtract with: [10, 3] → 7

// ============================================
// 11. PASSING OBJECTS AND ARRAYS
// ============================================
const printUser = (user) => {
    return `Name: ${user.name}, Age: ${user.age}`;
};
console.log(printUser({ name: "Luffy", age: 19 })); // Name: Luffy, Age: 19

const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};
console.log(sumArray([10, 20, 30])); // 60

// Destructuring objects
const printUserDestructured = ({ name, age }) => {
    return `Name: ${name}, Age: ${age}`;
};
console.log(printUserDestructured({ name: "Zoro", age: 21 })); // Name: Zoro, Age: 21

// Destructuring arrays
const firstAndLast = ([first, , last]) => {
    return `First: ${first}, Last: ${last}`;
};
console.log(firstAndLast([1, 2, 3, 4, 5])); // First: 1, Last: 5

// ============================================
// 12. ARRAY AND OBJECT MANIPULATION WITH ARROW FUNCTIONS
// ============================================
const filterByAge = (users, minAge) => users.filter(user => user.age >= minAge);
console.log(filterByAge([{ name: "Luffy", age: 19 }, { name: "Zoro", age: 21 }], 20));
// [{ name: "Zoro", age: 21 }]

const mapNames = (users) => users.map(user => user.name);
console.log(mapNames([{ name: "Luffy", age: 19 }, { name: "Zoro", age: 21 }]));
// ["Luffy", "Zoro"]

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1 }, { b: 2 })); // { a: 1, b: 2 }

const flattenArray = (arr) => arr.flat();
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

// ============================================
// 13. PASSING OBJECTS AND ARRAYS WITHOUT ARROW FUNCTIONS
// ============================================
function printUserRegular(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}
console.log(printUserRegular({ name: "Luffy", age: 19 })); // Name: Luffy, Age: 19


function sumArrayRegular(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}
console.log(sumArrayRegular([10, 20, 30])); // 60


// Destructuring objects
function printUserDestructuredRegular({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
}
console.log(printUserDestructuredRegular({ name: "Zoro", age: 21 })); // Name: Zoro, Age: 21

// Destructuring arrays
function firstAndLastRegular([first, , last]) {
    return `First: ${first}, Last: ${last}`;
}
console.log(firstAndLastRegular([1, 2, 3, 4, 5])); // First: 1, Last: 5


// ============================================
// 14. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ============================================
(function() {
    console.log("IIFE executed immediately");
})();

(function IIFEfunction() {
    console.log("This is: Named IIFE");
})();

const result = (function() {
    const privateVar = "I'm private";
    return privateVar;
})();
console.log(result); // I'm private

((name) => {
    console.log(`Hello from arrow IIFE, ${name}!`);
})("Luffy"); // Hello from arrow IIFE, Luffy!