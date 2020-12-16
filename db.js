const Sequelize = require('sequelize');
const sequelize = new Sequelize('poeTree', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to poeTree postgres database');
    },
    function(err){
        console.log(err);
    }
);
module.exports = sequelize;