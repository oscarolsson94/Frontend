$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "trailer">' + json.movies.andraSidan.trailer + '</div>');
    $('main').append('<p> Title: ' + json.movies.andraSidan.title + '</p>');
    $('main').append('<p> Production year : ' + json.movies.andraSidan.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.movies.andraSidan.length + '</p>');
    $('main').append('<p> Genre: ' + json.movies.andraSidan.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.movies.andraSidan.distributor + '</p>');
    $('main').append('<p> Language: ' + json.movies.andraSidan.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.movies.andraSidan.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.movies.andraSidan.director + '</p>');
    $('main').append('<p> Actors: ' + json.movies.andraSidan.actors + '</p>');
    $('main').append('<p> Description: ' + json.movies.andraSidan.description + '</p>');
  });
  
   $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.andraSidan;

    $('main').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('main').append('<div class= "showings">' + obj.date + " " + obj.time + '</div>');
    });
    
    });
  });
