const { BlogPost, Category, User } = require('../models');

const getBlogPosts = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }, 
      { model: Category, as: 'categories' }],
  });
  return post;
};

  module.exports = {
    getBlogPosts,
  };