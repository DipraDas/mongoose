import express from 'express';
import { createUser, getUser } from './user.controller';

const router = express.Router();

router.get('/', getUser)
router.post('/create-user', createUser)

export default router;