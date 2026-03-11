// Functional Programming Basics

// 1. Pure Functions
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 2. First-Class Functions & Higher-Order Functions
const applyOperation = (a, b, operation) => {
    return operation(a, b);
}
console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15

// 3. Array Methods - map, filter, reduce
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// 4. Function Composition
const compose = (f, g) => x => f(g(x));
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;

const composed = compose(addTwo, multiplyByThree);
console.log(composed(5)); // 17 (5 * 3 + 2)

// 5. Currying
const curry = (fn) => (a) => (b) => fn(a, b);
const curriedAdd = curry(add);
console.log(curriedAdd(5)(3)); // 8

// 6. Immutability
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // Using spread operator to create a new array
console.log(originalArray); // [1, 2, 3]
console.log(newArray); // [1, 2, 3, 4]

const originalObject = { name: 'Alice', age: 25 };
const newObject = { ...originalObject, age: 26 }; // Creating a new object with updated age
console.log(originalObject); // { name: 'Alice', age: 25 }
console.log(newObject); // { name: 'Alice', age: 26 }

// 7. Recursion
const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

/**
 * Note: This file provides a basic overview of functional programming concepts in JavaScript.
 * It includes examples of pure functions, higher-order functions, array methods, function composition,
 * currying, immutability, and recursion.
 * 
 * For more advanced functional programming techniques, consider exploring libraries like Ramda or Lodash/fp.
 * @see https://ramdajs.com/
 * @see https://lodash.com/docs/#fp
 * @module FunctionalProgrammingBasics
 * @function add
 * @function multiply
 * @function applyOperation
 * @function compose
 * @function curry
 * @function factorial
 * @example
 * // Using higher-order function
 * const result = applyOperation(5, 3, add); // 8
 *  * // Using array methods
 * const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
 * // Using function composition
 * const composed = compose(addTwo, multiplyByThree);
 * console.log(composed(5)); // 17
 * // Using currying
 * const curriedAdd = curry(add);
 * console.log(curriedAdd(5)(3)); // 8
 * // Using recursion
 * console.log(factorial(5)); // 120
 * // Fetching data with async/await
 * async function getData(url) {
 *     try {
 *         const response = await fetch(url);
 *         return await response.json();
 *     } catch (error) {
 *         console.error("Failed to fetch:", error);
 *     }
 * }
 * // Using Promises
 * const promise = new Promise((resolve, reject) => {
 *     // Asynchronous operation
 *     if (success) {
 *         resolve("Operation successful!");
 *     } else {
 *         reject("Operation failed!");
 *     }
 * });
 * promise
 *     .then(result => console.log(result))
 *     .catch(error => console.log(error));
 * 
 * // Using Promise.all
 * Promise.all([promise1, promise2, promise3])
 *     .then(results => console.log(results))
 *     .catch(error => console.error(error));
 * // Using Promise.race
 * Promise.race([promise1, promise2])
 *     .then(result => console.log(result));
 * // Using Promise.allSettled
 * Promise.allSettled([promise1, promise2])
 *     .then(results => console.log(results));
 * // Using async/await (recommended modern approach)
 * async function getData() {
 *     try {
 *         const response = await fetch(url);
 *         return await response.json();
 *     } catch (error) {
 *         console.error("Failed to fetch:", error);
 *     }
 * }
 */