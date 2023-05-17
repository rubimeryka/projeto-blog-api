module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            autoIncrement: true,
			allowNull: false,
            primaryKey: true,
			type: DataTypes.INTEGER,
		},
		name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
	},
	{
		tableName: 'categories',
		underscored: true,
		timestamps: false
	});
  
    return Category;
  };