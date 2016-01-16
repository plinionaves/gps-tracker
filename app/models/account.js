module.exports = function(sequelize, DataTypes) {
    
    var Account = sequelize.define('Account', {
        id:             {type: DataTypes.BIGINT, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false},
        email:          {type: DataTypes.STRING(60), allowNull: false},
        username:       {type: DataTypes.STRING(20), allowNull: false},
        password:       {type: DataTypes.CHAR(20), allowNull: false},
    }, {
        classMethods: {
            associate: function(models) {
                
            }
        }
    });
    return Account;
    
};