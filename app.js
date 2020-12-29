require("dotenv").config();
let express = require("express");
const app = express();
const sequelize = require("./db");
let user = require('./controllers/usercontroller')
let poetry = require('./controllers/poetrycontroller')
let emoji = require('./controllers/emojicontroller')
let feedback = require('./controllers/feedbackcontroller')
let announcement = require('./controllers/announcementcontroller.js')





sequelize.sync();

app.use(express.json());

/*********************
 ****EXPOSED ROUTE****
 ********************/
app.use('/user', user)

/*********************
 *PROTECTED ROUTES****
 ********************/

app.use('/poetry', poetry)
app.use('/emoji', emoji)
app.use('/feedback', feedback)
app.use('/announcement', announcement)



app.listen(3000, function() {
    console.log('App is listening on port 3000')
})