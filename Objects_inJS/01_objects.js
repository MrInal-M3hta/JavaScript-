// Objects are written in key:value pairs;
// Keys are Strings and Values can be of any Data Type;
// Curly Braces {} are used to create Objects;
// Key and Value are separated by a Colon (:);
// Each key:value pair is separated by a Comma (,);


// Creating an Object using Object Literal Syntax
const strawHat = {firstName:"MonkeyD", lastName:"Luffy", age:19, eyeColor:"Black"};

const strawHat1 = {
    firstName:"MonkeyD", 
    lastName:"Luffy", age:19, 
    eyeColor:"Black",
    haki: { 
        futureSight: "Observation", 
        Hardning: "Armament", 
        RareHaki: "Conquerors",
        luffyHaki: {
            observation: "Advanced",
            armament: "Advanced",
            conquerors: "Awakened"
        }
    },
    functionn: function luffyDream(){
        console.log("To become the Pirate King!");
    },
    luffypower: function(){
        console.log("Rubber");
    }
}; // You can also write the object in multiple lines for better readability.
strawHat1.luffypower(); // Accessing the Method of Object;
strawHat1.functionn(); // Accessing the Method of Object;
console.log(typeof strawHat1);
console.log(strawHat1);

const gear5 = Symbol("Nika"); // Creating a Symbol to use as a key in the object

const onePiece = {}; //You can also create an empty object, and add the properties later:

onePiece.firstName = "MonkeyD";
onePiece.lastName = "Luffy";
onePiece[gear5] = "Gear5"; // Using Symbol as a key
onePiece.age = 19;
onePiece.eyeColor = "Black";
onePiece.isPirate = true;
onePiece.haki = {
    futureSight: "Observation",
    Hardning: "Armament",
    RareHaki: "Conquerors",
        luffyHaki: {
            observation: "Advanced",
            armament: "Advanced",
            conquerors: "Awakened"
        }
};
// Accessing Object Properties
console.log(onePiece.haki);
console.log(onePiece["gear5"]); // Accessing Symbol property
console.log(onePiece.haki.luffyHaki);
console.log(onePiece.haki.futureSight); // Observation
console.log(onePiece.haki.luffyHaki.conquerors); // Awakened 
console.log(onePiece);

/*
You can access object properties in two ways:

objectName.propertyName
objectName["propertyName"]
*/

console.log(onePiece.firstName);
console.log(onePiece["lastName"]);
console.log(onePiece[gear5]); // Accessing Symbol property

// Changing the value of Object Properties
onePiece.age = 20; // Using dot notation
onePiece["eyeColor"] = "Dark Brown"; // Using bracket notation
console.log(onePiece.age);
console.log(onePiece.eyeColor);

// Adding New Properties to an Object
onePiece.nakama = "Straw Hat Pirates"; // Using dot notation
onePiece["bounty"] = "3,000,000,000 Berries"; // Using bracket notation
console.log(onePiece.nakama);
console.log(onePiece.bounty);

// Deleting Properties from an Object
delete onePiece.bounty; // Using dot notation
delete onePiece["nakama"]; // Using bracket notation
console.log(onePiece.bounty); // This will return undefined because we have deleted this property from the object.
console.log(onePiece.nakama); // This will return undefined because we have deleted this property from the object.

/*
Preventing Changes to an Object 
Object.freeze(onePiece); // Now we can not change the value of Objects
onePiece.firstName = "GolD";
onePiece.lastName = "Ace";
console.log(onePiece.firstName); console.log(onePiece.lastName); // Because we freeze the Object;
*/

// Adding Methods to an Object
onePiece.LuffuDream = function(){
    return `${this.lastName},is going "To become the Pirate King!"`;
};
console.log(onePiece.LuffuDream()); // Accessing the Method of Object;

onePiece.crewMates = function(){
    const strawHats = {
        swordsman: "Zoro",
        cook: "Sanji",
        navigator: "Nami",
        archaeologist: "Robin"
    };
    return strawHats;
};
/*
 ❓ Why do we use return strawHats?

Simple rule:

A function can only give output using return.

	•	strawHats is a local variable
	•	It exists only inside the function
	•	If you don’t return it → it disappears after the function ends

    Withhout return, the function would not give any output, and we would not be able to access the values of strawHats outside the function.
    onePiece.crewMates = function () {
    const strawHats = { swordsman: "Zoro" };
    }; // => This gives: onePiece.crewMates(); >>>> undefined

    console.log(onePiece.crewMates().swordsman); // This would give an error because the function does not return anything.


With return, the function gives us the strawHats object as output, and we can access its properties outside the function.

    return strawHats; // => This gives: onePiece.crewMates(); >>>> returns the strawHats object

    onePiece.crewMates().swordsman; // This works because the function returns the strawHats object.


If data is fixed, no function needed:
onePiece.crewMates = {
    swordsman: "Zoro",
    cook: "Sanji",
    navigator: "Nami",
    archaeologist: "Robin"
};

console.log(onePiece.crewMates.swordsman);

 */
console.log(onePiece.crewMates()); // Accessing the Method of Object;
console.log(onePiece.crewMates().strawHats); // >>> Undefined because strawHats is not a property of onePiece, it's a local variable inside the crewMates function.
console.log(onePiece.crewMates().swordsman); // Accessing the Method of Object;
console.log(onePiece.crewMates().cook); // Accessing the Method of Object;
console.log(onePiece.crewMates().navigator); // Accessing the Method of Object;
console.log(onePiece.crewMates().archaeologist); // Accessing the Method of Object;

// You can also use Object.assign() to copy values from one object to another:
const devilFruit = {
    name: "GomuGomuNoMi",
    type: "Paramecia",
    ability: "Rubber"
};

const luffy = Object.assign({}, onePiece, devilFruit);
console.log(luffy); //The output shows [Function (anonymous)] because Object.assign() copies functions as property values, and console.log(luffy) prints the function reference, not the function result.
console.log(luffy.LuffuDream());

// You can also use the spread operator (...) to copy values from one object to another:
const zoro = {...onePiece, ...{firstName: "Roronoa", lastName: "Zoro", age: 21, eyeColor:"Green"}, ...{devilFruit: "None"}};
console.log(zoro);




//                          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                             \\


// Create a new JavaScript object using new Object():
// Syntax
// const objectName = new Object( [objectProperties] );
// Example
// Creating an Object using new Object() syntax
const pokemon = new Object({
  Name: "Charmander",
  type: "Fire",
  Evolutions: "Charizard",
  attack: "Blaze"
});
console.log(pokemon);

// Accessing Object Properties
console.log(pokemon.Name);
console.log(pokemon["type"]);

// Changing Object Properties
pokemon.attack = "Flamethrower";
console.log(pokemon.attack);

pokemon["Evolutions"] = "Charmeleon";
console.log(pokemon.Evolutions);

// Adding New Properties to an Object
pokemon.ability = "Solar Power";
console.log(pokemon.ability);
    
pokemon["height"] = "0.6 m";
console.log(pokemon.height);            

// Deleting Properties from an Object
delete pokemon.attack;
console.log(pokemon.attack); // This will return undefined because we have deleted this property from the object.

delete pokemon["Evolutions"];
console.log(pokemon.Evolutions); // This will return undefined because we have deleted this property from the object.



//      ### JavaScript Object Methods ###

// The Object.keys() method returns an array of a given object's property names, in the same order as we get with a normal loop.
const keys = Object.keys(pokemon);
console.log(keys); // Output: [ 'Name', 'type', 'ability', 'height' ]

// The Object.values() method returns an array of a given object's property values, in the same order as we get with a normal loop.
const values = Object.values(pokemon);
console.log(values); // Output: [ 'Charmander', 'Fire', 'Solar Power', '0.6 m' ]

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
const entries = Object.entries(pokemon);
console.log(entries); 
// Output: [ [ 'Name', 'Charmander' ], [ 'type', 'Fire' ], [ 'ability', 'Solar Power' ], [ 'height', '0.6 m' ] ]

const hasType = Object.hasOwn(pokemon, 'type');
console.log(hasType); // Output: true  
const hasWeight = Object.hasOwn(pokemon, 'weight');
console.log(hasWeight); // Output: false

// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
Object.freeze(pokemon);
pokemon.type = "Water"; // This will not change the type property because the object is frozen.
console.log(pokemon.type); // Output: Fire