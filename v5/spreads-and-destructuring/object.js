let anna = {
    name: 'Anna',
    age: 25
};

let moreInfoAboutAnna = {
    hobbies: ['wind surfing', 'karate'],
    vegan: true
};

let allAboutAnna = { ...anna, ...moreInfoAboutAnna }; // merge 2 objects into 1

// transfer object properties and values to a new object
class Person {

    constructor(settings) {
        let defaults = {
            firstName: 'Jane',
            lastName: 'Doe',
            age:0
        }
        settings = { ...defaults, ...settings }; // every value passed into arguments will over-write the default values
        Object.assign(this, settings)
    }

    sayHi() {
        return `Hi there! I am ${this.firstName} ${this.lastname} and I am ${this.age} years old!`;
    
    }
}

let erik = new Person({firstName: 'Erik', age: 25})