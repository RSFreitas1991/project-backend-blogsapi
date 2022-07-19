const { Router } = require('express');
const { userController } = require('../controller/userController');

const userRouter = Router();

userRouter.get('/', userController.getUsersList);

module.exports = userRouter;