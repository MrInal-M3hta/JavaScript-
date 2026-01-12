/*
JSON ==> (Java Script Object Notation) is a lightweight data interchange format.
         It is easy for humans to read and write.
         Used primarily to transmit data between a server and web application, as an alternative to XML.
         JSON files {key:value, key:value, ...} OR [value1, value2, value3, ...]

         JSON.stringify()  --> Convert a JavaScript object into a JSON string.
         JSON.parse()      --> Convert a JSON string into a JavaScript object.
         JSONP            --> JSON with Padding (used for cross-domain requests).
              
 */

const crew = ["Luffy", "Zoro", "Nami", "Usopp", "Sanji", "Chopper", "Robin", "Franky", "Brook", "Jinbe"];
console.log(typeof crew);

const character = {
    name: "Monkey D. Luffy",
    age: 19,
    pirate: true,
    captain: "Straw Hat Pirates",
    bounty: "3,000,000,000 Berries"
};
console.log(typeof character);

const crewDetails = [{
    name: "Monkey D. Luffy",
    role: "Captain",
    age: 19
},
{
    name: "Roronoa Zoro",
    role: "Swordsman",
    age: 21
},
{
    name: "Nami",
    role: "Navigator",
    age: 20
},
{
    name: "Usopp",
    role: "Sniper",
    age: 19 
},{
    name: "Sanji",
    role: "Cook",
    age: 21
},{
    name: "Tony Tony Chopper",
    role: "Doctor",
    age: 17
},{
    name: "Nico Robin",
    role: "Archaeologist",
    age: 30
},{
    name: "Franky",
    role: "Shipwright",
    age: 36
},{
    name: "Brook",
    role: "Musician",
    age: 90
},{
    name: "Jinbe",
    role: "Helmsman",
    age: 44
}];
console.log(typeof crewDetails);

// Converting JavaScript Object to JSON String
const jsonString = JSON.stringify(character);
console.log(typeof(jsonString)); // Output: string
console.log(jsonString); // Output: {"name":"Monkey D. Luffy","age":19,"pirate":true,"captain":"Straw Hat Pirates","bounty":"3,000,000,000 Berries"}

// Converting JSON String back to JavaScript Object
const jsonObject = JSON.parse(jsonString);
console.log(typeof(jsonObject)); // Output: object
console.log(jsonObject); // Output: { name: 'Monkey D. Luffy', age: 19, pirate: true, captain: 'Straw Hat Pirates', bounty: '3,000,000,000 Berries' }

// Accessing properties from the parsed object
console.log(jsonObject.name); // Output: Monkey D. Luffy
console.log(jsonObject.age);  // Output: 19
console.log(jsonObject.captain); // Output: Straw Hat Pirates
console.log(jsonObject.bounty);  // Output: 3,000,000,000 Berries

// Accessing crew array
const crewJsonString = JSON.stringify(crew);
console.log(crewJsonString); // Output: ["Luffy","Zoro","Nami","Usopp","Sanji","Chopper","Robin","Franky","Brook","Jinbe"]

const crewJsonObject = JSON.parse(crewJsonString);
console.log(crewJsonObject); // Output: [ 'Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe' ]
console.log(crewJsonObject[0]); // Output: Luffy
console.log(crewJsonObject[1]); // Output: Zoro
console.log(crewJsonObject[2]); // Output: Nami
console.log(crewJsonObject[3]); // Output: Usopp
console.log(crewJsonObject[4]); // Output: Sanji
console.log(crewJsonObject[5]); // Output: Chopper
console.log(crewJsonObject[6]); // Output: Robin
console.log(crewJsonObject[7]); // Output: Franky
console.log(crewJsonObject[8]); // Output: Brook
console.log(crewJsonObject[9]); // Output: Jinbe

// Converting crewDetails array of objects to JSON String
const crewDetailsJsonString = JSON.stringify(crewDetails, null, 2); // Pretty print with 2 spaces indentation
console.log(crewDetailsJsonString);
/* Output:
[
  {
    "name": "Monkey D. Luffy",
    "role": "Captain",
    "age": 19
  },
  {
    "name": "Roronoa Zoro",
    "role": "Swordsman",
    "age": 21
  },
  {
    "name": "Nami",
    "role": "Navigator",
    "age": 20
  },
  {
    "name": "Usopp",
    "role": "Sniper",
    "age": 19
  },
  {
    "name": "Sanji",
    "role": "Cook",
    "age": 21
  },
  {
    "name": "Tony Tony Chopper",
    "role": "Doctor",
    "age": 17
  },
  {
    "name": "Nico Robin",
    "role": "Archaeologist",
    "age": 30
  },
  {
    "name": "Franky",
    "role": "Shipwright",
    "age": 36
  },
  {
    "name": "Brook",
    "role": "Musician",
    "age": 90
  },
  {
    "name": "Jinbe",
    "role": "Helmsman",
    "age": 44
  }
]
*/

const crewDetailsJsonObject = JSON.parse(crewDetailsJsonString);
console.log(crewDetailsJsonObject);
/* Output:
[
  { name: 'Monkey D. Luffy', role: 'Captain', age: 19 },
  { name: 'Roronoa Zoro', role: 'Swordsman', age: 21 },
  { name: 'Nami', role: 'Navigator', age: 20 },
  { name: 'Usopp', role: 'Sniper', age: 19 },
  { name: 'Sanji', role: 'Cook', age: 21 },
  { name: 'Tony Tony Chopper', role: 'Doctor', age: 17 },
  { name: 'Nico Robin', role: 'Archaeologist', age: 30 },
  { name: 'Franky', role: 'Shipwright', age: 36 },
  { name: 'Brook', role: 'Musician', age: 90 },
  { name: 'Jinbe', role: 'Helmsman', age: 44 }
]
*/

// Accessing properties from the crewDetails parsed object
console.log(crewDetailsJsonObject[0].name); // Output: Monkey D. Luffy
console.log(crewDetailsJsonObject[1].role); // Output: Swordsman
console.log(crewDetailsJsonObject[2].age);  // Output: 20
console.log(crewDetailsJsonObject[3].name); // Output: Usopp
console.log(crewDetailsJsonObject[4].role); // Output: Cook
console.log(crewDetailsJsonObject[5].age);  // Output: 17
console.log(crewDetailsJsonObject[6].name); // Output: Nico Robin
console.log(crewDetailsJsonObject[7].role); // Output: Shipwright
console.log(crewDetailsJsonObject[8].age);  // Output: 90
console.log(crewDetailsJsonObject[9].name); // Output: Jinbe  