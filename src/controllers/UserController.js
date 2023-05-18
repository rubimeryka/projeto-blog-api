const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserService.login({ email, password });
    
    if (user === null) {
        return res.status(400).json({ message: 'Invalid fields' });
      }
  
    const payload = {
        algorithm: 'HS256',
      };
    
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
      });

    res.status(200).json({ token });
};

const addNewUser = async (req, res) => {
  const { 
      displayName, email, password, image, 
  } = req.body;

  const user = await UserService.addNewUser({ displayName, email, password, image });
  
  if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
  
  const payload = {
      algorithm: 'HS256',
    };
  
  const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1h',
    });

  res.status(201).json({ token });
};

module.exports = {
    login,
    addNewUser,
};