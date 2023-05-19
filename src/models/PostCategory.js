module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        post_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'BlogPosts',
              key: 'id',
            },
          },
          category_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'Categories',
              key: 'id',
            },
          },
        },
        {
          timestamps: false,
          underscored: false,
          tableName: 'posts_categories',
        },
        );
      
        PostCategory.associate = (models) => {
          models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'post_id',
          });
          models.Category.belongsToMany(models.BlogPost, {
            as: 'BlogPosts',
            through: PostCategory,
            foreignKey: 'category_id',
          });
        };

    return PostCategory;
  };