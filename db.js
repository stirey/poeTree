const Sequelize = require('sequelize');
const database = new Sequelize('poetree', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

database.authenticate()
.then(
    function() {
        console.log('Connected to poetree postgres database');
    },
    function(err){
        console.log(err);
    }
);
module.exports = database;