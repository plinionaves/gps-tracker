module.exports = function(sequelize, DataTypes) {
    
    var City = sequelize.define('City', {
        id:             {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false},
    }, {
        classMethods: {
            associate: function(models) {
                
            }
        }
    });
    return City;
    
};