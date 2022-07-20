const { User } = require('../database/models');
const jwtService = require('./jwtService');
//  push pro avaliador avaliar
const authService = {
  async login(email, password) {
    if (!email || !password) {
      const error = new Error('Some required fields are missing');
      error.code = 400;
      throw error;
    }
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      const error = new Error('Invalid fields');
      error.code = 400;
      throw error;
    }
    const token = jwtService.createToken(user);
    return token;
  },
};

module.exports = authService;