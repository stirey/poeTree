const router = require('express').Router();
const User = require('../db').import('../models/user');

/*******************
 ***USER SIGNUP*****
 *******************/ 

router.post('/create', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: req.body.user.password,
        acorns: req.body.user.acorns,
        admin: req.body.user.admin
        // acorns: req.body.user.acorns,
        // admin: req.body.user.admin, 
    })
    // this allow me to get a json object back that the client can see and use
    .then(user => {
       
        res.json({
            user: user,
            message: "user was created successfully"
        })
      }       
    )
    .catch(err => res.status(500).json({ error: err}))
});

/*******************
 *****USER LOGIN****
 *******************/

 router.post('/login', (req, res) => {
     User.findOne ({
         where: {
             email: req.body.user.email
         }
     })
     .then(function loginSuccess(user){
         res.status(200).json({
             user:user
         })
     })
     .catch(err => res.status(500).json({ error: err}))
 });

module.exports = router;