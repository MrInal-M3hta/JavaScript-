// ============================================
// 1. ARITHMETIC OPERATORS
// ============================================
let a = 10, b = 3;

console.log(a + b);    // 13 (Addition)
console.log(a - b);    // 7 (Subtraction)
console.log(a * b);    // 30 (Multiplication)
console.log(a / b);    // 3.333... (Division)
console.log(a % b);    // 1 (Modulus - remainder)
console.log(a ** b);   // 1000 (Exponentiation)
console.log(++a);      // 11 (Pre-increment)
console.log(a++);      // 11 (Post-increment)
console.log(--b);      // 2 (Pre-decrement)
console.log(b--);      // 2 (Post-decrement)

// ============================================
// 2. ASSIGNMENT OPERATORS
// ============================================
let x = 5;
x += 3;    // x = x + 3 (8)
x -= 2;    // x = x - 2 (6)
x *= 2;    // x = x * 2 (12)
x /= 3;    // x = x / 3 (4)
x %= 3;    // x = x % 3 (1)
x **= 2;   // x = x ** 2 (1)

// ============================================
// 3. COMPARISON OPERATORS
// ============================================
console.log(5 == '5');      // true (loose equality)
console.log(5 === '5');     // false (strict equality)
console.log(5 != '5');      // false (loose inequality)
console.log(5 !== '5');     // true (strict inequality)
console.log(5 > 3);         // true (greater than)
console.log(5 < 3);         // false (less than)
console.log(5 >= 5);        // true (greater or equal)
console.log(5 <= 3);        // false (less or equal)

// ============================================
// 4. LOGICAL OPERATORS
// ============================================
console.log(true && false);      // false (AND - both must be true)
console.log(true || false);      // true (OR - one must be true)
console.log(!true);              // false (NOT - reverses boolean)

// Short-circuit evaluation
let result = 0 && (result = 5);  // result = 0 (AND stops early)
let result2 = 1 || (result2 = 5); // result2 = 1 (OR stops early)

// ============================================
// 5. BITWISE OPERATORS
// ============================================
let num1 = 5;  // 0101
let num2 = 3;  // 0011

console.log(num1 & num2);   // 1 (AND)
console.log(num1 | num2);   // 7 (OR)
console.log(num1 ^ num2);   // 6 (XOR)
console.log(~num1);         // -6 (NOT)
console.log(num1 << 1);     // 10 (Left shift)
console.log(num1 >> 1);     // 2 (Right shift)
console.log(-num1 >>> 1);   // Unsigned right shift

// ============================================
// 6. TERNARY OPERATOR (Conditional)
// ============================================
let age = 18;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);  // 'Adult'

// ============================================
// 7. TYPE OPERATORS
// ============================================
console.log(typeof 5);           // 'number'
console.log(typeof 'hello');     // 'string'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof {});          // 'object'
console.log(typeof []);          // 'object'
console.log(typeof null);        // 'object' (quirk of JS)

console.log([] instanceof Array);        // true
console.log({} instanceof Object);       // true
console.log('hello' instanceof String);  // false (primitive)

// ============================================
// 8. IN OPERATOR
// ============================================
let obj = { name: 'Bat Man', age: 30 };
console.log('name' in obj);    // true
console.log('email' in obj);   // false

let arr = ['a', 'b', 'c'];
console.log(0 in arr);         // true (checks index)
console.log('length' in arr);  // true

// ============================================
// 9. DELETE OPERATOR
// ============================================
let person = { name: 'Bat Man', age: 30 };
delete person.age;
console.log(person);  // { name: 'Bat Man' }

// ============================================
// 10. SPREAD OPERATOR (...)
// ============================================
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// ============================================
// 11. OPTIONAL CHAINING (?.)
// ============================================
let user = { name: 'Bat Man' };
console.log(user?.address?.city);  // undefined (no error)

// ============================================
// 12. NULLISH COALESCING (??)
// ============================================
let value = null ?? 'default';  // 'default'
let value2 = 0 ?? 'default';    // 0 (only null/undefined)

// ============================================
// 13. COMMA OPERATOR
// ============================================
let val = (1, 2, 3);  // val = 3 (returns last value)

// ============================================
// 14. EXPONENTIATION OPERATOR
// ============================================
console.log(2 ** 3);   // 8 (2^3)
console.log(2 ** 0.5); // 1.414... (square root)