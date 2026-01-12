const score = 400
console.log(score);

//      ### NaN - Not a Number ###

/*

    NaN is a JavaScript reserved word indicating that a number is not a legal number.

    Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

    Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

 */

let x1 = 100 / "Apple"; // This will give NaN
let x2 = 100 / "10"; // However, if the string is numeric, the result will be a number:

let x = 100 / "Apple";
isNaN(x); // You can use the global JavaScript function isNaN() to find out if a value is a not a number:




//      ### JavaScript Numbers as Objects ###

/*

    Normally JavaScript numbers are primitive values created from literals:

    But numbers can also be defined as objects with the keyword new:

    Do not create Number objects.

    The new keyword complicates the code and slows down execution speed.

    Number Objects can produce unexpected results:

*/

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

/*

x is a number
let a = 500;

y is an object
let b = new Number(500);

When using the == operator, x and y are equal:
When using the === operator, x and y are not equal.
Comparing two JavaScript objects always returns false.

*/
// For JavaScript Number Methods read this => https://www.w3schools.com/js/js_number_methods.asp
// For JavaScript Number Properties read this => https://www.w3schools.com/js/js_number_properties.asp
// For JavaScript Number Reference read this => https://www.w3schools.com/js/js_number_reference.asp
// For JavaScript Number Reference read this => https://www.w3schools.com/js/js_number_reference.asp
// For JavaScript Bitwise Operations read this => https://www.w3schools.com/js/js_bitwise.asp
// For JavaScript BigInt read this => https://www.w3schools.com/js/js_bigint.asp






//      +++++++++++++ Maths +++++++++++++++++++++++++++++

// The syntax for Math any methods is : Math.method(number)

/*

There are 4 common methods to round a number to an integer:

Math.round(x)	    Returns x rounded to its nearest integer
Math.ceil(x)	    Returns x rounded up to its nearest integer
Math.floor(x)	    Returns x rounded down to its nearest integer
Math.trunc(x)	    Returns the integer part of x (new in ES6)

*/

console.log(Math); // Run this is console for better understanding 
console.log(Math.round(4.6)); // Math.round(x) returns the nearest integer:
console.log(Math.ceil(4.2)); console.log(Math.ceil(-4.2)); // Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.floor(4.9)); // Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.trunc(4.4)); //Math.trunc(x) returns the integer part of x:
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
console.log(Math.abs(-4));


console.log(Math.sign(-4)); // Returns -1
console.log(Math.sign(0)); // Returns 0
console.log(Math.sign(4)); // Returns 1


console.log(Math.E );       // returns Euler's number
console.log(Math.PI);      // returns PI
console.log(Math.SQRT2);   // returns the square root of 2
console.log(Math.SQRT1_2);  // returns the square root of 1/2
console.log(Math.LN2);      // returns the natural logarithm of 2
console.log(Math.LN10 );    // returns the natural logarithm of 10
console.log(Math.LOG2E );   // returns base 2 logarithm of E
console.log(Math.LOG10E);   // returns base 10 logarithm of E

/*

Complete Math Reference

Name	        Description
abs(x)	        Returns the absolute value of x
acos(x)	        Returns the arccosine of x, in radians
acosh(x)	    Returns the hyperbolic arccosine of x
asin(x)	        Returns the arcsine of x, in radians
asinh(x)	    Returns the hyperbolic arcsine of x
atan(x)	        Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	    Returns the arctangent of the quotient of its arguments
atanh(x)	    Returns the hyperbolic arctangent of x
cbrt(x)	        Returns the cubic root of x
ceil(x)	        Returns x, rounded upwards to the nearest integer
clz32(x)	    Returns the number of leading zeros in a 32-bit binary representation of x
cos(x)	        Returns the cosine of x (x is in radians)
cosh(x)	        Returns the hyperbolic cosine of x
E	            Returns Euler's number (approx. 2.718)
exp(x)	        Returns the value of Ex
expm1(x)	    Returns the value of Ex minus 1
f16round(x)	    Returns x, rounded downwards to the nearest integer
floor(x)	    Returns x, rounded downwards to the nearest integer
fround(x)	    Returns the nearest (32-bit single precision) float representation of a number
LN2	            Returns the natural logarithm of 2 (approx. 0.693)
LN10	        Returns the natural logarithm of 10 (approx. 2.302)
log(x)	        Returns the natural logarithmof x
log10(x)	    Returns the base-10 logarithm of x
LOG10E	        Returns the base-10 logarithm of E (approx. 0.434)
log1p(x)	    Returns the natural logarithm of 1 + x
log2(x)	        Returns the base-2 logarithm of x
LOG2E	        Returns the base-2 logarithm of E (approx. 1.442)
max(x1,x2,..)	Returns the number with the highest value
min(x1,x2,..)	Returns the number with the lowest value
PI	            Returns PI (approx. 3.14)
pow(x, y)	    Returns the value of x to the power of y
random()	    Returns a random number between 0 and 1
round(x)	    Rounds x to the nearest integer
sign(x)	        Returns the sign of a number (checks whether it is positive, negative or zero)
sin(x)	        Returns the sine of x (x is in radians)
sinh(x)	        Returns the hyperbolic sine of x
sqrt(x)	        Returns the square root of x
SQRT1_2	        Returns the square root of 1/2 (approx. 0.707)
SQRT2	        Returns the square root of 2 (approx. 1.414)
tan(x)	        Returns the tangent of an angle
tanh(x)	        Returns the hyperbolic tangent of a number
trunc(x)	    Returns the integer part of a number (x)

*/

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);