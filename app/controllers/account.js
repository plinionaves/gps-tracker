module.exports = function(app) {
    
    var db = app.get('models');
    var AccountController = {};
    
    AccountController.index = function(req, res) {
        db.Account.findAll().then(function(accounts) {
           res.json(accounts);
        });
    };
    
    AccountController.create = function(req, res) {
        
        db.Account.create(req.body).then(function (account) {
            res.json(account);
        });
        
    };
    
    return AccountController;
    
};