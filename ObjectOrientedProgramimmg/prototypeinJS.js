
/**
 * JAVASCRIPT PROTOTYPES - COMPREHENSIVE GUIDE
 * 
 * @module PrototypeInJS
 * @description Complete reference for understanding prototype-based inheritance and modern class syntax in JavaScript
 * 
 * ============================================
 * 1. PROTOTYPE BASICS
 * ============================================
 * @typedef {Object} Person
 * @property {string} name - The person's name
 * @method greet - Returns a greeting message
 * @description Every function in JavaScript has a prototype property used for inheritance
 * 
 * ============================================
 * 2. PROTOTYPE CHAIN
 * ============================================
 * @typedef {Object} Animal
 * @property {string} name - The animal's name
 * @method eat - Returns eating status
 * @description Demonstrates prototype chain inheritance using Object.create()
 * 
 * @typedef {Animal} Dog
 * @property {string} breed - The dog's breed
 * @method bark - Returns barking message
 * @description Shows how to properly set up constructor and inherit from parent prototype
 * 
 * ============================================
 * 3. KEY PROTOTYPE METHODS
 * ============================================
 * @method Object.create() - Creates new object with specified prototype
 * @method Object.getPrototypeOf() - Retrieves object's prototype
 * @method Object.setPrototypeOf() - Sets object's prototype (performance implications)
 * @method hasOwnProperty() - Checks if property belongs to object itself (not prototype chain)
 * @method isPrototypeOf() - Checks if object exists in another object's prototype chain
 * @method Object.getOwnPropertyNames() - Lists all properties defined on object
 * 
 * ============================================
 * 4. ES6 CLASS SYNTAX
 * ============================================
 * @typedef {Object} Vehicle
 * @property {string} type - Vehicle type
 * @method drive - Returns driving message
 * @description Modern syntax for creating constructor functions with cleaner inheritance
 * 
 * @typedef {Vehicle} Car
 * @property {string} brand - Car brand
 * @description Uses 'extends' and 'super()' for inheritance - preferred modern approach
 * 
 * ============================================
 * 5. PROTOTYPE vs CLASS COMPARISON
 * ============================================
 * @description Both approaches create similar results but differ in syntax and features:
 * - Prototype: Traditional approach, more flexible, steeper learning curve
 * - Class: ES6+ standard, cleaner syntax, built-in inheritance features, recommended for new code
 * 
 * @note Classes are syntactic sugar over prototypes - they compile to prototype-based code
 * @note Understanding prototypes is essential for mastering JavaScript's inheritance model
 * @note Always use constructor property reassignment when changing prototype objects
 */



// 1. PROTOTYPE BASICS
// Every function has a prototype property
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const person1 = new Person('John');
console.log(person1.greet()); // Hello, I'm John

// 2. PROTOTYPE CHAIN
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dogObject.eat()); // Buddy is eating
console.log(dogObject.bark()); // Buddy barks!

// 3. KEY PROTOTYPE METHODS
// Object.create() - Create object with specific prototype
const proto = { greet() { return 'Hi'; } };
const obj = Object.create(proto);

// Object.getPrototypeOf() - Get prototype
console.log(Object.getPrototypeOf(obj) === proto); // true

// Object.setPrototypeOf() - Set prototype
Object.setPrototypeOf(obj, { greet() { return 'Hello'; } });

// hasOwnProperty() - Check own properties
console.log(person1.hasOwnProperty('name')); // true

// isPrototypeOf() - Check prototype chain
console.log(Animal.prototype.isPrototypeOf(dog)); // true

// Object.getOwnPropertyNames() - Get all properties
console.log(Object.getOwnPropertyNames(Person.prototype));

// 4. MODERN CLASS SYNTAX (ES6)
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    drive() {
        return `Driving ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor(type, brand) {
        super(type);
        this.brand = brand;
    }
}

const car = new Car('sedan', 'Toyota');
console.log(car.drive()); // Driving sedan

// 5. PROTOTYPE VS CLASS
// Prototype-based approach
function Shape(type) {
    this.type = type;
}

Shape.prototype.getType = function() {
    return this.type;
};

// Class-based approach
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    getSides() {
        return this.sides;
    }
}

const shape = new Shape('circle');
console.log(shape.getType()); // circle

const polygon = new Polygon(4);
console.log(polygon.getSides()); // 4

// Both approaches achieve similar results, but classes provide a cleaner syntax and built-in inheritance features.

// 6.  __proto__ IN JAVASCRIPT

// The __proto__ property is an accessor property that exposes the internal [[Prototype]] of an object.
// It allows you to access or modify the prototype of an object directly.

// Notes:
// - Every object in JavaScript has a prototype, which is another object from which it can inherit properties and methods.
// - The __proto__ property is not part of the ECMAScript standard but is widely supported in modern browsers.
// - It is generally recommended to use Object.getPrototypeOf() and Object.setPrototypeOf() instead of __proto__ for better performance and clarity.

// Example:
const animal = {
    eat() {
        return `${this.name} is eating`;
    }
};

const dogObject = {
    name: 'Buddy',
    bark() {
        return `${this.name} barks!`;
    }
};

// Set dog’s prototype to animal
dog.__proto__ = animal;

console.log(dog.eat()); // Buddy is eating
console.log(dog.bark()); // Buddy barks!

// Checking the prototype
console.log(dog.__proto__ === animal); // true
console.log(Object.getPrototypeOf(dog) === animal); // true


/**
 7. getPrototypeOf()
 * Object.getPrototypeOf() - Retrieve an Object's Prototype
 * 
 * @function Object.getPrototypeOf
 * @param {Object} obj - The object whose prototype is to be retrieved
 * @returns {Object|null} The prototype object of the given object, or null if no prototype exists
 * 
 * @description
 * Object.getPrototypeOf() returns the prototype (i.e., the value of the internal [[Prototype]] property)
 * of the specified object. This is the standard, recommended way to access an object's prototype in modern JavaScript.
 * 
 * @why_use_it
 * - Safely retrieve an object's prototype without relying on the non-standard __proto__ property
 * - Better performance and clarity compared to __proto__ access
 * - Essential for implementing custom inheritance patterns and prototype chain inspection
 * - Allows you to verify inheritance relationships and debug prototype chains
 * - Provides a standardized ECMAScript approach to prototype manipulation
 * 
 * @what_it_does
 * - Accesses the internal [[Prototype]] property of an object
 * - Returns the object from which the given object inherits properties and methods
 * - Enables traversal of the entire prototype chain
 * - Works with objects created via constructors, Object.create(), and class syntax
 * 
 * @example
 * // Example 1: Basic prototype retrieval
 * function Animal(name) {
 *     this.name = name;
 * }
 * Animal.prototype.eat = function() { return `${this.name} is eating`; };
 * 
 * const dog = new Animal('Buddy');
 * const proto = Object.getPrototypeOf(dog);
 * console.log(proto === Animal.prototype); // true
 * 
 * @example
 * // Example 2: Verify inheritance relationship
 * class Vehicle {
 *     drive() { return 'Driving...'; }
 * }
 * 
 * class Car extends Vehicle {
 *     honk() { return 'Honk!'; }
 * }
 * 
 * const car = new Car();
 * console.log(Object.getPrototypeOf(car) === Car.prototype); // true
 * console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype); // true
 * 
 * @example
 * // Example 3: Traverse prototype chain
 * const obj = Object.create(Animal.prototype);
 * let current = obj;
 * 
 * while (current) {
 *     console.log(Object.getOwnPropertyNames(current));
 *     current = Object.getPrototypeOf(current);
 *     if (current === Object.prototype) break;
 * }
 * 
 * @note Preferred alternative to the non-standard __proto__ property
 * @note Returns null when called on Object.prototype (top of the chain)
 * @note Use Object.setPrototypeOf() as the complement function to set prototypes
 * @note Do not confuse with the prototype property of constructor functions
 * 
 * @compatibility ECMAScript 5.1+ (widely supported in all modern browsers)
 
 */
        // PRACTICAL EXAMPLES OF Object.getPrototypeOf()

        // Example 1: Basic prototype retrieval
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.eat = function() {
            return `${this.name} is eating`;
        };

        const dogg = new Animal('Buddy');
        const protoo = Object.getPrototypeOf(dogg);
        console.log(protoo === Animal.prototype); // true

        // Example 2: Verify inheritance relationship
        class Vehiclee {
            drive() {
                return 'Driving...';
            }
        }

        class Carr extends Vehiclee {
            honk() {
                return 'Honk!';
            }
        }

        const carr = new Carr();
        console.log(Object.getPrototypeOf(carr) === Carr.prototype); // true
        console.log(Object.getPrototypeOf(Carr.prototype) === Vehiclee.prototype); // true

        // Example 3: Traverse prototype chain
        const objj = Object.create(Animal.prototype);
        let current = objj;

        while (current) {
            console.log(Object.getOwnPropertyNames(current));
            current = Object.getPrototypeOf(current);
            if (current === Object.prototype) break;
        }



        
/**
 * 8. setPrototypeOf()
 * Object.setPrototypeOf() - Set an Object's Prototype
 * 
 * @function Object.setPrototypeOf
 * @param {Object} obj - The object whose prototype is to be set
 * @param {Object|null} prototype - The object to set as the prototype
 * @returns {Object} The same object with its prototype changed
 * 
 * @description
 * Object.setPrototypeOf() sets the prototype (i.e., the internal [[Prototype]] property)
 * of a specified object to another object or null. This allows you to change an object's
 * prototype chain after the object has been created.
 * 
 * @why_use_it
 * - Dynamically change an object's prototype after creation
 * - Implement complex inheritance patterns and object delegation
 * - Set up prototype chains for objects created with Object.create() or object literals
 * - Enable runtime prototype manipulation for advanced use cases
 * - Provide an alternative to constructor-based inheritance
 * 
 * @what_it_does
 * - Modifies the internal [[Prototype]] of an object
 * - Allows objects to inherit from different prototypes at runtime
 * - Affects the prototype chain used for property lookup
 * - Works with any object type (including functions and arrays)
 * - Returns the object itself for method chaining
 * 
 * @caution PERFORMANCE WARNING
 * - Modifying prototypes after object creation can severely impact performance
 * - JavaScript engines optimize prototype chains at creation time
 * - Avoid using setPrototypeOf() in performance-critical code
 * - Use during initialization or setup phases only
 * - Consider alternative patterns when possible
 * 
 * @example
 * // Example 1: Set prototype of an object literal
 * const animal = {
 *     eat() { return 'eating'; }
 * };
 * 
 * const dog = { name: 'Buddy' };
 * Object.setPrototypeOf(dog, animal);
 * console.log(dog.eat()); // eating
 * 
 * @example
 * // Example 2: Change prototype at runtime
 * const mammal = { breathe() { return 'breathing'; } };
 * const reptile = { scaleColor() { return 'green'; } };
 * 
 * const creature = {};
 * Object.setPrototypeOf(creature, mammal);
 * console.log(creature.breathe()); // breathing
 * 
 * Object.setPrototypeOf(creature, reptile);
 * console.log(creature.scaleColor()); // green
 * console.log(creature.breathe()); // undefined - mammal prototype removed
 * 
 * @example
 * // Example 3: Set null prototype (objects without prototype chain)
 * const pureObject = {};
 * Object.setPrototypeOf(pureObject, null);
 * console.log(Object.getPrototypeOf(pureObject)); // null
 * 
 * @note Modifying prototypes impacts performance - use sparingly
 * @note Consider using Object.create() at initialization instead
 * @note Use Object.getPrototypeOf() to verify prototype changes
 * @note Cannot be used with non-extensible objects or frozen objects in strict cases
 * @note Prefer composition and delegation over dynamic prototype manipulation
 * 
 * @compatibility ECMAScript 5.1+ (widely supported in all modern browsers)
 */          
        // PRACTICAL EXAMPLES OF Object.setPrototypeOf()

        // Example 1: Basic prototype assignment
        const animall = {
            eat() {
                return `${this.name} is eating`;
            }
        };

        const dog = { 
            name: 'Rex' 
        };
        Object.setPrototypeOf(dog, animall);
        console.log(dog.eat()); // Rex is eating

        // Example 2: Change prototype at runtime
        const mammal = {
            breathe() {
                 return 'breathing air'; 
            }
        };

        const reptile = {
            scaleColor: 'green',
            coldBlooded() { 
                return true; 
            }
        };

        const creature = { name: 'Unknown' };
        Object.setPrototypeOf(creature, mammal);
        console.log(creature.breathe()); // breathing air

        Object.setPrototypeOf(creature, reptile);
        console.log(creature.coldBlooded()); // true
        console.log(creature.breathe()); // undefined - mammal methods no longer accessible

        // Example 3: Set null prototype (object without prototype chain)
        const pureObject = { data: 'isolated' };
        Object.setPrototypeOf(pureObject, null);
        console.log(Object.getPrototypeOf(pureObject)); // null
        console.log(pureObject.toString); // undefined - no inherited methods

        // Example 4: Chaining with constructor inheritance
        function Vehicle(type) {
            this.type = type;
        }
        Vehicle.prototype.drive = function() {
            return `Driving ${this.type}`;
        };

        const carProto = Object.create(Vehicle.prototype);
        carProto.honk = function() { return 'Honk!'; };

        const myCar = { color: 'blue' };
        Object.setPrototypeOf(myCar, carProto);
        console.log(myCar.drive()); // Driving undefined
        console.log(myCar.honk()); // Honk!

        // Example 5: Method delegation pattern
        const canEat = { eat() { return 'eating'; } };
        const canWalk = { walk() { return 'walking'; } };
        const canSwim = { swim() { return 'swimming'; } };

        const duck = {};
        Object.setPrototypeOf(duck, canEat);
        Object.setPrototypeOf(canEat, canWalk);
        Object.setPrototypeOf(canWalk, canSwim);

        console.log(duck.eat()); // eating
        console.log(duck.walk()); // walking
        console.log(duck.swim()); // swimming

