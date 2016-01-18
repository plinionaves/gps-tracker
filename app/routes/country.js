module.exports = function(app) {
  
    var controller = app.controllers.country;
    
    app.get('/country', controller.index);
    
};