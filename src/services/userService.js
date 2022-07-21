const { User } = require('../database/models');
const jwtService = require('./jwtService');

const userService = {
  validadeDisplayNameAndPassword(displayName, password) {
    if (!displayName || displayName.length < 8) {
      const error = new Error('"displayName" length must be at least 8 characters long');
      error.code = 400;
      throw error;
    }
    if (!password || password.length < 6) {
      const error = new Error('"password" length must be at least 6 characters long');
      error.code = 400;
      throw error;
    }
  },
  async validadeEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) {
      const error = new Error('"email" must be a valid email');
      error.code = 400;
      throw error;
    }
    const user = await User.findOne({
      attributes: { exclude: ['image', 'password'] },
      where: { email } });
    if (user) {
      const error = new Error('User already registered');
      error.code = 409;
      throw error;
    }
  },
  async list() {
    const users = await User.findAll({
      attributes: { exclude: 'password' },
    });
    return users;
  },
  async getUserById(id) {
    const user = await User.findOne({
      attributes: { exclude: 'password' },
      raw: true,
      where: { id } });
    if (!user) {
      const error = new Error('User does not exist');
      error.code = 404;
      throw error;
    }
    return user;
  },
  async create(displayName, email, password, image) {
    this.validadeDisplayNameAndPassword(displayName, password);
    await this.validadeEmail(email);
    await User.create({ displayName, email, password, image });
    const userNoPassword = await User.findOne({
      attributes: { exclude: ['image', 'password'] },
      where: { email } });
    const token = jwtService.createToken(userNoPassword);
    return token;
  },
};

module.exports = userService;