const express = require('express');
const router = express.Router();

// Routes Controllers
const homeController = require('../controllers/routes/homeController')
const loginController = require('../controllers/routes/loginController')

router.get('/', homeController.sendWelcome);
router.post('/login', loginController.login)

module.exports = router;
