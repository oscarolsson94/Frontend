// Note: Named functions are hoisted
// (can be called before the lines where they are)
console.log(sayHi('Olle'));

// A named function
function sayHi(name) {
  return 'Hi there ' + name + '!';
}

// An anonymous function
let sayHi2 = function (name) {
  return 'Hi there ' + name + '!';
};

console.log(sayHi2('Anna'));

// An arrow function
let sayHi3 = (name) => {
  return 'Hi there ' + name + '!';
};

console.log(sayHi3('Marcel'));

// Shorthand syntax for arrow functions, rule 1
// If you only have one line of code
// you can omit the program block + return
let sayHi4 = (name) => 'Hi there ' + name + '!';

console.log(sayHi4('Eva'));

// Shorthand syntax for arrow functions, rule 2
// If you have exactly ONE argument / parameter 
// you can omit the parenthesis
let sayHi5 = name => 'Hi there ' + name + '!';

console.log(sayHi5('Yngve'));