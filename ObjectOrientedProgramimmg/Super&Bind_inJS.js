// ============================================
// SUPER IN JAVASCRIPT
// ============================================

// Super is used in classes to call parent class methods
// and access parent class properties

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }

    static info() {
        console.log("I am an animal class");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        // super() must be called before using 'this' in child class
        super(name);
        this.breed = breed;
    }

    speak() {
        // Call parent class method
        super.speak();
        console.log(`${this.name} barks`);
    }

    static info() {
        super.info();
        console.log("I am a dog class");
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
// Output: Buddy makes a sound
//         Buddy barks

Dog.info();
// Output: I am an animal class
//         I am a dog class

// ============================================
// BIND IN JAVASCRIPT
// ============================================

// Bind creates a new function with 'this' permanently set
// to the specified context. It does NOT execute immediately.

const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

person.greet(); // Hello, John

const greetFunc = person.greet;
greetFunc(); // Hello, undefined (lost context)

// Solution: Use bind to set 'this' context
const boundGreet = person.greet.bind(person);
boundGreet(); // Hello, John

// ============================================
// BIND WITH ARGUMENTS (Partial Application)
// ============================================

function add(a, b, c) {
    return a + b + c;
}

// Pre-fill first argument
const addFive = add.bind(null, 5);
console.log(addFive(10, 15)); // 30 (5 + 10 + 15)

// ============================================
// PRACTICAL EXAMPLE: Event Listeners
// ============================================

class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        console.log(this.count);
    }
}

const counter = new Counter();

// Without bind - 'this' is lost in callback
// document.getElementById('btn').addEventListener('click', counter.increment);

// With bind - preserves 'this' context
// document.getElementById('btn').addEventListener('click', counter.increment.bind(counter));

// ============================================
// KEY DIFFERENCES
// ============================================

// bind()    - Returns new function, does NOT execute immediately
// call()    - Executes immediately with specified context
// apply()   - Executes immediately with specified context and array of args

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person2 = { name: "Alice" };

greet.call(person2, "Hi", "!"); // Executes now
greet.apply(person2, ["Hi", "!"]); // Executes now
const boundGreet2 = greet.bind(person2, "Hi", "!"); // Returns function
boundGreet2(); // Execute later