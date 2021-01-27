// persons is an array
// with two objects in
// the objects are declared with object literal syntax
// and become instances of the generic Object class
let persons = [
  {
    firstName: 'Olle',
    lastName: 'Persson',
    age: 25,
    hobbies: ['Swimming', 'Football', 'Boxing']
  },
  {
    firstName: 'Anna',
    lastName: 'Gabrielsson',
    age: 34,
    hobbies: ['Karate', 'Drag racing']
  }
];

// The data structure shown in persons
// "an array of objects" is very common!
// You could that any SQL table follows this structure
// but in SQL the array is a called a table
// and the objects are called rows - 
// but its a similar structure

console.log(persons);

// Serialize persons to JSON using JSON.stringify
let myJsonString = JSON.stringify(persons, null, '  ');

console.log(myJsonString);

// Deserialize a json string to data using JSON.parse
let deserializedToRealData = JSON.parse(myJsonString);

// Note: The deserializedToRealData now contains
// an exact copy of the data originally in persons
console.log(deserializedToRealData);