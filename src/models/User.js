module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
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
  
    return user;
  };