// SELECTORS

$('h1').hide(); // Hides element

$('h1#heading1').hide(); // Using id to grab

$('h1.heading2').hide(); // Using class to grab

$('p span').css('color', 'red'); // Using CSS property to change color

$('ul#list li: first').css('color', 'red'); // Changing color of first child element
$('ul#list li: last').css('color', 'green'); // Changing color of last child element
$('ul#list li: even').css('background-color', 'yellow'); // Changing background-color color on even items
$('ul#list li: odd').css('background-color', '#cccccc'); // Changing background-color color on odd items

$('ul#list li: nth-child(3n)').css('list-style', 'none'); // Removing bullet point from every 3rd element in list

$(':button').hide(); // Using input types to grab
$(':submit').hide();
$(':text').hide();

$('[href]').css('color', 'red'); // Using attribute to grab href

$('a[href="http://yahoo.com"]').css('color', 'green'); // Using attribute VALUE to grab

$('*').hide(); // target EVERYTHING

// EVENTS

$(document).ready(function () { // Safe to have, not depending on where in the document call is made
  
  $('#btn1').click(function() { // Send alert message when button clicked
    alert('Button Clicked!');
  });

  $('#btn1').click(function() { // Hide <p> when button clicked
    $('.para1').hide();
  });

  $('#btn2').click(function() { // Show <p> when button clicked
    $('.para1').show();
  });

  $('#btn').click(function() { // Toggle between show and hide on button clicked
    $('.para1').toggle();
  });

  $('#btn1').dblclick(function () { // Double click to hide/show
    $('.para1').toggle();
  });

  $('#btn1').hover(function () { // Hover over element to toggle, combination of mouseenter and mouseleave
    $('.para1').toggle();
  });

  $('#btn1').on('mousemove', function () { // Move mouse inside element to toggle show/hide
    $('.para1').toggle();
  });

  $('#btn1').on('mousedown', function () { // Press down mouse inside element to toggle show/hide
    $('.para1').toggle();
  });

  $('#btn1').on('mouseup', function () { // Combine with mousedown to hide when mousekey bressed and show when released
    $('.para1').toggle();
  });

  $(document).on('mousemove', function (e) { // COOL Move mouse around and constantly print coordinates of mouse in console
    console.log('Coords: Y: ' + e.clientY + " X: " + e.clientX);
  });

  $(document).on('mousemove', function (e) { // COOL Move mouse around and constantly change coordinates shown in element
    $('h2').html('Coords: Y: ' + e.clientY + " X: " + e.clientX);
  });

  $('input').focus(function () { // When u click INSIDE an input field, change background color
    //alert('Focus');
    $(this).css('background', 'pink'); // 'this' means the current field you have in focus
  });

  $('input').blur(function () { // When u click OUTSIDE of an input field, change background color
    //alert('Focus');
    $(this).css('background', 'white'); // 'this' means the current field you have in focus
  });

  $('input').keyup(function (e) { // When a key is released inside a field, log the value of the key in console
    console.log(e.target.value)
  });







  });