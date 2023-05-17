const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
    const { email, pasword } = req.body;

    const user = await UserService.login(email, pasword);
    
    if (user === null) {
        return res.status(400).json({ message: 'Invalid fields' });
      }
  
    const payload = {
        algorithm: 'HS256',
      };
    
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
      });

    res.status(200).json(token);
};

module.exports = {
    login,
};