// Arrays are used to store multiple values in a single variable.
// In JavaScript, arrays are written with square brackets [].
// Array elements are separated by commas.


// Creating an Array
// const strawHats = ["Luffy", "Zoro", "Sanji"]; // Creating a Array;

// You can also create an empty array, and provide elements later:
const family = [];
family[0]= "MonkeyD.Garps";
family[1]= "MonkeyD.Dragon";
family[2]= "MonkryD.Luffy";
console.log(typeof family); 

console.log(family[0]);
console.log(family[1]);
console.log(family[2]);

// Changing an Array Element
family[0] = "GolD.Ace";
family[1] = "Sabo";
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family);

//      ### JavaScript Array Methods ###

const strawHats = ["Luffy", "Zoro", "Sanji", "Nami", "Robin"];
const onePieceOtherChar = ["Law", "Kid", "Shanks", "Marco"];
const marineOfficers = ["Akainu", "Kizaru", "Fujitora", "Ryokugyu", "Smoker", "Tsuru", "Momonga", "Koby", "Helmeppo (Koby's friend)"];

let size = strawHats.length;
console.log(size); // The length property returns the length (size) of an array:

strawHats.length = 5;
console.log(strawHats); //The length property can also be used to set the length of an array:

console.log(strawHats.toString()); // The JavaScript method toString() converts an array to a string of (comma separated) array values.

// console.log(strawHats); // With JavaScript, the full array can be accessed by referring to the array name:

let memberAt = strawHats.at(2);
console.log(memberAt); //Get the third element of strawHats using at():

const memberAt1 = strawHats.indexOf("Sanji");
console.log(memberAt1); // In which Index this element located at ; If that element is not present in Array then it return -1; 

console.log(strawHats.join(" $ ")); // It behaves just like toString(), but in addition you can specify the separator:

strawHats.pop(); // The pop() method removes the last element from an array:

strawHats.push("Robin"); // The push() method adds a new element to an array (at the end):

console.log(strawHats.shift()); // The shift() method removes the first array element and "shifts" all other elements to a lower index.

console.log(strawHats.unshift("Luffy")); // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

console.log(strawHats.includes("Luffy")); // This check that "Luffy" is present in that array or not. This returns the value in booleans;

strawHats[strawHats.length] = "Chopper";
console.log(strawHats); //The length property provides an easy way to append a new element to an array:

// delete strawHats[5]; // Using delete() leaves undefined holes in the array. Use pop() or shift() instead.
// console.log(strawHats);

// const sliceInJS = marineOfficers.slice(4);
// console.log(sliceInJS); // The slice() method slices out a piece of an array into a new array:

const sliceinJS = marineOfficers.slice(4, 8);
console.log(sliceinJS); //The method then selects elements from the start argument, and up to (but not including) the end argument.

const spliceinJS = onePieceOtherChar.splice(2, 2 , "Vivi", "BuggyTheClown");
console.log(spliceinJS); // This will give the removed elemnt from the Array;
console.log(onePieceOtherChar);// This will give the Array with new elements added;
/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (2) defines how many elements should be removed.
 */

const onePiece = strawHats.concat(onePieceOtherChar); // The concat() method creates a new array by merging (concatenating) existing arrays:
console.log(onePiece);
/*
The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments.
 */

const mergingThreeArrays = strawHats.concat(onePieceOtherChar, sliceinJS);
console.log(mergingThreeArrays);

const addingMarine = marineOfficers.concat("Sengoku");
console.log(addingMarine);


//........................$$$$$$$$$$$$$$$$$$$$$$$$$$$$........................\\

/*
Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:
*/

const anime = new Array("One_Piece", "Bleach", "Naruto");
const webSeries = new Array("Stranger_Things", "All_of_us_are_Dead", "Game_of_Thrones");

// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(anime.toString());

// With JavaScript, the full array can be accessed by referring to the array name:
console.log(anime);

const anime_webSeries = new Array(...anime, ...webSeries);
console.log(anime_webSeries); // This will add Both Array; We can do same operation in without new keyword Array;


const numberArray = [1, 2, 3, [4, 5], 6, 7, [8, 9,["PUBG", "FreeFire", "CallOfDuty"], 11], 10];
const flatArray = numberArray.flat(Infinity);
console.log(flatArray);


console.log(Array.isArray(numberArray)); // This will give output in Booleans;
console.log(Array.isArray("Coding_is_for_Loosers__Just_Chill_and_EnjoyYourLife"));// We can check if a Variable is an Array or not;
console.log(Array.from("Coding_is_for_Loosers__Just_Chill_and_EnjoyYourLife")); // With this we can convert String or any other Variable also Objects to array;


let anime1 = "Your Name";
let anime2 = "Fairy Tail";
let anime3 = "Horimiya"
let animeList = Array.of(anime1,anime2,anime3); // Return a new Array from a set of Elemnets;
console.log(animeList);

Array.from(); // Creates a new, shallow-copied Array instance from an array-like or iterable object. OR  Array.from() converts array-like objects into a real array

// For more about Arrays we can Study on MDN website; \\




