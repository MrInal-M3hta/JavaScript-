// ===== Prototype-based Inheritance =====
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks`);
};

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.speak(); // Buddy barks


// ===== Class-based Inheritance (ES6+) =====
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting`);
    }
}

const car = new Car('Toyota', 'Camry');
car.start(); // Toyota Camry is starting