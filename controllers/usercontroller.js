const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");

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
       // .sign is used to create the token & takes 2 parameters
        let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: '7d'})

        res.json({
            user: user,
            message: "user was created successfully",
            sessionToken: token
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
         if (user) {
             let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: '7d'})
             res.status(200).json({
                 user: user,
                 message: "user successfully logged in",
                 sessionToken: token
             })
         } else {
         res.status(500).json({error: 'User does not exist.'})
            } 
     })
     .catch(err => res.status(500).json({ error: err}))
 });

module.exports = router;