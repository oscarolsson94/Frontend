// We use the queryselector + innerHTML
// to replace content in exisiting elements in the DOM/HTML
document.querySelector('h3').innerHTML = 'Hej från JavaScript!';

// We can also create brand new elements
let aPtag = document.createElement('p');
// Add text/content inside them
aPtag.innerHTML = 'I am a paragraph created from JavaScript'
// And append/add them last in the DOM
document.querySelector('body').append(aPtag);

// We can also prepend new elements
let anImageTag = document.createElement('img');
// Add a src 
anImageTag.src = 'https://java20gbg.lms.nodehill.se/uploads/images/2021-01-3T17-57-16/billie-i-hangmattan.jpg';
// Prepend add something a the top/first
document.querySelector('body').prepend(anImageTag);