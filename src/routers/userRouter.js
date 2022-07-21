const { Router } = require('express');
const { userController } = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = Router();

userRouter.get('/', authMiddleware.validateToken, userController.getUsersList);
userRouter.post('/', userController.addUser);

module.exports = userRouter;