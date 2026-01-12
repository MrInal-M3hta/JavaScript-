// ===== BASIC WHILE LOOP =====
let i = 0;
while (i < 5) {
    console.log("Count: " + i);
    i++;
}

// ===== WHILE LOOP WITH ARRAYS =====
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let index = 0;

while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}

// ===== WHILE LOOP WITH ARRAY - SUM =====
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
let j = 0;

while (j < numbers.length) {
    sum += numbers[j];
    j++;
}
console.log("Sum: " + sum);

// ===== WHILE LOOP WITH OBJECTS =====
let person = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA"
};

let keys = Object.keys(person);
let k = 0;

while (k < keys.length) {
    console.log(keys[k] + ": " + person[keys[k]]);
    k++;
}

// ===== DO-WHILE LOOP =====
let count = 0;
do {
    console.log("Do-While: " + count);
    count++;
} while (count < 3);

// ===== WHILE WITH BREAK =====
let x = 0;
while (x < 10) {
    if (x === 5) break;
    console.log(x);
    x++;
}

// ===== WHILE WITH CONTINUE =====
let y = 0;
while (y < 5) {
    y++;
    if (y === 3) continue;
    console.log(y);
}