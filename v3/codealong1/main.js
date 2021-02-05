// https://jsonplaceholder.typicode.com/albums/
// https://jsonplaceholder.typicode.com/albums/1/photos


// Ladda in bilder från JSON-fil till en array
async function loadPhotos(albumId) {
  let photos = await $.getJSON(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  renderPhotos(photos);
}

function renderPhotos(photos) {
// map loopar över array samt tilldelar variabeln till articles-arrayen
  let articles = photos.map(photo => `
  <article>
    <img src="${photo.thumbnailUrl}">
    <h2>${photo.title}</h2>
  </article>
  `);

// forEach loopar endast igenom array
  articles.forEach(article => {
    $('main').append(article);
  });

}
  // loading albums and populating a select list (to select album from)

loadAlbums();

async function loadAlbums() {
  let albums = await $.getJSON('https://jsonplaceholder.typicode.com/albums/');
  renderPhotos(albums);
  }
  
  function renderAlbums(albums) {
    let $selectList = $('<select></select>');
    let options = albums.map(album => `
    <option value="${album.id}">${album.title}</option>
    `);

    options.forEach(option => {
      $selectList.append(option);
    });

    $('header').prepend($selectList);

  }





