module.exports = function(sequelize, DataTypes) {
    
    var City = sequelize.define('City', {
        id:             {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false},
    }, {
        classMethods: {
            associate: function(models) {
                City.belongsTo(models.State, {
                  onDelete: "RESTRICT",
                  foreignKey: {
                    allowNull: false,
                    name: 'state'
                  }
                });
            }
        }
    });
    return City;
    
};