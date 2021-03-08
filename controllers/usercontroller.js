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
        
    })
    // this allow me to get a json object back that the client can see and use
    .then(user => {
       // .sign is used to create the token & takes 2 parameters
        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET,  {expiresIn: '60d'})

        res.json({
            user: user,
            message: "user was created successfully",
            sessionToken: token     
        })}       
    )
    .catch(err => res.status(500).json({ error: err}))
});

/*******************
 *****USER LOGIN****
 *******************/

router.post('/login',(req, res) => {
    User.findOne ({
        where: { email: req.body.user.email},      
    })
    .then((user) => {
        if(user){
            bcrypt.compare(
                req.body.user.password, 
                user.password, 
                (err, matches) => {
                  if (matches) {
                  let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});                
                res.status(200).json({ 
                user: user,
                message: "User successfully authenticated",
                sessionToken: token
                });
                }  else {
                res.status(502).send({error: "password does not match"});
                }
                }
                )
                // we add an else statement to catch untrue values
                } else {
                res.status(500).json({ error: "user not found" })
                }    
                }
                )
            .catch((err) => res.status(500).json({ error: err}));
        });
        
    /***********************
    ****ACORN/USER UPDATE***
    ***********************/

    // router.put('/update/:id', validateSession, (req, res) => {
    //     const updateAcorns = {
    //         email: req.body.user.email,
    //         password: bcrypt.hashSync(req.body.user.password, 13),   
    //     }
    //     const query = { where: { id: req.params.id}};

    //     User.update(updateAcorns, query)
    //     .then((acorns) => res.status(200).json(acorns))
    //     .catch(err => res.status(500).json({ error: err}))
    // })



module.exports = router;