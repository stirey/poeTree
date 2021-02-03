const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
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

User.hasMany(Emoji)
Emoji.belongsTo(User)





// Poetry.hasMany(Emoji, {as: 'emoji'})
// Emoji.belongsTo(Poetry);

// User.hasMany(Emoji, {as: 'emoji'})
// Emoji.belongsto(User);



    
module.exports = sequelize;