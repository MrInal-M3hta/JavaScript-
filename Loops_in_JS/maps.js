// Creating a Map
const map = new Map();

// Adding key-value pairs
map.set('name', 'Super Man');
map.set('age', 30);
map.set(1, 'one');
map.set(true, 'boolean key');

// Getting values
console.log(map.get('name')); // 'Super Man'
console.log(map.get('age'));  // 30

// Checking if key exists
console.log(map.has('name')); // true
console.log(map.has('city')); // false

// Getting size
console.log(map.size); // 4

// Deleting a key
map.delete('age');
console.log(map.size); // 3

// Iterating through Map
for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Clearing all entries
map.clear();
console.log(map.size); // 0

//////////////////////////////////////////////
// Using forEach to loop through Map
/////////////////////////////////////////////
const map2 = new Map();
map2.set('Caption', 'Luffy');
map2.set('Swors Man', 'Zoro');
map2.set('Cook', 'Sanji');

map2.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});

// Using entries() method
for (let entry of map2.entries()) {
    console.log(entry);
}

// Using keys() method
for (let key of map2.keys()) {
    console.log(key);
}

// Using values() method
for (let value of map2.values()) {
    console.log(value);
}

// Converting Map to Array
const mapArray = Array.from(map2);
console.log(mapArray);

const keysArray = Array.from(map2.keys());
console.log(keysArray);

const valuesArray = Array.from(map2.values());
console.log(valuesArray); 

// Converting Array to Map
const array = [['name', 'Naruto'], ['age', 17]];
const mapFromArray = new Map(array);
console.log(mapFromArray);

// Note: Maps maintain the insertion order of keys.
// Also, keys in Maps can be of any data type (objects, functions, etc.), unlike objects where keys are strings or symbols.

/////////////////////////////////////////////////////////////////////////////////////
// Using map() method on Arrays
/////////////////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3];

numbers.map(num => {
  return num * 2;
});

console.log(numbers); // [1, 2, 3] -- The original array is not modified.

const doubled = numbers.map(num => {
  return num * 2;
});
console.log(doubled); // [2, 4, 6] -- A new array is returned with the modified values.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method does not change the original array.

const numbers1 = [1, 2, 3];
const square = numbers1.map(num => (num * num));
console.log(square); // [1, 4, 9]

const names = ['Alice', 'Bob', 'Charlie'];
const nameLengths = names.map(name => name.length);
console.log(nameLengths); // [5, 3, 7]

const users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Emily', lastName: 'Jones' }
];

const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullNames); // ['John Doe', 'Jane Smith', 'Emily Jones']

const numbersWithIndex = numbers.map((num, index) => `Index ${index}: ${num}`);
console.log(numbersWithIndex); // ['Index 0: 1', 'Index 1: 2', 'Index 2: 3']

/////////////////////////////////////////////////////////////////////////////////////
// For more about Maps and map() method we can Study on MDN website; \\
/////////////////////////////////////////////////////////////////////////////////////