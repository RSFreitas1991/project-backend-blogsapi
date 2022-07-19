const { User } = require('../database/models');

const userService = {
  async list() {
    const users = await User.findAll();
    return users;
  },
};

module.exports = userService;