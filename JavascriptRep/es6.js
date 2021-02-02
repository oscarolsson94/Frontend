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

// Default parameters

