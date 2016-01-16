module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('Category', {
        id:             {type: DataTypes.BIGINT, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(45), allowNull: false}
    });
};