let userName = 'Jane Doe';

// Add delegated event handling
// grab an base element (body is good) you are sure
// exists - this event starts running when somebody clicks the body
// but will only run the anonymous function if
// the "filter" (you are above a .say-hi-button) is true...
$('body').on('click', '.say-hi-button', function () {
  // Remove all old h2 elements
  $('h2').remove();
  // Add a h2 element with a greeting
  $('body').append('<h2>Hi there ' + userName + '!</h2>');
});

$('body').on('click', '.enter-name-button', function () {
  userName = prompt('Enter your name:');
});

// DOM Manipulation: Add some buttons to the page
$('body').append('<button class="enter-name-button">Enter your name</button>');
$('body').append('<button class="say-hi-button">Say hi</button>');


// CREATE A CLOCK

// Add a clock that shows the current time
$('body').prepend('<div class="clock"></div>');

function setTime() {
  // Grap the clock element and change it's text
  // to the current time...
  $('.clock').text(new Date().toLocaleTimeString());
}

// Note:
// setInterval runs a function again and again
// with an interval set in milliseconds (in this case 1000)
setInterval(setTime, 1000);

// Because the initial call to setTime first is done
// after 1000 ms i want to call the function once immediately
// to show the clock as soon as the page load
setTime();
