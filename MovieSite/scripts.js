$(document).ready(function() {
           
            
  $.getJSON('movies.json', function(json) {
    $('main').html('<p> Title: ' + json.title + '</p>');
    $('main').append('<p> Production year : ' + json.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    $('main').append('<p> Genre: ' + json.length + '</p>');
    $('main').append('<p> Distributor: ' + json.length + '</p>');
    $('main').append('<p> Language: ' + json.length + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    });
  });
