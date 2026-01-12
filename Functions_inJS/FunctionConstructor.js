
// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;

  this.intoduce = function() {
    return `Yoo, I'm ${this.firstName} ${this.lastName}, ${this.age} years old with ${this.eyeColor} eyes, And I'm gonna be the Pirate King! `;
  };
  this.crewMates = function() {
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
}
};

// Create a Person object
const myName = new Person("Monkey.D", "Luffy", 19, "Black");
const myFriend = new Person("Roronoa", "Zoro", 21, "Green");
console.log(myName);
console.log(myFriend);
console.log(myName.intoduce());
console.log(myName.crewMates());


