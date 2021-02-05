export default class Person{

  constructor(name) {
    this.name = name;
  }
  
  sayHi() {
    return `Hi! My name is ${this.name}!`;
  }

  toString() {
    return JSON.stringify(this, null, '  ');
  }


}