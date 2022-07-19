const { user } = require('../database/models');

const userService = {
  async list() {
    const users = await user.findAll();
    return users;
  },
};

module.exports = userService;