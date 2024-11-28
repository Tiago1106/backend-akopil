import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();

router.post('/', AuthController.auth);

export default router;