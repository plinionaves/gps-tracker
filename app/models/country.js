module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('Country', {
        id:             {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false}
    });
    
};