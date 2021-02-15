// Destructuring arrays
let namesAndAges = [
    ['Pelle', 25],
    ['Olle', 34],
    ['Erika', 40],
    ['Gabriella', 15]
];

// Get Pelle subarray from the array
// use destructuring to get sepate
// variable names for item 0 and item 1 from the array
let [firstName, age] = namesAndAges[0];

console.log(`
Hi! I am ${firstName}
and I am ${age} years old!
`)


// We could use destructuring in conjunction with
// the array map method to "unpack" names and ages

let unpacked = namesAndAges.map(
    ([firstName, age]) => ({ // from array of arrays to array of objects
    firstName, age
})
);
console.log('unpacked', unpacked);

// Destructuring of objects
let html = '';
for (let { firstName, age } of unpacked) {

  html += `
    <div>

      <h1>${firstName}</h1>

      <p>${firstName} is ${age} age years old.</p>

      <hr>

    </div>

  `
}

document.body.innerHTML = html;