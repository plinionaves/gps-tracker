module.exports = function(app) {
  
  app.models.sequelize.sync().then(function() {
    
    var m = app.models;
    
    m.State.belongsTo(m.Country); // relation one-to-one
    m.City.belongsTo(m.State); // relation one-to-one
    m.Account.belongsTo(m.City);
    m.Item.belongsTo(m.Category);
    m.Item.belongsTo(m.Account);
    
  });
    
};