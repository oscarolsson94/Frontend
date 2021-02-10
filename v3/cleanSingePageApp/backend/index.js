// path is a built in library to handle file paths in Node.js
const path = require('path');

// express is a popular web server library for Node.js
const express = require('express');

// You usually call the web server "app" when using express
// here we create a new web server
const app = express();

// We tell the web server to serve "static" files from the
// frontend folder (__dirname = the folder we are in)
app.use(express.static(path.join(__dirname, '../frontend')));

// We start the web server on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));