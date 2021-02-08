pageLayout();
addSearchKeyupEvent();

// Add our page 'skeleton' - a search field 
// and an empty div for search results
function pageLayout() {
  $('body').html(/*html*/`
    <header>
      <h1>chinook: Search by artist</h1>
    </header>
    <main>
      <div class="search-field-wrapper">
        <input 
          type="text" 
          class="search-field-artist" 
          placeholder="Enter an artist"
        >
      </div>
      <div class="search-results"></div>
    </main>
    <footer>
      <p>© Oscar Olsson 2021 &ndash; Using the chinook database</p>
    </footer>
  `);
}

// Connect a keyup event to the search field
function addSearchKeyupEvent() {
  $('.search-field-artist').keyup(() => {
    // Read the value of the search field
    let toSearch = $('.search-field-artist').val();
    // Perform the search
    searchByArtist(toSearch);
  });
}

// Perform a search
async function searchByArtist(searchTerm) {
  // If no search term then just empty the result
  if (searchTerm === '') {
    console.clear();
    showSearchResult('', []);
    return;
  }
  // Run a SQL query and wait for the result
  let result = await db.run(
    /*sql*/`
      SELECT Name AS artist, Title AS album
      FROM albumsAndArtists 
      WHERE artist LIKE $search
    `,
    {
      search: '%' + searchTerm + '%'
    }
  );
  // Debug: Show the result in the console
  console.clear();
  console.table(result);
  // Show the results
  showSearchResult(searchTerm, result);
}

// Show the result of the search
// - render the result as html
function showSearchResult(searchTerm, result) {
  let regExp = new RegExp('(' + searchTerm + ')', 'i');
  let html = '';
  let lastArtist = '';
  for (let row of result) {
    // Only show an artist headline
    // if not the same artist as before
    if (lastArtist !== row.artist) {
      html += `<hr>
        <h2>${row.artist.replace(regExp, '<i>$1</i>')}<h2>
      `;
      lastArtist = row.artist
    }
    // Show the album
    html += `<h4>${row.album}</h4>`;
  }
  html += '<hr>';
  $('.search-results').html(html);
}