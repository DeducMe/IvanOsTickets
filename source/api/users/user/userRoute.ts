import express from 'express';
import controller from './userController';

const router = express.Router();

router.post('/', controller.create);
router.post('/login', controller.login);
router.get('/', controller.getAll);

export default router;
