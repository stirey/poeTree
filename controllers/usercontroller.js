const router = require('express').Router();
const User = require('../db').import('../models/user');

/*******************
 ***USER SIGNUP*****
 *******************/ 

router.post('/create', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password
        // acorns: req.body.user.acorns,
        // admin: req.body.user.admin, 
    })
    .then(
        res.send("I need to get the database to work")
    );
});


module.exports = router;