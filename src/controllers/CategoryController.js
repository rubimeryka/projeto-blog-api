const CategoryService = require('../services/CategoryService');

const addCategory = async (req, res) => {
    const { body } = req;
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    
    const category = await CategoryService.addCategory(body);
    
    return res.status(201).json(category);
};

const getCategories = async (_req, res) => {
    const categories = await CategoryService.getCategories();
    
    return res.status(200).json(categories);
  };
  
module.exports = {
  addCategory,
  getCategories,
};