module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
			allowNull: false,
            primaryKey: true,
			type: DataTypes.INTEGER,
		},
		displayName: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		image: {
			allowNull: true,
			type: DataTypes.STRING,
		}
	},
	{
		tableName: 'users',
		underscored: true,
		timestamps: false
	});
	
	User.associate = (models) => {
		User.hasMany(models.BlogPost, {
			foreignKey: 'id',
			as: 'BlogPost'
		})
	}
  
    return User;
  };