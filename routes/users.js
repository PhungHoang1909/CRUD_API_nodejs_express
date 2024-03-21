import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes in herer are starting with/users
router.get('/', getUsers);

// create route to add users to database
router.post('/', createUser);

// create route to get a user 
router.get('/:id', getUser);

// delete a user
router.delete('/:id', deleteUser);

// Path route: update a user
router.patch('/:id', updateUser);


// make it use in index.js:
export default router;
