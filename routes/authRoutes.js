
const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get)

module.exports = router;

// "name":"martin",
// "phone":"80996743345",
// "email": "martins@gmail.com",
// "password":"jk8k3k93"

// "name":"anilk",
// "phone":"9852365471",
// "email": "anilk@gmail.com",
// "password":"jhakaas"
// }