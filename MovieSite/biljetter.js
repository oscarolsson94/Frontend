$(document).ready(function() {
  
  $.getJSON('showings.json', function (json2) {
    $('.choose').click(function() { 
    var x = document.getElementById("movies").value;
    
  switch (x) {
    case "afterWeCollided":
      var arr = json2.showings.afterWeCollided;
      break;
    case "alfonsLekerEinstein":
      var arr = alfonsLekerEinstein;
      break;
    case "andraSidan":
      var arr = json2.showings.andraSidan;
      break;
    case "bertsDagbok":
      var arr = json2.showings.bertsDagbok;
      break;
    case "comePlay":
      var arr = json2.showings.comePlay;
      break;  
  }

    $('.showings').html('<h2>Visningar:</h2>');

    arr.forEach(obj => {
      $('.showings').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });
  });
    
    
    });
  });