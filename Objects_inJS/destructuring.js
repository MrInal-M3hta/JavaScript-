// Examples of object destructuring in JavaScript

const person = {
    name: 'Luffy',
    age: 19,
    role: 'Captain',
    address: {
        city: 'Tokyo',
        zip: 10001
    },
    favorites: {
        color: 'blue',
        foods: ['Ramen', 'sushi']
    }
};

// Basic extraction
const { name, age } = person;
console.log(name, age); // Luffy 19

// Rename variables
const { role: job } = person;
console.log(job); // Captain

// Default values
const { nickname = 'N/A', country = 'Japan' } = person;
console.log(nickname, country); // N/A Japan

// Nested destructuring
const { address: { city, zip } } = person;
console.log(city, zip); // Tokyo 10001

// Destructuring arrays inside objects
const { favorites: { foods: [firstFood, secondFood] } } = person;
console.log(firstFood, secondFood); // Ramen sushi

// Rest properties (collect remaining props)
const { name: personName, ...rest } = person;
console.log(personName, rest); // Luffy { age: 19, role: 'Captain', address: {...}, favorites: {...} }

// Assign to existing variables (use parentheses)
let a, b;
({ a, b } = { a: 1, b: 2 });
console.log(a, b); // 1 2

// Safe nested destructuring pattern: give default to intermediate object
const maybe = {}; // could be response from API
const { address: maybeAddress = {} } = maybe;
const { city: maybeCity = 'unknown' } = maybeAddress;
console.log(maybeCity); // unknown

// Function parameter destructuring with defaults
function greet({ name, age = 18 } = {}) {
    console.log(`Hi ${name || 'Guest'}, age ${age}`);
}
greet(person); // Hi Luffy, age 19
greet();        // Hi Guest, age 18

// Pick specific properties to create a new object
const { name: nm, role: rl } = person;
const mini = { nm, rl };
console.log(mini); // { nm: 'Luffy', rl: 'Captain' }