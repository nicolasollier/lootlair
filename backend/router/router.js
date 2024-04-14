const express = require('express');
const router = express.Router();

// Routes Controllers
const homeController = require('../controllers/routes/homeController')
const loginController = require('../controllers/routes/loginController')
const signupController = require('../controllers/routes/signupController')

router.get('/', homeController.sendWelcome);
router.post('/login', loginController.loginSuccessfull)
router.post('/signup', signupController.signupSuccessfull)


module.exports = router;