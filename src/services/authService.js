const { User } = require('../database/models');
const jwtService = require('./jwtService');

const authService = {
  async login(email, passwords) {
    if (!email || !passwords) {
      const error = new Error('Some required fields are missing');
      error.code = 400;
      throw error;
    }
    const user = await User.findOne({
      attributes: { exclude: ['image'] },
      where: { email } });
    if (!user || user.password !== passwords) {
      const error = new Error('Invalid fields');
      error.code = 400;
      throw error;
    }
    const { password, ...userNoPassword } = user.dataValues;
    const token = jwtService.createToken(userNoPassword);
    return token;
  },
};

module.exports = authService;