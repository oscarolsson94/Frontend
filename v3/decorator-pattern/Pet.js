export default class pet{

  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  sayHi() {
    return `
    Hi!
    I am a ${this.species} named ${this.name}!
    `
  }

  

}