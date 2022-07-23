const { BlogPost, sequelize, PostCategory, Category } = require('../database/models');

const postService = {
  async validadeFields(title, content, categoryIds) {
      if (!title || !content || categoryIds.length === 0) {
        const error = new Error('Some required fields are missing');
        error.code = 400;
        throw error;
      }
  },
  async categoryIdExists(categoryIds) {
    const promises = [];
    for (let index = 0; index < categoryIds.length; index += 1) {
      promises.push(Category.findAll({
        where: { id: categoryIds[index] },
      }));
    }
    const result = await Promise.all(promises);
    if (result[0].length === 0) {
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
      nest: true,
      limit: 1,
      order: [['published', 'DESC']],    
    });
    return post[0];
  },
  async create(title, content, categoryIds, userData) {
    const t = await sequelize.transaction();
    try {
      const promises = [];
      const post = await BlogPost.create(
        { title, content, userId: userData.user.id, updated: new Date(), published: new Date() },
        { transaction: t, raw: true },
        );
      for (let index = 0; index < categoryIds.length; index += 1) {
        promises.push(PostCategory.create({ postId: post.id, categoryId: categoryIds[index] },
          { transaction: t }));
      }
      await Promise.all(promises);
      await t.commit();
      return post;
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },
};

module.exports = postService;