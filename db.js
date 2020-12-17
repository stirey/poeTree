const Sequelize = require("sequelize");
const sequelize = new Sequelize('poetree', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => {
    console.log('Connected to poetree postgres database');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});
    
module.exports = sequelize;