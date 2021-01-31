$(document).ready(function() {
  
  $.getJSON('showings.json', function (json) {
    $('.choose').click(function() { 
      var menuValue = document.getElementById("movies").value;
      var arr;
  switch (menuValue) {
    case "afterWeCollided":
      arr = json.showings.afterWeCollided;
      break;
    case "alfonsLekerEinstein":
      arr = json.showings.alfonsLekerEinstein;
      break;
    case "andraSidan":
      arr = json.showings.andraSidan;
      break;
    case "bertsDagbok":
      arr = json.showings.bertsDagbok;
      break;
    case "comePlay":
      arr = json.showings.comePlay;
      break;  
  }

    $('.shows').html('<h2>' + arr[0].film + ' visas följande tider:' + '</h2>');

    arr.forEach(obj => {
      $('.shows').append('<div class= "showings">' + obj.date + " " + obj.time + " " + obj.auditorium + '</div>');
    });
  });
    
    
    });
  });