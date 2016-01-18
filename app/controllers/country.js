module.exports = function(app) {
    
    var db = app.get('models');
    var CountryController = {};
    
    CountryController.index = function(req, res) {
        db.Country.create({
           name: 'Holanda' 
        }).then(function() {
           db.Country.findAll().then(function(countries) {
               res.json(countries);
            }); 
        });
    }
    
    return CountryController;
    
};