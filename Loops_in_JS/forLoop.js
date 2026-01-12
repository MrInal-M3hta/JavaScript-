// 1. Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 2. For loop with array iteration
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 3. For...of loop (iterates over values)
for (const value of arr) {
    console.log(value); // 'a', 'b', 'c'
}

// 4. For...in loop (iterates over keys/indices)
for (const index in arr) {
    console.log(index, arr[index]); // 0 'a', 1 'b', 2 'c'
}

// 5. Nested for loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// 6. Break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // exit loop
    console.log(i);
}

// 7. Continue statement
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip current iteration
    console.log(i); // 0, 1, 3, 4
}

// 8. For loop with multiple counters
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(i, j);
}

// 9. For...of loop with objects (need Object.entries)
const obj = { name: 'Nobita', age: 18, city: 'Tokyo' };
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value); // name Nobita, age 18, city Tokyo
}

// 10. For...in loop with objects
for (const key in obj) {
    console.log(key, obj[key]); // name Nobita, age 18, city Tokyo
}

// 11. forEach method for arrays
arr.forEach((value, index) => {
    console.log(index, value);
});

// 12. forEach method for objects
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});