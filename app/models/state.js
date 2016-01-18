module.exports = function(sequelize, DataTypes) {
    
    var State = sequelize.define('State', {
        id:             {type: DataTypes.INTEGER, primaryKey: true,  autoIncrement: true},
        name:           {type: DataTypes.STRING(60), allowNull: false},
        initials:       {type: DataTypes.CHAR(2), allowNull: false},
    }, {
        classMethods: {
            associate: function(models) {
                State.belongsTo(models.Country, {
                  onDelete: "RESTRICT",
                  foreignKey: {
                    allowNull: false,
                    name: 'country'
                  }
                });
            }
        }
    });
    return State;
    
};