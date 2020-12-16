let express = require('express');
let app = express();
let sequelize = require('./db');

// let poetry = require('./controllers/poetrycontroller')

let user = require('./controllers/usercontroller')

sequelize.sync();

app.use(express.json());
app.use('/user', user)
// app.use('/poetry', poetry)



app.listen(3000, function() {
    console.log('App is listening on port 3000')
})