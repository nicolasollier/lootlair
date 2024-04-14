import express from 'express';
import { homeController, loginController, signupController } from '../controllers/routes/index.js';

const router = express.Router();

router.get('/', homeController);
router.post('/login', loginController);
router.post('/signup', signupController);

export default router;
