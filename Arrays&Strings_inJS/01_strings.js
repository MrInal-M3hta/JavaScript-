/*

    Strings are for storing text.

    Strings are written with quotes.

*/


let animeName01 = "One Piece";  // Double quotes
let animwNamw02 = 'Demon Slayer';  // Single quotes

/*
Note
Strings created with single or double quotes work the same.

There is no difference between the two.
*/

//  ## Quotes Inside Quotes ##
let answer1 = "It's Straw Hat";
let answer2 = "He is called 'King of the Pirates' ";
let answer3 = 'He is called "King od the Hell" ';

//  ## Template Strings ##
const name = "MonkeyDLuffy";
const captainOf = "StrawHats";

console.log(`His name is ${name} and he is the captain of ${captainOf} crew `); 



//  ## Another way of creating a String ##

const animeName = new String('One-Piece');
console.log(animeName[0]); // Output => 'O'; 
console.log(animeName.__proto__); //Prototype it will give u this output =>{};, for better uderstanding run this in console;
console.log(animeName.length);
console.log(animeName.toUpperCase());
console.log(animeName.charAt(2));
console.log(animeName.indexOf('P'));

const newString = animeName.substring(0, 4); // Is does not include the end position means it only print 0,1,2,3 postion characters ;    And we can't pass -ve values.
console.log(newString);

const anotherString = animeName.slice(-8, 4); // We can pass both -ve & +ve values in this;  -ve means it slice the string from backwards.
console.log(anotherString);

const newStringOne = "     BoaHancock     ";
console.log(newStringOne);
console.log(newStringOne.trim()); // This will remove the whitespace from both end and starting;

const url = "https://monkeyDluffy/onepiece-com"
console.log(url.replace('-', '.')); // This will remove '-' and eplace it with '.';
console.log(url.includes('Zoro')); // It will give output in True or False only;


//  ### Split ###
console.log(animeName.split('-'));

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
//For more about split=> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 


// For more about Strins in Java Script read MDN;






