import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();

router.post('/', UserController.register);
router.get('/', UserController.getAllUsers);

export default router;