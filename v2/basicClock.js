// Add a clock that shows the current time
$('footer').prepend('<div class="clock"></div>');

function setTime() {
  // Grap the clock element and change it's text
  // to the current time...
  $('.clock').text('Current local time: ' + new Date().toLocaleTimeString());
}

// Note:
// setInterval runs a function again and again
// with an interval set in milliseconds (in this case 1000)
setInterval(setTime, 1000);

// Because the initial call to setTime first is done
// after 1000 ms i want to call the function once immediately
// to show the clock as soon as the page load
setTime();