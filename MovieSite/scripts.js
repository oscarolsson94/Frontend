$(document).ready(function() {
           
            
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "movieimage"> <img src="' + json.image + '" alt=""></div>');
    $('main').append('<p> Title: ' + json.title + '</p>');
    $('main').append('<p> Production year : ' + json.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.length + '</p>');
    $('main').append('<p> Genre: ' + json.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.distributor + '</p>');
    $('main').append('<p> Language: ' + json.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.director + '</p>');
    $('main').append('<p> Actors: ' + json.actors + '</p>');
    $('main').append('<p> Description: ' + json.description + '</p>');
    });
  });
