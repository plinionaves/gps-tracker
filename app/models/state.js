module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('state', {
        id:             {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false},
        initials:       {type: DataTypes.CHAR(2), allowNull: false},
    });
    
};