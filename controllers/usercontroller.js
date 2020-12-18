const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

/*******************
 ***USER SIGNUP*****
 *******************/ 

router.post('/create', (req, res) => {
    User.create({
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13),
        acorns: req.body.user.acorns,
        admin: req.body.user.admin
        

    })
    // this allow me to get a json object back that the client can see and use
    .then(user => {
       // .sign is used to create the token & takes 2 parameters
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET,  {expiresIn: '7d'})

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

router.post('/login', function(req, res){

    User.findOne ({
        where: {
            email: req.body.user.email
        }
    })
    .then(function loginSuccess(user) {
        if(user){
            bcrypt.compare(req.body.user.password, user.password, function (err, matches){
                if (matches) {
                let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '30d'}) 
                
                res.status(200).json({ 
                user: user,
                message: "User successfully logged in!",
                sessionToken: token
                })

                }   else {
                res.status(502).send({error: 'Login Failed'});
                }
                });
                // we add an else statement to catch untrue values
                } else {
                res.status(500).json({error:'User does not exist.'})
                }    
                })
        .catch(err => res.status(500).json({ error: err}))
        });
        



module.exports = router;