const { BlogPost, sequelize, PostCategory } = require('../database/models');

const postService = {
  async validadeFields(title, content, categoryIds) {
    if (!title || !content || !categoryIds) {
      const error = new Error('Some required fields are missing');
      error.code = 400;
      throw error;
    }
    const category = await BlogPost.findOne({
      attributes: { exclude: 'password' },
      raw: true,
      where: { categoryId: categoryIds[0] },
    });
    if (!category) {
      const error = new Error('"categoryIds" not found');
      error.code = 400;
      throw error;
    }
  },
  async findPostId() {
    const post = await BlogPost.findAll({
      raw: true,
      limit: 1,
      order: [['id', 'DESC']],    
    });
    return post[0].id;
  },
  async findLastPost() {
    const post = await BlogPost.findAll({
      raw: true,
      limit: 1,
      order: [['id', 'DESC']],    
    });
    return post;
  },
  async create(title, content, categoryIds, userData) {
    const t = await sequelize.transaction();
    const userId = userData.user.id;
    try {
      const promises = [];
      await BlogPost.create(
        { title, content, userId, published: new Date(), updated: new Date() },
        { transaction: t },
        );
      const postId = await this.findPostId(title);
      for (let index = 0; index < userId.length; index += 1) {
        promises.push(PostCategory.create({ postId, categoryId: categoryIds[index] },
          { transaction: t }));
      }
      await Promise.all(promises);
      return this.findLastPost();
    } catch (error) {
        await t.rollback();
    }
  },
};

module.exports = postService;