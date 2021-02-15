// Spread operators
//arrays:---------------------------------------------------
let names = ['Anna', 'Beata', 'Cecilia'];

let moreNames = ['David', 'Erik', 'Fredrik'];

// The classic (before spread operators) way to concatenate arrays
let allNames = names.concat(moreNames);

// The same with spread-operator
let everyone = [...names, ...moreNames];

// Spread operator can do more:
let dogs = ['Lassie', 'Fido'];

// Takes the old dogs-array and adds that and the new 'Fabian' value to a new array
dogs = [...dogs, 'Fabian'];

// Spreads are non-destructive
// (They do not change the original array)


// Can also use spread like this:
// in Java too, but called 'var args'
function greetAll(...personNames) { //can send in any number of arguments, and they will be sent as an array
    for (let name of personNames) {
        console.log('Hi there ' + name + '!');
    }
}

greetAll('Anna', 'Britt', 'Cecil');

//objects:--------------------------------------------------