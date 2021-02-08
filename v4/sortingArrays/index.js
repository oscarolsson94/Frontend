// An array of strings
let a = [
  'Erik',
  'Anna',
  'Ceasar',
  'Barbara'
];

// Note: Sort changes the original array!

// You can call sort like this:
// and it sort of works for strings 
// sorting ascending (but sorts å and ä in the wrong order)
a.sort();
console.log(a);

// An array of numbers
let nums = [1, 20, 100];
nums.sort();
console.log(nums); // 1, 100, 20 (not so good!)

// Using sort with arguments solves this
nums.sort((a, b) => a > b ? 1 : -1);
console.log(nums); // 1, 20, 100;
nums.sort((a, b) => a > b ? -1 : 1);
console.log(nums); // 100, 20, 1;

// We often want to sort arrays of objects
let persons = [
  { firstName: 'Bertil', lastName: 'Runesson' },
  { firstName: 'Gabriella', lastName: 'Runesson' },
  { firstName: 'Anna', lastName: 'Bengtsson' }
];

// Goal: Sort by lastName asc, then by firstName asc
// This does not work for right order of the Runessons
// persons.sort((a, b) => a.lastName > b.lastName ? 1 : -1);

// Same as ORDER BY lastName, firstName in SQL
persons.sort((a, b) => {
  // If the lastNames differ sort by them
  if (a.lastName !== b.lastName) {
    return a.lastName > b.lastName ? 1 : -1;
  }
  // Otherwise sort by first name
  return a.firstName > b.firstName ? 1 : -1;
})


// How to sort non-descructive?
// insert splice() before sort!
let unsorted = [4, 3, 1, 2];
let sorted = unsorted.slice().sort();
console.log(unsorted);
console.log(sorted);