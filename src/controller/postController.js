const postService = require('../services/postService');
const jwtService = require('../services/jwtService');

const postController = {
  async createPost(req, res) {
    try {
      const { authorization } = req.headers;
      const userData = jwtService.validateToken(authorization);
      const { title, content, categoryIds } = req.body;
      await postService.validadeFields(title, content, categoryIds);
      const post = await postService.create(title, content, categoryIds, userData);
      res.status(201).json(post);
    } catch (error) {
      res.status(error.code || 404).json({ message: error.message });
    }
  },
};

module.exports = { postController };