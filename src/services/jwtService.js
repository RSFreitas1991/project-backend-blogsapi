const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtService = {
  createToken: (user) => {
    const token = jwt.sign({ user }, secret);
    return token;
  },
};

module.exports = jwtService;