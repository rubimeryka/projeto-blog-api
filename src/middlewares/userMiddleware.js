const Joi = require('joi');

const validateUser = async (req, res, next) => {
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

module.exports = {
    validateUser,    
};