import express from 'express';
import controller from './busController';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.delete('/', controller.remove);
router.put('/', controller.put);

export default router;
