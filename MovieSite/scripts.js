$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "movieimage"> <img src="' + json.movies.afterWeCollide.image + '" alt=""></div>');
    $('main').append('<p> Title: ' + json.movies.afterWeCollide.title + '</p>');
    $('main').append('<p> Production year : ' + json.movies.afterWeCollide.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.movies.afterWeCollide.length + '</p>');
    $('main').append('<p> Genre: ' + json.movies.afterWeCollide.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.movies.afterWeCollide.distributor + '</p>');
    $('main').append('<p> Language: ' + json.movies.afterWeCollide.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.movies.afterWeCollide.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.movies.afterWeCollide.director + '</p>');
    $('main').append('<p> Actors: ' + json.movies.afterWeCollide.actors + '</p>');
    $('main').append('<p> Description: ' + json.movies.afterWeCollide.description + '</p>');
    });
  });
