// Template literals----------------------------------------

// let word1 = "Oscar";
// let word2 = "Olsson";
// let num1 = 2;
// let num2 = 3;

// const fullName = `${num1 + num2} ${word2}`;

// // let example = "Hello \n" + "world"; // Multi line strings
// let example = `${"Hello"} 
// ${"World"}
// `;

// document.getElementById("example").innerText = example;
// // console.log(example);

// Destructuring objects-------------------------------

// const player = {
//   name: 'Lebron James',
//   club: 'LA Lakers',
//   address: {
//     city: 'Los Angeles'
//   }
// };

// // player.name;
// // player.club;

// const { name, club, address: { city } } = player; // Take the values out of the object

// console.log(`${name} plays for ${club} and lives in ${city}`);

// challenge:

// const student = {
//     name: "Kyle",
//     age: 24,
//     projects: {
//         diceGame: "Two player dice game using JavaScript"
//     }
// }

// const { name, age, projects: { diceGame } } = student;

// console.log(`${name} ${age} ${diceGame}`);

// Destructuring Arrays-------------------------------------

// let [firstName, middleName, lastName] = ["Oscar", "Coding god", "Olsson"];

// firstName = "Oskar"; // firstName stores the referense to index [0] in the array

// console.log(`${firstName} ${middleName} ${lastName}`)

// Object Literals------------------------------------------

// function addressMaker(city, state) {
//     // const newAddress = {newCity: city, newState: state}; ->
//     const newAdress = {city, state} // If parameter name as the same as attribute names
    
//     console.log(newAddress);
// }

// addressMaker('Austin', 'Texas');

// Challenge

// function addressMaker(address) {

//   const { city, state } = address;
  
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
    
// }

// addressMaker({city: 'Austin', state: 'Texas'});

// For of loop------------------------------------
// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) { //singular of the array name
//   total += income;
//   console.log(income);
// }

// let fullName = "Oscar Coding God Israel";

// for (const char of fullName) { //can be used on any iterable, even strings
//   console.log(char);
// }

// const students = [
//   { name: "John", city: "New York" },
//   { name: "Peter", city: "Paris" },
//   { name: "Kate", city: "Sidney" }
// ];

// for (const student of students) {
//   console.log(`${student.name} lives in ${student.city}`);
// }

// Spread operator-------------------------------- (copying object, ned referense)

// let contacts = ["Mary", "Joel", "Danny"];

// let personalFriends = ["David",...contacts, "Lily"]; // Make a copy of the personalFriends array, independant copy, not pointing to the same object.

// console.log(personalFriends);

// contacts.push("John");

// console.log(personalFriends);

// let person = {
//   name: "Adam",
//   age: 25,
//   city: "Manchester"
// }

// let employee = {
//   ...person, // copying the values from person object
//   salary: "$3000",
// }

// console.log(employee);

// const shoppingList = ["eggs", "milk", "butter"];


// const shoppingBasket = [ ...shoppingList, "bread", "pasta"];

// console.log(shoppingBasket);

// Rest Operator----------------------------------------

// function add(...nums) { 
//   nums.push(2);
//   console.log(nums);
// }

// add(4, 5, 6, 7, 12); // call the function with an array of all the inputs

// Arrow-functions-----------------------------------------

//anonymous function - ONLY anonymous functions.
// const lunchMenu = function(food) {
//   return `I'm going to eat ${food} for lunch`;
// }
// // -->
// const lunchMenu = food =>  `I'm going to eat ${food} for breakfast`;

// Default parameters-----------------------------------------------

// const leadSinger = (artist = "someone") => { //If no argument is send when calling the function. "someone" will be used.
//     console.log(`${artist} is the lead singer of Cold Play`);
// }

// leadSinger();

// function foodShopping( food = "something") {
//     console.log(`I'm going to buy ${food} from the grocery shop`);
// }

// foodShopping();

// includes() --------------------------------------------------------

// let numArray = [1, 2, 3, 4, 5];

// console.log(numArray.includes(2)) // returns false or true

// const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

// if( listIngredients.includes("chocolate")) {
//     console.log("We are going to make a chocolate cake" );
// } else {
//     console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
// }

// let and const -------------------------------------------------------

// let uses block scope.
// const is used when a value is expected to NOT be changed. 
// const example = 5;
// example = 4; // does not work with primitive types!!

// console.log(example)

// const example = [];
// example.push(5); // You can add and remove numbers from a non-pimitive type const
//                 // But you CANT re-assign the variable to another object type!

// console.log(example);

// Import and export ---------------------------------------------------

// export const data = [1, 2, 3];

// // in another file:

// import { data } from "es6.js";

// console.log(data);

// export const add = (num1, num2) => {
//   return num1 + num2;
// }

// // in another file:

// import { add } from "es6.js";

// let result = add(3, 2);
// console.log(result);

// padStart() and padEnd()----------------------------------------------

// let example = "Dylan"; //padStart(string length, "char to add") adds to the front, padEnd() adds to the end of the string

// console.log(example.padStart(10, "a")); // adds a's at the start of the string until it is 10 chars long

// example = "Dylan Israel";

// console.log(example.padEnd(10, 'a')); // does not add anything because the string is already more than 10 chars long

// let example = 'YouTube.com/CodingTutorials360';

// console.log(example.padStart(100)); // pads the string with to the length of 100, with empty characters
// console.log(example.padEnd(1)); // nothing happens, string is longer than 1 char

// Classes -------------------------------------------------------------

// export class Animal {
//   constructor(type, legs) {
//     this.type = type;
//     this.legs = legs;
//   }

//   makeNoise(sound = "Loud Noise") {
//     console.log(sound)
//   }

//   get metaData() {
//     return `Type: ${this.type}, Legs: ${this.legs}`;
//   }

//   static returnTen() {
//     return 10;
//   }

// }

// // another class

// // import { Animal } from "animal.js";


// let cat = new Animal("cat", 4); // create an instance of the class Animal

// cat.makeNoise("Meow"); // use a method-call on the instance 
// console.log(cat.metaData); 

// console.log(Animal.returnTen()); // static function does not need an instance of the class to be used

// export class Cat extends Animal { //Using the super-constructor while extending class Animal
//     constructor(type, legs, tail) {
//         super(type, legs);
//         this.tail = tail;
//   }
  
// makeNoise(sound = "meow") { //override a method in the child class
//         console.log(sound);
//     }

// }

// Trailing commas---------------------------------------------------------


