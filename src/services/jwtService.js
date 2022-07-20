const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtService = {
  createToken(user) {
    const token = jwt.sign({ user }, secret);
    return token;
  },
  validadeToken(token) {
    try {
      const validation = jwt.verify(token, secret);
      return validation;
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.code = 401;
      throw error;
    }
  },
};

module.exports = jwtService;