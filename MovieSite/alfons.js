$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "trailer">' + json.movies.alfonsLekerEinstein.trailer + '</div>');
    $('main').append('<p> Title: ' + json.movies.alfonsLekerEinstein.title + '</p>');
    $('main').append('<p> Production year : ' + json.movies.alfonsLekerEinstein.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.movies.alfonsLekerEinstein.length + '</p>');
    $('main').append('<p> Genre: ' + json.movies.alfonsLekerEinstein.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.movies.alfonsLekerEinstein.distributor + '</p>');
    $('main').append('<p> Language: ' + json.movies.alfonsLekerEinstein.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.movies.alfonsLekerEinstein.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.movies.alfonsLekerEinstein.director + '</p>');
    $('main').append('<p> Actors: ' + json.movies.alfonsLekerEinstein.actors + '</p>');
    $('main').append('<p> Description: ' + json.movies.alfonsLekerEinstein.description + '</p>');
    });
  });