// let dogAge = 10;
// dogAge++;
// let dogKind = "retriever";

// console.log("The dog is a " + dogKind + ", it is " + dogAge + " years old");

// const buildDate = "October, 25, 2010"; // must be given a value at initialization

// let releasedDate;
// releasedDate = "October, 27th, 2011";

// const name = "Gator";

// let age = 10;
// age++;

//Strings-------------------------

// let name = "Dylan";

// console.log(typeof name);

// let firstName = "Oscar";
// let lastName = "Olsson";

// console.log(`${firstName} ${lastName}`.length); // template string

// console.log(`${firstName} ${lastName}             `.trim().length); // removes all spaces before and after content

// console.log(`${firstName} ${lastName}`.toUpperCase());

// console.log(`${firstName} ${lastName}`.toLowerCase());

// console.log(`${firstName} ${lastName}`.split(' ')); // returns array of the string, split at every space

// let example = 7.77;  // Only one type of number for floats,int, long etc

// console.log(example);

// console.log(parseInt(example));

// console.log(parseFloat(example));

// console.log(example.toFixed(5)); //print the variable with 5 decimal numbers

// console.log(example.toFixed(1)); //print the variable with 1 decimal number (rounds it up)

// // toFixed - method converts the number to a String

// Arrays--------------------------

// let exampleArray = [5, 6, 7];

// console.log(exampleArray.length);

// console.log(exampleArray[0]);

// exampleArray.push(1, 2, 3);

// console.log(exampleArray);

// exampleArray.pop();
// exampleArray.pop();

// console.log(exampleArray);

// exampleArray.forEach((element) => {
//   console.log(element);
// });

// Objects---------------------------

let example1 = {
  firstName: "Dylan",
  lastName: "Israel",
  address: {
    city: "Austin",
    state: "Texas"
  },
  age: 30,
  cats: ["Milo", "Tito", "Achieles"]
};

console.log(example1.firstName);

console.log(example1.address.city);

console.log(Object.keys(example1)); // print all keys on the same level

console.log(Object.values(example1)); // print all values on the same level

console.log(example1.hasOwnProperty("firstName")); // check if the object has a property

