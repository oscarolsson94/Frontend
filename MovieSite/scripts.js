fetch("./movies.json")
.then(response => {
   return response.json();
})
  .then(data => console.log(data));

  