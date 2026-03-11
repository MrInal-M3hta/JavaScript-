// ============================================
// 1.a) BASIC GETTER AND SETTER
// ============================================
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter
    get name() {
        return this._name;
    }

    // Setter
    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Name must be a string');
        }
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error('Age cannot be negative');
        }
        this._age = value;
    }
}

const person = new Person('John', 30);
console.log(person.name); // getter
person.name = 'Jane'; // setter

// =========================================== //

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

// ============================================
// 1.b) GETTERS AND SETTERS WITH Object.defineProperty
// ============================================

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
console.log(chai.password);


// ============================================
// 2. OBJECT.DEFINEPROPERTY (Alternative)
// ============================================
const user = {};
Object.defineProperty(user, 'email', {
    get() {
        return this._email;
    },
    set(value) {
        if (!value.includes('@')) {
            throw new Error('Invalid email');
        }
        this._email = value;
    },
    enumerable: true,
    configurable: true
});

user.email = 'test@example.com';
console.log(user.email);

// ============================================
// 3. OBJECT.DEFINEPROPERTIES (Multiple)
// ============================================
const product = {};
Object.defineProperties(product, {
    name: {
        get() {
            return this._name;
        },
        set(value) {
            this._name = value;
        },
        enumerable: true
    },
    price: {
        get() {
            return this._price;
        },
        set(value) {
            this._price = value > 0 ? value : 0;
        },
        enumerable: true
    }
});

// ============================================
// 4. GETTERS AND SETTERS WITH COMPUTATION
// ============================================
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
console.log(rect.perimeter); // 30

// ============================================
// 5. USING SYMBOLS FOR PRIVACY
// ============================================
const privateData = Symbol('private');

class SecureUser {
    constructor(username) {
        this[privateData] = username;
    }

    get username() {
        return this[privateData];
    }

    set username(value) {
        this[privateData] = value;
    }
}

// ============================================
// 6. GETTER/SETTER WITH VALIDATION
// ============================================
class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }

    get balance() {
        return this._balance.toFixed(2);
    }

    set balance(amount) {
        if (amount < 0) throw new Error('Balance cannot be negative');
        this._balance = amount;
    }

    deposit(amount) {
        this.balance = this._balance + amount;
    }
}

// ============================================
// 7. CHAINING WITH SETTERS
// ============================================
class Builder {
    constructor() {
        this._data = {};
    }

    set firstName(value) {
        this._data.firstName = value;
        return this;
    }

    set lastName(value) {
        this._data.lastName = value;
        return this;
    }

    get fullName() {
        return `${this._data.firstName} ${this._data.lastName}`;
    }

    build() {
        return this._data;
    }
}

const builder = new Builder()
    .firstName = 'John'
    .lastName = 'Doe';

// ============================================
// 8. PROPERTY DESCRIPTOR OPTIONS
// ============================================
const obj = {};
Object.defineProperty(obj, 'prop', {
    get() {
        return this._prop;
    },
    set(value) {
        this._prop = value;
    },
    enumerable: true,        // show in for...in loops
    configurable: true       // can be reconfigured/deleted
});

// ============================================
// 9. LAZY LOADING WITH GETTER
// ============================================
class DataFetcher {
    constructor() {
        this._data = null;
    }

    get data() {
        if (this._data === null) {
            this._data = { /* fetch data */ };
        }
        return this._data;
    }
}

// ============================================
// 10. INHERITED GETTERS/SETTERS
// ============================================
class Animal {
    set sound(value) {
        this._sound = value;
    }
    get sound() {
        return this._sound;
    }
}

class Dog extends Animal {
    get sound() {
        return super.sound + ' - Woof!';
    }
}