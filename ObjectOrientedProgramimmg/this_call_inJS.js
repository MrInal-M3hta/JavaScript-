// ============================================
// 1. UNDERSTANDING 'this' IN JAVASCRIPT
// ============================================

// 'this' refers to the object that is executing the current function
// Its value depends on HOW the function is called, not WHERE it's defined

// Example 1: Global Context
console.log(this); // In browsers: window object, In Node.js: global object

// Example 2: Object Method
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, I am ${this.name}`); // 'this' = person object
    }
};
person.greet(); // Output: Hello, I am John

// Example 3: Function Context (without object)
function standalone() {
    console.log(this); // In strict mode: undefined, Otherwise: global object
}
standalone();

// ============================================
// 2. PROBLEM: Lost 'this' Context
// ============================================

const user = {
    name: "Alice",
    age: 25,
    displayInfo: function() {
        console.log(`${this.name} is ${this.age} years old`);
    }
};

// Problem: When we extract method, 'this' is lost
const display = user.displayInfo;
display(); // Error or unexpected result - 'this' is undefined/global

// ============================================
// 3. SOLUTION: Using call() Method
// ============================================

// call() allows us to explicitly set the value of 'this'
// Syntax: functionName.call(thisArg, arg1, arg2, ...)

const car = {
    brand: "Tesla",
    speed: 120
};

function describe(color, year) {
    console.log(`${this.brand} car is ${color} and made in ${year}`);
}

// Using call() to set 'this' to 'car' object
describe.call(car, "red", 2023); // Output: Tesla car is red and made in 2023

// ============================================
// 4. PRACTICAL EXAMPLES WITH call()
// ============================================

// Example 1: Constructor Function Pattern
function Animal(name, type) {
    this.name = name;
    this.type = type;
    this.speak = function() {
        console.log(`${this.name} is a ${this.type}`);
    };
}

function Dog(name, breed) {
    // Using call() to borrow Animal's constructor
    Animal.call(this, name, "Dog");
    this.breed = breed;
}

const myDog = new Dog("Max", "Golden Retriever");
myDog.speak(); // Output: Max is a Dog

// Example 2: Function Borrowing
const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

// Borrowing person1's fullName method using call()
console.log(person1.fullName.call(person2)); // Output: Jane Smith

// Example 3: Method Chaining with call()
const calculator = {
    value: 0,
    add: function(n) {
        this.value += n;
        console.log(`Added ${n}, Total: ${this.value}`);
        return this;
    },
    subtract: function(n) {
        this.value -= n;
        console.log(`Subtracted ${n}, Total: ${this.value}`);
        return this;
    }
};

const mathObj = { value: 10 };
calculator.add.call(mathObj, 5).subtract.call(mathObj, 3);

// ============================================
// 5. COMPARISON: call() vs apply() vs bind()
// ============================================

function greetUser(greeting, punctuation) {
    console.log(`${greeting} ${this.name}${punctuation}`);
}

const user1 = { name: "Bob" };

// call() - arguments passed individually
greetUser.call(user1, "Hello", "!"); // Hello Bob!

// apply() - arguments passed as array
greetUser.apply(user1, ["Hi", "?"]);  // Hi Bob?

// bind() - returns a new function with fixed 'this'
const boundGreet = greetUser.bind(user1, "Hey");
boundGreet("~"); // Hey Bob~

// ============================================
// 6. NOTES & WHY WE USE 'this' AND call()
// ============================================

/*
WHY USE 'this'?
✓ Creates reusable object methods
✓ Enables polymorphism (same method, different objects)
✓ Supports OOP principles like inheritance
✓ Makes code cleaner and more maintainable

WHY USE call()?
✓ Explicitly control which object 'this' refers to
✓ Borrow methods from other objects (function borrowing)
✓ Implement inheritance in constructor functions
✓ Pass arguments individually (unlike apply)

WHEN TO USE WHICH?
- call() → When you need to pass arguments one by one
- apply() → When arguments are in an array
- bind() → When you need a new function or use it multiple times

COMMON MISTAKES:
❌ Forgetting 'this' can be undefined in strict mode
❌ Confusing scope with 'this'
❌ Not using call/apply/bind when borrowing methods
*/

// ============================================
// 7. REAL-WORLD EXAMPLE: Inheritance
// ============================================

function Vehicle(brand, color) {
    this.brand = brand;
    this.color = color;
}

function Car(brand, color, doors) {
    // Call parent constructor with current object
    Vehicle.call(this, brand, color);
    this.doors = doors;
}

const myCar = new Car("BMW", "black", 4);
console.log(myCar); // { brand: 'BMW', color: 'black', doors: 4 }