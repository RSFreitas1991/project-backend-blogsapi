const userService = require('../services/userService');

const userController = {
  async getUsersList(req, res) {
    const users = await userService.getUsersList();
    res.status(200).json(users);
  },
};

module.exports = { userController };