const Joi = require('joi');
const { findEmail } = require('../services/UserService');

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;
  
    const isUserValid = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    
    const { error } = isUserValid
      .validate({ email, password });
    
      if (error) {    
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
  }; 

const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  const userValidation = Joi.object({
    displayName: Joi.string().min(8),
  });
  
  const { error } = userValidation
    .validate({ displayName });
  
    if (error) {    
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long' });
  }
  
  next();
}; 

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailExists = await findEmail(email);
  
  if (emailExists) {
    return res.status(409).json({ 
      message: 'User already registered',
    });
  }
  
  const userValidation = Joi.object({
    email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  });
  
  const { error } = userValidation.validate({ email });
  
  if (error) {    
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  
  next();
}; 

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  const userValidation = Joi.object({
    password: Joi.string().min(6).required(),
  });
  
  const { error } = userValidation
    .validate({ password });
  
    if (error) {    
    return res.status(400).json({ 
      message: '"password" length must be at least 6 characters long' });
  }
  
  next();
}; 

module.exports = {
    validateLogin,
    validateDisplayName,  
    validateEmail,
    validatePassword,
};