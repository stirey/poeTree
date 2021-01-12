require("dotenv").config();
var cors = require('cors')
let express = require("express");
const app = express();
const sequelize = require("./db");
let user = require('./controllers/usercontroller')
let poetry = require('./controllers/poetrycontroller')
let emoji = require('./controllers/emojicontroller')
let feedback = require('./controllers/feedbackcontroller')
let announcement = require('./controllers/announcementcontroller.js')


sequelize.sync();
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



app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));