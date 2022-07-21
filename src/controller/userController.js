const userService = require('../services/userService');

const userController = {
  async getUsersList(req, res) {
    try {
      const users = await userService.list();
      res.status(200).json(users);
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
  async addUser(req, res) {
    try {
      const { displayName, email, password, image } = req.body;
      const token = await userService.create(displayName, email, password, image);
      res.status(201).json({ token });
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
  async getUserById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await userService.getUserById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
};

module.exports = { userController };