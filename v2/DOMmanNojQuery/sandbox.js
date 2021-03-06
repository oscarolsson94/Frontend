// Grab an html element ---
// const para = document.querySelector('p');
// const para2 = document.querySelector('.error');

// console.log(para2);

// Grab several elements (not an array, NODELIST, can use forEach) ---
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para);
// }
// );

// const errors = document.querySelectorAll('.error');

// console.log(errors);



// get an element by ID ---
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name ---
// returns HTMLCollection, cant use forEach
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// get element by tag name ---
// returns HTMLCollection
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);


// Change content of element ---
// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

// Add text to all p elements ---
// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   para.innerText += ' new text';
// });

// Change html of an element ---

//  const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// Make new p tag for each member of data set
// const content = document.querySelector('.content');

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// Get attribute of a tag and change it ---
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https//www.bing.com');
// link.innerText = 'bing.com';

// link.setAttribute('style', 'color: green'); 
//adds an attribute that didnt exist but overwrites any other styling.

// const title = document.querySelector('h1');
// title.style.color = 'yellow';
// title.style.fontSize = '60px'; //font-size = fontSize (camelCase)
// only changes one element, does not overwrite

