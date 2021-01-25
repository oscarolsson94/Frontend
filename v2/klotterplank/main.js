// Add a countdown
$('body').append('<div class="countdown">100</div>');

// Countdown from 100 to 0
let counter = 100;
// Start an interval and store the 
// id/pointer to the interval in countdownInterval
let countdownInterval = setInterval(function () {
  $('.countdown').text(--counter);
  // When the countdown has reached 0
  // clear the interval
  if (counter === 0) { clearInterval(countdownInterval); }
}, 1000);

// Add buttons that the user can click
// in order to add headlines
// and remove all added headlines
$('body').append('<button class="add-text">Klottra</button>');
$('body').append('<button class="remove-all-text">Klottersanera</button>');

// Add event handlers for the buttons
$('body').on('click', '.add-text', function () {
  if (counter === 0) {
    alert('Inget mer klottrade efter nedräkningen!');
    return;
  }
  let text = prompt('Vad vill du klottra?');
  $('body').append('<h3>' + text + '</h3>');
});

$('body').on('click', '.remove-all-text', function () {
  $('h3').remove();
});