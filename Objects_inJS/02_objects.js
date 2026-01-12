/*
    Object Constructor Functions
    Sometimes we need to create many objects of the same type.

    To create an object type we use an object constructor function.

    It is considered good practice to name constructor functions with an upper-case first letter.
    
 */
function OnePiece(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

/*
Note:
In the constructor function, 'this' has no value.

The value of 'this' will become the new object when a new object is created.
 */

const luffy = new OnePiece("MonkeyD", "Luffy", 19, "Black");
const zoro = new OnePiece("Roronoa", "Zoro", 21, "Green");
const nami = new OnePiece("Nami", "Cat Burglar", 20, "Brown");

console.log(luffy);
console.log(zoro);
console.log(nami);

/*
 
Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.

Constructors are Object Prototypes.
*/

// Adding a Method to the Object Constructor
OnePiece.prototype.crewMates = function() {
    return {
        captain: this.firstName + " " + this.lastName,
        swordsman: "Roronoa Zoro",
        navigator: "Nami",
        sniper: "Usopp",
        cook: "Sanji",
        doctor: "Tony Tony Chopper",
        archaeologist: "Nico Robin",
        shipwright: "Franky",
        musician: "Brook",
        helmsman: "Jinbe"
    };
};

console.log(luffy.crewMates()); // Accessing the Method of Object;
console.log(luffy.crewMates().archaeologist); // Accessing the Method of Object;
console.log(zoro.crewMates().cook); // Accessing the Method of Object;
console.log(nami.crewMates().navigator); // Accessing the Method of Object;

// Adding another Method to the Object Constructor
OnePiece.prototype.LuffuDream = function() {
    return "To become the Pirate King by finding the One Piece, the greatest treasure in the world!";
};
OnePiece.prototype.ZoroDream = function() {
    return "To become the greatest swordsman in the world!";
};

console.log(zoro.ZoroDream()); // Accessing the Method of Object;
console.log(luffy.LuffuDream()); // Accessing the Method of Object;
// console.log(zoro.LuffuDream()); // Accessing the Method of Object;

// You can also create an object with methods directly without using a constructor function:
const onePiece = {
    firstName: "MonkeyD",
    lastName: "Luffy",
    age: 19,
    eyeColor: "Black",
    crewMates: function() {
        const strawHats = {
            captain: this.firstName + " " + this.lastName,
            swordsman: "Roronoa Zoro",
            navigator: "Nami",
            sniper: "Usopp",
            cook: "Sanji",
            doctor: "Tony Tony Chopper",
            archaeologist: "Nico Robin",
            shipwright: "Franky",
            musician: "Brook",
            helmsman: "Jinbe"
        };
        return strawHats;
    },
    LuffuDream: function luffyDream() {
        return "To become the Pirate King by finding the One Piece, the greatest treasure in the world!";
    }
};
console.log(onePiece.crewMates().captain);
console.log(onePiece.crewMates().swordsman);
console.log(onePiece.crewMates()); // Accessing the Method of Object;
console.log(onePiece.LuffuDream()); // Accessing the Method of Object;