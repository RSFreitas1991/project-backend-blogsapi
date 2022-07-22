const categoriesService = require('../services/categoriesService');

const categoriesController = {
  async addCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await categoriesService.add(name);
      res.status(201).json(category);
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
};

module.exports = { categoriesController };