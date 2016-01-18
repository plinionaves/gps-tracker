module.exports = function(app) {
  
    var controller = app.controllers.account;
    
    app.get('/account', controller.index);
    app.post('/account/create', controller.create);
    
};