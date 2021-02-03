require("dotenv").config();
var cors = require('cors')
let express = require("express");
const app = express();

// CONTROLLERS
let user = require('./controllers/usercontroller')
let poetry = require('./controllers/poetrycontroller')
let emoji = require('./controllers/emojicontroller')
let feedback = require('./controllers/feedbackcontroller')
let announcement = require('./controllers/announcementcontroller.js')


const sequelize = require("./db");
// force: true- everytime i save and the server restarts, it will get rid of the database and make a new one. 
sequelize.sync();
// sequelize.sync({force: true});
app.use(cors())
app.use(express.json());
app.use(require('./middleware/headers'));
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


// If you're using express to listen on a port it will be app.listen
// If you're uisng node http to listen on a port it will be http.listen
app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));