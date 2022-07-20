const jwtService = require('../services/jwtService');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      const error = new Error('Token not found');
      error.code = 401;
      throw error;
    }
    jwtService.validateToken(authorization);
    next();
  } catch (error) {
    res.status(error.code).json({ message: error.message });
  }
};

module.exports = { validateToken };