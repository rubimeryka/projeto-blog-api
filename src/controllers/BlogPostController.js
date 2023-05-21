const BlogPostService = require('../services/BlogPostService');

const getBlogPosts = async (_req, res) => {
    try {
      const posts = await BlogPostService.getBlogPosts();
      
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: 'Algum erro', error: error.message });
    }
  };
  
  module.exports = {
      getBlogPosts,
  };