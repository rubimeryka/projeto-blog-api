const { User } = require('../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({ 
    where: { email, password },
  });
  
  return user;
};

const addNewUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  
  return user;
};

const findEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  
  return user;
};

const getAllUsers = () => User.findAll();

const getUserById = (id) => User.findOne({
  where: { id },
  attributes: { exclude: ['password'] },
});

  module.exports = {
    login,
    addNewUser,
    findEmail,
    getAllUsers,
    getUserById,
  };