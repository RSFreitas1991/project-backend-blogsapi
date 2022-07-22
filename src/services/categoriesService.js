const { Category } = require('../database/models');

const categoriesService = {
  async add(name) {
    if (!name) {
      const error = new Error('"name" is required');
      error.code = 400;
      throw error;
    }
    await Category.create({ name });
    const categoryQuery = await Category.findOne({
      where: { name } });
    return categoryQuery;
  },
  async list() {
    const categories = await Category.findAll();
    return categories;
  },
};

module.exports = categoriesService;