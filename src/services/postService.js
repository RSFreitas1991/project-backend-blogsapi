const { BlogPost, sequelize, PostCategory } = require('../database/models');

const postService = {
  async validadeFields(title, content, categoryIds) {
      if (!title || !content || !categoryIds) {
        const error = new Error('Some required fields are missing');
        error.code = 400;
        throw error;
      }
      const category = await BlogPost.findOne({
        where: { id: categoryIds[0] },
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
      limit: 1,
      order: [['id', 'DESC']],    
    });
    return post;
  },
  async create(title, content, categoryIds, userData) {
    const t = await sequelize.transaction();
    try {
      const promises = [];
      await BlogPost.create(
        { title, content, userId: userData.user.id, updated: new Date(), published: new Date() },
        { transaction: t },
        );
      const postId = await this.findPostId(title);
      for (let index = 0; index < categoryIds.length; index += 1) {
        promises.push(PostCategory.create({ postId, categoryId: categoryIds[index] },
          { transaction: t }));
      }
      await Promise.all(promises);
      await t.commit();
      return this.findLastPost();
    } catch (error) {
        await t.rollback();
    }
  },
};

module.exports = postService;