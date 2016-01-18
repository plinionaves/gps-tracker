module.exports = function(sequelize, DataTypes) {
    
    var Category = sequelize.define('Category', {
        id:             {type: DataTypes.BIGINT, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(45), allowNull: false}
    }, {
        classMethods: {
            associate: function(models) {
                
            }
        }
    });
    return Category;
};