import express from 'express';

import { getUsers, createUser, getOneUser, deleteUser, modifyUser } from '../controllers/users.js'

const router = express.Router();

// all routes in here are starting with /users

//get ALL users from the DB
router.get('/', getUsers);

//add a user to the DB
router.post('/', createUser);

//get ONE single user. 
router.get('/:id', getOneUser);

//to DELETE user with specific id from DB
router.delete('/:id', deleteUser);

//to MODIFY an existing object
router.patch('/:id', modifyUser);


export default router; //export so we can use it in index.js-file