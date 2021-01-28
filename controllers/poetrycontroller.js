
const router = require('express').Router();
let validateSession = require('../middleware/validate-session');

const Poetry = require('../db').import('../models/poetry');

/*******************
 ***POETRY CREATE***
********************/ 

router.post('/create', validateSession, (req, res) => {
    Poetry.create({
        question1: req.body.poetry.question1,
        question2: req.body.poetry.question2,
        question3: req.body.poetry.question3,
        red: req.body.poetry.red,
        orange: req.body.poetry.orange,
        yellow: req.body.poetry.yellow,
        green: req.body.poetry.green,
        blue: req.body.poetry.blue,
        purple: req.body.poetry.purple,
        pink: req.body.poetry.pink,
        black: req.body.poetry.black,
        brown: req.body.poetry.brown,
        gray: req.body.poetry.gray,
        white: req.body.poetry.white,
        poemtitle: req.body.poetry.poemtitle,
        lineone: req.body.poetry.lineone,
        linetwo: req.body.poetry.linetwo,
        linethree: req.body.poetry.linethree,
        userId: req.user.id
    })
    .then(poetry => res.status(200).json(poetry))
    .catch(err => res.status(500).json({ error: err }))
})

/*********************************
*******GET ALL POETRY************
**********************************/
router.get('/', (req, res) => {
    Poetry.findAll()
    .then(poetry => res.status(200).json(poetry))
    .catch(err => res.status(500).json({ error: err }))
});

/*****************************
*****GET ENTRIES BY USER******
*****************************/
router.get("/mine/:userId", validateSession, (req, res) => {
    // let userId = req.user.id
    Poetry.findAll({
        where: { userId: req.user.id}
    })
    .then(poetry => res.status(200).json(poetry))
    .catch(err => res.status(500).json({ error: err }))
});

/*********************************
 ***UPDATE POETRY BY ENTRY ID*****
 *********************************/
 router.put('/update/:entryId', validateSession, (req, res) => {
     const updatePoetryEntry = {
        question1: req.body.poetry.question1,
        question2: req.body.poetry.question2,
        question3: req.body.poetry.question3,
        red: req.body.poetry.red,
        orange: req.body.poetry.orange,
        yellow: req.body.poetry.yellow,
        green: req.body.poetry.green,
        blue: req.body.poetry.blue,
        purple: req.body.poetry.purple,
        pink: req.body.poetry.pink,
        black: req.body.poetry.black,
        brown: req.body.poetry.brown,
        gray: req.body.poetry.gray,
        white: req.body.poetry.white,
        poemtitle: req.body.poetry.poemtitle,
        lineone: req.body.poetry.lineone,
        linetwo: req.body.poetry.linetwo,
        linethree: req.body.poetry.linethree,
        userId: req.user.id
     }
     
     const query = { where: { id: req.params.entryId, owner: req.user.id}};

     Poetry.update(updatePoetryEntry, query)
     .then((poetry) => res.status(200).json(poetry))
     .catch(err => res.status(500).json({ error: err}))
 })

 /*********************************
  ****DELETE POETRY ENTRY BY ID****
 **********************************/

router.delete('/delete/:entryId', validateSession, (req, res) => {
 
    const query = { where: { id: req.params.entryId, userId: req.user.id }};

    Poetry.destroy(query)
    .then(() => res.status(200).json({ message: "Poetry entry removed"}))
    .catch((err) => res.status(500).json({ error: err}));
});

module.exports = router;