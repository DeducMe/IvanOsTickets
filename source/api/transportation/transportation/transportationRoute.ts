import express from 'express';
import controller from './transportationController';

const router = express.Router();

router.post('/', controller.create);
router.get('/', controller.getAll);
router.delete('/', controller.remove);
router.put('/', controller.putTransportation);

export default router;
