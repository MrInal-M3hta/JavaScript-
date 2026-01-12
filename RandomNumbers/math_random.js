/*
    JavaScript Math.random()
    Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

    Math.random() always returns a number lower than 1.
*/


// Returns a random number:
console.log(Math.random());

// Math.random() used with Math.floor() can be used to return random integers.

console.log(Math.floor(Math.random() * 10)); // Return a random integer from 0 to 9 (both included):

/*
Explained:

Math.random() returns a floating-point number between 0 (inclusive) and 1 (exclusive).

Example outputs: 0.0, 0.237, 0.9999, but never 1.

Math.random() * 10 gives a range from 0 up to but not including 10.

Example possible results: 0.0, 3.5, 9.99, etc.

Math.floor() rounds a number down to the nearest whole integer:

3.5 becomes 3
9.99 becomes 9
0.1 becomes 0
The possible integer results are then 0 through 9 (both inclusive).


In other words, the range is [0, 9].
*/

console.log(Math.floor(Math.random() * 11)); // Return a random integer from 0 to 10 (both included):

console.log(Math.floor(Math.random() * 101)); // Return a random integer from 0 to 100 (both included):

console.log(Math.floor(Math.random() * 10) + 1); // Return a random integer between 1 and 10 (both included):
/*
 
Explained:

Math.random() returns a number from 0 (inclusive) up to but not including 1.

Multiplying by 10 gives a number from 0 up to but not including 10.

Adding 1 shifts that range to 1 up to but not including 11.

Math.floor() then rounds down, so you get an integer between 1 and 10.

 */

