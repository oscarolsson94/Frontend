// If you want to use await you must but the await command
// inside a function that you declare as async
async function readJson() {
  // $.getJSON reads JSON from a url and deserializes it
  // into a data structure
  // (writing await before $.getJSON pauses the execution
  // of the code until we have hade time to read the json)
  let persons = await $.getJSON('persons.json');
  // If you want to fetch and deserialize som JSON without
  // jQuery this is the syntax instead:
  // let persons = await (await fetch('persons.json')).json();
  console.log(persons);
  showJsonAsHtml(persons);
}

// Show the persons and their properties as html
function showJsonAsHtml(persons) {
  // A for...of loop loops through an array
  // tip: Name you arrays in plural (persons)
  // and your loop variable same name but in singular (person)
  for (let person of persons) {
    // Create a div as an jquery object
    let $person = $('<div class="person"></div>');
    // A for...in loop loops through the properties/keys 
    // of an object 
    for (let key in person) {
      let value = person[key];
      if (key === 'hobbies') { value = value.join(', '); }
      $person.append('<div><span>' + key + ':</span>' + value + '</div>');
    }
    $('body').append($person);
  }
}

// Start the program
readJson();