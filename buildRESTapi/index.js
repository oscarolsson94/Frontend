import express from 'express'; //  add in package.json: "type": "module" after "main"
// const express = require('express');
import bodyParser from 'body-parser'; // allows us to take incoming request bodies

import usersRoutes from './routes/users.js';


const app = express(); // initialize express application
const PORT = 5000;

app.use(bodyParser.json()); 

app.use('/users', usersRoutes); //when ppl visist the page /users, run these routes

//Routes:

//Create a new folder called "routes"

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
// Server is now running
// npm install --save-dev nodemon auto refreshing site on change in code
// dev dependency, wont be used by users when code is pushed.
// => setup start script in package.json, replace current with "start": "nodemon index.js"


