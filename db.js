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

User = sequelize.import('./models/user');
Poetry = sequelize.import('./models/poetry')
Emoji = sequelize.import('./models/emoji')

Poetry.belongsTo(User);
User.hasMany(Poetry) 
Poetry.hasMany(Emoji)
Emoji.belongsTo(Poetry);



    
module.exports = sequelize;