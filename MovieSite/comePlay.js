$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "trailer">' + json.movies.comePlay.trailer + '</div>');
    $('main').append('<p> Title: ' + json.movies.comePlay.title + '</p>');
    $('main').append('<p> Production year : ' + json.movies.comePlay.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.movies.comePlay.length + '</p>');
    $('main').append('<p> Genre: ' + json.movies.comePlay.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.movies.comePlay.distributor + '</p>');
    $('main').append('<p> Language: ' + json.movies.comePlay.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.movies.comePlay.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.movies.comePlay.director + '</p>');
    $('main').append('<p> Actors: ' + json.movies.comePlay.actors + '</p>');
    $('main').append('<p> Description: ' + json.movies.comePlay.description + '</p>');
    });
  });