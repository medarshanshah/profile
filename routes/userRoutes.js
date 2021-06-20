const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/user/profile', userController.profile);


module.exports = userRouter;