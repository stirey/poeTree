let express = require('express');
let app = express();

let sequelize = require('./db');

let poetapp = require('./controllers/poetrycontroller')

sequelize.sync();



app.use('/poetapp', poetapp)


app.listen(3000, function() {
    console.log('App is listening on port 3000')
})