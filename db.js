const Sequelize = require("sequelize");
// const database = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres'
// });

// this is checking the heroku app for local host 
const database = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: process.env.DATABASE_URL.includes('localhost') ?  {
        
    }: 
    {
        ssl: {
            require: true,
            rejectUnauthorized: false, 
          },
    }
});

database.authenticate()
.then(() => {
    console.log('Connected to poetree postgres database');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

User = database.import('./models/user');
Poetry = database.import('./models/poetry')
Emoji = database.import('./models/emoji')


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