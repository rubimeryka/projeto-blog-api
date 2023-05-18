const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        
        if (!token) return res.status(401).json({ message: 'Token not found' });
        
        const { data } = jwt.verify(token, process.env.JWT_SECRET);
        
        req.data = data;
        
        return next();
      } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token', error: error.message });
      }
  };

module.exports = validateToken;