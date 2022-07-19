const { Router } = require('express');
const authController = require('../controller/authController');

const authRouter = Router();

authRouter.post('/', authController.login);

module.exports = authRouter;