module.exports = function(sequelize, DataTypes) {
    
    var Item = sequelize.define('Item', {
        id:             {type: DataTypes.BIGINT, primaryKey: true,  autoIncrement: true},
      	name: 			{type: DataTypes.STRING(45), allowNull: false},
      	description: 	{type: DataTypes.TEXT('medium'), allowNull: true},
      	image: 			{type: DataTypes.STRING(100), allowNull: false},
      	serial: 		{type: DataTypes.CHAR(16), allowNull: false}
    }, {
        classMethods: {
            associate: function(models) {
                Item.belongsTo(models.Category, {
                  onDelete: "RESTRICT",
                  foreignKey: {
                    allowNull: false,
                    name: 'category'
                  }
                });
                Item.belongsTo(models.Account, {
                  onDelete: "RESTRICT",
                  foreignKey: {
                    allowNull: false,
                    name: 'account'
                  }
                });
            }
        }
    });
    return Item;
    
};