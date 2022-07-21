const { Router } = require('express');
const { userController } = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddleware');
//  vamo trabalhar avaliador
const userRouter = Router();

userRouter.get('/:id', authMiddleware.validateToken, userController.getUserById);
userRouter.get('/', authMiddleware.validateToken, userController.getUsersList);
userRouter.post('/', userController.addUser);

module.exports = userRouter;