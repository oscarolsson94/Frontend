// https://jsonplaceholder.typicode.com/albums/
// https://jsonplaceholder.typicode.com/albums/1/photos


loadPhotos();

// Ladda in bilder från JSON-fil till en array
async function loadPhotos() {
  let photos = await $.getJSON("https://jsonplaceholder.typicode.com/albums/1/photos");
  renderPhotos(photos);
}

function renderPhotos(photos) {
  photos.forEach(photo => {
    
  });
}

