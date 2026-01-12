// destructuring.js
// Examples of array destructuring in JavaScript

// 1. Basic destructuring
const rgb = [255, 165, 0];
const [r, g, blue] = rgb;
console.log('basic:', r, g, blue); // 255 165 0

// 2. Skipping elements
const nums = [1, 2, 3, 4];
const [first, , third] = nums;
console.log('skip:', first, third); // 1 3

// 3. Rest element
const [head, ...tail] = nums;
console.log('rest:', head, tail); // 1 [2,3,4]

// 4. Default values
const arr = [10];
const [a = 1, b = 2] = arr;
console.log('defaults:', a, b); // 10 2

// 5. Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log('swap:', x, y); // 2 1

// 6. Nested destructuring
const nested = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nested;
console.log('nested:', n1, n2, n3, n4); // 1 2 3 4

// 7. Destructuring function return
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = minMax([7, 2, 9, 4]);
console.log('minMax:', min, max); // 2 9

// 8. Destructuring parameters (with defaults)
function connect([host = 'localhost', port = 80] = []) {
    return `Connecting to ${host}:${port}`;
}
console.log(connect(['example.com', 8080]));
console.log(connect()); // uses defaults

// 9. Using iterables (string)
const [c1, c2, ...restChars] = 'hi!';
console.log('string iterable:', c1, c2, restChars); // h i ['!']

// 10. Ignoring holes in sparse arrays
const sparse = [1, , 3]; // middle is an empty slot
const [s1, s2 = 'empty', s3] = sparse;
console.log('sparse:', s1, s2, s3); // 1 'empty' 3