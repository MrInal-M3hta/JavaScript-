const user = {
  username: "Luffy",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // By default, constructor functions return 'this'
}

const userOne = new User("Luffy", 12, true);
const userTwo = new User("Zoro", 11, false);
console.log(userOne.constructor);
//console.log(userTwo);
console.log(userTwo.greeting());


// ========================================================================================================================= //


// instanceof operator

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true

/*
Reason:

In JavaScript everything is an object (except primitives).

Prototype chain:

auto
 ↓
Car.prototype
 ↓
Object.prototype
 ↓
null

Since Object.prototype exists in the chain:
auto instanceof Object // true

🔹 WHAT IS Object IN JAVASCRIPT?

Object is:
	•	A built-in constructor
	•	The parent of almost all objects

Example:
    const obj = {};

JS internally does:
    const obj = new Object();
    
So:
    obj instanceof Object // true

All objects created using object literals inherit from Object.prototype.
*/

