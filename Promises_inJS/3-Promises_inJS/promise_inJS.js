/**
 * Comprehensive guide to JavaScript Promises and async/await patterns.
 *
 * @file Demonstrates promise creation, consumption, chaining, and modern async/await syntax.
 *
 * @section 1. CREATING A PROMISE
 * A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
 * Constructor takes an executor function with two parameters: resolve and reject.
 * - resolve: Called when the promise completes successfully
 * - reject: Called when the promise fails
 *
 * @section 2. CONSUMING A PROMISE
 * Promises are consumed using .then() and .catch() methods:
 * - .then(onFulfilled, onRejected): Handles fulfilled or rejected states
 * - .catch(onRejected): Shorthand for handling rejections only
 * - .finally(onFinally): Executes regardless of promise outcome
 *
 * @section 3. PROMISE STATES
 * A promise can exist in one of three states:
 * - Pending: Initial state, operation hasn't completed yet
 * - Fulfilled: Operation completed successfully, resolved with a value
 * - Rejected: Operation failed, rejected with an error reason
 * Note: State transitions are irreversible. Once settled (fulfilled or rejected), it remains in that state.
 *
 * @section 4. CHAINING PROMISES
 * Promises can be chained to perform sequential asynchronous operations.
 * Each .then() returns a new promise, allowing for composition of async operations.
 * If any promise in the chain is rejected, the error propagates to the nearest .catch() handler.
 *
 * @section 5. PROMISE.ALL()
 * Accepts an iterable of promises and returns a new promise.
 * Resolves when ALL input promises have resolved, with an array of all results.
 * Rejects immediately if ANY input promise rejects (fail-fast behavior).
 * Useful for parallel operations where all results are needed.
 *
 * @section 6. PROMISE.RACE()
 * Accepts an iterable of promises and returns a new promise.
 * Resolves or rejects as soon as ANY input promise settles (completes first).
 * The result/error of the first settled promise is used.
 * Useful for timeout patterns or competitive operations.
 *
 * @section 7. PROMISE.ALLSETTLED()
 * Accepts an iterable of promises and returns a new promise.
 * Always resolves (never rejects) after ALL input promises settle.
 * Returns an array of objects with {status: 'fulfilled'|'rejected', value|reason}.
 * Useful when you need to wait for all operations regardless of success/failure.
 *
 * @section 8. ASYNC/AWAIT
 * Modern syntactic sugar built on top of promises for cleaner, more readable code.
 * - async: Declares an asynchronous function that always returns a promise
 * - await: Pauses execution until a promise settles, only usable in async functions
 * - try/catch: Error handling replaces .catch(), works like synchronous code
 * Benefits: Better readability, easier debugging, more intuitive control flow
 *
 * @returns {void}
 *
 * @example
 * // Basic promise creation and consumption
 * const myPromise = new Promise((resolve, reject) => {
 *     setTimeout(() => resolve("Success!"), 1000);
 * });
 * myPromise.then(msg => console.log(msg));
 *
 * @example
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

// 1. CREATING A PROMISE
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// 2. CONSUMING A PROMISE - .then() and .catch()
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 3. PROMISE STATES
// - Pending: Initial state
// - Fulfilled: Resolved with a value
// - Rejected: Rejected with a reason

// 4. CHAINING PROMISES
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// 5. PROMISE.ALL() - Wait for all promises
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));

// 6. PROMISE.RACE() - First promise to settle wins
Promise.race([promise1, promise2]).then((result) => console.log(result));

// 7. PROMISE.ALLSETTLED() - Wait for all to settle
Promise.allSettled([promise1, promise2]).then((results) =>
  console.log(results),
);

// 8. ASYNC/AWAIT - Modern way to handle promises
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData().then((data) => console.log(data));
// End of promises_inJS.js

// ------------------------------------------------------------------------------------------------------------------ //

// Example of all eight types of promises with both normal and arrow functions

// 1. CREATING A PROMISE
const promise1 = new Promise(function (resolve, reject) {
  const success = true;
  if (success) {
    resolve("Normal function: Operation successful!");
  } else {
    reject("Normal function: Operation failed!");
  }
});

const promise2 = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Arrow function: Operation successful!");
  } else {
    reject("Arrow function: Operation failed!");
  }
});

// 2. CONSUMING A PROMISE - .then() and .catch()
promise1
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

promise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 3. PROMISE STATES
// Already demonstrated in the creation of promises above

// 4. CHAINING PROMISES
fetch("https://api.example.com/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Normal function: ", data);
  })
  .catch(function (error) {
    console.error("Normal function: ", error);
  });

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log("Arrow function: ", data))
  .catch((error) => console.error("Arrow function: ", error));

// 5. PROMISE.ALL() - Wait for all promises
Promise.all([promise1, promise2])
  .then((results) => console.log("Promise.all results: ", results))
  .catch((error) => console.error("Promise.all error: ", error));

// 6. PROMISE.RACE() - First promise to settle wins
Promise.race([promise1, promise2]).then((result) =>
  console.log("Promise.race result: ", result),
);

// 7. PROMISE.ALLSETTLED() - Wait for all to settle
Promise.allSettled([promise1, promise2]).then((results) =>
  console.log("Promise.allSettled results: ", results),
);

// 8. ASYNC/AWAIT - Modern way to handle promises
async function fetchDataNormal() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Async/Await Normal function: ", data);
  } catch (error) {
    console.error("Async/Await Normal function error: ", error);
  }
}

const fetchDataArrow = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Async/Await Arrow function: ", data);
  } catch (error) {
    console.error("Async/Await Arrow function error: ", error);
  }
};

fetchDataNormal();
fetchDataArrow();
