
const router = require('express').Router();
const Poetry = require('../db').import('../models/poetry');


/*******************
 ***POETRY CREATE***
********************/ 

router.post('/create', (req, res) => {
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
        black: req.body.poetry.black,
        gray: req.body.poetry.gray,
        white: req.body.poetry.white,
        poemtitle: req.body.poetry.poemtitle,
        lineone: req.body.poetry.lineone,
        linetwo: req.body.poetry.linetwo,
        linethree: req.body.poetry.linethree
    })
    .then(
        res.send("launching the poetry table")
    );
})

module.exports = router;



// router.get('/poetry', function(req, res)
// {
//     res.send('this is a practice route.')
// })

// module.exports = router