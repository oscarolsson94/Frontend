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

