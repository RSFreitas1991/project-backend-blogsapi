const authService = require('../services/authService');

const authController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(error.code).json({ message: error.message });
    }
  },
};

module.exports = authController;