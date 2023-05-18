const { User } = require('../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({ 
    where: { email, password },
  });
  
  return user;
};

const addNewUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ displayName, email, password, image });
  
  return user;
};

const findEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  
  return user;
};

  module.exports = {
    login,
    addNewUser,
    findEmail,
  };