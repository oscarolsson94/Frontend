// A function that calls other functions depending
// on some logic
function sayHiOrBye(late, hiFunc, byeFunc) {
  // ternary operator: condition ? valueIfTrue : valueIfFalse;
  // (a ternary operator is often a good shorter replacement
  //  for an if...else clause)
  return late ? byeFunc() : hiFunc();
}

// Call sayHiOrBye
// as arguments with have a boolean flag
// + two anonymous function declarations
// IMPORTANT! sayHiOrBye can decide when or if
// to call any of those functions
console.log(sayHiOrBye(
  true,
  () => 'Hi there! Welcome to the meeting!',
  () => 'Goodbye, you are late to our meeting!'
));