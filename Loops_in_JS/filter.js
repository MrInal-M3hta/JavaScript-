// Basic filter example
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// Filter objects
const users = [
    { name: 'Luffy', age: 17 },
    { name: 'Zoro', age: 21 },
    { name: 'Sanji', age: 21 }
];

const MyCrew = users.filter(user => user.age >= 18);
console.log(MyCrew);

// Filter with index and array parameters
const words = ['hello', 'world', 'js'];
const longWords = words.filter((word, index) => word.length > 3);
console.log(longWords); // ['hello', 'world']

// Filter with thisArg
function isLongerThan(length) {
    return this.length > length;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const longFruits = fruits.filter(isLongerThan, 4);
console.log(longFruits); // ['banana', 'cherry']

// Chaining filter methods
const mixedNumbers = [10, 15, 20, 25, 30, 35];
const filteredNumbers = mixedNumbers
    .filter(num => num > 15)
    .filter(num => num % 10 === 0);
console.log(filteredNumbers); // [20, 30]

// Filter with arrow function and implicit return
const ages = [12, 17, 22, 30, 15];
const adults = ages.filter(age => age >= 18);
console.log(adults); // [22, 30]

// Filter with a more complex condition
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];

const expensiveProducts = products.filter(product => product.price > 400);
console.log(expensiveProducts); // [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }]

// Filter with a function declaration
function isEven(num) {
    return num % 2 === 0;
}

const moreNumbers = [7, 8, 9, 10, 11, 12];
const evenMoreNumbers = moreNumbers.filter(isEven);
console.log(evenMoreNumbers); // [8, 10, 12]

// Filter with nested arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const filteredNested = nestedArrays.filter(arr => arr[0] > 2);
console.log(filteredNested); // [[3, 4], [5, 6]]

// Filter with string method
const phrases = ['JavaScript is fun', 'I love coding', 'JS is awesome'];
const jsPhrases = phrases.filter(phrase => phrase.includes('JS'));
console.log(jsPhrases); // ['JS is awesome']

// Filter with negative condition
const mixedValues = [0, 1, false, true, '', 'hello', null, 'world'];
const truthyValues = mixedValues.filter(value => Boolean(value));
console.log(truthyValues); // [1, true, 'hello', 'world']

// Filter with a callback that uses external variable
const threshold = 10;
const values = [5, 10, 15, 20, 25];
const aboveThreshold = values.filter(value => value > threshold);
console.log(aboveThreshold); // [15, 20, 25]

// Filter with a regular expression
const filenames = ['file1.txt', 'file2.jpg', 'document.pdf', 'image.png'];
const txtFiles = filenames.filter(filename => /\.txt$/.test(filename));
console.log(txtFiles); // ['file1.txt']

// Filter with a map to transform before filtering
const people = [
    { name: 'Alice', height: 170 },
    { name: 'Bob', height: 180 },
    { name: 'Charlie', height: 160 }
];

const tallPeopleNames = people
    .map(person => ({ name: person.name, isTall: person.height > 165 }))
    .filter(person => person.isTall)
    .map(person => person.name);

console.log(tallPeopleNames); // ['Alice', 'Bob']

// Filter with a Set to remove duplicates
const numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = numsWithDuplicates.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(uniqueNums); // [1, 2, 3, 4, 5]

// Filter with a custom condition function
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isPrime);
console.log(primeNumbers); // [2, 3, 5, 7]  

// Filter with destructuring in the callback
const items = [
    { id: 1, value: 10 },
    { id: 2, value: 5 },
    { id: 3, value: 15 }
];

const highValueItems = items.filter(({ value }) => value > 10);
console.log(highValueItems); // [{ id: 3, value: 15 }]  