const { User } = require('../database/models');
const jwtService = require('./jwtService');

const authService = {
  async login(email, _password) {
    const user = await User.findOne({ where: { email } });
    const token = jwtService.createToken(user);
    return token;
  },
};

module.exports = authService;