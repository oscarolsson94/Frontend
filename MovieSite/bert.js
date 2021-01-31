$(document).ready(function() {
                  
  $.getJSON('movies.json', function(json) {
    $('main').html('<div class= "trailer">' + json.movies.bertsDagbok.trailer + '</div>');
    $('main').append('<p> Title: ' + json.movies.bertsDagbok.title + '</p>');
    $('main').append('<p> Production year : ' + json.movies.bertsDagbok.productionYear + '</p>');
    $('main').append('<p> Length: ' + json.movies.bertsDagbok.length + '</p>');
    $('main').append('<p> Genre: ' + json.movies.bertsDagbok.genre + '</p>');
    $('main').append('<p> Distributor: ' + json.movies.bertsDagbok.distributor + '</p>');
    $('main').append('<p> Language: ' + json.movies.bertsDagbok.language + '</p>');
    $('main').append('<p> Subtitles: ' + json.movies.bertsDagbok.subtitles + '</p>');
    $('main').append('<p> Director: ' + json.movies.bertsDagbok.director + '</p>');
    $('main').append('<p> Actors: ' + json.movies.bertsDagbok.actors + '</p>');
    $('main').append('<p> Description: ' + json.movies.bertsDagbok.description + '</p>');
  });
  
  $.getJSON('showings.json', function (json2) {
    let arr = json2.showings.bertsDagbok;

    $('main').append('<h2 class= "showings">Visningar:</h2>');

    arr.forEach(obj => {
      $('main').append('<div class= "showings">' + obj.date + " " + obj.time + '</div>');
    });
    
    });
  });