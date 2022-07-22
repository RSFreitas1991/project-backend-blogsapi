const { Router } = require('express');
const { postController } = require('../controller/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const postRouter = Router();

postRouter.post('/', authMiddleware.validateToken, postController.createPost);

module.exports = postRouter;