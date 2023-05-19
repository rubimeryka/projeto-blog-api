const CategoryService = require('../services/CategoryService');

const addCategory = async (req, res) => {
  try {
    const { name } = req;
    
    const category = await CategoryService.addCategory({ name });

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
      }
    
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: 'Algum erro', error: error.message });
  }
};

const getCategories = async (_req, res) => {
    const categories = await CategoryService.getCategories();
    
    return res.status(200).json(categories);
  };
  
module.exports = {
  addCategory,
  getCategories,
};