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

  $('select#gender').change(function(e){ // When the value in a select-menu changes, the value of the choice
    alert(e.target.value);
  });

  $('#form').submit(function (e) { // When pressing a submit button, print the value of the name field
    e.preventDefault(); // Prevent the standard behaviour, which is submitting the form
    let name = $('inpute#name').val(); // Get the value from an input field
    console.log(name);
  });

  

  // DOM MANIPULATION

  $('p.para1').css({ color: 'red', margin: '2px', background: '#ccc' }) // Change multiple attributes in DOM by throwing in object
  
  $('p.para2').addClass('myClass'); // Add a class to an existing element
  
  $('p.para2').removeClass('myClass'); // Remove a class to an existing element

  $('#myDiv').text('Hello World'); // Set the text in a div

  $('#myDiv').html('<h3>Hello World</h3>'); // Set the content of a div to an h3
  alert($('myDiv').text()); // Get the value of the text

  $('ul').append('<li>Append List Item</li>'); // Add an item first inside the list

  $('ul').prepend('<li>Append List Item</li>'); // Add an item last inside the list

  $('ul').before('<h4>Hello</h4>'); // Add something BEFORE an element

  $('ul').after('<h4>World</h4>'); // Add something AFTER an element

  $('ul').empty(); // the ul still remains, but the inner elements are gone

  $('ul').detach(); // removes the ul from the DOM

  $('a').attr('target', '_blank') // adds a target-attribute to the <a>-tag, opens a new window when link is clicked
  alert($('a').attr('href')); // grab the value of an attribute

  $('a').removeAttr('target'); // removes the specified attribute 'target' from the <a>-tag

  $('p').wrap('<h1>'); // wraps every single p inside its own h1
  $('p').wrapAll('<h1>'); // wraps every single p inside the same h1

  $('#newItem').keyup(function (e) { // when you press enter when in a field, add the content of the field as a list item
    let code = e.which; // code takes the unique button value
    if (code == 13) { // 13 is the ENTER-key
      e.preventDefault();
      $('ul').append('<li>' + e.target.value + '</li>');
    }
  });

  let myArr = ['Brad', 'Kelly', 'Nate', 'Jose'];

  $.each(myArr, function (i, val) {  // Print every name in the array
    console.log(val);
  });

  $.each(myArr, function (i, val) {  // Add every name in the array as an <li>-element in the ul-list
    $('ul').append('<li>' + val + '</li>')
  });

  let newArr = $('ul li').toArray(); // Grab a list and put every <li>-element into an array
  console.log(newArr);

// EFFECTS AND ANIMATIONS
  
  $('#btnFadeOut').click(function(){ // When a button is clicked, fade out the div
    $('div').fadeOut(); // can take parameters 'fast', 'slow', '3000' (ms)
  });

  $('#btnFadeOut').click(function(){  // fadeOut can also take a callback-function as second parameter, this function decides what happens when fadeOut is done.
    $('div').fadeOut(3000, function () {
      $('btnFadeOut').text('Its Gone'); // change the text of the button after 3000ms
    }); 
  });

  $('#btnFadeIn').click(function(){  // fadeIn fades the element in
    $('div').fadeIn(3000); 
  });

  $('#btnFadeToggle').click(function(){  // fadeToggle fades the element in and out
    $('div').fadeToggle(1000); 
  });

  $('#btnSlideDown').click(function(){  // slides the div down
    $('div').slideDown(3000); 
  });

  $('#btnSlideUp').click(function(){  // slides the div up
    $('div').slideUp(3000); 
  });

  $('#btnSlideToggle').click(function(){ // slides the div up and down
    $('div').slideToggle(3000); 
  });

  $('btnStop').click(function () { // stops the div from sliding, can be done mid-slide
    $('div').stop();
  })
















  });