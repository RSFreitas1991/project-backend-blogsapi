const { Router } = require('express');
const { categoriesController } = require('../controller/categoriesController');
const authMiddleware = require('../middlewares/authMiddleware');

const categoriesRouter = Router();

categoriesRouter.post('/', authMiddleware.validateToken, categoriesController.addCategory);
categoriesRouter.get('/', authMiddleware.validateToken, categoriesController.listCategories);

module.exports = categoriesRouter;