// Basic Callback Example
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!


// Callback with Arguments
function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

function displayResult(result) {
    console.log("Sum is: " + result);
}

add(5, 3, displayResult);
// Output: Sum is: 8


// Real-world Example: Array Processing
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10


// Async Callback Example (Simulated)
function fetchData(callback) {
    setTimeout(function() {
        const data = { id: 1, name: "John" };
        callback(data);
    }, 2000);
}

fetchData(function(data) {
    console.log("Data received:", data);
});
// Output after 2 seconds: Data received: { id: 1, name: "John" }