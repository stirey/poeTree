let express = require("express");
const app = express();
const sequelize = require("./db");
let user = require('./controllers/usercontroller')
let poetry = require('./controllers/poetrycontroller')
// let poetry = require('./controllers/poetrycontroller')




sequelize.sync();

app.use(express.json());
app.use('/user', user)
app.use('/poetry', poetry)



app.listen(3000, function() {
    console.log('App is listening on port 3000')
})