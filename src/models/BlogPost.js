module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            autoIncrement: true,
			allowNull: false,
            primaryKey: true,
			type: DataTypes.INTEGER,
		},
        title: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		content: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		userId: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		published: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated: {
			type: DataTypes.DATE,
			allowNull: false,
		}
	}, {
		tableName: 'blog_posts',
		timestamps: false,
		underscored: true,
	})
    
    BlogPost.associate = (models) => {
		BlogPost.belongsTo(models.User, {
			foreignKey: 'id',
			as: 'user'
		})
	};
  
    return BlogPost;
  };