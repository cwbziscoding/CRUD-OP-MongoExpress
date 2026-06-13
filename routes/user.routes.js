
import express from 'express';

import { getAllUsers, createUser, deleteUserById, updateUserById } from '../services/user.services.js';

const router = express.Router();

router.get('/all', getAllUsers);

router.post('/create', createUser);

router.delete('/delete/:id', deleteUserById);

router.put('/update/:id', updateUserById);

export default router;
